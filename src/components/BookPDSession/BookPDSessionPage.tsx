import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  Users, 
  Play, 
  ShieldCheck, 
  Sparkles, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Award, 
  X, 
  ExternalLink, 
  ChevronRight, 
  ChevronLeft,
  TrendingUp,
  BookOpen, 
  GraduationCap,
  Send,
  Building,
  User,
  Mail,
  Phone,
  FileText
} from 'lucide-react';
import { WordPressPDSession } from '../PDAnnouncement';

/**
 * Custom Mail Arrow icon representing an outgoing email message (Envelope + Arrow Up Right)
 */
export const MailArrowUpRight: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    aria-hidden="true"
  >
    {/* Envelope Body */}
    <rect width="15" height="11" x="2" y="8" rx="2" />
    <path d="m2 10 7.5 5 7.5-5" />
    {/* Arrow pointing up and to the right */}
    <path d="M15 3h6v6" />
    <path d="m14 10 7-7" />
  </svg>
);

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
  }
];

// Dummy comparative engagement metrics per past session
interface PastSessionComparisonData {
  thisAttendance: number;
  prevAttendance: number;
  growthPct: string;
  engagementRate: string;
  satisfactionRate: string;
  qaInteractions: number;
  thisCurve: number[];
  prevCurve: number[];
}

const PAST_COMPARISONS: PastSessionComparisonData[] = [
  {
    thisAttendance: 148,
    prevAttendance: 124,
    growthPct: '+19.4%',
    engagementRate: '97.4%',
    satisfactionRate: '98.6%',
    qaInteractions: 84,
    thisCurve: [62, 118, 142, 148, 145, 142],
    prevCurve: [45, 92, 118, 124, 120, 116]
  },
  {
    thisAttendance: 136,
    prevAttendance: 112,
    growthPct: '+21.4%',
    engagementRate: '96.2%',
    satisfactionRate: '97.8%',
    qaInteractions: 76,
    thisCurve: [55, 104, 130, 136, 134, 131],
    prevCurve: [42, 85, 108, 112, 109, 105]
  },
  {
    thisAttendance: 155,
    prevAttendance: 128,
    growthPct: '+21.1%',
    engagementRate: '98.1%',
    satisfactionRate: '99.0%',
    qaInteractions: 92,
    thisCurve: [68, 122, 148, 155, 153, 150],
    prevCurve: [50, 98, 122, 128, 125, 120]
  },
  {
    thisAttendance: 128,
    prevAttendance: 105,
    growthPct: '+21.9%',
    engagementRate: '95.8%',
    satisfactionRate: '97.2%',
    qaInteractions: 68,
    thisCurve: [48, 96, 122, 128, 126, 122],
    prevCurve: [38, 80, 100, 105, 102, 98]
  }
];

