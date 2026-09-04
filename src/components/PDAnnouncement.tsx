import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Info, 
  Calendar, 
  Clock, 
  X, 
  ExternalLink, 
  Loader2,
  ChevronDown,
  createLucideIcon 
} from 'lucide-react';

/**
 * CalendarArrowRight icon created via official lucide-react factory
 */
export const CalendarArrowRight = createLucideIcon('calendar-arrow-right', [
  ['path', { d: 'M8 2v3', key: 'tab-left' }],
  ['path', { d: 'M16 2v3', key: 'tab-right' }],
  ['path', { d: 'M3 9h18', key: 'cal-divider' }],
  ['path', { d: 'M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6', key: 'cal-frame' }],
  ['path', { d: 'M13 18h8', key: 'arrow-shaft' }],
  ['path', { d: 'm17 14 4 4-4 4', key: 'arrow-head' }],
]);

interface PDPoint {
  id: string;
  number: string;
  title: string;
}

export interface WordPressPDSession {
  id: number | string;
  title: string;
  description: string;
  date: string;
  time: string;
  url: string;
}

const PD_POINTS: PDPoint[] = [
  {
    id: 'point-1',
    number: '01',
    title: 'Industry Experts with Vast Experience'
  },
  {
    id: 'point-2',
    number: '02',
    title: 'VET Regulatory Trends'
  },
  {
    id: 'point-3',
    number: '03',
    title: 'Interactive and Skill based professional development sessions'
  }
];

/**
 * Decodes HTML entities commonly returned by WordPress (e.g. &#8211;, &#8212;, &amp;)
 */
const decodeHtmlEntities = (str: string): string => {
  if (!str) return '';
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');
    return doc.body.textContent || str;
  } catch {
    return str
      .replace(/&#8211;/g, '–')
      .replace(/&#8212;/g, '—')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'");
  }
};

/**
 * Format YYYY-MM-DD date into friendly readable format (e.g. "Fri, Aug 28, 2026")
 */
const formatDisplayDate = (dateStr: string): string => {
  if (!dateStr) return '';
  try {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      const d = new Date(year, month, day);
      if (!isNaN(d.getTime())) {
        return d.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        });
      }
    }
    return dateStr;
  } catch {
    return dateStr;
  }
};

/**
 * Returns today's date formatted as YYYY-MM-DD in local time
 */
const getTodayDateString = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Partial SVG Dot Grid Pattern Component
 * Uses clean SVG patterns and partial clustered masks to spice up the background
 */
const SvgPartialDotGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none" aria-hidden="true">
      {/* SVG Pattern Definitions */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          {/* Base Navy Dot Grid */}
          <pattern
            id="pd-grid-navy"
            x="0"
            y="0"
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.2" fill="#042F61" fillOpacity="0.14" />
          </pattern>

          {/* Accent Blue Dot Grid */}
          <pattern
            id="pd-grid-blue"
            x="0"
            y="0"
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.2" fill="#0072CE" fillOpacity="0.18" />
          </pattern>

          {/* Denser Accent Dot Grid */}
          <pattern
            id="pd-grid-dense"
            x="0"
            y="0"
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="#0072CE" fillOpacity="0.12" />
          </pattern>
        </defs>
      </svg>

      {/* Cluster 1: Top-Right Cluster behind the icon & header */}
      <div 
        className="absolute -top-10 right-4 sm:right-12 w-72 sm:w-96 h-72 sm:h-96 opacity-90"
        style={{
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 72%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 72%)',
        }}
      >
        <svg className="w-full h-full">
          <rect width="100%" height="100%" fill="url(#pd-grid-blue)" />
        </svg>
      </div>

      {/* Cluster 2: Bottom-Left Cluster beneath the CTA button & headline */}
      <div 
        className="absolute -bottom-14 -left-10 w-80 sm:w-[440px] h-72 sm:h-[380px] opacity-80"
        style={{
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 70%)',
        }}
      >
        <svg className="w-full h-full">
          <rect width="100%" height="100%" fill="url(#pd-grid-navy)" />
        </svg>
      </div>

      {/* Cluster 3: Structured Partial Accent Matrix near the right column list */}
      <div 
        className="absolute top-1/2 -right-8 -translate-y-1/2 w-64 h-64 opacity-50 hidden lg:block"
        style={{
          maskImage: 'radial-gradient(circle at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 75%)',
          WebkitMaskImage: 'radial-gradient(circle at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 75%)',
        }}
      >
        <svg className="w-full h-full">
          <rect width="100%" height="100%" fill="url(#pd-grid-dense)" />
        </svg>
      </div>

      {/* Cluster 4: Top-Left Subtle Watermark Dot Matrix */}
      <div 
        className="absolute top-6 left-12 w-48 h-36 opacity-40 hidden md:block"
        style={{
          maskImage: 'radial-gradient(ellipse at 40% 40%, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 40% 40%, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 70%)',
        }}
      >
        <svg className="w-full h-full">
          <rect width="100%" height="100%" fill="url(#pd-grid-navy)" />
        </svg>
      </div>
    </div>
  );
};

