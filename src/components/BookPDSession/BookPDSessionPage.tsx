import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight,
  Users, 
  Play, 
  ShieldCheck, 
  Sparkles, 
  Calendar, 
  CalendarPlus, 
  Clock, 
  X, 
  ChevronRight, 
  ChevronLeft,
  ChevronDown,
  MessageSquare,
  Globe,
  History,
  Mail
} from 'lucide-react';
import { WordPressPDSession } from '../PDAnnouncement';
import { CertificateVerificationCard } from './CertificateVerificationCard';

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
 * Render topic title with clean line break after dash if present
 */
const renderTopicTitle = (title: string) => {
  const decoded = decodeHtmlEntities(title);
  const dashMatch = decoded.match(/^(.*?)\s*[-–—]\s*(.*)$/);

  if (dashMatch) {
    const before = dashMatch[1].trim();
    const after = dashMatch[2].trim();
    return (
      <div className="font-sans leading-snug">
        <span className="text-xs sm:text-[13px] font-bold text-white group-hover:text-[#FDB913] transition-colors block leading-tight">
          {before}
        </span>
        <span className="text-[11px] sm:text-xs font-medium text-sky-100/90 group-hover:text-white transition-colors block mt-0.5 leading-snug">
          {after}
        </span>
      </div>
    );
  }

  return (
    <div className="font-sans leading-snug">
      <span className="text-xs sm:text-[13px] font-bold text-white group-hover:text-[#FDB913] transition-colors block leading-tight">
        {decoded}
      </span>
    </div>
  );
};

