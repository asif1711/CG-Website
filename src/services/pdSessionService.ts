export interface WordPressPDSession {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  url: string;
}

export const getTodayDateString = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Canonical upcoming session representing the active WordPress CPT state
export const DEFAULT_UPCOMING_SESSIONS: WordPressPDSession[] = [
  {
    id: 22762,
    title: "Australian Student Visa Reforms &#038; International Education Changes – Part 1",
    description: `<p><span data-teams="true"><i>What Every CRICOS Provider, RTO Owners &amp; Compliance Managers Must Know</i></span></p>\n<p>&nbsp;</p>\n<p><strong>Topics it will cover:</strong></p>\n<p>1. Student Visa Reforms 2026: Onshore vs Offshore Applications – Key Changes, Compliance Risks &amp; Implications for RTOs</p>\n<p>2. Student Visa Dependants: Family Inclusion Rules, Eligibility Restrictions &amp; What Education Providers Need to Know</p>\n<p>{hide_date}</p>\n<p>{hide_time}</p>`,
    date: "2026-10-31",
    time: "",
    url: "https://storage.googleapis.com/chelsongordon.com/com.chelsongordon/PD%20Sessions/Thumbnails/visa%20reform%20session%20part%201.webp"
  }
];

// Rich past sessions list from historical WordPress records
export const DEFAULT_PAST_SESSIONS: WordPressPDSession[] = [
  {
    id: 22619,
    title: "Assessment Validation: From Risk Identification to Continuous Improvement",
    description: "Systematic review of assessment validation workflows, ensuring audit-readiness and continuous improvement across RTO delivery.",
    date: "2026-10-08",
    time: "04:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22274,
    title: "Assessment Integrity – Ensuring Authenticity and Currency of Evidence",
    description: "Stay ahead of regulatory reforms, audit expectations, and risk-based regulatory trends shaping Australian vocational education and training.",
    date: "2026-09-24",
    time: "04:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22273,
    title: "Assessment Confidence – Applying Validity and Sufficiency in Practice",
    description: "Master evidence sufficiency, authentic learner verification, and robust validation instruments to ensure total audit confidence.",
    date: "2026-09-16",
    time: "04:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22272,
    title: "Compliant Assessment Practices – Embedding Validity and Reliability in Assessment",
    description: "Equip your assessors with the knowledge, evidence-gathering strategies, and practical tools to embed fairness, flexibility, validity, and sufficiency into daily assessment workflows.",
    date: "2026-09-04",
    time: "04:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  },
  {
    id: 22271,
    title: "Compliant Assessment Practices – Embedding Fairness and Flexibility in Assessment",
    description: "Equipped assessors with evidence-gathering strategies and practical tools to embed fairness, flexibility, and validity into daily workflows in line with ASQA Standards.",
    date: "2026-08-28",
    time: "04:00 PM AEST",
    url: "https://buy.stripe.com/6oUeVd7yRfz06GqaKNds40e"
  }
];

const CACHE_KEY = 'cg_pd_sessions_cache';
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

let inMemorySessions: WordPressPDSession[] | null = null;
const listeners = new Set<(sessions: WordPressPDSession[]) => void>();

// Synchronously load from sessionStorage if available
const loadInitialFromStorage = (): WordPressPDSession[] | null => {
  if (typeof window === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && Array.isArray(parsed.data) && parsed.data.length > 0) {
      // Check if cache timestamp is still reasonably fresh
      if (Date.now() - (parsed.timestamp || 0) < CACHE_TTL_MS) {
        return parsed.data;
      }
    }
  } catch {
    // Ignore JSON parse errors
  }
  return null;
};

// Initialize in-memory cache synchronously from storage if present
inMemorySessions = loadInitialFromStorage();

export const isSessionUpcoming = (session: WordPressPDSession, todayStr: string = getTodayDateString()): boolean => {
  const desc = session.description || '';
  // Tagged with TBA_for_now or hide_date without past date means upcoming
  if (desc.includes('{TBA_for_now}') || desc.includes('{hide_date}')) {
    return true;
  }
  return !session.date || session.date >= todayStr;
};

export const isSessionPast = (session: WordPressPDSession, todayStr: string = getTodayDateString()): boolean => {
  if (!session.date) return false;
  const desc = session.description || '';
  if (desc.includes('{TBA_for_now}')) return false;
  return session.date < todayStr;
};