/**
 * Render topic title with formatting rules:
 * - If contains dash ("-", "–", "—"): text before dash in 13px font, <br> at dash (dash removed), text after dash in next line in 12px font with slightly lighter color.
 * - Else if without dash (e.g. "Designing Learner Guides for Quality Training and Compliance"):
 *   apply <br> rule only for first line (after first 3 words), let the second line be one line, with 13px font size.
 */
const renderTopicTitle = (title: string) => {
  const dashMatch = title.match(/^(.*?)\s*[-–—]\s*(.*)$/);

  if (dashMatch) {
    const before = dashMatch[1].trim();
    const after = dashMatch[2].trim();
    return (
      <div className="font-sans leading-snug">
        <span className="text-[13px] font-semibold text-slate-800 group-hover:text-[#042F61] transition-colors block">
          {before}
        </span>
        <span className="text-[12px] font-medium text-slate-500 group-hover:text-slate-600 transition-colors block mt-0.5">
          {after}
        </span>
      </div>
    );
  }

  // Without dash: break after first 3 words for first line, let the second line be one line
  const words = title.trim().split(/\s+/);
  const firstLine = words.slice(0, 3).join(' ');
  const secondLine = words.slice(3).join(' ');

  return (
    <div className="font-sans leading-snug">
      <span className="text-[13px] font-semibold text-slate-800 group-hover:text-[#042F61] transition-colors block">
        {firstLine}
      </span>
      {secondLine && (
        <span className="text-[13px] font-semibold text-slate-800 group-hover:text-[#042F61] transition-colors block mt-0.5">
          {secondLine}
        </span>
      )}
    </div>
  );
};

/**
 * Render modal topic title:
 * - If topic title contains a dash ("-", "–", "—"):
 *   Primary Heading before dash
 *   Next line in smaller text (-1px) and softer color for text after dash
 * - Otherwise: standard heading
 */
const renderModalTitle = (title: string) => {
  const decoded = decodeHtmlEntities(title);
  const dashMatch = decoded.match(/^(.*?)\s*[-–—]\s*(.*)$/);

  if (dashMatch) {
    const primary = dashMatch[1].trim();
    const secondary = dashMatch[2].trim();
    return (
      <div>
        <span className="block text-xl sm:text-2xl font-bold text-[#042F61] font-sans tracking-tight leading-snug">
          {primary}
        </span>
        <span className="block text-[19px] sm:text-[23px] font-semibold text-slate-600 font-sans tracking-tight leading-snug mt-1.5">
          {secondary}
        </span>
      </div>
    );
  }

  return (
    <span className="block text-xl sm:text-2xl font-bold text-[#042F61] font-sans tracking-tight leading-snug">
      {decoded}
    </span>
  );
};

