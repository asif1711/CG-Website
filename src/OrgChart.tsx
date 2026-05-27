import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  MapPin, 
  User, 
  Mail, 
  Phone, 
  ChevronRight, 
  ChevronDown, 
  Network, 
  Grid,
  Sparkles,
  Info,
  ExternalLink,
  Plus,
  Minus,
  RefreshCw,
  CheckCircle2
} from 'lucide-react';
import {
  BRAND_CONFIG,
  Employee,
  EMPLOYEES_FLAT_DATA,
  buildHierarchicalTree,
  getInitials
} from './orgData';

export interface KPIStats {
  totalEmployees: number;
  totalDepartments: number;
  locationsCount: number;
  managementLayers: number;
}

export default function OrgChart({ onBack }: { onBack: () => void }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedOffice, setSelectedOffice] = useState("All");
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [viewMode, setViewMode] = useState<'tree' | 'directory'>('tree');
  const [zoomLevel, setZoomLevel] = useState(1);
  
  // Set default starting view of the org tree chart to only show 3 layers (Root -> Executive Nodes -> Department Nodes)
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({
    "company-root": true,
    "charles-dejsakultorn": true,
    "fiona-kee": true
  });

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [scrollTopState, setScrollTopState] = useState(0);

  // Auto scroll to center of tree on initial load
  useEffect(() => {
    if (viewMode === 'tree' && scrollContainerRef.current) {
      setTimeout(() => {
        const container = scrollContainerRef.current;
        if (container) {
          container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
        }
      }, 300);
    }
  }, [viewMode]);

  // List of departments
  const departments = useMemo(() => {
    return ["All", "Human Strategy", "Business Consultant", "Specialist Consultant", "Marketing", "Learning & Academic Operations"];
  }, []);

  // List of offices matching mapped office locations
  const offices = useMemo(() => {
    return [
      "All", 
      "Global",
      "Bangkok Office", 
      "Kolkata Office", 
      "Brisbane Office", 
      "Udaipur Office", 
      "Lautoka Office", 
      "Sydney Office", 
      "Zhangzhou Office", 
      "Philippines"
    ];
  }, []);

  // Filter flat list of employees
  const filteredEmployeesList = useMemo(() => {
    return EMPLOYEES_FLAT_DATA.filter(emp => {
      const matchesSearch = emp.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            emp.role.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDept = selectedDept === "All" || emp.department === selectedDept;
      const matchesOffice = selectedOffice === "All" || emp.office === selectedOffice;
      return matchesSearch && matchesDept && matchesOffice;
    });
  }, [searchQuery, selectedDept, selectedOffice]);

  // Get hierarchical filtered tree structure dynamically
  const fullOrgTree = useMemo<Employee | null>(() => {
    const root = buildHierarchicalTree(EMPLOYEES_FLAT_DATA);
    
    const isFilteringActive = searchQuery !== "" || selectedDept !== "All" || selectedOffice !== "All";
    if (!isFilteringActive) return root;

    // Recursive helper to filter the cloned/nested tree
    const filterTreeHelper = (node: Employee): Employee | null => {
      const filteredChildren: Employee[] = [];
      if (node.children) {
        for (const child of node.children) {
          const res = filterTreeHelper(child);
          if (res !== null) {
            filteredChildren.push(res);
          }
        }
      }

      // Check if node itself matches
      let matches = false;
      if (node.id !== 'company-root') {
        const matchesSearch = searchQuery === "" || 
                              node.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              node.role.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDept = selectedDept === "All" || node.department === selectedDept;
        const matchesOffice = selectedOffice === "All" || node.office === selectedOffice;
        matches = matchesSearch && matchesDept && matchesOffice;
      }

      if (matches || filteredChildren.length > 0) {
        return {
          ...node,
          children: filteredChildren.length > 0 ? filteredChildren : undefined
        };
      }
      return null;
    };

    return filterTreeHelper(root);
  }, [searchQuery, selectedDept, selectedOffice]);

  // Expand or collapse state helper
  const toggleNode = (nodeId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setExpandedNodes(prev => ({
      ...prev,
      [nodeId]: !prev[nodeId]
    }));
  };

  // Zoom manipulation
  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.1, 1.4));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.1, 0.6));
  const handleZoomReset = () => setZoomLevel(1);

  // Drag-to-Scroll pan operations
  const handleMouseDown = (e: React.MouseEvent) => {
    if (viewMode !== 'tree') return;
    const container = scrollContainerRef.current;
    if (!container) return;
    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setStartY(e.pageY - container.offsetTop);
    setScrollLeftState(container.scrollLeft);
    setScrollTopState(container.scrollTop);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || viewMode !== 'tree') return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const y = e.pageY - container.offsetTop;
    const walkX = (x - startX) * 1.5;
    const walkY = (y - startY) * 1.5;
    container.scrollLeft = scrollLeftState - walkX;
    container.scrollTop = scrollTopState - walkY;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // Safe color mapper for department identities matching branding aesthetic
  const getDepartmentColorClasses = (dept: string) => {
    switch (dept) {
      case 'Human Strategy':
        return {
          bg: 'bg-indigo-50/70 border-indigo-200/60',
          text: 'text-indigo-900',
          badgeText: 'text-indigo-700 bg-indigo-100/50 border-indigo-200',
          glow: 'shadow-[0_0_20px_rgba(99,102,241,0.06)]',
          line: '#818cf8'
        };
      case 'Marketing':
        return {
          bg: 'bg-orange-50/70 border-orange-200/60',
          text: 'text-orange-900',
          badgeText: 'text-orange-700 bg-orange-100/50 border-orange-200',
          glow: 'shadow-[0_0_20px_rgba(249,115,22,0.06)]',
          line: '#fdba74'
        };
      case 'Learning & Academic Operations':
        return {
          bg: 'bg-emerald-50/70 border-emerald-200/60',
          text: 'text-emerald-900',
          badgeText: 'text-emerald-700 bg-emerald-100/50 border-emerald-200',
          glow: 'shadow-[0_0_20px_rgba(16,185,129,0.06)]',
          line: '#6ee7b7'
        };
      case 'Specialist Consultant':
        return {
          bg: 'bg-blue-50/70 border-blue-200/60',
          text: 'text-[#042F61]',
          badgeText: 'text-[#064082] bg-blue-100/50 border-blue-200',
          glow: 'shadow-[0_0_20px_rgba(37,99,235,0.06)]',
          line: '#3b82f6'
        };
      case 'Business Consultant':
        return {
          bg: 'bg-amber-50/70 border-amber-200/60',
          text: 'text-amber-900',
          badgeText: 'text-amber-700 bg-amber-100/50 border-amber-200',
          glow: 'shadow-[0_0_20px_rgba(245,158,11,0.06)]',
          line: '#fcd34d'
        };
      case 'Executive Committee':
      case 'Executive Board':
        return {
          bg: 'bg-slate-50 border-slate-300',
          text: 'text-slate-900 font-bold',
          badgeText: 'text-[#042F61] bg-[#FDB913]/20 border-[#FDB913]',
          glow: 'shadow-[0_0_22px_rgba(253,185,19,0.12)] border-[2px]',
          line: '#FDB913'
        };
      default:
        return {
          bg: 'bg-slate-50 border-slate-200',
          text: 'text-slate-900',
          badgeText: 'text-slate-600 bg-slate-100/60 border-slate-200',
          glow: 'shadow-sm',
          line: '#cbd5e1'
        };
    }
  };

  // RECURSIVE NODE RENDER ENGINE
  const renderVisualNode = (node: Employee, depth: number = 0): React.ReactNode => {
    const hasChildren = node.children && node.children.length > 0;
    const isFilteringActive = searchQuery !== "" || selectedDept !== "All" || selectedOffice !== "All";
    const isExpanded = isFilteringActive ? true : expandedNodes[node.id];
    const itemColors = getDepartmentColorClasses(node.department);
    const isRoot = node.id === 'company-root';

    return (
      <div key={node.id} className="flex flex-col items-center select-none relative">
        {/* Render Node Box */}
        <motion.div
          layout="position"
          transition={{ type: 'spring', stiffness: 220, damping: 25 }}
          onClick={() => {
            if (!isRoot) {
              setSelectedEmployee(node);
            }
          }}
          className={`relative px-5 py-4 w-[280px] rounded-2xl border transition-all duration-300 text-left ${itemColors.bg} ${itemColors.glow} cursor-pointer group hover:scale-[1.03] hover:ring-2 hover:ring-[#FDB913]/30`}
        >
          {/* Accent border strip on left */}
          <div 
            className="absolute left-0 top-4 bottom-4 w-1.5 rounded-r-md" 
            style={{ backgroundColor: isRoot ? '#FDB913' : itemColors.line }}
          />

          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              {/* Department Tag */}
              <span className={`inline-block text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded border mb-2 ${itemColors.badgeText}`}>
                {node.department}
              </span>
              
              {/* Employee Name */}
              <h4 className="text-sm font-extrabold text-[#042F61] tracking-tight truncate leading-tight flex items-center gap-1.5">
                {node.name}
              </h4>
              
              {/* Employee Title */}
              <p className="text-[12px] font-medium text-slate-500 truncate leading-snug mt-1">
                {node.role}
              </p>
              
              {/* Location Badge */}
              <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-2.5">
                <MapPin className="w-3 h-3 text-slate-400" />
                <span className="truncate">{node.office}</span>
              </div>
            </div>

            {/* Avatar Circle */}
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 select-none shadow-sm ${
              isRoot ? 'bg-[#042F61] text-[#FDB913]' : 'bg-slate-100 text-[#042F61]'
            }`}>
              {node.avatar || getInitials(node.name)}
            </div>
          </div>

          {/* Expand/Collapse Handle Under Node */}
          {hasChildren && (
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 z-10">
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => toggleNode(node.id, e)}
                className={`w-6.5 h-6.5 rounded-full shadow-md flex items-center justify-center border text-[10px] font-semibold transition-colors bg-white hover:border-[#FDB913] hover:text-[#042F61] ${
                  isExpanded ? 'border-indigo-100 text-slate-500' : 'border-[#FDB913] text-[#042F61] font-bold'
                }`}
              >
                {isExpanded ? (
                  <ChevronDown className="w-3.5 h-3.5" />
                ) : (
                  <span className="text-[10px] text-accent font-extrabold flex items-center justify-center">+{node.children?.length}</span>
                )}
              </motion.button>
            </div>
          )}
        </motion.div>

        {/* Tree Render Line Connections */}
        {hasChildren && isExpanded && (
          <div className="flex flex-col items-center w-full">
            {/* Short vertical line immediately under node */}
            <div className="w-[2px] h-7 bg-slate-200" />
            
            {/* Child elements wrapper with connecting grid system */}
            <div className="relative flex gap-x-8 gap-y-12 items-start mt-0">
              {/* Connecting horizontal line bar across children (if more than 1 child) */}
              {node.children!.length > 1 && (
                <div 
                  className="absolute top-0 left-0 right-0 h-[2px] bg-slate-200" 
                  style={{
                    left: `${140}px`,
                    right: `${140}px`
                  }}
                />
              )}

              {/* Recursive mapper */}
              {node.children!.map((child, index) => {
                return (
                  <div key={child.id} className="relative flex flex-col items-center">
                    {/* Vertical connector above child node */}
                    <div className="absolute top-0 w-[2px] h-6 bg-slate-200" />
                    
                    {/* Render standard child elements */}
                    <div className="pt-6">
                      {renderVisualNode(child, depth + 1)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-20 font-sans">
      {/* 1. HERO/HEADER SECTION (MADE FULL WIDTH) */}
      <section className="relative overflow-hidden bg-[#042F61] text-white pt-36 pb-8 md:pt-44 md:pb-10 px-4 md:px-12 border-b border-white/5 shadow-xl">
        {/* Soft Grid overlay & glow background layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#064082] blur-[120px] opacity-40" />
          <div className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-[#FDB913]/10 blur-[100px] opacity-30 animate-pulse" />
        </div>

        <div className="w-full relative z-10 flex flex-col-reverse md:flex-row md:items-center justify-between gap-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
              Organization <span className="text-accent">Chart</span>
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed font-medium">
              Explore the reporting hierarchy, global departments, and professional specialists of Chelson Gordon.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN ORG STRUCTURE VIEWPORT CONTAINER (MADE FULL WIDTH / REMOVED CARDS) */}
      <div className="w-full px-4 md:px-12 mt-10">

        {/* 3. DEPARTMENT NAVIGATION & CONTROLS CONTROL BOX */}
        <div className="bg-white rounded-3xl border border-slate-200/50 p-4 md:p-6 shadow-sm mb-8">
          <div className="flex flex-col gap-4">
            {/* MAIN SEARCH & DROP FILTER PANEL - 1 ROW */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              {/* Search input bar */}
              <div className="relative col-span-1 lg:col-span-4">
                <span className="absolute inset-y-0 left-4 flex items-center shadow-none text-slate-400">
                  <Search className="w-4 h-4" />
                </span>
                <input
                  type="text"
                  placeholder="Search name, title position..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-semibold placeholder-slate-400 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#FDB913]/40 focus:border-[#FDB913] focus:bg-white transition-all"
                />
              </div>

              {/* Department Dropdown */}
              <div className="relative col-span-1 lg:col-span-3">
                <select
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-semibold text-slate-700 appearance-none focus:outline-none focus:ring-2 focus:ring-[#FDB913]/40 focus:border-[#FDB913] focus:bg-white transition-all"
                >
                  <option disabled>Select Department</option>
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept === "All" ? "All Departments" : dept}</option>
                  ))}
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <ChevronDown className="w-4 h-4" />
                </span>
              </div>

              {/* Office dropdown */}
              <div className="relative col-span-1 lg:col-span-2">
                <select
                  value={selectedOffice}
                  onChange={(e) => setSelectedOffice(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-semibold text-slate-700 appearance-none focus:outline-none focus:ring-2 focus:ring-[#FDB913]/40 focus:border-[#FDB913] focus:bg-white transition-all"
                >
                  <option disabled>Filter by Office Hub</option>
                  {offices.map(office => (
                    <option key={office} value={office}>
                      {office === "All" ? "All Locations" : office.replace("Office", "").trim()}
                    </option>
                  ))}
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <ChevronDown className="w-4 h-4" />
                </span>
              </div>

              {/* VIEW SWITCHER TAB CONTROL */}
              <div className="col-span-1 lg:col-span-3 flex justify-start lg:justify-end">
                <div className="flex bg-slate-100 p-1 rounded-xl w-full">
                  <button
                    onClick={() => setViewMode('tree')}
                    className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                      viewMode === 'tree' 
                        ? 'bg-white text-[#042F61] shadow-sm' 
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <Network className="w-3.5 h-3.5" />
                    Visual Tree
                  </button>
                  <button
                    onClick={() => setViewMode('directory')}
                    className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                      viewMode === 'directory' 
                        ? 'bg-white text-[#042F61] shadow-sm' 
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <Grid className="w-3.5 h-3.5" />
                    Directory Grid
                  </button>
                </div>
              </div>
            </div>

            {/* Quick reset status indicator if filtered */}
            {(searchQuery !== "" || selectedDept !== "All" || selectedOffice !== "All") && (
              <div className="flex items-center gap-3 px-4 py-2.5 bg-amber-50 border border-amber-200/50 rounded-2xl text-xs font-bold text-amber-800 self-start">
                <span>Active Filter: showing <span className="underline font-black">{filteredEmployeesList.length}</span> employees</span>
                <button 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedDept("All");
                    setSelectedOffice("All");
                  }}
                  className="p-1 hover:bg-amber-100 rounded text-amber-900 flex items-center gap-1 font-black underline cursor-pointer bg-transparent border-none"
                >
                  <RefreshCw className="w-3 h-3 animate-spin" /> Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 4. MAIN ORG VISUALIZATION SCREEN */}
        <div className="relative">
          {viewMode === 'tree' ? (
            /* Visual Tree layout frame */
            <div className="relative border border-slate-200/70 bg-white rounded-3xl shadow-sm overflow-hidden min-h-[660px]">
              
              {/* FLOATING ACTION TOOLBAR CONTROLS */}
              <div className="absolute top-6 left-6 z-20 flex flex-col md:flex-row md:items-center gap-3">
                <div className="flex bg-[#042F61] text-white p-1 rounded-xl shadow-lg border border-[#064082]">
                  <button 
                    onClick={handleZoomIn} 
                    title="Zoom In" 
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors text-accent flex items-center justify-center cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleZoomOut} 
                    title="Zoom Out" 
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors text-accent flex items-center justify-center cursor-pointer"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleZoomReset} 
                    title="Reset Zoom" 
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white text-[11px] font-extrabold uppercase px-2 cursor-pointer"
                  >
                    100%
                  </button>
                </div>

                <div className="hidden md:flex items-center gap-2 px-4 py-2.5 bg-slate-50 rounded-xl text-[11px] text-slate-500 font-bold border border-slate-200/50">
                  <Info className="w-3.5 h-3.5 text-accent" />
                  <span>Click and hold backplate to drag and pan tree | Tap node to inspect details</span>
                </div>
              </div>

              {/* Dynamic canvas grid pattern backing */}
              <div className="absolute inset-0 z-0 opacity-[0.25] overflow-hidden pointer-events-none" style={{ backgroundImage: 'radial-gradient(#042F61 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

              {/* Tree scroll boundary box */}
              <div
                ref={scrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
                className={`overflow-auto w-full h-[665px] pb-24 flex items-start justify-center cursor-grab py-24 select-none ${isDragging ? 'cursor-grabbing' : ''}`}
                style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
              >
                {fullOrgTree ? (
                  /* Visual Tree Node Container with transform states */
                  <motion.div
                    animate={{ scale: zoomLevel }}
                    transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                    className="flex flex-col items-center justify-start origin-top w-[5400px] mx-auto min-h-[500px]"
                  >
                    {/* Fire main render visual tree engine starting with virtual Root */}
                    {renderVisualNode(fullOrgTree)}
                  </motion.div>
                ) : (
                  <div className="py-16 text-center max-w-sm mx-auto select-text mt-8">
                    <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400 mb-4">
                      <Search className="w-6 h-6" />
                    </div>
                    <h3 className="text-sm font-extrabold text-[#042F61] uppercase tracking-wider">No matching employees found</h3>
                    <p className="text-xs text-slate-400 mt-1">Try adjusting your search queries or filtering through alternative options.</p>
                    <button 
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedDept("All");
                        setSelectedOffice("All");
                      }}
                      className="mt-4 px-4 py-2 bg-[#042F61] text-white hover:bg-[#064082] rounded-xl text-xs font-bold cursor-pointer transition-colors"
                    >
                      Reset Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Standard Directory layout cards */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredEmployeesList.length > 0 ? (
                  filteredEmployeesList.map((emp, index) => {
                    const colors = getDepartmentColorClasses(emp.department);
                    return (
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.95, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -10 }}
                        transition={{ delay: index * 0.015, type: 'spring', stiffness: 220, damping: 24 }}
                        key={emp.id}
                        onClick={() => setSelectedEmployee(emp)}
                        className={`bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all cursor-pointer group hover:scale-[1.01]`}
                      >
                        <div>
                          <div className="flex items-start justify-between gap-4 mb-4">
                            <div className={`w-12 h-12 rounded-2xl font-black text-sm flex items-center justify-center select-none bg-slate-50 text-[#042F61] border border-slate-100`}>
                              {emp.avatar || getInitials(emp.name)}
                            </div>
                            <span className={`inline-block text-[9px] font-extrabold uppercase tracking-widest px-2 py-1 rounded border ${colors.badgeText}`}>
                              {emp.department}
                            </span>
                          </div>

                          <h4 className="text-[15px] font-extrabold text-[#042F61] group-hover:text-[#064082] transition-colors leading-snug">
                            {emp.name}
                          </h4>
                          <p className="text-xs font-semibold text-[#FDB913] mt-1">
                            {emp.role}
                          </p>

                          <p className="text-xs text-slate-500 mt-3 leading-relaxed line-clamp-3">
                            {emp.bio || "Dedicated consultant contributing to high-tier academic and quality assurance structures."}
                          </p>
                        </div>

                        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {emp.office}
                          </span>
                          <span className="text-[11px] font-bold text-[#042F61] flex items-center gap-1 group-hover:translate-x-1 duration-200">
                            Details <ChevronRight className="w-3.5 h-3.5 text-accent" />
                          </span>
                        </div>
                      </motion.div>
                    );
                  })
                ) : (
                  <div className="col-span-full py-16 text-center bg-white rounded-3xl border border-slate-200 p-8">
                    <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400 mb-4">
                      <Search className="w-6 h-6" />
                    </div>
                    <h3 className="text-sm font-extrabold text-[#042F61] uppercase tracking-wider">No matching employees found</h3>
                    <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">Try adjusting your search queries or filtering through alternative department options.</p>
                    <button 
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedDept("All");
                        setSelectedOffice("All");
                      }}
                      className="mt-4 px-4 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 cursor-pointer"
                    >
                      Clear Filters
                    </button>
                  </div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>

      {/* 5. EMPLOYEE DETAIL SIDE DRAWER PANEL */}
      <AnimatePresence>
        {selectedEmployee && (
          <>
            {/* Backdrop transparent background blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEmployee(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[1001]"
            />

            {/* Slider container panel drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 h-screen w-full max-w-md bg-white border-l border-slate-200 shadow-2xl z-[1002] flex flex-col justify-between overflow-hidden"
            >
              {/* Drawer Top Header Area */}
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-[#042F61]" />
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#042F61]">People Profile</span>
                </div>
                <button
                  onClick={() => setSelectedEmployee(null)}
                  className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                >
                  Close <span className="font-extrabold ml-1 font-mono text-sm leading-none">×</span>
                </button>
              </div>

              {/* Drawer Main Body Scroll Container */}
              <div className="p-6 flex-1 overflow-y-auto space-y-8">
                {/* Large visual header info card */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#042F61]/5 border border-[#042F61]/10 flex items-center justify-center font-black text-lg text-[#042F61]">
                    {selectedEmployee.avatar || getInitials(selectedEmployee.name)}
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-[#042F61] leading-none mb-1.5">{selectedEmployee.name}</h2>
                    <span className="inline-block text-[10px] font-extrabold text-[#FDB913] uppercase tracking-widest leading-none bg-[#FDB913]/10 border border-[#FDB913]/20 px-2.5 py-1 rounded">
                      {selectedEmployee.role}
                    </span>
                  </div>
                </div>

                {/* Full Department tag category and location status line */}
                <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider font-extrabold text-slate-400">Department</span>
                    <span className="block text-xs font-extrabold mt-1 text-[#042F61]">{selectedEmployee.department}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider font-extrabold text-slate-400">Workstation Hub</span>
                    <span className="block text-xs font-extrabold mt-1 text-[#042F61] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-accent" />
                      {selectedEmployee.office}
                    </span>
                  </div>
                </div>

                {/* Executive Bio / Professional profile statement */}
                <div className="space-y-2">
                  <h3 className="text-[11px] uppercase tracking-wider font-extrabold text-slate-400">Professional Bio</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium bg-slate-50/40 p-4 rounded-xl border border-slate-100">
                    {selectedEmployee.bio || "Leads strategic consultation, auditing workflows, setups of CRICOS programs, and provides end-to-end framework advisory services of Chelson Gordon on a global basis."}
                  </p>
                </div>

                {/* Communication channels data fields */}
                <div className="space-y-4">
                  <h3 className="text-[11px] uppercase tracking-wider font-extrabold text-slate-400">Official Communication Channels</h3>
                  <div className="space-y-2">
                    <a
                      href={`mailto:${selectedEmployee.email}`}
                      className="flex items-center justify-between p-3 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors text-xs text-[#042F61] font-semibold"
                    >
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-slate-400" />
                        <span>{selectedEmployee.email}</span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                    <a
                      href={`tel:${selectedEmployee.phone.replace(/\s+/g, '')}`}
                      className="flex items-center justify-between p-3 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors text-xs text-[#042F61] font-semibold"
                    >
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-slate-400" />
                        <span>{selectedEmployee.phone}</span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  </div>
                </div>

                {/* DIRECT CONNECTIONS / SUPERVISOR & DIRECT REPORTING LIST BLOCK */}
                <div className="space-y-4">
                  <h3 className="text-[11px] uppercase tracking-wider font-extrabold text-slate-400">Reporting Hierarchy Path</h3>
                  <div className="space-y-3">
                    {/* Supervisor Connection Card */}
                    {selectedEmployee.supervisorId ? (
                      (() => {
                        const supervisor = EMPLOYEES_FLAT_DATA.find(e => e.id === selectedEmployee.supervisorId);
                        if (!supervisor) return null;
                        return (
                          <div className="p-3 border border-dashed border-slate-200 rounded-xl">
                            <span className="block text-[9px] uppercase tracking-wider font-extrabold text-slate-400 mb-2">Direct Supervisor</span>
                            <div 
                              onClick={() => setSelectedEmployee(supervisor)}
                              className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors"
                            >
                              <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-[10px] text-slate-700">
                                  {supervisor.avatar || getInitials(supervisor.name)}
                                </div>
                                <div className="leading-tight">
                                  <span className="block text-xs font-extrabold text-[#042F61]">{supervisor.name}</span>
                                  <span className="block text-[10px] text-slate-400">{supervisor.role}</span>
                                </div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-slate-400" />
                            </div>
                          </div>
                        );
                      })()
                    ) : (
                      <div className="p-3 border border-transparent bg-emerald-50/50 border-emerald-100 rounded-xl flex items-center gap-2 text-xs font-bold text-emerald-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Independent Enterprise Administrator / Co-Director</span>
                      </div>
                    )}

                    {/* Direct Report List Under Current Employee */}
                    {(() => {
                      const reports = EMPLOYEES_FLAT_DATA.filter(e => e.supervisorId === selectedEmployee.id);
                      if (reports.length === 0) return null;
                      return (
                        <div className="p-3 border border-slate-100 rounded-xl">
                          <span className="block text-[9px] uppercase tracking-wider font-extrabold text-slate-400 mb-2">Direct Reports ({reports.length})</span>
                          <div className="space-y-1.5 max-h-[160px] overflow-y-auto pr-1">
                            {reports.map(rep => (
                              <div
                                key={rep.id}
                                onClick={() => setSelectedEmployee(rep)}
                                className="flex items-center justify-between p-2 hover:bg-slate-50 duration-150 rounded-lg cursor-pointer"
                              >
                                <div className="flex items-center gap-2.5 leading-tight">
                                  <div className="w-6.5 h-6.5 rounded-md bg-slate-50 text-[10px] font-bold text-slate-600 flex items-center justify-center border border-slate-100">
                                    {rep.avatar || getInitials(rep.name)}
                                  </div>
                                  <div>
                                    <span className="block text-xs font-bold text-[#042F61]">{rep.name}</span>
                                    <span className="block text-[9.5px] text-slate-400 truncate w-36">{rep.role}</span>
                                  </div>
                                </div>
                                <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>

              {/* Drawer Footer Status Area */}
              <div className="p-5 border-t border-slate-100 bg-slate-50 text-center flex items-center justify-center gap-1.5">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-[10px] uppercase font-extrabold tracking-wider text-slate-400">Chelson Gordon Professional Network Directory</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