// Fallback Upcoming Sessions (> current date)
const FALLBACK_UPCOMING_SESSIONS: WordPressPDSession[] = [
  {
    id: 22272,
    title: "Compliant Assessment Practices – Embedding Validity and Reliability in Assessment",
    description: "Equip your assessors with the knowledge, evidence-gathering strategies, and practical tools to embed fairness, flexibility, validity, and sufficiency into daily assessment workflows in line with ASQA Standards.",
    date: "2026-09-04",
    time: "04:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22273,
    title: "Assessment Confidence – Applying Validity and Sufficiency in Practice",
    description: "Master evidence sufficiency, authentic learner verification, and robust validation instruments to ensure total audit confidence.",
    date: "2026-09-11",
    time: "04:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22274,
    title: "Assessment Integrity – Ensuring Authenticity and Currency of Evidence",
    description: "Stay ahead of regulatory reforms, audit expectations, and risk-based regulatory trends shaping Australian vocational education and training.",
    date: "2026-09-18",
    time: "03:30 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22275,
    title: "Designing Learner Guides for Quality Training and Compliance",
    description: "Learn systematic development methodologies for student learning materials that elevate assessor delivery and streamline learner progression.",
    date: "2026-09-25",
    time: "04:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22276,
    title: "Learner Guide to Learning Experience – Designing Engaging Training Presentations",
    description: "Transform static training materials into immersive, interactive learning journeys tailored for high adult learner engagement and retention.",
    date: "2026-10-02",
    time: "04:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  }
];

// Fallback Past Sessions (< current date)
const FALLBACK_PAST_SESSIONS: WordPressPDSession[] = [
  {
    id: 22271,
    title: "Compliant Assessment Practices – Embedding Fairness and Flexibility in Assessment",
    description: "Equipped assessors with evidence-gathering strategies and practical tools to embed fairness, flexibility, and validity into daily workflows.",
    date: "2026-08-28",
    time: "04:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22270,
    title: "VET Regulatory Trends & Standards for RTO Compliance",
    description: "Unpacked regulatory reforms, audit expectations, and risk-based compliance methodologies shaping modern RTO governance.",
    date: "2026-08-14",
    time: "03:30 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22269,
    title: "Evidence Sufficiency & Authenticity in Vocational Assessment",
    description: "Deep dive into authentic student evidence collection, validation methods, and third-party reports under ASQA standards.",
    date: "2026-07-31",
    time: "04:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22268,
    title: "Designing Impactful Learner Guides & Assessment Tools",
    description: "Practical masterclass on developing compliant learning materials that boost student engagement and meet audit scrutiny.",
    date: "2026-07-17",
    time: "03:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22267,
    title: "RPL Evidence Gathering & Competency Conversation Strategies",
    description: "Advanced masterclass on streamlining Recognition of Prior Learning workflows and audit-tested candidate interview techniques.",
    date: "2026-07-03",
    time: "04:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22266,
    title: "Industry Consultation Frameworks & Trainer Currency Evidence",
    description: "Robust methodologies for documenting authentic industry engagement and vocational currency in alignment with ASQA standards.",
    date: "2026-06-19",
    time: "03:30 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22265,
    title: "Assessment Validation Workflows – Pre & Post Delivery",
    description: "Step-by-step guidance on establishing statistically valid sampling and collaborative validation panels across RTO faculties.",
    date: "2026-06-05",
    time: "04:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22264,
    title: "Training & Assessment Strategy (TAS) Design for Audit Scrutiny",
    description: "Comprehensive blueprint for structuring compliant TAS documents reflecting real learner cohorts and delivery modes.",
    date: "2026-05-22",
    time: "04:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  }
];

export const BookPDSessionPage: React.FC = () => {
  const [allSessions, setAllSessions] = useState<WordPressPDSession[]>([]);
  const [upcomingSessions, setUpcomingSessions] = useState<WordPressPDSession[]>(FALLBACK_UPCOMING_SESSIONS);
  const [pastSessions, setPastSessions] = useState<WordPressPDSession[]>(FALLBACK_PAST_SESSIONS);
  
  // Carousel Indices
  const [upcomingIndex, setUpcomingIndex] = useState(0);

  // Scroll state for previous sessions section (matching homepage PD announcement behavior)
  const [isPastScrolling, setIsPastScrolling] = useState(false);
  const [isPastScrolledDown, setIsPastScrolledDown] = useState(false);
  const pastScrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pastScrollContainerRef = useRef<HTMLDivElement>(null);

  const [selectedSession, setSelectedSession] = useState<WordPressPDSession | null>(null);
  const gravityFormMountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Book Professional Development Session - Chelson Gordon';
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Fetch live session information from WordPress API (same as homepage PDAnnouncement)
    let isMounted = true;
    const fetchWPSessions = async () => {
      try {
        let response: Response;
        try {
          response = await fetch('/wp-json/cg/v1/pd-sessions');
          if (!response.ok) throw new Error();
        } catch {
          response = await fetch('https://chelsongordon.com/wp-json/cg/v1/pd-sessions');
        }

        if (response.ok) {
          const data = await response.json();
          if (isMounted && Array.isArray(data) && data.length > 0) {
            setAllSessions(data);
            const todayStr = getTodayDateString();

            // Filter upcoming sessions (> current date)
            const upcoming = data
              .filter((s: WordPressPDSession) => !s.date || s.date >= todayStr)
              .sort((a, b) => (a.date || '').localeCompare(b.date || ''));

            // Filter past sessions (< current date)
            const past = data
              .filter((s: WordPressPDSession) => s.date && s.date < todayStr)
              .sort((a, b) => (b.date || '').localeCompare(a.date || ''));

            if (upcoming.length > 0) {
              setUpcomingSessions(upcoming);
            }

            // If past sessions exist from API, complement with fallback past data if needed so carousel is rich
            if (past.length > 0) {
              const mergedPast = [
                ...past,
                ...FALLBACK_PAST_SESSIONS.filter(f => !past.some(p => p.id === f.id || p.date === f.date))
              ];
              setPastSessions(mergedPast);
            }
          }
        }
      } catch (err) {
        console.warn('Using default sessions fallback:', err);
      }
    };

    fetchWPSessions();

    // Mount server-rendered Gravity Form #20 from #cg-hidden-gform-source into #wp-gravity-form-mount
    const mountContainer = gravityFormMountRef.current || document.getElementById('wp-gravity-form-mount');
    if (mountContainer && !mountContainer.querySelector('#gform_wrapper_20, #gform_20')) {
      const hiddenSource = document.getElementById('cg-hidden-gform-source');
      const formElement = hiddenSource?.querySelector('#gform_wrapper_20, #gform_20, form') 
        || document.getElementById('gform_wrapper_20') 
        || hiddenSource?.firstElementChild;

      if (formElement && !mountContainer.contains(formElement)) {
        mountContainer.replaceChildren(formElement);
      }
    }

    // Dispatch event to inform any WordPress Gravity Form scripts that mount point is ready
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('gform_mount_ready', {
        detail: { containerId: 'wp-gravity-form-mount' }
      }));
    }

    return () => {
      isMounted = false;
      document.title = originalTitle;
      const currentMount = gravityFormMountRef.current || document.getElementById('wp-gravity-form-mount');
      const mountedForm = currentMount?.querySelector('#gform_wrapper_20, #gform_20');
      const hiddenSource = document.getElementById('cg-hidden-gform-source');
      if (mountedForm && hiddenSource && !hiddenSource.contains(mountedForm)) {
        hiddenSource.appendChild(mountedForm);
      }
    };
  }, []);

  const currentUpcomingSession = upcomingSessions[upcomingIndex] || upcomingSessions[0] || FALLBACK_UPCOMING_SESSIONS[0];

  const handlePrevUpcoming = () => {
    setUpcomingIndex(prev => (prev - 1 + upcomingSessions.length) % upcomingSessions.length);
  };

  const handleNextUpcoming = () => {
    setUpcomingIndex(prev => (prev + 1) % upcomingSessions.length);
  };

  const handlePastScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const currentScrollTop = e.currentTarget.scrollTop;
    setIsPastScrolledDown(currentScrollTop > 15);

    setIsPastScrolling(true);
    if (pastScrollTimeoutRef.current) {
      clearTimeout(pastScrollTimeoutRef.current);
    }
    pastScrollTimeoutRef.current = setTimeout(() => {
      setIsPastScrolling(false);
    }, 900);
  };

  const handleScrollToMorePast = () => {
    if (pastScrollContainerRef.current) {
      pastScrollContainerRef.current.scrollBy({ top: 120, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    return () => {
      if (pastScrollTimeoutRef.current) {
        clearTimeout(pastScrollTimeoutRef.current);
      }
    };
  }, []);

  const scrollToGravityFormMount = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }

    const target = 
      document.getElementById('booking-registration-section') ||
      document.getElementById('wp-gravity-form-mount') ||
      gravityFormMountRef.current;

    if (target) {
      // Calculate clearance offset taking sticky navigation headers and WP admin bar into account
      const headerOffset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      // 1. Primary smooth window scroll
      try {
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      } catch {
        window.scrollTo(0, Math.max(0, offsetPosition));
      }

      // 2. Element scrollIntoView fallback for nested containers on WordPress full canvas
      try {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } catch {
        target.scrollIntoView();
      }

      // 3. Update hash in address bar without abrupt jump
      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', '#booking-registration-section');
      } else {
        window.location.hash = 'booking-registration-section';
      }
    } else {
      window.location.hash = 'booking-registration-section';
    }
  };

  const scrollToCertificateVerification = (e?: React.MouseEvent) => {
  if (e) {
    e.preventDefault();
  }

  const target = document.getElementById('certificate-verification-section');

  if (target) {
    const headerOffset = 100;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    try {
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    } catch {
      window.scrollTo(0, Math.max(0, offsetPosition));
    }

    try {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } catch {
      target.scrollIntoView();
    }

    if (window.history && window.history.pushState) {
      window.history.pushState(null, '', '#certificate-verification-section');
    } else {
      window.location.hash = 'certificate-verification-section';
    }
  } else {
    window.location.hash = 'certificate-verification-section';
  }
};

