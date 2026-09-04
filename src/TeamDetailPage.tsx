import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TEAMS_DATA } from './components/Teams/teamData';
import { getTeamIcon } from './components/Teams/TeamCard';
import { 
  ArrowLeft, 
  ArrowRight, 
  MapPin, 
  User, 
  Mail, 
  Phone, 
  ChevronRight, 
  Sparkles, 
  RefreshCw, 
  AlertCircle,
  Quote,
  X,
  Globe,
  Palette,
  Code,
  Megaphone,
  Video,
  Camera,
  Film,
  Clapperboard,
  PenTool,
  LineChart,
  Briefcase
} from 'lucide-react';
import { EMPLOYEES_FLAT_DATA, getInitials } from './orgData';
import { EMPLOYEE_IMAGE_SCALE, getEmployeeImageScale } from './employeeScaleConfig';

export { EMPLOYEE_IMAGE_SCALE, getEmployeeImageScale };

// Helper to determine role-based icon (e.g. Clapperboard/Film for Media Production, Globe for Web Designers/Developers)
const getRoleIcon = (position: string, team?: string) => {
  const p = (position || '').toLowerCase();
  const t = (team || '').toLowerCase();

  // 1. Media Production / Video / Film / Editor / Motion
  if (
    p.includes('media') ||
    p.includes('production') ||
    p.includes('video') ||
    p.includes('film') ||
    p.includes('movie') ||
    p.includes('editor') ||
    p.includes('motion') ||
    p.includes('animation')
  ) {
    return Clapperboard; // Movie / Editor / Media Production icon
  }

  // 2. Web & UI/UX Design / Development
  if (p.includes('web') || p.includes('ui') || p.includes('ux') || p.includes('frontend') || p.includes('front-end') || p.includes('site')) {
    return Globe; // Browser / Web icon
  }

  // 3. Software & Tech Development
  if (p.includes('code') || p.includes('dev') || p.includes('engineer') || p.includes('software') || p.includes('tech')) {
    return Code;
  }

  // 4. Photography
  if (p.includes('photo') || p.includes('camera')) {
    return Camera;
  }

  // 5. Visual / Graphic Design
  if (p.includes('art') || p.includes('design') || p.includes('graphic') || p.includes('creative') || p.includes('illustrat')) {
    return Palette;
  }

  // 6. Content & Copywriting
  if (p.includes('content') || p.includes('writer') || p.includes('copy')) {
    return PenTool;
  }

  // 7. Data Analytics & Research
  if (p.includes('data') || p.includes('analyst') || p.includes('research') || p.includes('metric')) {
    return LineChart;
  }

  // 8. Marketing, Social Media, SEO, Growth (or team fallback)
  if (p.includes('market') || p.includes('seo') || p.includes('social') || p.includes('brand') || p.includes('growth') || t.includes('marketing')) {
    return Megaphone;
  }

  return Globe; // Default icon
};

interface WordPressTeamMember {
  id: number | string;
  employee_id: string;
  name: string;
  position: string;
  team: string;
  subteam: string;
  bio: string;
  motto: string;
  image_url: string;
  show: boolean;
}

interface TeamMemberDisplay {
  id: string | number;
  employee_id?: string;
  name: string;
  position: string;
  team: string;
  subteam?: string;
  bio?: string;
  motto?: string;
  image_url?: string;
  image_scale?: number;
  avatar?: string;
  office?: string;
  email?: string;
  phone?: string;
  show?: boolean;
}