export const BookPDSessionPage: React.FC = () => {
  const [allSessions, setAllSessions] = useState<WordPressPDSession[]>([]);
  const [upcomingSessions, setUpcomingSessions] = useState<WordPressPDSession[]>(FALLBACK_UPCOMING_SESSIONS);
  const [pastSessions, setPastSessions] = useState<WordPressPDSession[]>(FALLBACK_PAST_SESSIONS);
  
  // Carousel Indices
  const [upcomingIndex, setUpcomingIndex] = useState(0);
  const [pastIndex, setPastIndex] = useState(0);

  const [selectedSession, setSelectedSession] = useState<WordPressPDSession | null>(null);
  
  // State for the default Gravity Form fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    jobTitle: '',
    attendeesCount: '1',
    sessionChoice: FALLBACK_UPCOMING_SESSIONS[0].title,
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
              setFormData(prev => ({ ...prev, sessionChoice: upcoming[0].title }));
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

    // Dispatch event to inform any WordPress Gravity Form scripts that mount point is ready
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('gform_mount_ready', {
        detail: { containerId: 'wp-gravity-form-mount' }
      }));
    }

    return () => {
      isMounted = false;
      document.title = originalTitle;
    };
  }, []);

  const currentUpcomingSession = upcomingSessions[upcomingIndex] || upcomingSessions[0] || FALLBACK_UPCOMING_SESSIONS[0];
  const primarySession = currentUpcomingSession;
  const currentPastSession = pastSessions[pastIndex] || pastSessions[0] || FALLBACK_PAST_SESSIONS[0];
  const currentComparison = PAST_COMPARISONS[pastIndex % PAST_COMPARISONS.length];

  const handlePrevUpcoming = () => {
    setUpcomingIndex(prev => (prev - 1 + upcomingSessions.length) % upcomingSessions.length);
  };

  const handleNextUpcoming = () => {
    setUpcomingIndex(prev => (prev + 1) % upcomingSessions.length);
  };

  const handlePrevPast = () => {
    setPastIndex(prev => (prev - 1 + pastSessions.length) % pastSessions.length);
  };

  const handleNextPast = () => {
    setPastIndex(prev => (prev + 1) % pastSessions.length);
  };

  const handleOpenBooking = (sessionToBook?: WordPressPDSession) => {
    const target = sessionToBook || currentUpcomingSession;
    setSelectedSession(target);
  };

  const handleDirectStripe = (url?: string) => {
    const targetUrl = url || currentUpcomingSession.url || "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e";
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#F4F7FB] font-sans pt-[165px] sm:pt-[180px] lg:pt-[170px] xl:pt-[190px] 2xl:pt-[205px] pb-24 relative overflow-hidden select-none">
      
      {/* Subtle Ambient Background Watermark Text */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
        aria-hidden="true"
      >
        {/* Top Header Watermark */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center whitespace-nowrap text-[120px] sm:text-[170px] lg:text-[220px] font-black tracking-widest text-[#042F61]/[0.025] uppercase leading-none select-none">
          CHELSON GORDON
        </div>
        {/* Right Side Vertical Watermark Column */}
        <div className="absolute top-1/3 -right-20 transform rotate-90 text-[100px] sm:text-[140px] font-black tracking-widest text-[#0072CE]/[0.02] uppercase leading-none whitespace-nowrap select-none">
          PROFESSIONAL DEVELOPMENT
        </div>
        {/* Bottom Ambient Watermark */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-full text-center whitespace-nowrap text-[120px] sm:text-[170px] lg:text-[220px] font-black tracking-widest text-[#042F61]/[0.02] uppercase leading-none select-none">
          CHELSON GORDON
        </div>
        {/* Ambient Gradient Halos */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,114,206,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(253,185,19,0.05)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ====================================================================
            OUTER BENTO FRAME CONTAINER
            ==================================================================== */}
        <div className="bg-transparent border border-[#042F61]/80 rounded-[32px] sm:rounded-[36px] p-3.5 sm:p-5 md:p-6 shadow-[0_25px_60px_-15px_rgba(4,47,97,0.35)] relative overflow-hidden">
          
          {/* Top Rim Sheen */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#0072CE]/50 via-sky-300/40 to-transparent pointer-events-none" />

          {/* ====================================================================
              TOP HERO SECTION (UPCOMING SESSIONS CAROUSEL)
              With Carved-Out Corner Notch and "Join Now" Button sitting outside
              the light card at the bottom right corner
              ==================================================================== */}
          <div className="relative mb-3.5 sm:mb-5">
            
            {/* The Light Hero Card with Carved-Out Inverted Corner at Bottom Right */}
            <div className="bg-gradient-to-br from-[#EAF3FA] via-[#F4F9FD] to-[#DFEDFB] border border-white/70 rounded-[26px] sm:rounded-[28px] p-6 sm:p-8 lg:p-12 relative overflow-hidden shadow-sm">
              
              {/* Organic Soft Ambient Blobs */}
              <div className="absolute -left-12 -top-12 w-80 sm:w-96 h-80 sm:h-96 bg-[#0072CE]/12 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute left-40 top-20 w-72 h-72 bg-[#FDB913]/15 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#0072CE]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                
                {/* Left Column: Facilitator Portrait */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
                  <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] flex items-center justify-center">
                    
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
                        <Sparkles className="w-3.5 h-3.5 text-[#FDB913]" />
                        <span>Upcoming Masterclass</span>
                        {upcomingSessions.length > 1 && (
                          <span className="bg-[#0072CE]/10 text-[#0072CE] text-[10px] px-2 py-0.5 rounded-full font-bold ml-1">
                            {upcomingIndex + 1} / {upcomingSessions.length}
                          </span>
                        )}
                      </div>

                      {/* Carousel Arrow & Dot Navigation Controls */}
                      {upcomingSessions.length > 1 && (
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

                  {/* Key Session Value Highlights: Format, Date, Time */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-slate-200/60 shadow-xs">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Format</span>
                      <span className="text-xs sm:text-sm font-bold text-[#042F61] flex items-center gap-1.5 mt-0.5">
                        <GraduationCap className="w-4 h-4 text-[#0072CE]" />
                        Live Masterclass
                      </span>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-slate-200/60 shadow-xs">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Session Date</span>
                      <span className="text-xs sm:text-sm font-bold text-[#042F61] flex items-center gap-1.5 mt-0.5">
                        <Calendar className="w-4 h-4 text-[#0072CE]" />
                        {formatDisplayDate(currentUpcomingSession.date)}
                      </span>
                    </div>
                    <div className="col-span-2 sm:col-span-1 bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-slate-200/60 shadow-xs">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Session Time</span>
                      <span className="text-xs sm:text-sm font-bold text-[#042F61] flex items-center gap-1.5 mt-0.5">
                        <Clock className="w-4 h-4 text-[#0072CE]" />
                        {currentUpcomingSession.time || '04:00 PM AEST'}
                      </span>
                    </div>
                  </div>

                  {/* Mobile-only button placement (< sm screens) */}
                  <div className="sm:hidden pt-3 border-t border-slate-300/40 flex justify-end">
                    <button
                      onClick={() => handleOpenBooking(currentUpcomingSession)}
                      className="w-full bg-[#FDB913] hover:bg-[#042F61] text-[#042F61] hover:text-[#FDB913] text-sm font-black tracking-wider uppercase py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Join Now</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </div>

            </div>

            {/* ================================================================
                CARVED-OUT BOTTOM-RIGHT CORNER NOTCH (Desktop/Tablet: sm and up)
                Precisely carved corner with C1-continuous concave fillets
                Seamlessly filling with #F4F7FB to match the page background
                ================================================================ */}
            <svg 
              className="hidden sm:block absolute bottom-0 right-0 w-[264px] h-[100px] pointer-events-none z-10" 
              viewBox="0 0 264 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Cutout Polygon matching page background */}
              <path 
                d="M 264,0 A 24,24 0 0,1 240,24 L 48,24 A 24,24 0 0,0 24,48 L 24,76 A 24,24 0 0,1 0,100 L 264,100 Z" 
                fill="#F4F7FB" 
              />
              {/* Continuous Matching Border Stroke along the Carved Contour */}
              <path 
                d="M 264,0 A 24,24 0 0,1 240,24 L 48,24 A 24,24 0 0,0 24,48 L 24,76 A 24,24 0 0,1 0,100" 
                stroke="rgba(255, 255, 255, 0.85)" 
                strokeWidth="1.5" 
                fill="none" 
              />
            </svg>

            {/* ================================================================
                "JOIN NOW" BUTTON SITTING OUTSIDE THE WHITE CARD IN THE CARVED CORNER
                ================================================================ */}
            <div className="hidden sm:flex absolute bottom-3.5 right-3.5 z-20">
              <button
                onClick={() => handleOpenBooking(currentUpcomingSession)}
                className="relative group overflow-hidden bg-[#FDB913] hover:bg-[#0072CE] text-[#042F61] hover:text-white text-sm font-black tracking-wider uppercase px-8 py-3.5 rounded-full shadow-lg border border-[#FDB913]/60 hover:border-[#0072CE] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer select-none"
              >
                {/* Ambient Luminous Light Sweep on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none -skew-x-12" />
                
                <span className="relative z-10 whitespace-nowrap">JOIN NOW</span>
                <ArrowUpRight className="w-4.5 h-4.5 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[2.5]" />
              </button>
            </div>

          </div>

          {/* ====================================================================
              BOTTOM 2-CARD BENTO GRID
              (Left: Our Community, Right: Previous Sessions Carousel with Engagement Graph)
              ==================================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-5">
            
            {/* ------------------------------------------------------------------
                CARD 1 (Left, 4 columns): "Our Community"
                Connected to mailto:professionaldevelopment@chelsongordon.com
                with Email Arrow Icon
                ------------------------------------------------------------------ */}
            <div className="lg:col-span-4 bg-[#E1EFFB] border border-[#B8DCF8] rounded-[24px] p-6 sm:p-7 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-shadow">
              
              {/* Card Header with Email Arrow Link */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="text-[11px] font-bold text-[#0072CE] uppercase tracking-widest block">Our</span>
                  <h2 className="text-2xl sm:text-[26px] font-black text-[#042F61] tracking-tight leading-tight mt-0.5">
                    Community
                  </h2>
                </div>

                <a
                  href="mailto:professionaldevelopment@chelsongordon.com"
                  className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#042F61] hover:bg-[#FDB913] hover:text-[#042F61] hover:scale-105 active:scale-95 transition-all cursor-pointer group"
                  aria-label="Email Our Community: professionaldevelopment@chelsongordon.com"
                  title="Email our community team"
                >
                  <MailArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* 3 Metric Rows with Circular Badges */}
              <div className="space-y-4">
                
                {/* Metric 1 */}
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-white shadow-xs flex items-center justify-center text-[#042F61] shrink-0">
                    <Users className="w-5 h-5 text-[#042F61]" />
                  </div>
                  <div>
                    <span className="text-base font-black text-[#042F61] block leading-snug">1,200+ Active</span>
                    <span className="text-xs font-semibold text-slate-600 block">Educators & Assessors</span>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-white shadow-xs flex items-center justify-center text-[#042F61] shrink-0">
                    <Play className="w-5 h-5 text-[#042F61] fill-[#042F61]/10" />
                  </div>
                  <div>
                    <span className="text-base font-black text-[#042F61] block leading-snug">350+ Hours</span>
                    <span className="text-xs font-semibold text-slate-600 block">Of PD Masterclasses</span>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-white shadow-xs flex items-center justify-center text-[#042F61] shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#042F61]" />
                  </div>
                  <div>
                    <span className="text-base font-black text-[#042F61] block leading-snug">100% ASQA</span>
                    <span className="text-xs font-semibold text-slate-600 block">Compliant Frameworks</span>
                  </div>
                </div>

              </div>

            </div>

            {/* ------------------------------------------------------------------
                CARD 2 (Right, 8 columns): "Previous Sessions" CAROUSEL
                Connected to pd-sessions endpoint (< current date)
                Shows Session Topic and Engagement Graph comparing attendance with previous session
                ------------------------------------------------------------------ */}
            <div className="lg:col-span-8 bg-gradient-to-br from-[#042F61] via-[#073972] to-[#005BA4] text-white border border-white/10 rounded-[24px] p-6 sm:p-7 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-md">
              
              {/* Card Header with Carousel Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 relative z-10">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-sky-200 uppercase tracking-widest block">Past Cohorts Review</span>
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FDB913]"></span>
                    <span className="text-[11px] font-semibold text-sky-300">
                      {pastSessions.length}+ Completed Masterclasses
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-[28px] font-black text-white tracking-tight leading-tight mt-0.5">
                    Previous Sessions
                  </h2>
                </div>

                {/* Carousel Navigation Buttons & Counter */}
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-bold text-sky-200/90 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                    Session {pastIndex + 1} of {pastSessions.length}
                  </span>
                  <div className="flex items-center gap-1 bg-white/10 p-1 rounded-full border border-white/15">
                    <button
                      onClick={handlePrevPast}
                      aria-label="Previous completed session"
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white hover:bg-[#FDB913] hover:text-[#042F61] transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNextPast}
                      aria-label="Next completed session"
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white hover:bg-[#FDB913] hover:text-[#042F61] transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Past Session Topic & Engagement Graph Carousel Slide */}
              <div className="space-y-4 relative z-10">
                
                {/* Topic Headline & Completion Timestamp */}
                <div className="bg-white/5 backdrop-blur-xs rounded-2xl p-4 sm:p-5 border border-white/10">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold text-[#FDB913] uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Completed Masterclass Topic
                    </span>
                    <span className="text-xs font-semibold text-sky-200 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-sky-300" />
                      {formatDisplayDate(currentPastSession.date)}
                      {currentPastSession.time && (
                        <span className="text-sky-300/80">• {currentPastSession.time}</span>
                      )}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-white tracking-tight leading-snug">
                    {decodeHtmlEntities(currentPastSession.title)}
                  </h3>
                </div>

                {/* Engagement Graph with Comparison to Previous Session User Attendance */}
                <div className="bg-white/5 backdrop-blur-xs rounded-2xl p-4 sm:p-5 border border-white/10 space-y-3.5">
                  
                  {/* Graph Top Header: Metrics & Legend */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-[#FDB913]" />
                      <span className="text-xs font-bold text-sky-100 uppercase tracking-wider">
                        Engagement & Attendance Comparison
                      </span>
                      <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950/50 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                        {currentComparison.growthPct} Surge
                      </span>
                    </div>

                    {/* Comparative Legend */}
                    <div className="flex items-center gap-4 text-xs font-semibold">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FDB913] shadow-xs"></span>
                        <span className="text-white/95">This Session ({currentComparison.thisAttendance})</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] shadow-xs"></span>
                        <span className="text-sky-200/90">Prev Session ({currentComparison.prevAttendance})</span>
                      </div>
                    </div>
                  </div>

                  {/* SVG Comparative Engagement Area & Curve Graph */}
                  <div className="relative w-full h-[125px] flex items-end select-none bg-black/15 rounded-xl p-2.5 border border-white/10">
                    <svg className="absolute inset-0 w-full h-full overflow-visible p-3" preserveAspectRatio="none" viewBox="0 0 320 90">
                      <defs>
                        {/* Gradient for Current Session Area Fill */}
                        <linearGradient id="currentAreaGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#FDB913" stopOpacity="0.32" />
                          <stop offset="100%" stopColor="#FDB913" stopOpacity="0.0" />
                        </linearGradient>

                        {/* Gradient for Previous Session Area Fill */}
                        <linearGradient id="prevAreaGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.15" />
                          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Previous Session Shaded Area */}
                      <path
                        d="M 15,68 C 65,58 105,42 155,30 C 205,25 255,27 305,29 L 305,82 L 15,82 Z"
                        fill="url(#prevAreaGrad)"
                      />

                      {/* Current Session Shaded Area */}
                      <path
                        d="M 15,62 C 65,45 105,24 155,15 C 205,17 255,19 305,21 L 305,82 L 15,82 Z"
                        fill="url(#currentAreaGrad)"
                      />

                      {/* Previous Session Comparative Curve (Cyan Dashed) */}
                      <path
                        d="M 15,68 C 65,58 105,42 155,30 C 205,25 255,27 305,29"
                        fill="none"
                        stroke="#38BDF8"
                        strokeWidth="2.2"
                        strokeDasharray="4 3"
                        strokeLinecap="round"
                      />

                      {/* Current Session Curve (Solid Gold) */}
                      <path
                        d="M 15,62 C 65,45 105,24 155,15 C 205,17 255,19 305,21"
                        fill="none"
                        stroke="#FDB913"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />

                      {/* Peak Attendance Pulsing Node on This Session Curve */}
                      <circle cx="155" cy="15" r="5.5" fill="#FDB913" />
                      <circle cx="155" cy="15" r="2.5" fill="#042F61" />
                      <circle cx="155" cy="15" r="9" fill="none" stroke="#FDB913" strokeWidth="1" strokeOpacity="0.6" />

                      {/* Peak Node on Previous Session Curve */}
                      <circle cx="155" cy="30" r="4.5" fill="#38BDF8" />
                      <circle cx="155" cy="30" r="2" fill="#042F61" />
                    </svg>

                    {/* X-Axis Milestone Checkpoints */}
                    <div className="absolute bottom-1 left-3 right-3 flex items-center justify-between text-[10px] font-semibold text-white/50">
                      <span>Kickoff</span>
                      <span>Standards Analysis</span>
                      <span className="text-[#FDB913] font-bold">Peak Engagement</span>
                      <span>Live Workshop</span>
                      <span>Wrap-up</span>
                    </div>
                  </div>

                  {/* 4 Attendance & Engagement Metric Badges */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                    <div className="bg-white/5 rounded-xl p-2.5 border border-white/10">
                      <span className="text-[10px] uppercase font-bold text-sky-300 block">Total Attendance</span>
                      <span className="text-sm font-black text-white flex items-center gap-1 mt-0.5">
                        {currentComparison.thisAttendance}
                        <span className="text-[11px] font-bold text-emerald-300">
                          +{currentComparison.thisAttendance - currentComparison.prevAttendance}
                        </span>
                      </span>
                    </div>
                    
                    <div className="bg-white/5 rounded-xl p-2.5 border border-white/10">
                      <span className="text-[10px] uppercase font-bold text-sky-300 block">Prev Attendance</span>
                      <span className="text-sm font-black text-white/80 mt-0.5 block">
                        {currentComparison.prevAttendance} Attendees
                      </span>
                    </div>

                    <div className="bg-white/5 rounded-xl p-2.5 border border-white/10">
                      <span className="text-[10px] uppercase font-bold text-sky-300 block">Live Retention</span>
                      <span className="text-sm font-black text-white mt-0.5 block">
                        {currentComparison.engagementRate}
                      </span>
                    </div>

                    <div className="bg-white/5 rounded-xl p-2.5 border border-white/10">
                      <span className="text-[10px] uppercase font-bold text-sky-300 block">Satisfaction</span>
                      <span className="text-sm font-black text-[#FDB913] mt-0.5 block">
                        {currentComparison.satisfactionRate}
                      </span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ====================================================================
            UPCOMING SESSION RESERVATION & WORDPRESS GRAVITY FORM MOUNT SECTION
            Contains a designated mount point for any Gravity Form built in WP
            ==================================================================== */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-sm relative overflow-hidden">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0072CE]/10 text-[#0072CE] text-xs font-bold tracking-wider uppercase mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Next Scheduled Session</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#042F61] tracking-tight">
                Ready to Secure Your Seat?
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mt-1 max-w-xl">
                Seats are strictly limited to ensure interactive case studies, practical tool application, and dedicated live Q&A with our senior consultants.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => handleDirectStripe(primarySession.url)}
                className="bg-[#042F61] hover:bg-[#0072CE] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Instant Checkout</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Session Overview Card */}
          <div className="mt-8 bg-slate-50 border border-slate-200/70 rounded-2xl p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="bg-[#0072CE] text-white text-xs font-bold px-3 py-1 rounded-md">
                  VET Regulatory Session
                </span>
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#0072CE]" />
                  {primarySession.date}
                </span>
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#0072CE]" />
                  {primarySession.time}
                </span>
              </div>

              <h4 className="text-lg sm:text-xl font-bold text-[#042F61]">
                {primarySession.title}
              </h4>
              <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                {primarySession.description}
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => handleOpenBooking(primarySession)}
                className="bg-[#FDB913] hover:bg-[#042F61] text-[#042F61] hover:text-[#FDB913] text-sm font-black px-6 py-3 rounded-xl shadow-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Session Details</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href={primarySession.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-300 hover:border-[#042F61] text-slate-700 hover:text-[#042F61] text-sm font-bold px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <span>Direct Stripe Link</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Session Features Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-100">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#0072CE] shrink-0 mt-0.5" />
              <div>
                <h5 className="text-sm font-bold text-[#042F61]">Official Certificate</h5>
                <p className="text-xs text-slate-500 mt-0.5">Compliant documentation for your trainer matrix & ASQA evidence.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#0072CE] shrink-0 mt-0.5" />
              <div>
                <h5 className="text-sm font-bold text-[#042F61]">Practical Templates</h5>
                <p className="text-xs text-slate-500 mt-0.5">Includes assessment validation sheets and evidence checklist.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#0072CE] shrink-0 mt-0.5" />
              <div>
                <h5 className="text-sm font-bold text-[#042F61]">Senior Consultant Access</h5>
                <p className="text-xs text-slate-500 mt-0.5">Direct live Q&A with experienced vocational compliance leads.</p>
              </div>
            </div>
          </div>

          {/* ====================================================================
              GRAVITY FORM MOUNT POINT (Integrated for WordPress Gravity Forms)
              Target ID: #wp-gravity-form-mount / #gform_wrapper_pd_session
              WordPress Gravity Forms scripts or hooks can mount directly here.
              ==================================================================== */}
          <div className="mt-10 pt-8 border-t border-slate-200">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0072CE]/10 text-[#0072CE] text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#FDB913]" />
                  <span>Interactive Enrollment Form</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-[#042F61] tracking-tight">
                  Bookings & Registration Form
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                  Complete the registration fields below to reserve attendance for your assessors or RTO compliance team.
                </p>
              </div>

              {/* WordPress Gravity Form Mount Indicator Tag */}
              <div className="self-start sm:self-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  #wp-gravity-form-mount
                </span>
              </div>
            </div>

            {/* THE GRAVITY FORM MOUNT POINT CONTAINER */}
            <div 
              id="wp-gravity-form-mount" 
              ref={gravityFormMountRef}
              className="gform_wrapper gravity-form-mount-container w-full bg-slate-50/70 border border-slate-200/90 rounded-2xl p-5 sm:p-8"
              data-form-type="gravity-forms"
              data-form-name="pd-session-registration"
            >
              {formSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 text-center bg-white rounded-xl border border-emerald-200 shadow-sm"
                >
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h5 className="text-xl font-black text-[#042F61]">Registration Inquiry Received</h5>
                  <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-800">{formData.fullName}</span>. Our vocational education consultant will confirm your team's reservation for <span className="font-semibold text-[#0072CE]">{formData.sessionChoice}</span> shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#0072CE] hover:underline cursor-pointer"
                  >
                    Submit another attendee registration
                  </button>
                </motion.div>
              ) : (
                <form 
                  onSubmit={handleFormSubmit}
                  className="space-y-5"
                  id="gform_pd_session"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#042F61] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#0072CE]" />
                        <span>Full Name <span className="text-red-500">*</span></span>
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0072CE]/30 focus:border-[#0072CE] transition-all"
                      />
                    </div>

                    {/* Work Email */}
                    <div>
                      <label className="block text-xs font-bold text-[#042F61] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#0072CE]" />
                        <span>Work Email <span className="text-red-500">*</span></span>
                      </label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="s.jenkins@rto.edu.au"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0072CE]/30 focus:border-[#0072CE] transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-[#042F61] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#0072CE]" />
                        <span>Contact Number</span>
                      </label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+61 400 000 000"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0072CE]/30 focus:border-[#0072CE] transition-all"
                      />
                    </div>

                    {/* Organization / RTO */}
                    <div>
                      <label className="block text-xs font-bold text-[#042F61] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-[#0072CE]" />
                        <span>Organization / RTO Name <span className="text-red-500">*</span></span>
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Australian Institute of Skills"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0072CE]/30 focus:border-[#0072CE] transition-all"
                      />
                    </div>

                    {/* Job Title / Role */}
                    <div>
                      <label className="block text-xs font-bold text-[#042F61] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-[#0072CE]" />
                        <span>Role / Job Title</span>
                      </label>
                      <input 
                        type="text" 
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                        placeholder="e.g. Lead Trainer & Assessor"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0072CE]/30 focus:border-[#0072CE] transition-all"
                      />
                    </div>

                    {/* Number of Attendees */}
                    <div>
                      <label className="block text-xs font-bold text-[#042F61] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#0072CE]" />
                        <span>Number of Seats</span>
                      </label>
                      <select 
                        value={formData.attendeesCount}
                        onChange={(e) => setFormData({ ...formData, attendeesCount: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0072CE]/30 focus:border-[#0072CE] transition-all cursor-pointer"
                      >
                        <option value="1">1 Attendee (Solo)</option>
                        <option value="2-3">2 - 3 Attendees (Small Team)</option>
                        <option value="4-7">4 - 7 Attendees (Assessor Cohort)</option>
                        <option value="8+">8+ Attendees (Whole RTO Faculty)</option>
                      </select>
                    </div>

                  </div>

                  {/* Selected Session */}
                  <div>
                    <label className="block text-xs font-bold text-[#042F61] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#0072CE]" />
                      <span>Select Target Session <span className="text-red-500">*</span></span>
                    </label>
                    <select 
                      value={formData.sessionChoice}
                      onChange={(e) => setFormData({ ...formData, sessionChoice: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0072CE]/30 focus:border-[#0072CE] transition-all cursor-pointer"
                    >
                      {upcomingSessions.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.date} — {decodeHtmlEntities(s.title)} ({s.time || '04:00 PM AEST'})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Specific Questions / Notes */}
                  <div>
                    <label className="block text-xs font-bold text-[#042F61] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#0072CE]" />
                      <span>Specific Questions or Compliance Areas of Focus</span>
                    </label>
                    <textarea 
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. We have questions around RPL evidence sufficiency and assessment tool validation under new ASQA standards..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0072CE]/30 focus:border-[#0072CE] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <p className="text-xs text-slate-500">
                      We respect your privacy. Invoices can be issued with your RTO purchase order.
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#0072CE] hover:bg-[#042F61] text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <span>Submit Booking Registration</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>

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
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {selectedSession.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href={selectedSession.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#FDB913] hover:bg-[#042F61] text-[#042F61] hover:text-[#FDB913] font-black text-sm py-3.5 px-6 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 text-center"
                  >
                    <span>Book This Session</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setSelectedSession(null)}
                    className="border border-slate-300 hover:border-slate-400 text-slate-700 font-bold text-sm py-3.5 px-5 rounded-xl transition-colors cursor-pointer"
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