useEffect(() => {
  const handleHashScroll = () => {
    if (
      typeof window !== 'undefined' &&
      window.location.hash === '#certificate-verification-section'
    ) {
      const timer = setTimeout(() => {
        scrollToCertificateVerification();
      }, 200);

      return () => clearTimeout(timer);
    }
  };

  handleHashScroll();
  window.addEventListener('hashchange', handleHashScroll);

  return () => window.removeEventListener('hashchange', handleHashScroll);
}, []);

  // Check URL hash on load or hashchange to handle direct deep links to the registration form card
  useEffect(() => {
    const handleHashScroll = () => {
      if (typeof window !== 'undefined' && (window.location.hash === '#booking-registration-section' || window.location.hash === '#wp-gravity-form-mount')) {
        const timer = setTimeout(() => {
          scrollToGravityFormMount();
        }, 200);
        return () => clearTimeout(timer);
      }
    };

    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

  const handleOpenBooking = (sessionToBook?: WordPressPDSession) => {
    const target = sessionToBook || currentUpcomingSession;
    setSelectedSession(target);
  };

  return (
    <div className="min-h-screen bg-[#F4F7FB] font-sans pt-[165px] sm:pt-[180px] lg:pt-[170px] xl:pt-[190px] 2xl:pt-[205px] pb-24 relative overflow-hidden select-none">
      
      {/* Subtle Ambient Background Watermark Text */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
        aria-hidden="true"
      >
        {/* Right Side Vertical Watermark Column (positioned directly below header ending, right-[120px] on mobile/tablet/desktop, shifted to right-[60px] on standard laptop lg screens) */}
        <div className="absolute top-[165px] sm:top-[180px] lg:top-[170px] xl:top-[190px] 2xl:top-[205px] right-[120px] lg:right-[60px] xl:right-[120px] w-0 h-0 overflow-visible origin-top-left transform rotate-90 text-[52px] sm:text-[64px] lg:text-[72px] xl:text-[80px] font-black tracking-widest text-[#042F61]/[0.07] uppercase leading-none whitespace-nowrap select-none">
          PROFESSIONAL DEVELOPMENT
        </div>
        {/* Ambient Gradient Halos */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,114,206,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(253,185,19,0.05)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ====================================================================
            MAIN CONTENT CONTAINER (SAME AS PAGE CANVAS)
            ==================================================================== */}
        <div className="relative">

          {/* ====================================================================
              TOP HERO SECTION (UPCOMING SESSIONS CAROUSEL)
              With Carved-Out Corner Notch and "Join Now" Button sitting outside
              the light card at the bottom right corner
              ==================================================================== */}
          <div className="relative mb-3.5 sm:mb-5">
            
            {/* The Light Hero Card with Carved-Out Inverted Corner at Bottom Right */}
            <div className="bg-gradient-to-br from-[#CDE4F9] via-[#E2F0FD] to-[#BEE0F8] border border-white/80 rounded-[26px] sm:rounded-[28px] p-6 sm:p-8 lg:p-12 relative overflow-hidden">
              
              {/* Organic Soft Ambient Blobs */}
              <div className="absolute -left-12 -top-12 w-80 sm:w-96 h-80 sm:h-96 bg-[#0072CE]/18 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute left-40 top-20 w-72 h-72 bg-[#FDB913]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#0072CE]/16 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                
                {/* Left Column: Facilitator Portrait */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
                  <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/3.4] flex items-center justify-center">
                    
                    {/* Organic Floating Blob SVG */}
                    <svg 
                      viewBox="0 0 200 200" 
                      className="absolute inset-0 w-full h-full text-[#0072CE]/15 fill-current transform -rotate-6 scale-110 pointer-events-none"
                    >
                      <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C86.9,14.6,81.3,29.1,72.9,41.9C64.6,54.6,53.5,65.6,40.3,72.7C27.1,79.8,11.8,83.1,-3.1,88.4C-17.9,93.8,-35.8,101.3,-50,95.5C-64.2,89.7,-74.7,70.8,-81.4,52.3C-88.1,33.8,-91,15.7,-88.9,-1.2C-86.8,-18.1,-79.7,-33.8,-69.8,-46.8C-59.9,-59.9,-47.2,-70.3,-33.4,-77.8C-19.6,-85.2,-9.8,-89.7,2.8,-94.5C15.4,-99.4,30.7,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                    </svg>
                    
                    <div className="relative w-full h-full rounded-[24px] overflow-hidden border-2 border-white/80 shadow-[0_15px_35px_rgba(4,47,97,0.12)] bg-gradient-to-b from-white/90 via-sky-50 to-[#EAF3FA]">
                      <img
                        src="https://storage.googleapis.com/chelsongordon/com.chelsongordon/images/our-people/learning_2.webp"
                        alt="Professional Development Facilitator"
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                        loading="eager"
                      />
                      
                      {/* Floating Pill: Live Interactive Masterclass */}
                      <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-white/95 backdrop-blur-md py-2 px-3.5 rounded-xl border border-slate-200/80 shadow-md flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0072CE] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0072CE]"></span>
                          </span>
                          <span className="text-[11px] font-bold text-[#042F61] uppercase tracking-wider">Live & Interactive</span>
                        </div>
                        <span className="text-[11px] font-bold text-[#0072CE] bg-[#0072CE]/10 px-2 py-0.5 rounded-md">VET Accredited</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Narrative & Carousel Details */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6 lg:space-y-8 sm:pr-8 lg:pr-14">
                  
                  <div className="space-y-4">
                    {/* Header Row: Category Pill Tag + Carousel Navigation */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 border border-[#0072CE]/20 text-[#0072CE] text-xs font-bold tracking-wider uppercase shadow-xs">
                        <span className="inline-flex items-center text-[#0072CE]">
                          <Calendar className="w-3.5 h-3.5" />
                          <ArrowRight className="w-2.5 h-2.5 -ml-0.5" />
                        </span>
                        <span>UPCOMING SESSIONS</span>
                      </div>

                      {/* Carousel Arrow & Dot Navigation Controls */}
                      {upcomingSessions.length > 1 && (
                        <div className="flex items-center gap-2">
                          {/* Session Count Div moved to the left of carousel navigation arrow pill section */}
                          <div className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-slate-200/80 shadow-xs text-[#0072CE] text-xs font-bold font-sans">
                            {upcomingIndex + 1} / {upcomingSessions.length}
                          </div>

                          <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full border border-slate-200/80 shadow-xs">
                            <button
                              onClick={handlePrevUpcoming}
                              aria-label="Previous upcoming session"
                              className="w-7 h-7 rounded-full flex items-center justify-center text-[#042F61] hover:bg-[#0072CE] hover:text-white transition-colors cursor-pointer"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>
                            
                            <div className="flex items-center gap-1 px-1">
                              {upcomingSessions.map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => setUpcomingIndex(idx)}
                                  aria-label={`Go to upcoming session slide ${idx + 1}`}
                                  className={`transition-all rounded-full cursor-pointer ${
                                    idx === upcomingIndex 
                                      ? 'w-4 h-2 bg-[#0072CE]' 
                                      : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                                  }`}
                                />
                              ))}
                            </div>

                            <button
                              onClick={handleNextUpcoming}
                              aria-label="Next upcoming session"
                              className="w-7 h-7 rounded-full flex items-center justify-center text-[#042F61] hover:bg-[#0072CE] hover:text-white transition-colors cursor-pointer"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Main Display Headline (Fetched Topic) */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[46px] font-black text-[#042F61] tracking-tight leading-[1.18] font-sans transition-all">
                      {decodeHtmlEntities(currentUpcomingSession.title)}
                    </h1>

                    {/* Body Subtitle / Description */}
                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-2xl">
                      {currentUpcomingSession.description 
                        ? decodeHtmlEntities(currentUpcomingSession.description)
                        : "Join an interactive professional development masterclass where compliance rigour and practical training unite to build confidence, resilience, and fair assessment outcomes in line with ASQA Standards."}
                    </p>
                  </div>

                </div>

              </div>

              {/* Key Session Value Highlights: Mode, Date, Time (Full width below image section + para section, ending just to the left of the carved-out SVG notch) */}
              <div className="relative z-10 mt-6 sm:mt-7 w-full sm:max-w-[calc(100%-245px)] lg:max-w-[calc(100%-230px)]">
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <div className="bg-white/85 backdrop-blur-sm rounded-xl p-2.5 sm:p-3 border border-slate-200/70 shadow-xs">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Mode</span>
                    <span className="text-xs sm:text-[13px] md:text-sm font-bold text-[#042F61] flex items-center gap-1.5 mt-0.5">
                      <Globe className="w-3.5 h-3.5 text-[#0072CE] shrink-0" />
                      <span className="truncate">Online Session</span>
                    </span>
                  </div>
                  <div className="bg-white/85 backdrop-blur-sm rounded-xl p-2.5 sm:p-3 border border-slate-200/70 shadow-xs">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Session Date</span>
                    <span className="text-xs sm:text-[13px] md:text-sm font-bold text-[#042F61] flex items-center gap-1.5 mt-0.5">
                      <Calendar className="w-3.5 h-3.5 text-[#0072CE] shrink-0" />
                      <span className="truncate">{formatDisplayDate(currentUpcomingSession.date)}</span>
                    </span>
                  </div>
                  <div className="bg-white/85 backdrop-blur-sm rounded-xl p-2.5 border border-slate-200/70 shadow-xs">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Session Time</span>
                    <span className="text-xs sm:text-[13px] md:text-sm font-bold text-[#042F61] flex items-center gap-1.5 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-[#0072CE] shrink-0" />
                      <span className="truncate">{currentUpcomingSession.time || '04:00 PM AEST'}</span>
                    </span>
                  </div>
                </div>

                {/* Mobile-only button placement (< sm screens) */}
                <div className="sm:hidden pt-3 mt-3 border-t border-slate-300/40 flex justify-end">
                  <a
                    href="#wp-gravity-form-mount"
                    onClick={scrollToGravityFormMount}
                    className="w-full bg-[#FDB913] hover:bg-[#042F61] text-[#042F61] hover:text-[#FDB913] text-sm font-black tracking-wider uppercase py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer select-none"
                  >
                    <span>Join Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* ================================================================
                CARVED-OUT BOTTOM-RIGHT CORNER NOTCH (Desktop/Tablet: sm and up)
                Precisely carved corner matching page canvas (#F4F7FB) with no border
                ================================================================ */}
            <svg 
              className="hidden sm:block absolute -bottom-px -right-px w-[265px] h-[101px] pointer-events-none z-10" 
              viewBox="0 0 264 100" 
              preserveAspectRatio="none"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Cutout Polygon matching page canvas with no border */}
              <path 
                d="M 264,0 A 24,24 0 0,1 240,24 L 48,24 A 24,24 0 0,0 24,48 L 24,76 A 24,24 0 0,1 0,100 L 264,100 Z" 
                fill="#F4F7FB" 
              />
            </svg>

            {/* ================================================================
                "JOIN NOW" BUTTON SITTING OUTSIDE THE WHITE CARD IN THE CARVED CORNER
                ================================================================ */}
            <div className="hidden sm:flex absolute bottom-3.5 right-[1px] z-20">
              <a
                href="#wp-gravity-form-mount"
                onClick={scrollToGravityFormMount}
                className="relative group overflow-hidden bg-[#FDB913] hover:bg-[#0072CE] text-[#042F61] hover:text-white text-sm font-black tracking-wider uppercase px-[55px] py-3.5 rounded-full shadow-lg border border-[#FDB913]/60 hover:border-[#0072CE] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer select-none"
              >
                {/* Ambient Luminous Light Sweep on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none -skew-x-12" />
                
                <span className="relative z-10 whitespace-nowrap">JOIN NOW</span>
                <ArrowRight className="w-4.5 h-4.5 relative z-10 transition-transform duration-300 group-hover:translate-x-1 stroke-[2.5]" />
              </a>
            </div>

          </div>

          {/* ====================================================================
              BOTTOM 2-CARD BENTO GRID
              (Left: Our Community, Right: Previous Sessions Carousel with Engagement Graph)
              ==================================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-5">
            
            {/* ------------------------------------------------------------------
                LEFT COLUMN (4 columns): 2 Vertical Cards
                1st: "Our Community"
                2nd: "Give Feedback" with button to https://chelsongordon.com/feedback/
                ------------------------------------------------------------------ */}
            <div className="lg:col-span-4 flex flex-col gap-3.5 sm:gap-5 justify-between">
              
              {/* 1st: Our Community Card */}
              <div className="bg-[#E1EFFB] border border-[#B8DCF8] rounded-[24px] p-5 sm:p-6 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-shadow flex-1">
                <div>
                  {/* Card Header with Multiple Users/People Icon (30px) */}
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <span className="text-[11px] font-bold text-[#0072CE] uppercase tracking-widest block">Our</span>
                      <h2 className="text-2xl sm:text-[24px] font-black text-[#042F61] tracking-tight leading-tight mt-0.5">
                        Community
                      </h2>
                    </div>

                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#042F61] shrink-0">
                      <Users className="w-[30px] h-[30px] text-[#042F61]" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Metric Rows with Circular Badges - gap of ~8px from header */}
                  <div className="space-y-3 pt-1">
                    {/* Metric 1 */}
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-white shadow-xs flex items-center justify-center text-[#042F61] shrink-0">
                        <Users className="w-4 h-4 text-[#042F61]" />
                      </div>
                      <div>
                        <span className="text-sm sm:text-base font-black text-[#042F61] block leading-tight">1,200+ Active</span>
                        <span className="text-[11px] font-semibold text-slate-600 block">Educators & Assessors</span>
                      </div>
                    </div>

                    {/* Metric 2 */}
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-white shadow-xs flex items-center justify-center text-[#042F61] shrink-0">
                        <ShieldCheck className="w-4 h-4 text-[#042F61]" />
                      </div>
                      <div>
                        <span className="text-sm sm:text-base font-black text-[#042F61] block leading-tight">100% ASQA</span>
                        <span className="text-[11px] font-semibold text-slate-600 block">Compliant Frameworks</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ask us Anything Button - same style and position as Give Feedback */}
                <div className="pt-4 sm:pt-5">
                  <a
                    href="mailto:professionaldevelopment@chelsongordon.com?subject=Enquiry%20from%20Community%20-%20Ask%20us%20Anything"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#042F61] hover:bg-[#0072CE] text-white text-xs font-black uppercase tracking-wider px-5 py-3 rounded-xl shadow-xs transition-colors cursor-pointer group select-none"
                  >
                    <span>Ask us Anything</span>
                    <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
                  </a>
                </div>
              </div>

              {/* 2nd: Give Feedback Card */}
              <div className="bg-[#E1EFFB] border border-[#B8DCF8] rounded-[24px] p-5 sm:p-6 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <span className="text-[11px] font-bold text-[#0072CE] uppercase tracking-widest block">Share Your Experience</span>
                      <h2 className="text-2xl sm:text-[24px] font-black text-[#042F61] tracking-tight leading-tight mt-0.5">
                        Give Feedback
                      </h2>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-[#042F61] shrink-0">
                      <MessageSquare className="w-4 h-4 text-[#042F61]" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2 mb-4">
                    Help us refine future vocational masterclasses and topic compliance coverage.
                  </p>
                </div>

                <a
                  href="https://chelsongordon.com/feedback/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#042F61] hover:bg-[#0072CE] text-white text-xs font-black uppercase tracking-wider px-5 py-3 rounded-xl shadow-xs transition-colors cursor-pointer group select-none"
                >
                  <span>Give Feedback</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

            </div>

            {/* ------------------------------------------------------------------
                CARD 2 (Right, 8 columns): "Previous Sessions" SCROLLABLE LIST
                Connected to pd-sessions endpoint (< current date)
                Matching homepage PD announcement scrollable section behavior
                ------------------------------------------------------------------ */}
            <div className="lg:col-span-8 bg-gradient-to-br from-[#123E6E] via-[#1A4E88] to-[#225E9F] text-white border border-white/15 rounded-[24px] p-5 sm:p-6 md:p-7 flex flex-col justify-start relative overflow-hidden shadow-md">
              
              {/* Ambient Shine Highlights */}
              <div 
                className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/35 via-50% to-transparent pointer-events-none" 
                aria-hidden="true" 
              />
              <div 
                className="absolute -top-14 -right-14 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" 
                aria-hidden="true" 
              />

              {/* Scoped CSS for active-only scrollbar with stable gutter */}
              <style>{`
                .past-pd-scroll-area {
                  scrollbar-gutter: stable;
                }
                .past-pd-scroll-area::-webkit-scrollbar {
                  width: 5px;
                }
                .past-pd-scroll-area::-webkit-scrollbar-track {
                  background: transparent;
                }
                .past-pd-scroll-area::-webkit-scrollbar-thumb {
                  background-color: transparent;
                  border-radius: 9999px;
                  transition: background-color 0.25s ease;
                }
                .past-pd-scroll-area.is-scrolling::-webkit-scrollbar-thumb {
                  background-color: rgba(255, 255, 255, 0.4);
                }
              `}</style>

              {/* Card Header (aligned at top, displaying 50+ Completed Masterclasses) */}
              <div className="flex items-center justify-between pb-3.5 sm:pb-4 border-b border-white/15 mb-3 sm:mb-3.5 relative z-10">
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white shrink-0 shadow-inner">
                    <History className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-sky-200 uppercase tracking-wider block">
                      50+ Completed Masterclasses
                    </span>
                    <h2 className="text-2xl sm:text-[26px] font-black text-white tracking-tight leading-tight mt-0.5">
                      Previous Sessions
                    </h2>
                  </div>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/15 text-white border border-white/25 shadow-2xs font-sans">
                  {pastSessions.length} Topics
                </span>
              </div>

              {/* Scrollable list of previous session topics with auto-hiding scrollbar & stable gutter */}
              <div 
                ref={pastScrollContainerRef}
                onScroll={handlePastScroll}
                className={`overflow-y-auto max-h-[310px] sm:max-h-[340px] lg:max-h-[365px] pr-1.5 flex flex-col gap-1.5 sm:gap-2 past-pd-scroll-area relative z-10 ${
                  isPastScrolling ? 'is-scrolling' : ''
                }`}
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: isPastScrolling ? 'rgba(255, 255, 255, 0.4) transparent' : 'transparent transparent',
                }}
                tabIndex={0}
                role="region"
                aria-label="Scrollable list of previous session topics"
              >
                {/* First 3 sessions shown upfront so UI hint line is immediately visible on section load */}
                {(pastSessions.length > 3 ? pastSessions.slice(0, 3) : pastSessions).map((session, index) => {
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
                      className="px-2.5 py-0 rounded-xl bg-white/10 border border-white/15 hover:border-white/40 hover:bg-white/20 transition-all duration-200 group flex items-center w-full cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-white/40 select-none"
                    >
                      {/* Topic Number */}
                      <div className="w-[16%] sm:w-[13%] aspect-square flex items-center justify-center shrink-0 -translate-x-[4px]">
                        <span className="text-lg sm:text-xl font-black text-[#FDB913] font-sans select-none tracking-tight">
                          {index + 1}
                        </span>
                      </div>

                      {/* Topic Details */}
                      <div className="w-[84%] sm:w-[87%] flex-1 pl-2 sm:pl-3 pr-2 py-0.5 sm:py-1 -translate-x-[4px]">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] sm:text-[11px] font-semibold text-sky-200 flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-sky-300" />
                            {formatDisplayDate(session.date)}
                          </span>
                          {session.time && (
                            <span className="text-[10px] text-sky-200/80">• {session.time}</span>
                          )}
                        </div>
                        {renderTopicTitle(decodedTitle)}
                      </div>
                    </div>
                  );
                })}

                {/* Clean UI line indicator: guaranteed visible on section load right beneath row 3 */}
                {pastSessions.length > 3 && (
                  <AnimatePresence initial={false}>
                    {!isPastScrolledDown && (
                      <motion.div
                        key="scroll-more-past-indicator"
                        initial={{ opacity: 0, height: 0, marginTop: -6 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 0 }}
                        exit={{ opacity: 0, height: 0, marginTop: -6 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                        className="overflow-hidden w-full shrink-0"
                      >
                        <div
                          onClick={handleScrollToMorePast}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              handleScrollToMorePast();
                            }
                          }}
                          role="button"
                          tabIndex={0}
                          aria-label={`Scroll to view ${pastSessions.length - 3} more sessions`}
                          className="w-full py-1.5 px-2 flex items-center justify-center gap-2 text-white hover:text-[#FDB913] transition-colors cursor-pointer select-none group focus:outline-hidden"
                        >
                          <ChevronDown className="w-4 h-4 shrink-0 text-white group-hover:text-[#FDB913] group-hover:translate-y-0.5 transition-transform duration-200" />
                          <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#FDB913] transition-colors tracking-tight whitespace-nowrap">
                            Scroll to view more sessions
                          </span>
                          <span className="inline-flex items-center justify-center px-2 py-0.5 text-[11px] font-bold rounded-full bg-white/15 text-white border border-white/20 group-hover:bg-white/25 group-hover:text-[#FDB913] transition-colors whitespace-nowrap shrink-0">
                            +{pastSessions.length - 3}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {/* Remaining sessions beyond row 3 */}
                {pastSessions.length > 3 && pastSessions.slice(3).map((session, index) => {
                  const decodedTitle = decodeHtmlEntities(session.title);
                  const actualNumber = index + 4;

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
                      className="px-2.5 py-0 rounded-xl bg-white/10 border border-white/15 hover:border-white/40 hover:bg-white/20 transition-all duration-200 group flex items-center w-full cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-white/40 select-none"
                    >
                      {/* Topic Number */}
                      <div className="w-[16%] sm:w-[13%] aspect-square flex items-center justify-center shrink-0 -translate-x-[4px]">
                        <span className="text-lg sm:text-xl font-black text-[#FDB913] font-sans select-none tracking-tight">
                          {actualNumber}
                        </span>
                      </div>

                      {/* Topic Details */}
                      <div className="w-[84%] sm:w-[87%] flex-1 pl-2 sm:pl-3 pr-2 py-0.5 sm:py-1 -translate-x-[4px]">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] sm:text-[11px] font-semibold text-sky-200 flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-sky-300" />
                            {formatDisplayDate(session.date)}
                          </span>
                          {session.time && (
                            <span className="text-[10px] text-sky-200/80">• {session.time}</span>
                          )}
                        </div>
                        {renderTopicTitle(decodedTitle)}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>

        {/* ====================================================================
            WORDPRESS GRAVITY FORM MOUNT SECTION
            Designated mount container for WordPress Gravity Forms
            ==================================================================== */}
        <div 
          id="booking-registration-section"
          className="mt-8 sm:mt-12 bg-white rounded-[26px] sm:rounded-[28px] p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-sm relative overflow-hidden scroll-mt-28 sm:scroll-mt-36"
        >
          {/* Card Header on Top of Gravity Form Mount */}
          <div className="mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-slate-100 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0072CE]/10 text-[#0072CE] text-xs font-bold tracking-wider uppercase mb-3">
              <CalendarPlus className="w-3.5 h-3.5 text-[#0072CE]" />
              <span>Session Registration</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#042F61] tracking-tight leading-tight">
              Book Your Professional Development Session
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-2 leading-relaxed">
              Complete the registration form below to secure your seat for upcoming masterclasses and receive direct session access details.
            </p>
          </div>

          <div 
            id="wp-gravity-form-mount" 
            ref={gravityFormMountRef}
            className="gform_wrapper gravity-form-mount-container w-full min-h-[160px] flex items-center justify-center scroll-mt-28 sm:scroll-mt-36"
            data-form-type="gravity-forms"
            data-form-name="pd-session-registration"
          />
        </div>

        {/* ====================================================================
            CERTIFICATE VERIFICATION SECTION
            Direct WordPress REST API Integration: /wp-json/certificates/v1/verify
            ==================================================================== */}
        <CertificateVerificationCard />

      </div>

      {/* ====================================================================
          SESSION DETAIL & BOOKING MODAL
          ==================================================================== */}
      <AnimatePresence>
        {selectedSession && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={() => setSelectedSession(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSession(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0072CE]/10 text-[#0072CE] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#FDB913]" />
                  <span>About this Session</span>
                </div>

                <h3 className="text-2xl font-black text-[#042F61] tracking-tight leading-snug">
                  {selectedSession.title}
                </h3>

                {/* 50/50 Date & Time Row */}
                <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#0072CE]/10 flex items-center justify-center text-[#0072CE]">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#042F61] block tracking-wider">Session Date</span>
                      <span className="text-sm font-semibold text-slate-800">{selectedSession.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#0072CE]/10 flex items-center justify-center text-[#0072CE]">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#042F61] block tracking-wider">Session Time</span>
                      <span className="text-sm font-semibold text-slate-800">{selectedSession.time}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold text-[#042F61] tracking-wider mb-2">Description</h4>
                  {(() => {
                    const rawDesc = selectedSession.description ? selectedSession.description.replace(/<[^>]*>?/gm, '').trim() : '';
                    const hasDesc = rawDesc.length > 0;

                    if (hasDesc) {
                      return (
                        <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                          {decodeHtmlEntities(selectedSession.description)}
                        </p>
                      );
                    }

                    return (
                      <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-slate-600 flex items-start gap-3">
                        <div className="w-8 h-8 rounded-xl bg-[#FDB913]/15 flex items-center justify-center shrink-0 mt-0.5">
                          <Sparkles className="w-4 h-4 text-[#FDB913]" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-[#042F61] uppercase tracking-wider block mb-1">
                            Description Pending Update
                          </span>
                          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                            A detailed session syllabus, learning outcomes, and recording archives for this masterclass will be updated shortly. You can reserve your seat or inquiry below.
                          </p>
                        </div>
                      </div>
                    );
                  })()}
                </div>

                <div className="pt-4 border-t border-slate-100 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setSelectedSession(null)}
                    className="w-full sm:w-auto border border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-700 font-bold text-sm py-3 px-6 rounded-xl transition-colors cursor-pointer text-center"
                  >
                    Dismiss
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default BookPDSessionPage;