export const PDAnnouncement: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(PD_POINTS[0].id);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScrollToMore = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ top: 120, behavior: 'smooth' });
    }
  };

  // WordPress REST API State
  const [sessions, setSessions] = useState<WordPressPDSession[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [selectedSession, setSelectedSession] = useState<WordPressPDSession | null>(null);

  // Fetch PD Sessions from WordPress CPT REST API endpoint
  useEffect(() => {
    let isMounted = true;
    const fetchSessions = async () => {
      try {
        setIsLoading(true);
        setFetchError(null);
        
        // Primary: fetch from relative endpoint /wp-json/cg/v1/pd-sessions (proxied by Vite)
        let response: Response;
        try {
          response = await fetch('/wp-json/cg/v1/pd-sessions');
          if (!response.ok) {
            throw new Error(`Relative fetch failed with status: ${response.status}`);
          }
        } catch {
          // Secondary fallback to direct WordPress origin
          response = await fetch('https://chelsongordon.com/wp-json/cg/v1/pd-sessions');
          if (!response.ok) {
            throw new Error(`Direct fetch failed with status: ${response.status}`);
          }
        }

        const data = await response.json();
        if (isMounted) {
          if (Array.isArray(data)) {
            setSessions(data);
          } else {
            setSessions([]);
          }
        }
      } catch {
        if (isMounted) {
          setFetchError('Unable to load sessions at this time.');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchSessions();

    return () => {
      isMounted = false;
    };
  }, []);

  // Handle ESC key to dismiss modal popup & toggle body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedSession(null);
      }
    };
    if (selectedSession) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedSession]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const currentScrollTop = e.currentTarget.scrollTop;
    setIsScrolledDown(currentScrollTop > 15);

    setIsScrolling(true);
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 900);
  };

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Logic: Use current date to show upcoming sessions in the scrollable section
  const todayStr = getTodayDateString();
  const upcomingSessions = sessions.filter((session) => {
    if (!session.date) return true;
    return session.date >= todayStr;
  });

  // If upcoming sessions exist, show them.
  // Fallback to all retrieved sessions if none are strictly >= today (so initial test posts are accessible until full schedule is published)
  const displayedSessions = upcomingSessions.length > 0 ? upcomingSessions : sessions;

  // Sort upcoming sessions ascending by date
  const sortedSessions = [...displayedSessions].sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return a.date.localeCompare(b.date);
  });

  // Map primary Left Column CTA button to /book-pd-session
  const primaryJoinUrl = "/book-pd-session";

  const handlePrimaryJoinClick = (e: React.MouseEvent) => {
    if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
      const isSpa = typeof window !== 'undefined' && (
        window.location.origin.includes('ais-') || 
        window.location.origin.includes('localhost') || 
        !!document.getElementById('root')
      );
      if (isSpa && window.location.pathname !== '/book-pd-session') {
        e.preventDefault();
        window.history.pushState(null, '', '/book-pd-session');
        window.location.hash = '';
        window.dispatchEvent(new Event('popstate'));
        window.dispatchEvent(new Event('hashchange'));
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }
  };

  const handlePopupJoinClick = (e: React.MouseEvent) => {
    // If running on WordPress (chelsongordon.com), allow native browser navigation to the PHP-rendered page
    if (typeof window !== 'undefined' && window.location.hostname.includes('chelsongordon.com')) {
      // If already on /book-pd-session/, close modal and smoothly scroll to the registration section
      if (window.location.pathname.startsWith('/book-pd-session')) {
        e.preventDefault();
        setSelectedSession(null);
        if (window.location.hash !== '#booking-registration-section') {
          window.history.pushState(null, '', '/book-pd-session/#booking-registration-section');
        }
        const target = document.getElementById('booking-registration-section') || document.getElementById('wp-gravity-form-mount');
        if (target) {
          const headerOffset = 100;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          try {
            window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });
          } catch {
            window.scrollTo(0, Math.max(0, offsetPosition));
          }
        }
      }
      return;
    }

    // In SPA preview environments (AI Studio / localhost)
    if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
      const isSpa = typeof window !== 'undefined' && (
        window.location.origin.includes('ais-') || 
        window.location.origin.includes('localhost')
      );
      if (isSpa) {
        e.preventDefault();
        setSelectedSession(null);
        window.history.pushState(null, '', '/book-pd-session/#booking-registration-section');
        window.dispatchEvent(new Event('popstate'));
        window.dispatchEvent(new Event('hashchange'));
        setTimeout(() => {
          const target = document.getElementById('booking-registration-section') || document.getElementById('wp-gravity-form-mount');
          if (target) {
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            try {
              window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });
            } catch {
              window.scrollTo(0, Math.max(0, offsetPosition));
            }
          }
        }, 150);
      }
    }
  };

  return (
    <section 
      id="pd-announcement"
      aria-label="PD Announcement"
      className="relative bg-white border-b border-slate-200/80 py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* Partial SVG Dot Grid background patterns */}
      <SvgPartialDotGrid />

      <div className="w-full max-w-[1480px] xl:max-w-[1580px] 2xl:max-w-[1700px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-x-10 xl:gap-x-14 2xl:gap-x-16 items-start">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Main Typography, Subtitle & Action Buttons   */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between h-full space-y-6 sm:space-y-8 lg:space-y-10">
            <div>
              {/* Main Headline */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl lg:text-[38px] xl:text-5xl 2xl:text-6xl text-[#042F61] tracking-tight leading-[1.08] text-balance font-sans"
              >
                <span className="block font-bold">Join Our</span>
                <span className="block text-[#0072CE] font-extrabold">Professional</span>
                <span className="block text-[#0072CE] font-accent font-extrabold tracking-normal">Development</span>
                <span className="block font-extrabold">Sessions</span>
              </motion.h2>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Subheading / Value Proposition with highlighted accent words in darker font color */}
              <p className="text-lg sm:text-xl xl:text-2xl text-slate-700 font-medium leading-snug tracking-tight max-w-lg">
                Build <span className="font-accent font-bold text-[#042F61]">skills</span>, grow your <span className="font-accent font-bold text-[#042F61]">expertise</span>,
                <br />
                and advance your <span className="font-accent font-bold text-[#042F61]">career</span>.
              </p>

              {/* Action Buttons with matching text & SVG colors and uppercase label */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                <motion.a
                  href={primaryJoinUrl}
                  onClick={handlePrimaryJoinClick}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 xl:px-8 py-3.5 xl:py-4 rounded-full bg-[#0072CE] hover:bg-[#042F61] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#0072CE]/25 transition-all duration-300 group cursor-pointer"
                >
                  <span>JOIN NOW</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="mailto:professionaldevelopment@chelsongordon.com?subject=Enquiry%20about%20Professional%20Development%20Sessions"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-5 xl:px-6 py-3.5 xl:py-4 rounded-full bg-white hover:bg-slate-50 text-[#042F61] hover:text-[#0072CE] font-bold text-xs sm:text-sm uppercase tracking-wider border border-slate-300 shadow-sm transition-all duration-200 group"
                >
                  <Info className="w-4 h-4 text-[#042F61] group-hover:text-[#0072CE] transition-colors" />
                  <span>GET MORE INFO</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* MIDDLE COLUMN: Integrated SVG Graphic + Points List       */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between space-y-6 sm:space-y-8">
            
            {/* Top-Left Integrated Graphic: Custom PD Icon aligned left */}
            <div className="flex justify-start items-center pb-2">
              <motion.img
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                src="https://storage.googleapis.com/chelsongordon/com.chelsongordon/logos/PD%20custom%20icon.svg?v=1"
                alt="PD custom icon"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain select-none pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Points List with matching typography, continuous full-width rules */}
            <div className="divide-y divide-slate-200/90 border-t border-b border-slate-200/90">
              {PD_POINTS.map((point) => {
                const isActive = activeId === point.id;

                return (
                  <div
                    key={point.id}
                    onClick={() => setActiveId(point.id)}
                    onMouseEnter={() => setActiveId(point.id)}
                    className="py-5 sm:py-6 xl:py-7 cursor-pointer transition-colors duration-200 group select-none"
                  >
                    <div className="flex items-center">
                      {/* Title: Montserrat / Sans - Normal case */}
                      <h3 
                        className={`text-sm sm:text-base lg:text-[15px] xl:text-lg font-bold tracking-tight font-sans transition-colors duration-200 leading-snug ${
                          isActive ? 'text-[#0072CE]' : 'text-slate-800 group-hover:text-[#0072CE]'
                        }`}
                      >
                        {point.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Scrollable Session Topics List              */}
          {/* ========================================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 xl:col-span-4 flex flex-col h-full"
          >
            {/* Card Container with Brand Blue Border and Shine Highlights */}
            <div className="relative rounded-2xl sm:rounded-3xl border-2 border-[#0072CE] bg-white/95 p-5 sm:p-6 flex flex-col justify-between shadow-[0_0_24px_rgba(0,114,206,0.18),0_6px_20px_rgba(4,47,97,0.06)] overflow-hidden">
              {/* Top Edge Brand Blue Shine Highlight */}
              <div 
                className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#0072CE] via-35% via-sky-200 via-50% via-[#0072CE] via-65% to-transparent opacity-95 pointer-events-none" 
                aria-hidden="true" 
              />
              {/* Ambient Corner Shine Highlight */}
              <div 
                className="absolute -top-14 -right-14 w-36 h-36 bg-[#0072CE]/15 rounded-full blur-2xl pointer-events-none" 
                aria-hidden="true" 
              />

              {/* Scoped CSS for active-only scrollbar with stable gutter to prevent layout shifts */}
              <style>{`
                .pd-scroll-area {
                  scrollbar-gutter: stable;
                }
                .pd-scroll-area::-webkit-scrollbar {
                  width: 5px;
                }
                .pd-scroll-area::-webkit-scrollbar-track {
                  background: transparent;
                }
                .pd-scroll-area::-webkit-scrollbar-thumb {
                  background-color: transparent;
                  border-radius: 9999px;
                  transition: background-color 0.25s ease;
                }
                .pd-scroll-area.is-scrolling::-webkit-scrollbar-thumb {
                  background-color: #0072CE;
                }
              `}</style>

              {/* Heading with Session Icon */}
              <div className="flex items-center justify-between pb-3.5 sm:pb-4 border-b border-slate-200/80 mb-3.5 sm:mb-4 relative z-10">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0072CE]/10 flex items-center justify-center text-[#0072CE] shrink-0">
                    <CalendarArrowRight className="w-5 h-5 text-[#0072CE]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#042F61] font-sans tracking-tight">
                      Upcoming Sessions
                    </h3>
                  </div>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#0072CE]/10 text-[#0072CE] border border-[#0072CE]/30 font-sans shadow-2xs">
                  {isLoading ? '...' : `${sortedSessions.length} ${sortedSessions.length === 1 ? 'Topic' : 'Topics'}`}
                </span>
              </div>

              {/* Scrollable list of session topics with auto-hiding scrollbar & stable gutter (no layout shift) */}
              <div 
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className={`overflow-y-auto max-h-[290px] sm:max-h-[320px] lg:max-h-[385px] xl:max-h-[400px] 2xl:max-h-[415px] pr-1.5 flex flex-col gap-2.5 pd-scroll-area relative z-10 ${
                  isScrolling ? 'is-scrolling' : ''
                }`}
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: isScrolling ? '#0072CE transparent' : 'transparent transparent',
                }}
                tabIndex={0}
                role="region"
                aria-label="Scrollable list of session topics"
              >
                {isLoading ? (
                  <div className="flex flex-col gap-2.5">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="p-2 sm:p-2.5 lg:py-0 rounded-xl bg-slate-50/40 border border-slate-200/50 flex items-center w-full animate-pulse">
                        <div className="w-[20%] aspect-square flex items-center justify-center shrink-0 -translate-x-[5px]">
                          <div className="w-6 h-6 bg-slate-200 rounded" />
                        </div>
                        <div className="w-[80%] flex-1 pl-2 sm:pl-3 pr-1 -translate-x-[6px] space-y-1.5 py-2">
                          <div className="h-3.5 bg-slate-200 rounded w-4/5" />
                          <div className="h-2.5 bg-slate-100 rounded w-3/5" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : sortedSessions.length === 0 ? (
                  <div className="py-8 px-4 text-center">
                    <p className="text-sm font-medium text-slate-500 font-sans">
                      {fetchError ? 'Currently updating session schedule.' : 'No upcoming sessions scheduled at the moment.'}
                    </p>
                    <p className="text-xs text-slate-400 mt-1 font-sans">
                      Please check back shortly or get in touch for custom bookings.
                    </p>
                  </div>
                ) : (
                  <>
                    {(sortedSessions.length > 4 ? sortedSessions.slice(0, 4) : sortedSessions).map((session, index) => {
                      const decodedTitle = decodeHtmlEntities(session.title);

                      return (
                        <div
                          key={session.id || index}
                          onClick={() => setSelectedSession(session)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setSelectedSession(session);
                            }
                          }}
                          role="button"
                          tabIndex={0}
                          aria-label={`View details for ${decodedTitle}`}
                          className="p-2 sm:p-2.5 lg:py-0 rounded-xl bg-slate-50/60 border border-slate-200/80 hover:border-[#0072CE]/60 hover:bg-white hover:shadow-xs transition-all duration-200 group flex items-center w-full cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#0072CE]/40 select-none"
                        >
                          {/* [topic number] 20% width, square aspect ratio, vertically & horizontally centered, unstyled colored text, shifted left 5px */}
                          <div className="w-[20%] aspect-square flex items-center justify-center shrink-0 -translate-x-[5px]">
                            <span className="text-xl sm:text-2xl font-black text-[#0072CE] font-sans select-none tracking-tight">
                              {index + 1}
                            </span>
                          </div>

                          {/* [topic name] 80% width, rectangle aspect ratio, shifted left 6px */}
                          <div className="w-[80%] flex-1 pl-2 sm:pl-3 pr-1 -translate-x-[6px]">
                            {renderTopicTitle(decodedTitle)}
                          </div>
                        </div>
                      );
                    })}

                    {/* Clean UI line indicator: icon pointing down -> text -> pill count with smooth collapse & float up */}
                    {sortedSessions.length > 4 && (
                      <AnimatePresence initial={false}>
                        {!isScrolledDown && (
                          <motion.div
                            key="scroll-more-sessions-indicator"
                            initial={{ opacity: 0, height: 0, marginTop: -10 }}
                            animate={{ opacity: 1, height: 'auto', marginTop: 0 }}
                            exit={{ opacity: 0, height: 0, marginTop: -10 }}
                            transition={{ duration: 0.28, ease: 'easeInOut' }}
                            className="overflow-hidden w-full shrink-0"
                          >
                            <div
                              onClick={handleScrollToMore}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  handleScrollToMore();
                                }
                              }}
                              role="button"
                              tabIndex={0}
                              aria-label={`Scroll to view ${sortedSessions.length - 4} more sessions`}
                              className="w-full py-2 px-2 flex items-center justify-center gap-2.5 text-[#0072CE] hover:text-[#042F61] transition-colors cursor-pointer select-none group focus:outline-hidden"
                            >
                              <ChevronDown className="w-[19px] h-[19px] shrink-0 text-[#0072CE] group-hover:text-[#042F61] group-hover:translate-y-0.5 transition-transform duration-200" />
                              <span className="text-[15px] font-semibold text-[#0072CE] group-hover:text-[#042F61] transition-colors tracking-tight whitespace-nowrap">
                                Scroll to view more sessions
                              </span>
                              <span className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold rounded-full bg-[#0072CE]/10 text-[#0072CE] border border-[#0072CE]/20 group-hover:bg-[#0072CE]/20 group-hover:text-[#042F61] group-hover:border-[#0072CE]/30 transition-colors whitespace-nowrap shrink-0">
                                +{sortedSessions.length - 4}
                              </span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}

                    {/* Remaining sessions beyond row 4 */}
                    {sortedSessions.length > 4 && sortedSessions.slice(4).map((session, index) => {
                      const decodedTitle = decodeHtmlEntities(session.title);
                      const actualNumber = index + 5;

                      return (
                        <div
                          key={session.id || actualNumber}
                          onClick={() => setSelectedSession(session)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setSelectedSession(session);
                            }
                          }}
                          role="button"
                          tabIndex={0}
                          aria-label={`View details for ${decodedTitle}`}
                          className="p-2 sm:p-2.5 lg:py-0 rounded-xl bg-slate-50/60 border border-slate-200/80 hover:border-[#0072CE]/60 hover:bg-white hover:shadow-xs transition-all duration-200 group flex items-center w-full cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#0072CE]/40 select-none"
                        >
                          {/* [topic number] */}
                          <div className="w-[20%] aspect-square flex items-center justify-center shrink-0 -translate-x-[5px]">
                            <span className="text-xl sm:text-2xl font-black text-[#0072CE] font-sans select-none tracking-tight">
                              {actualNumber}
                            </span>
                          </div>

                          {/* [topic name] */}
                          <div className="w-[80%] flex-1 pl-2 sm:pl-3 pr-1 -translate-x-[6px]">
                            {renderTopicTitle(decodedTitle)}
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* POPUP MODAL: Interactive Details Animating Right to Center*/}
      {/* ========================================================= */}
      <AnimatePresence>
        {selectedSession && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
            onClick={() => setSelectedSession(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-session-title"
          >
            <motion.div
              initial={{ opacity: 0, x: 140, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.96 }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg sm:max-w-xl bg-white rounded-2xl sm:rounded-3xl border-2 border-[#0072CE] shadow-2xl p-6 sm:p-8 overflow-hidden text-left my-8"
            >
              {/* Brand Blue Shine Highlight along the top edge */}
              <div 
                className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#0072CE] via-35% via-sky-300 via-50% via-[#0072CE] via-65% to-transparent opacity-95 pointer-events-none" 
                aria-hidden="true" 
              />
              {/* Ambient Corner Glow */}
              <div 
                className="absolute -top-12 -right-12 w-32 h-32 bg-[#0072CE]/10 rounded-full blur-2xl pointer-events-none" 
                aria-hidden="true" 
              />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedSession(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-[#042F61] flex items-center justify-center transition-colors cursor-pointer z-20 focus:outline-hidden focus:ring-2 focus:ring-[#0072CE]/50"
                aria-label="Close session details"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Category Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#0072CE]/10 text-[#0072CE] border border-[#0072CE]/20 font-sans">
                  About this Session
                </span>
              </div>

              {/* Topic Name = CPT Post Title */}
              <h3 
                id="modal-session-title"
                className="font-sans pr-8"
              >
                {renderModalTitle(selectedSession.title)}
              </h3>

              {/* Metadata Row: Session Date & Session Time (50-50 width split) */}
              {(selectedSession.date || selectedSession.time) && (
                <div className="grid grid-cols-2 gap-3 sm:gap-4 my-4 py-3.5 border-y border-slate-100 items-center">
                  <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-semibold text-slate-700 font-sans min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-[#0072CE]/10 flex items-center justify-center text-[#0072CE] shrink-0">
                      <Calendar className="w-4 h-4 text-[#0072CE]" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase font-bold text-[#042F61] block tracking-wider leading-none truncate">Session Date</span>
                      <span className="text-slate-800 font-medium truncate block">{selectedSession.date ? formatDisplayDate(selectedSession.date) : 'TBA'}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-semibold text-slate-700 font-sans min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-[#0072CE]/10 flex items-center justify-center text-[#0072CE] shrink-0">
                      <Clock className="w-4 h-4 text-[#0072CE]" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase font-bold text-[#042F61] block tracking-wider leading-none truncate">Session Time</span>
                      <span className="text-slate-800 font-medium truncate block">{selectedSession.time || 'TBA'}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Session Description */}
              <div className="mb-6">
                <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2 font-sans">
                  Description
                </h4>
                {selectedSession.description && selectedSession.description.trim().length > 0 ? (
                  <div 
                    className="text-slate-600 font-sans text-sm leading-relaxed max-w-none [&>p]:mb-2 [&>p:last-child]:mb-0 [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5"
                    dangerouslySetInnerHTML={{ __html: selectedSession.description }}
                  />
                ) : (
                  <p className="text-slate-500 font-sans text-sm leading-relaxed italic">
                    Detailed session materials, curriculum, and interactive exercises will be provided to participants upon registration.
                  </p>
                )}
              </div>

              {/* Join Link = mapped to gravity form mount point card on book session page */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="https://chelsongordon.com/book-pd-session/#booking-registration-section"
                  onClick={handlePopupJoinClick}
                  className="relative overflow-hidden w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0072CE] hover:bg-[#FDB913] text-white hover:text-[#042F61] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#0072CE]/25 hover:shadow-xl hover:shadow-[#FDB913]/30 transition-all duration-300 group cursor-pointer"
                >
                  {/* Brand Yellow hover left-to-right luminous shine */}
                  <span 
                    className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg] group-hover:left-[100%] transition-all duration-700 ease-in-out pointer-events-none" 
                    aria-hidden="true" 
                  />
                  <span className="relative z-10 transition-colors duration-300">JOIN NOW</span>
                  <ArrowRight className="relative z-10 w-4 h-4 text-white group-hover:text-[#042F61] group-hover:translate-x-1 transition-all duration-300" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default PDAnnouncement;
