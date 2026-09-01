import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Users, 
  ShieldCheck, 
  UserX, 
  AlertCircle, 
  CheckCircle2, 
  X, 
  RefreshCw, 
  LogOut, 
  ChevronDown,
  Clock,
  EyeOff
} from 'lucide-react';
import { EMPLOYEES_FLAT_DATA } from '../../orgData';
import { LOGO_URL } from '../../constants';

export interface WordPressEmployee {
  id: number | string;
  employee_id?: string;
  name: string;
  position: string;
  team: string;
  subteam?: string;
  bio?: string;
  motto?: string;
  image_url?: string;
  show?: boolean;
}

// Generate complete fallback dataset from EMPLOYEES_FLAT_DATA mapped to the CPT schema
const GENERATED_FALLBACK_EMPLOYEES: WordPressEmployee[] = EMPLOYEES_FLAT_DATA.map((emp, index) => {
  const teamPrefixMap: Record<string, string> = {
    'Executive Leadership': 'EXEC',
    'Consultant Team': 'CNS',
    'Operational Support Team': 'OPS',
    'Operational Team': 'OPS',
    'Marketing Team': 'MKT',
    'Learning Team': 'LRN',
    'Human Strategy Team': 'HR',
    'Executive Assistant Team': 'EAS',
    'Assistant Team': 'AST'
  };

  const prefix = teamPrefixMap[emp.department] || 'CG';
  const numStr = String(index + 1).padStart(3, '0');
  const generatedId = `CG-${prefix}-${numStr}`;

  return {
    id: emp.id || 22000 + index,
    employee_id: generatedId,
    name: emp.name,
    position: emp.role,
    team: emp.department || 'Operational Support Team',
    subteam: emp.department === 'Operational Support Team' 
      ? (index % 2 === 0 ? 'Intervention Strategy Plan Team' : 'Logistics & Workflow Team')
      : (emp.office ? `${emp.office} Division` : 'Core Operations'),
    bio: emp.bio || '',
    motto: '',
    image_url: emp.avatar || '',
    show: index % 7 !== 0 // majority live on website
  };
});

interface HrDashboardPageProps {
  initialRole?: 'admin' | 'hr';
  onNavigateHome?: () => void;
}