interface TeamMemberCardProps {
  emp: TeamMemberDisplay;
  index: number;
  onSelect: (emp: TeamMemberDisplay, origin: 'left' | 'center' | 'right') => void;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ emp, index, onSelect }) => {
  const RoleIcon = getRoleIcon(emp.position, emp.team);
  const scaleFactor = emp.image_scale ?? 1.0;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    let origin: 'left' | 'center' | 'right' = 'center';
    
    // In desktop mode (>= 1024px), determine relative position on screen
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      const rect = e.currentTarget.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const screenThird = window.innerWidth / 3;

      if (cardCenter < screenThird) {
        origin = 'left';
      } else if (cardCenter > screenThird * 2) {
        origin = 'right';
      } else {
        origin = 'center';
      }
    }
    onSelect(emp, origin);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -10 }}
      transition={{ delay: index * 0.03, duration: 0.35, ease: 'easeOut' }}
      key={emp.id}
      onClick={handleClick}
      className="group flex flex-col cursor-pointer"
    >
      {/* Card Container with headroom for cut-out image pop-out */}
      <div className="relative pt-12 sm:pt-16">
        {/* Heavy Reflective Glass Dark Brand Blue Box without passive shadow & no yellow border */}
        <div className="relative bg-[#042F61]/75 backdrop-blur-2xl rounded-2xl aspect-[4/3.2] sm:aspect-[4/3.3] flex flex-col justify-between p-4 sm:p-5 overflow-visible group-hover:-translate-y-1 transition-all duration-300 shadow-none group-hover:shadow-[0_20px_40px_-8px_rgba(4,47,97,0.35)] border-0">
          
          {/* Inner Clipped Glass Background Container */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            {/* Heavy Glass Reflective Overlays */}
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.38)_0%,rgba(255,255,255,0.12)_25%,rgba(255,255,255,0.02)_45%,transparent_65%)]" />
            <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Top Left: Role / Browser Icon based on job position */}
          <div className="absolute top-3.5 left-3.5 z-20 pointer-events-none">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/90 backdrop-blur-md border border-white/50 flex items-center justify-center text-[#042F61] shadow-sm group-hover:bg-[#FDB913] group-hover:text-[#042F61] group-hover:border-[#FDB913]/50 transition-all duration-300">
              <RoleIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.2]" />
            </div>
          </div>

          {/* Foreground Overlaid Cut-Out Image / Avatar */}
          <div 
            className="absolute inset-x-0 bottom-0 top-[-35%] z-10 flex items-end justify-center pointer-events-none overflow-visible"
            style={{
              clipPath: 'polygon(-50% -100%, 150% -100%, 150% 100%, -50% 100%)'
            }}
          >
            {emp.image_url ? (
              <img
                src={emp.image_url}
                alt={emp.name}
                className="h-full w-auto max-w-[85%] sm:max-w-[80%] object-contain object-bottom filter drop-shadow-2xl transition-transform duration-300"
                style={{
                  transform: `scale(${scaleFactor})`,
                  transformOrigin: 'center bottom'
                }}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            ) : (
              /* Fallback Cut-out Silhouette / Stylized Avatar when no photo */
              <div className="relative h-[115%] w-[75%] sm:w-[70%] flex items-end justify-center pb-1">
                <div 
                  className="w-full h-[85%] flex flex-col items-center justify-center bg-white/20 backdrop-blur-md rounded-t-2xl text-white shadow-inner transition-transform duration-300"
                  style={{
                    transform: `scale(${scaleFactor})`,
                    transformOrigin: 'center bottom'
                  }}
                >
                  <span className="text-3xl sm:text-4xl font-black text-white/90 tracking-wider drop-shadow-md">
                    {emp.avatar || getInitials(emp.name)}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* On hover on the card: "Hear what they got to say ->" */}
          <div className="absolute inset-x-3.5 bottom-3.5 z-30 opacity-0 group-hover:opacity-100 translate-y-1.5 group-hover:translate-y-0 transition-all duration-300 pointer-events-none flex items-center justify-between bg-[#042F61]/90 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/25 shadow-xl">
            <span className="text-xs sm:text-[13px] font-bold text-white tracking-wide">
              Hear what they got to say
            </span>
            <ArrowRight 
              className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" 
              stroke="#ffffff" 
              strokeWidth={3} 
            />
          </div>
        </div>
      </div>

      {/* Employee Details Below Card (Left-Aligned, 24px font size for name) */}
      <div className="mt-4 px-1 flex items-center justify-between text-left">
        <div>
          <h3 className="text-[#042F61] font-extrabold text-[24px] leading-tight tracking-tight group-hover:text-primary-light transition-colors duration-200">
            {emp.name}
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm font-medium mt-1 leading-snug">
            {emp.position}
          </p>
          {emp.subteam && emp.subteam !== emp.team && (
            <span className="inline-block text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-1">
              {emp.subteam}
            </span>
          )}
        </div>
        <ChevronRight className="w-8 h-8 text-slate-300 group-hover:text-[#042F61] group-hover:translate-x-1 transition-all duration-200 shrink-0 stroke-[2.5]" />
      </div>
    </motion.div>
  );
};