export const filterUpcomingSessions = (sessions: WordPressPDSession[]): WordPressPDSession[] => {
  const todayStr = getTodayDateString();
  const upcoming = sessions
    .filter(s => isSessionUpcoming(s, todayStr))
    .sort((a, b) => (a.date || '').localeCompare(b.date || ''));
  return upcoming.length > 0 ? upcoming : DEFAULT_UPCOMING_SESSIONS;
};

export const filterPastSessions = (sessions: WordPressPDSession[]): WordPressPDSession[] => {
  const todayStr = getTodayDateString();
  const past = sessions
    .filter(s => isSessionPast(s, todayStr))
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  if (past.length === 0) return DEFAULT_PAST_SESSIONS;

  // Merge with default historical sessions if needed to guarantee rich historical list
  const merged = [
    ...past,
    ...DEFAULT_PAST_SESSIONS.filter(f => !past.some(p => p.id === f.id || p.date === f.date))
  ];
  return merged;
};

export const getCachedAllSessions = (): WordPressPDSession[] => {
  if (inMemorySessions && inMemorySessions.length > 0) {
    return inMemorySessions;
  }
  return [...DEFAULT_UPCOMING_SESSIONS, ...DEFAULT_PAST_SESSIONS];
};

export const getCachedUpcomingSessions = (): WordPressPDSession[] => {
  if (inMemorySessions && inMemorySessions.length > 0) {
    return filterUpcomingSessions(inMemorySessions);
  }
  return DEFAULT_UPCOMING_SESSIONS;
};

export const getCachedPastSessions = (): WordPressPDSession[] => {
  if (inMemorySessions && inMemorySessions.length > 0) {
    return filterPastSessions(inMemorySessions);
  }
  return DEFAULT_PAST_SESSIONS;
};

export const subscribeSessions = (listener: (sessions: WordPressPDSession[]) => void): (() => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

let activeFetchPromise: Promise<WordPressPDSession[]> | null = null;

export const fetchLiveSessions = async (forceRefresh: boolean = false): Promise<WordPressPDSession[]> => {
  if (!forceRefresh && inMemorySessions && inMemorySessions.length > 0) {
    return inMemorySessions;
  }

  if (activeFetchPromise) {
    return activeFetchPromise;
  }

  activeFetchPromise = (async () => {
    try {
      // Race / try live WordPress origin and relative path in parallel for lowest latency
      const directUrl = 'https://chelsongordon.com/wp-json/cg/v1/pd-sessions';
      const relativeUrl = '/wp-json/cg/v1/pd-sessions';

      const fetchSingle = async (url: string): Promise<WordPressPDSession[]> => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6000);
        try {
          const res = await fetch(url, {
            headers: { Accept: 'application/json' },
            signal: controller.signal
          });
          clearTimeout(timeoutId);
          const contentType = res.headers.get('content-type') || '';
          if (!res.ok || contentType.includes('text/html')) {
            throw new Error(`Invalid response from ${url}`);
          }
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            return data;
          }
          throw new Error(`Empty data from ${url}`);
        } catch (e) {
          clearTimeout(timeoutId);
          throw e;
        }
      };

      // Try parallel race with Promise.any, falling back to whichever succeeds first
      let loadedData: WordPressPDSession[];
      try {
        loadedData = await Promise.any([fetchSingle(directUrl), fetchSingle(relativeUrl)]);
      } catch {
        // Fallback to sequential if Promise.any fails
        try {
          loadedData = await fetchSingle(directUrl);
        } catch {
          loadedData = await fetchSingle(relativeUrl);
        }
      }

      if (Array.isArray(loadedData) && loadedData.length > 0) {
        inMemorySessions = loadedData;
        try {
          if (typeof window !== 'undefined') {
            sessionStorage.setItem(
              CACHE_KEY,
              JSON.stringify({ data: loadedData, timestamp: Date.now() })
            );
          }
        } catch {
          // Ignore storage quota errors
        }

        // Notify active subscribers
        listeners.forEach(fn => fn(loadedData));
        return loadedData;
      }
    } catch (err) {
      console.warn('Using cached / fallback sessions:', err);
    } finally {
      activeFetchPromise = null;
    }

    return getCachedAllSessions();
  })();

  return activeFetchPromise;
};

// Initiate background preload immediately upon module load in browser
if (typeof window !== 'undefined') {
  setTimeout(() => {
    fetchLiveSessions().catch(() => {});
  }, 10);
}