export default function HrDashboardPage({ initialRole, onNavigateHome }: HrDashboardPageProps) {
  const [employees, setEmployees] = useState<WordPressEmployee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [fetchSource, setFetchSource] = useState<'api' | 'fallback'>('api');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTeamFilter, setSelectedTeamFilter] = useState('All');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<'all' | 'live' | 'hidden'>('all');

  // Multi-Selection State
  const [selectedIds, setSelectedIds] = useState<Set<string | number>>(new Set());

  // Pending Offboarding Queue (Waiting list to be offboarded by admin after HR sends request)
  const [pendingOffboardingIds, setPendingOffboardingIds] = useState<Set<string | number>>(new Set());

  // Offboarding Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'info' | 'error' } | null>(null);

  // Role Detection: Check WordPress body classes or window context with preview toggle
  const [userRole, setUserRole] = useState<'admin' | 'hr'>(() => {
    if (initialRole) return initialRole;
    if (typeof document !== 'undefined') {
      if (document.body.classList.contains('cg-user-admin')) return 'admin';
      if (document.body.classList.contains('cg-user-hr')) return 'hr';
    }
    if (typeof window !== 'undefined' && (window as any).CG_USER_ROLE) {
      return (window as any).CG_USER_ROLE === 'admin' ? 'admin' : 'hr';
    }
    return 'admin'; // Default for sandbox preview
  });

  const selectAllCheckboxRef = useRef<HTMLInputElement>(null);

  // Fetch employees from WordPress REST API endpoint
  const fetchEmployees = async (showLoadingSpinner = true) => {
    if (showLoadingSpinner) setIsLoading(true);
    setIsRefreshing(true);
    setErrorMsg(null);

    // Primary relative endpoint for WP, secondary full URL for remote testing
    const endpoints = [
      '/wp-json/cg/v1/team-members',
      'https://chelsongordon.com/wp-json/cg/v1/team-members'
    ];

    let loadedData: WordPressEmployee[] | null = null;
    let successfulUrl = '';

    for (const url of endpoints) {
      try {
        const res = await fetch(url, {
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            loadedData = data;
            successfulUrl = url;
            break;
          }
        }
      } catch (err) {
        // Continue to next endpoint or fallback
      }
    }

    if (loadedData) {
      console.log('CG Employee API:', loadedData.length, 'employees from', successfulUrl);
      setEmployees(loadedData);
      setFetchSource('api');
    } else {
      console.warn('Using local fallback employee data (WordPress API unreachable in current sandbox)');
      setEmployees(GENERATED_FALLBACK_EMPLOYEES);
      setFetchSource('fallback');
    }

    setIsLoading(false);
    setIsRefreshing(false);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Update page title dynamically
  useEffect(() => {
    const originalTitle = document.title;
    document.title = userRole === 'hr' ? 'HR Dashboard — Chelsongordon' : 'Employee Dashboard — Chelsongordon';
    return () => {
      document.title = originalTitle;
    };
  }, [userRole]);

  // Filtered employee list based on search & team
  const filteredEmployees = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    
    return employees.filter((emp) => {
      // 1. Search Query match: employee_id, name, position, team, subteam
      if (query) {
        const matchesName = (emp.name || '').toLowerCase().includes(query);
        const matchesId = (emp.employee_id || '').toLowerCase().includes(query);
        const matchesPosition = (emp.position || '').toLowerCase().includes(query);
        const matchesTeam = (emp.team || '').toLowerCase().includes(query);
        const matchesSubteam = (emp.subteam || '').toLowerCase().includes(query);

        if (!matchesName && !matchesId && !matchesPosition && !matchesTeam && !matchesSubteam) {
          return false;
        }
      }

      // 2. Team filter
      if (selectedTeamFilter !== 'All' && emp.team !== selectedTeamFilter) {
        return false;
      }

      // 3. Status filter (Admin only)
      if (userRole === 'admin' && selectedStatusFilter !== 'all') {
        if (selectedStatusFilter === 'live' && !emp.show) return false;
        if (selectedStatusFilter === 'hidden' && emp.show) return false;
      }

      return true;
    });
  }, [employees, searchQuery, selectedTeamFilter, selectedStatusFilter, userRole]);

  // Distinct teams for filter dropdown
  const distinctTeams = useMemo(() => {
    const set = new Set<string>();
    employees.forEach(e => {
      if (e.team) set.add(e.team);
    });
    return Array.from(set).sort();
  }, [employees]);

  // Checkbox management: Select single
  const handleToggleSelect = (id: string | number) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Checkbox management: Select all currently filtered
  const handleToggleSelectAll = () => {
    if (filteredEmployees.length === 0) return;

    const allFilteredSelected = filteredEmployees.every((emp) => selectedIds.has(emp.id));

    if (allFilteredSelected) {
      // Unselect all visible
      setSelectedIds((prev) => {
        const next = new Set(prev);
        filteredEmployees.forEach((emp) => next.delete(emp.id));
        return next;
      });
    } else {
      // Select all visible
      setSelectedIds((prev) => {
        const next = new Set(prev);
        filteredEmployees.forEach((emp) => next.add(emp.id));
        return next;
      });
    }
  };

  // Synchronize indeterminate state of header checkbox
  useEffect(() => {
    if (!selectAllCheckboxRef.current) return;
    if (filteredEmployees.length === 0) {
      selectAllCheckboxRef.current.checked = false;
      selectAllCheckboxRef.current.indeterminate = false;
      return;
    }

    const selectedCountInFiltered = filteredEmployees.filter((emp) => selectedIds.has(emp.id)).length;
    const allSelected = selectedCountInFiltered === filteredEmployees.length;
    const someSelected = selectedCountInFiltered > 0 && !allSelected;

    selectAllCheckboxRef.current.checked = allSelected;
    selectAllCheckboxRef.current.indeterminate = someSelected;
  }, [selectedIds, filteredEmployees]);

  // Selected employees list for the modal
  const selectedEmployeesList = useMemo(() => {
    return employees.filter((emp) => selectedIds.has(emp.id));
  }, [employees, selectedIds]);

  // Submit Offboarding Request Handler via WordPress REST API
  const handleSendOffboardingRequest = async () => {
    // Validate WordPress configuration
    const wpConfig = typeof window !== 'undefined' ? (window as any).cgHRDashboard : null;
    if (!wpConfig || !wpConfig.restUrl || !wpConfig.nonce) {
      console.warn('WordPress cgHRDashboard configuration missing (restUrl or nonce):', wpConfig);
      setToastMessage({
        text: 'WordPress configuration missing (window.cgHRDashboard.restUrl or nonce). Cannot submit offboarding request.',
        type: 'error'
      });
      setTimeout(() => {
        setToastMessage(null);
      }, 6000);
      return;
    }

    setIsSubmitting(true);

    const payload = {
      employees: selectedEmployeesList.map(emp => ({
        id: typeof emp.id === 'string' ? parseInt(emp.id, 10) || 0 : emp.id,
        employee_id: emp.employee_id || '',
        name: emp.name || '',
        position: emp.position || '',
        team: emp.team || '',
        subteam: emp.subteam || ''
      }))
    };

    const baseUrl = wpConfig.restUrl.endsWith('/') 
      ? wpConfig.restUrl 
      : `${wpConfig.restUrl}/`;
    const endpoint = `${baseUrl}offboarding-requests`;

    console.log('OFFBOARDING REQUEST SUBMISSION:', { endpoint, payload });

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'X-WP-Nonce': wpConfig.nonce
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data?.message || `Server returned status ${response.status}`
        );
      }

      // Success
      const count = selectedIds.size;

      // Add submitted employees to pending waiting list
      setPendingOffboardingIds((prev) => {
        const next = new Set(prev);
        selectedIds.forEach(id => next.add(id));
        return next;
      });

      // Clear selected employees only after a successful API response
      setSelectedIds(new Set());
      setIsModalOpen(false);
      setIsSubmitting(false);

      setToastMessage({
        text: `Offboarding request submitted for ${count} employee${count > 1 ? 's' : ''}. The request is recorded and pending Administrator approval.`,
        type: 'success'
      });

      setTimeout(() => {
        setToastMessage(null);
      }, 6000);

    } catch (err: any) {
      console.error('Offboarding submission error:', err);
      setIsSubmitting(false);
      setToastMessage({
        text: `Failed to submit offboarding request: ${err?.message || 'Network error'}`,
        type: 'error'
      });

      setTimeout(() => {
        setToastMessage(null);
      }, 6000);
    }
  };

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/wp-login.php?action=logout';
    }
  };

  return (
    <div id="cg-employee-dashboard" className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans pb-24 selection:bg-[#042F61] selection:text-white">
      {/* Top Bar with Brand Logo and Role Switcher */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 overflow-visible">
            
            {/* Brand Logo matching Homepage and Our People (zero vertical padding, reduced header height) */}
            <div className="flex items-center p-0 m-0 overflow-visible leading-none">
              <a 
                href="/" 
                onClick={(e) => {
                  if (onNavigateHome) {
                    e.preventDefault();
                    onNavigateHome();
                  }
                }}
                className="flex items-center p-0 m-0 hover:opacity-90 transition-opacity leading-none overflow-visible"
              >
                <img 
                  src={LOGO_URL} 
                  alt="Chelson Gordon Logo" 
                  className="w-auto object-contain block p-0 -my-8 sm:-my-9"
                  style={{ minHeight: '140px' }}
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>

            {/* Right Controls: Role Preview Toggle & Logout */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Preview Role Switcher (Allows testing Admin vs HR capabilities easily) */}
              <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs">
                <button
                  type="button"
                  onClick={() => setUserRole('hr')}
                  className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                    userRole === 'hr'
                      ? 'bg-white text-[#042F61] shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="View as Human Resources (Standard 5-column table)"
                >
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    HR View
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setUserRole('admin')}
                  className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                    userRole === 'admin'
                      ? 'bg-white text-[#042F61] shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="View as Administrator (Includes Admin-only Website column)"
                >
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#042F61]" />
                    Admin View
                  </span>
                </button>
              </div>

              {/* Refresh data button */}
              <button
                type="button"
                onClick={() => fetchEmployees(false)}
                disabled={isRefreshing}
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                title="Refresh Employee Data from WordPress REST API"
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-[#042F61]' : ''}`} />
              </button>

              {/* Logout Button */}
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-rose-600 hover:bg-rose-50 border border-slate-200 transition-colors"
                title="Log out of WordPress session"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Log out</span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        
        {/* Toast Alert */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className={`mb-6 p-4 rounded-xl text-white shadow-lg flex items-start gap-3 justify-between ${
                toastMessage.type === 'error' ? 'bg-rose-600' : 'bg-emerald-600'
              }`}
            >
              <div className="flex items-center gap-2.5">
                {toastMessage.type === 'error' ? (
                  <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-200" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-200" />
                )}
                <p className="text-sm font-medium leading-snug">{toastMessage.text}</p>
              </div>
              <button
                type="button"
                onClick={() => setToastMessage(null)}
                className={`p-1 rounded-md transition-colors ${
                  toastMessage.type === 'error'
                    ? 'text-rose-100 hover:bg-rose-700'
                    : 'text-emerald-100 hover:bg-emerald-700'
                }`}
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dashboard Header Section (Dynamic Heading: HR Dashboard vs Admin Employee Dashboard) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            {/* Green pill shape section on top for Admin user only */}
            {userRole === 'admin' && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Internal
              </div>
            )}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {userRole === 'hr' ? 'HR Dashboard' : 'Employee Dashboard'}
            </h1>
            <p className="text-slate-500 text-sm sm:text-base mt-1">
              Manage employees currently stored in the website.
            </p>
          </div>

          {/* Stats Counter Cards: Total Employees + Pending Offboarding Count */}
          <div className="flex items-center gap-3">
            {/* Total Employees */}
            <div className="bg-white border border-slate-200/90 rounded-2xl px-4 sm:px-5 py-3 shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#042F61]/5 flex items-center justify-center text-[#042F61]">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900 tracking-tight leading-none">
                  {isLoading ? '...' : employees.length}
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                  Employees
                </div>
              </div>
            </div>

            {/* Pending Offboarding Count */}
            <div className="bg-white border border-amber-200/90 rounded-2xl px-4 sm:px-5 py-3 shadow-xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-black text-amber-700 tracking-tight leading-none">
                  {pendingOffboardingIds.size}
                </div>
                <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider mt-0.5">
                  Pending
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="mt-6 flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-between">
          
          {/* Search Input Bar */}
          <div className="relative flex-1 max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, ID, position or team..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#042F61] focus:border-transparent transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filters: Team Selector & Admin Website Filter */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Team Filter Dropdown (Supports searching/filtering employees by Team key) */}
            <div className="relative">
              <select
                value={selectedTeamFilter}
                onChange={(e) => setSelectedTeamFilter(e.target.value)}
                className="appearance-none bg-white border border-slate-300 text-slate-700 text-xs sm:text-sm font-medium py-2.5 pl-3.5 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#042F61] shadow-xs cursor-pointer"
                title="Filter employees by Team"
              >
                <option value="All">All Teams ({employees.length})</option>
                {distinctTeams.map((team) => (
                  <option key={team} value={team}>
                    {team}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Admin Website Visibility Filter (Only shown for Admin) */}
            {userRole === 'admin' && (
              <div className="relative">
                <select
                  value={selectedStatusFilter}
                  onChange={(e) => setSelectedStatusFilter(e.target.value as any)}
                  className="appearance-none bg-white border border-slate-300 text-slate-700 text-xs sm:text-sm font-medium py-2.5 pl-3.5 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#042F61] shadow-xs cursor-pointer"
                >
                  <option value="all">All Website Status</option>
                  <option value="live">Website: Live Only</option>
                  <option value="hidden">Website: Hidden Only</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            )}

            {/* Active match count summary */}
            {(searchQuery || selectedTeamFilter !== 'All' || selectedStatusFilter !== 'all') && (
              <span className="text-xs font-medium text-slate-500 bg-slate-200/70 px-2.5 py-1.5 rounded-lg self-center">
                Showing {filteredEmployees.length} of {employees.length}
              </span>
            )}
          </div>

        </div>

        {/* Employee Table Container */}
        <div className="mt-6 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {isLoading ? (
            <div className="p-16 text-center">
              <RefreshCw className="w-8 h-8 text-[#042F61] animate-spin mx-auto mb-3" />
              <p className="text-sm font-semibold text-slate-700">Loading employees from WordPress...</p>
              <p className="text-xs text-slate-400 mt-1">Connecting to /wp-json/cg/v1/team-members</p>
            </div>
          ) : filteredEmployees.length === 0 ? (
            <div className="p-16 text-center">
              <Users className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-900">No employees match your search</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Try searching for a different employee name, ID, position, or clearing filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTeamFilter('All');
                  setSelectedStatusFilter('all');
                }}
                className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#042F61] bg-[#042F61]/5 hover:bg-[#042F61]/10 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    
                    {/* Checkbox Header */}
                    <th scope="col" className="w-12 px-4 py-3.5 text-center">
                      <input
                        ref={selectAllCheckboxRef}
                        type="checkbox"
                        id="cg-select-all"
                        onChange={handleToggleSelectAll}
                        aria-label="Select all employees"
                        className="w-4 h-4 rounded border-slate-300 text-[#042F61] focus:ring-[#042F61] focus:ring-offset-0 cursor-pointer"
                      />
                    </th>

                    {/* Visible Fields */}
                    <th scope="col" className="px-4 py-3.5 text-slate-700">Employee</th>
                    <th scope="col" className="px-4 py-3.5 text-slate-700">Position</th>
                    <th scope="col" className="px-4 py-3.5 text-slate-700">Team</th>
                    <th scope="col" className="px-4 py-3.5 text-slate-700">Subteam</th>

                    {/* Admin-only Website Column */}
                    {userRole === 'admin' && (
                      <th scope="col" className="px-4 py-3.5 text-slate-700 text-right">
                        <span className="inline-flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#042F61]" />
                          Website
                        </span>
                      </th>
                    )}

                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {filteredEmployees.map((emp) => {
                    const isSelected = selectedIds.has(emp.id);
                    const isPending = pendingOffboardingIds.has(emp.id);

                    return (
                      <tr
                        key={emp.id}
                        onClick={() => handleToggleSelect(emp.id)}
                        className={`transition-colors cursor-pointer select-none ${
                          isSelected 
                            ? 'bg-[#042F61]/5 hover:bg-[#042F61]/10' 
                            : 'hover:bg-slate-50/80'
                        }`}
                      >
                        {/* Checkbox Column */}
                        <td 
                          className="w-12 px-4 py-3.5 text-center cg-checkbox-column" 
                          onClick={(e) => e.stopPropagation()}
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => handleToggleSelect(emp.id)}
                            data-employee-id={emp.id}
                            aria-label={`Select ${emp.name}`}
                            className="cg-employee-checkbox w-4 h-4 rounded border-slate-300 text-[#042F61] focus:ring-[#042F61] focus:ring-offset-0 cursor-pointer"
                          />
                        </td>

                        {/* Employee Name (Employee ID removed from HR view per specification) */}
                        <td className="px-4 py-3.5 font-bold text-slate-900">
                          <div className="flex items-center gap-2">
                            <span>{emp.name || '—'}</span>
                            {/* Employee ID tag visible only in Admin view */}
                            {userRole === 'admin' && emp.employee_id && (
                              <span className="text-[11px] font-mono font-normal text-slate-400">
                                {emp.employee_id}
                              </span>
                            )}
                            {/* Pending offboarding indicator if in waiting list */}
                            {isPending && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                                <Clock className="w-2.5 h-2.5" />
                                Pending
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Position */}
                        <td className="px-4 py-3.5 text-slate-600 font-medium">
                          {emp.position || '—'}
                        </td>

                        {/* Team */}
                        <td className="px-4 py-3.5">
                          {emp.team ? (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                              {emp.team}
                            </span>
                          ) : (
                            <span className="text-slate-400">—</span>
                          )}
                        </td>

                        {/* Subteam */}
                        <td className="px-4 py-3.5 text-slate-500 text-xs sm:text-sm">
                          {emp.subteam || '—'}
                        </td>

                        {/* Admin-only Website Visibility */}
                        {userRole === 'admin' && (
                          <td className="px-4 py-3.5 text-right font-medium">
                            {emp.show !== false ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                Live
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-500 border border-slate-200">
                                <EyeOff className="w-3 h-3" />
                                Hidden
                              </span>
                            )}
                          </td>
                        )}

                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer info note */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-end text-xs text-slate-400 gap-2">
          <span>
            Current Role: <strong className="text-slate-600 font-medium capitalize">{userRole === 'admin' ? 'Administrator' : 'Human Resources'}</strong>
          </span>
        </div>

      </main>

      {/* Floating Selection Bar (Appears when 1+ employees selected) */}
      <AnimatePresence>
        {selectedIds.size > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 inset-x-0 z-40 flex justify-center px-4 pointer-events-none"
          >
            <div className="bg-[#042F61] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-4 sm:gap-6 pointer-events-auto backdrop-blur-md">
              
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold tracking-tight">
                  {selectedIds.size} {selectedIds.size === 1 ? 'employee' : 'employees'} selected
                </span>
              </div>

              <div className="h-5 w-px bg-white/20" />

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedIds(new Set())}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  Clear
                </button>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#042F61] shadow-sm transition-transform active:scale-95"
                >
                  <UserX className="w-4 h-4" />
                  Request Offboarding
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Offboarding Confirmation Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isSubmitting && setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh] z-10"
            >
              {/* Header */}
              <div className="p-5 sm:p-6 border-b border-slate-100 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                    Request Offboarding
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    You are requesting offboarding for the following {selectedEmployeesList.length} employee(s).
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => !isSubmitting && setIsModalOpen(false)}
                  disabled={isSubmitting}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable selected employees list */}
              <div className="p-5 sm:p-6 overflow-y-auto divide-y divide-slate-100 flex-1">
                <div className="space-y-2">
                  {selectedEmployeesList.map((emp) => (
                    <div 
                      key={emp.id}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3"
                    >
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-slate-900 truncate">
                          {emp.name}
                        </div>
                        <div className="text-xs text-slate-500 truncate mt-0.5">
                          {emp.position} • {emp.team}
                        </div>
                      </div>
                      {userRole === 'admin' && emp.employee_id && (
                        <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200 flex-shrink-0">
                          {emp.employee_id}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Important Disclaimer / Workflow Notice */}
                <div className="mt-5 p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs sm:text-xs leading-relaxed flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Note: These employees will remain on the website until an Administrator reviews and approves the request from their end.
                  </span>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  disabled={isSubmitting}
                  className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-200/70 transition-colors"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleSendOffboardingRequest}
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#042F61] hover:bg-[#064082] text-white shadow-sm transition-all active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      <UserX className="w-4 h-4 text-[#FDB913]" />
                      Send Request
                    </>
                  )}
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