interface TeamDetailPageProps {
  slug: string;
  onNavigateBack?: () => void;
}

// Mapping of React team IDs to WordPress CPT taxonomy slugs
const TEAM_WP_QUERY_MAP: Record<string, string> = {
  'marketing-team': 'marketing-team',
  'consultant-team': 'consultant-team',
  'operational-support-team': 'operational-support-team',
  'human-strategy-team': 'human-strategy-team',
  'executive-assistant-team': 'executive-assistant-team',
  'learning-academic-team': 'administrative-teams',
};

export default function TeamDetailPage({ slug, onNavigateBack }: TeamDetailPageProps) {
  // Normalize slug to match with or without leading/trailing slashes
  const normalizedSlug = slug.replace(/\/+$/, '') || '/';
  const team = TEAMS_DATA.find((t) => t.slug === normalizedSlug) || TEAMS_DATA[0];
  const TeamIcon = getTeamIcon(team.id);

  // States for WordPress API integration
  const [wpMembers, setWpMembers] = useState<WordPressTeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMemberDisplay | null>(null);
  const [modalOrigin, setModalOrigin] = useState<'left' | 'center' | 'right'>('center');

  const handleSelectMember = (emp: TeamMemberDisplay, origin: 'left' | 'center' | 'right') => {
    setModalOrigin(origin);
    setSelectedMember(emp);
  };

  useEffect(() => {
    const originalTitle = document.title;
    document.title = `${team.name} - Chelson Gordon`;
    return () => {
      document.title = originalTitle;
    };
  }, [team]);

  // WordPress REST API fetch for team members directly from CPT
  const fetchTeamData = () => {
    const wpTeamSlug = TEAM_WP_QUERY_MAP[team.id] || team.id;

    setIsLoading(true);
    setFetchError(null);

    const API_URL = `https://chelsongordon.com/wp-json/cg/v1/team-members?team=${encodeURIComponent(wpTeamSlug)}`;

    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`API HTTP ${res.status}: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data: WordPressTeamMember[]) => {
        setWpMembers(Array.isArray(data) ? data : []);
        setIsLoading(false);
      })
      .catch((err: Error) => {
        console.error(`WordPress Team Members API Fetch Error (${team.id}):`, err);
        setFetchError(err.message || 'Failed to load team data from WordPress API');
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchTeamData();
  }, [team.id]);

  // Resolved list of members: directly from CPT with fallback to local flat data
  const teamMembers: TeamMemberDisplay[] = useMemo(() => {
    // 1. Primary: Use live WordPress CPT data directly
    if (wpMembers && wpMembers.length > 0) {
      return wpMembers.map((member) => ({
        id: member.id,
        employee_id: member.employee_id,
        name: member.name,
        position: member.position,
        team: member.team,
        subteam: member.subteam,
        bio: member.bio,
        motto: member.motto,
        image_url: member.image_url || undefined,
        image_scale: getEmployeeImageScale(member),
        avatar: getInitials(member.name),
        show: member.show
      }));
    }

    // 2. Fallback: If CPT returns empty or encounters network errors, fallback to local flat data
    const deptKeywordMap: Record<string, string[]> = {
      'learning-academic-team': ['learning & academic', 'learning support', 'academic'],
      'consultant-team': ['consultant', 'consulting'],
      'human-strategy-team': ['human strategy', 'hr'],
      'executive-assistant-team': ['executive assistant', 'accounting'],
      'operational-support-team': ['operational support', 'operations', 'administrator', 'support'],
      'marketing-team': ['marketing', 'sales', 'media']
    };

    const targetKeywords = deptKeywordMap[team.id] || [team.name.toLowerCase()];

    return EMPLOYEES_FLAT_DATA
      .filter((emp) => {
        const d = (emp.department || '').toLowerCase();
        const r = (emp.role || '').toLowerCase();
        return targetKeywords.some((kw) => d.includes(kw.toLowerCase()) || r.includes(kw.toLowerCase()));
      })
      .map((emp) => ({
        id: emp.id,
        employee_id: emp.id,
        name: emp.name,
        position: emp.role,
        team: emp.department,
        bio: emp.bio,
        office: emp.office,
        email: emp.email,
        phone: emp.phone,
        avatar: emp.avatar || getInitials(emp.name),
        image_scale: getEmployeeImageScale(emp),
        show: true
      }));
  }, [team.id, team.name, wpMembers]);

  const handleBack = () => {
    if (onNavigateBack) {
      onNavigateBack();
      return;
    }
    window.history.pushState({}, '', '/our-people');
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleNavigateToSlug = (targetSlug: string) => {
    window.history.pushState({}, '', targetSlug);
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans pt-[135px] sm:pt-[140px] md:pt-[145px] lg:pt-[125px] xl:pt-[145px] 2xl:pt-[165px] pb-20 selection:bg-primary selection:text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-[40px]">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6 pt-2 flex items-center justify-start">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark hover:-translate-x-1 transition-all font-bold text-xs uppercase tracking-widest cursor-pointer bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Hero Header for this Team */}
        <div className="relative rounded-3xl overflow-hidden bg-primary-dark text-white border border-slate-200/80 shadow-md mb-8">
          <div className="absolute inset-0 z-0">
            <img
              src={team.image}
              alt={team.imageAlt || team.name}
              className="w-full h-full object-cover object-center filter saturate-[1.05] opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-primary-dark/50 to-primary-dark/20" />
          </div>

          <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-3xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-3 drop-shadow-sm">
              {team.name}
            </h1>
            <p className="text-white/95 text-sm sm:text-base leading-relaxed max-w-2xl font-normal drop-shadow-sm">
              {team.description}
            </p>
          </div>
        </div>

        {/* Team Members Section */}
        <div className="mb-12">
          <div className="mb-[34px]">
            <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
              Team Members
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-medium mt-1">
              {team.id === 'marketing-team' || team.id.includes('marketing')
                ? 'Meet the creative minds shaping our brand and connecting us with our audience.'
                : 'Meet the specialists driving excellence in this division.'}
            </p>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 xl:gap-x-8 gap-y-[44px] xl:gap-y-[52px]">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6 animate-pulse">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-200" />
                    <div className="w-20 h-5 rounded bg-slate-200" />
                  </div>
                  <div className="w-3/4 h-5 rounded bg-slate-200 mb-2" />
                  <div className="w-1/2 h-4 rounded bg-slate-200 mb-4" />
                  <div className="w-full h-12 rounded bg-slate-100" />
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {!isLoading && fetchError && (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center max-w-lg mx-auto">
              <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <h3 className="text-sm font-bold text-red-800 uppercase tracking-wider">WordPress API Fetch Error</h3>
              <p className="text-xs text-red-600 mt-1 mb-4">{fetchError}</p>
              <button
                onClick={fetchTeamData}
                className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary-light transition-colors cursor-pointer"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Render Members Grid */}
          {!isLoading && !fetchError && (
            <>
              {teamMembers.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 xl:gap-x-8 gap-y-[44px] xl:gap-y-[52px]">
                  {teamMembers.map((emp, index) => (
                    <TeamMemberCard
                      key={emp.id}
                      emp={emp}
                      index={index}
                      onSelect={handleSelectMember}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center max-w-lg mx-auto shadow-sm">
                  <User className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                  <h3 className="text-base font-bold text-primary">No Visible Team Members</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {team.id === 'marketing-team' && wpMembers.length > 0 ? (
                      <span>The WordPress API returned {wpMembers.length} team members, but none currently have <code className="bg-slate-100 text-primary px-1.5 py-0.5 rounded font-mono">show: true</code>.</span>
                    ) : (
                      <span>No team members are currently listed for this view.</span>
                    )}
                  </p>
                </div>
              )}
            </>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> All Teams
          </button>
          <a
            href="https://chelsongordon.com/careers/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-primary hover:bg-primary hover:text-white font-bold uppercase tracking-widest text-xs transition-all shadow-sm group"
          >
            <span>Join This Team</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>

      {/* Member Detail Pop-up Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[1001] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-slate-900/65 backdrop-blur-md"
            />

            {/* Pop-up Card */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 16,
                x: modalOrigin === 'left' ? -60 : modalOrigin === 'right' ? 60 : 0
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                x: 0
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
                y: 16,
                x: modalOrigin === 'left' ? -40 : modalOrigin === 'right' ? 40 : 0
              }}
              transition={{ type: 'spring', damping: 26, stiffness: 280 }}
              className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden my-auto flex flex-col z-[1002] max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#042F61]/10 flex items-center justify-center text-[#042F61]">
                    <User className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#042F61]">
                    About Employee
                  </span>
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="w-8 h-8 rounded-full bg-[#042F61] text-white hover:bg-[#FDB913] hover:text-[#042F61] flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-7 overflow-y-auto space-y-6">
                {/* Profile Overview */}
                <div className="flex flex-col gap-2 pb-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 w-fit text-[#042F61] mb-1">
                    <TeamIcon className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span className="text-[11px] font-extrabold tracking-wide">{selectedMember.team}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#042F61] leading-tight tracking-tight">
                      {selectedMember.name}
                    </h2>
                    <p className="text-xs sm:text-sm font-extrabold text-[#FDB913] uppercase tracking-wider mt-1">
                      {selectedMember.position}
                    </p>
                  </div>
                </div>

                {/* Motto */}
                {selectedMember.motto && (
                  <div className="space-y-1.5">
                    <h3 className="text-[11px] uppercase tracking-wider font-extrabold text-slate-400 flex items-center gap-1.5">
                      <Quote className="w-3.5 h-3.5 text-accent" />
                      <span>Motto</span>
                    </h3>
                    <p className="text-xs sm:text-[13px] italic text-slate-700 bg-amber-50/60 p-4 rounded-xl border border-amber-200/50 leading-relaxed">
                      "{selectedMember.motto}"
                    </p>
                  </div>
                )}

                {/* About Me */}
                <div className="space-y-2">
                  <h3 className="text-[11px] uppercase tracking-wider font-extrabold text-slate-400">
                    About Me
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-medium bg-slate-50/70 p-4 rounded-xl border border-slate-100">
                    {selectedMember.bio || "Dedicated specialist contributing to high-tier academic and quality assurance structures."}
                  </p>
                </div>

                {/* Contact */}
                {selectedMember.email && (
                  <div className="space-y-2">
                    <h3 className="text-[11px] uppercase tracking-wider font-extrabold text-slate-400">
                      Contact
                    </h3>
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="flex items-center gap-2.5 p-3.5 border border-slate-200/80 rounded-xl hover:bg-slate-50 text-xs sm:text-[13px] text-[#042F61] font-semibold transition-colors group"
                    >
                      <Mail className="w-4 h-4 text-slate-400 group-hover:text-[#042F61] transition-colors" />
                      <span>{selectedMember.email}</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

