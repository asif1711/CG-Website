// ====================================================
// BRAND CONFIGURATION
// ====================================================
export const BRAND_CONFIG = {
  name: "Chelson Gordon",
  colors: {
    primary: "#042F61",
    accent: "#FDB913",
    primaryLight: "#064082",
    background: "#F8FAFC",
    surface: "#FFFFFF",
    text: "#0F172A",
    muted: "#64748B",
    border: "#E2E8F0"
  }
};

// ====================================================
// TYPES & SCHEMAS
// ====================================================
export interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  office: string;
  email: string;
  phone: string;
  avatar?: string;
  bio?: string;
  supervisorId?: string;
  children?: Employee[];
}

// Helper to sanitize name into user id
const nameToId = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
};

// Helper for high contrast avatar initials
export const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

// ====================================================
// FLAT DATA DEFINITIONS (ALL VERIFIED CHELSON GORDON EMPLOYEES)
// ====================================================
export const EMPLOYEES_FLAT_DATA: Employee[] = [
  // ==========================================
  // ROOT EXECUTIVES
  // ==========================================
  {
    id: "charles-dejsakultorn",
    name: "Charles Dejsakultorn",
    role: "Managing Director & Executive Board",
    department: "Executive Committee",
    office: "Global",
    email: "c.dejsakultorn@chelsongordon.com",
    phone: "+61 499 994 530",
    bio: "Co-leads global strategy, academic governance, human strategy, and international operations at Chelson Gordon.",
    avatar: "CD"
  },
  {
    id: "fiona-kee",
    name: "Fiona Kee",
    role: "Executive Director & Principal Consultant",
    department: "Executive Committee",
    office: "Global",
    email: "f.kee@chelsongordon.com",
    phone: "+61 499 994 531",
    bio: "Directs business advisory, specialist audit advice, CRICOS registrations, and corporate regulatory standards.",
    avatar: "FK"
  },

  // ==========================================
  // HUMAN STRATEGY DEPARTMENT
  // ==========================================
  {
    id: "boss-arkkarametyingyod",
    name: "Boss Arkkarametyingyod",
    role: "Junior HR Business Partner",
    department: "Human Strategy",
    office: "Bangkok Office",
    email: "b.arkkarametyingyod@chelsongordon.com",
    phone: "+66 62 174 4994",
    bio: "Spearheads operational workforce planning, talent development, and HR metrics standardizations.",
    avatar: "BA",
    supervisorId: "charles-dejsakultorn"
  },
  {
    id: "rajneesh-sharma",
    name: "Rajneesh Sharma",
    role: "HR Liaison Manager",
    department: "Human Strategy",
    office: "Kolkata Office",
    email: "r.sharma@chelsongordon.com",
    phone: "+91 98300 12345",
    bio: "Facilitates seamless regional coordination, employee relations strategies, and personnel alignment checks.",
    avatar: "RS",
    supervisorId: "charles-dejsakultorn"
  },
  {
    id: "hugo-aungsuphat",
    name: "Hugo Aungsuphat",
    role: "HR Specialist",
    department: "Human Strategy",
    office: "Bangkok Office",
    email: "h.aungsuphat@chelsongordon.com",
    phone: "+66 62 174 4996",
    bio: "Oversees local compliance frameworks, workforce onboarding, and personnel systems.",
    avatar: "HA",
    supervisorId: "boss-arkkarametyingyod"
  },
  {
    id: "pooja-sharma",
    name: "Pooja Sharma",
    role: "HR Partner India",
    department: "Human Strategy",
    office: "Kolkata Office",
    email: "p.sharma@chelsongordon.com",
    phone: "+91 98300 54321",
    bio: "Manages subcontinent talent partnerships, local recruitment campaigns, and employee wellness systems.",
    avatar: "PS",
    supervisorId: "rajneesh-sharma"
  },
  {
    id: "sweta-singh",
    name: "Sweta Singh",
    role: "Junior Business Administrator",
    department: "Human Strategy",
    office: "Kolkata Office",
    email: "s.singh@chelsongordon.com",
    phone: "+91 98300 11111",
    bio: "Directs organizational administrative processes and coordinates scheduling alignments.",
    avatar: "SS",
    supervisorId: "rajneesh-sharma"
  },
  {
    id: "tania-parvin",
    name: "Tania Parvin",
    role: "Human Strategy Coordinator",
    department: "Human Strategy",
    office: "Kolkata Office",
    email: "t.parvin@chelsongordon.com",
    phone: "+91 98300 22222",
    bio: "Ensures administrative documentation and global team directory records remain fully cataloged and compliant.",
    avatar: "TP",
    supervisorId: "rajneesh-sharma"
  },
  {
    id: "srija-acharjee",
    name: "Srija Acharjee",
    role: "Executive Assistant in Training",
    department: "Human Strategy",
    office: "Kolkata Office",
    email: "s.acharjee@chelsongordon.com",
    phone: "+61 499 994 572",
    bio: "Supports board secretariat pipelines and provides key scheduling alignments under human strategy protocols.",
    avatar: "SA",
    supervisorId: "rajneesh-sharma"
  },
  {
    id: "cole-thupmongkol",
    name: "Cole Thupmongkol",
    role: "HR Specialist",
    department: "Human Strategy",
    office: "Bangkok Office",
    email: "c.thupmongkol@chelsongordon.com",
    phone: "+66 62 174 4997",
    bio: "Supports personnel development programs and cross-office integration workflows.",
    avatar: "CT",
    supervisorId: "boss-arkkarametyingyod"
  },
  {
    id: "jitesh-agarwal",
    name: "Jitesh Agarwal",
    role: "Junior Business Administrator",
    department: "Human Strategy",
    office: "Udaipur Office",
    email: "j.agarwal@chelsongordon.com",
    phone: "+91 98300 33333",
    bio: "Provides data filing and general administrative backup for transnational talent audits.",
    avatar: "JA",
    supervisorId: "boss-arkkarametyingyod"
  },
  {
    id: "tevita-kamafirst-wong",
    name: "Tevita Kamafirst Wong",
    role: "Human Strategy Generalist (Intern)",
    department: "Human Strategy",
    office: "Lautoka Office",
    email: "t.wong@chelsongordon.com",
    phone: "+679 666 4567",
    bio: "Provides helpful general oversight across operations and administrative files.",
    avatar: "TW",
    supervisorId: "boss-arkkarametyingyod"
  },
  {
    id: "anindita-mukherjee",
    name: "Anindita Mukherjee",
    role: "Human Strategy Generalist",
    department: "Human Strategy",
    office: "Kolkata Office",
    email: "a.mukherjee@chelsongordon.com",
    phone: "+91 98300 44444",
    bio: "Reviews local office policy files and aids day-to-day coordination parameters.",
    avatar: "AM",
    supervisorId: "rajneesh-sharma"
  },
  {
    id: "md-ahreyan-khan",
    name: "Md Ahreyan Khan",
    role: "Junior Accounting Officer (Intern)",
    department: "Human Strategy",
    office: "Kolkata Office",
    email: "a.khan@chelsongordon.com",
    phone: "+91 98300 55555",
    bio: "Aids with operational bookkeeping entries and expense validation logs.",
    avatar: "MK",
    supervisorId: "rajneesh-sharma"
  },
  {
    id: "pymmie-wanna",
    name: "Pymmie Wanna",
    role: "HR Admin Officer",
    department: "Human Strategy",
    office: "Bangkok Office",
    email: "p.wanna@chelsongordon.com",
    phone: "+66 62 174 4998",
    bio: "Aids in system record-keeping and local office administrative files.",
    avatar: "PW",
    supervisorId: "boss-arkkarametyingyod"
  },
  {
    id: "hemant-kumar-jha",
    name: "Hemant Kumar Jha",
    role: "Accounting Officer",
    department: "Human Strategy",
    office: "Udaipur Office",
    email: "h.jha@chelsongordon.com",
    phone: "+91 98300 66666",
    bio: "Secures financial auditing inputs and processes international ledger balances.",
    avatar: "HJ",
    supervisorId: "boss-arkkarametyingyod"
  },
  {
    id: "faruk-biswas",
    name: "Faruk Biswas",
    role: "Junior Accounting Officer",
    department: "Human Strategy",
    office: "Kolkata Office",
    email: "f.biswas@chelsongordon.com",
    phone: "+91 98300 77777",
    bio: "Operates accounts payable reconciliation processes under supervision.",
    avatar: "FB",
    supervisorId: "rajneesh-sharma"
  },

  // ==========================================
  // MARKETING DEPARTMENT
  // ==========================================
  {
    id: "peace-kunthongkaew",
    name: "Peace Kunthongkaew",
    role: "Senior Consultant",
    department: "Marketing",
    office: "Bangkok Office",
    email: "p.kunthongkaew@chelsongordon.com",
    phone: "+66 62 174 5080",
    bio: "Leads key consultation portfolios, provider transitions, and high-tier marketing campaigns globally.",
    avatar: "PK",
    supervisorId: "charles-dejsakultorn"
  },
  {
    id: "ananya-saha",
    name: "Ananya Saha",
    role: "Junior Marketing Coordinator",
    department: "Marketing",
    office: "Kolkata Office",
    email: "a.saha@chelsongordon.com",
    phone: "+91 98322 11111",
    bio: "Coordinates newsletter releases and supports digital positioning initiatives.",
    avatar: "AS",
    supervisorId: "peace-kunthongkaew"
  },
  {
    id: "deepanshu-gupta",
    name: "Deepanshu Gupta",
    role: "Junior Website Developer",
    department: "Marketing",
    office: "Kolkata Office",
    email: "d.gupta@chelsongordon.com",
    phone: "+91 98322 22222",
    bio: "Maintains official web system optimization and custom content plugins.",
    avatar: "DG",
    supervisorId: "peace-kunthongkaew"
  },
  {
    id: "kzothanpuia",
    name: "Kzothanpuia",
    role: "Junior Media Production Officer",
    department: "Marketing",
    office: "Kolkata Office",
    email: "k.zothanpuia@chelsongordon.com",
    phone: "+91 98322 33333",
    bio: "Assists in professional corporate videography and creative asset rendering.",
    avatar: "KZ",
    supervisorId: "peace-kunthongkaew"
  },
  {
    id: "upama-dutta",
    name: "Upama Dutta",
    role: "Junior Media Production Officer",
    department: "Marketing",
    office: "Kolkata Office",
    email: "u.dutta@chelsongordon.com",
    phone: "+91 98322 44444",
    bio: "Produces brand support assets and manages regional design assets.",
    avatar: "UD",
    supervisorId: "peace-kunthongkaew"
  },
  {
    id: "smriti-saha",
    name: "Smriti Saha",
    role: "Junior Marketing Coordinator",
    department: "Marketing",
    office: "Kolkata Office",
    email: "s.saha@chelsongordon.com",
    phone: "+91 98322 55555",
    bio: "Assists in data gathering for local audience campaigns and coordinates team scheduling.",
    avatar: "SS",
    supervisorId: "peace-kunthongkaew"
  },
  {
    id: "shivani-kumari",
    name: "Shivani Kumari",
    role: "Junior Marketing Officer",
    department: "Marketing",
    office: "Kolkata Office",
    email: "s.kumari@chelsongordon.com",
    phone: "+91 98322 66666",
    bio: "Collaborates on strategic communication tracks and monitors feedback metrics.",
    avatar: "SK",
    supervisorId: "peace-kunthongkaew"
  },
  {
    id: "nurul-islam",
    name: "Nurul Islam",
    role: "Junior Website Developer",
    department: "Marketing",
    office: "Kolkata Office",
    email: "n.islam@chelsongordon.com",
    phone: "+91 98322 77777",
    bio: "Provides layout checks, code styling, and database sync integrity benchmarks.",
    avatar: "NI",
    supervisorId: "peace-kunthongkaew"
  },

  // ==========================================
  // BUSINESS CONSULTANT DEPARTMENT
  // ==========================================
  {
    id: "vedic-yadav",
    name: "Vedic Yadav",
    role: "Office Manager",
    department: "Business Consultant",
    office: "Bangkok Office",
    email: "v.yadav@chelsongordon.com",
    phone: "+66 62 174 5082",
    bio: "Maintains regional administrative flows and coordinates diagnostic audits across teams.",
    avatar: "VY",
    supervisorId: "fiona-kee"
  },
  {
    id: "sonu-padiyar",
    name: "Sonu Padiyar",
    role: "Junior Manager",
    department: "Business Consultant",
    office: "Kolkata Office",
    email: "s.padiyar@chelsongordon.com",
    phone: "+91 98311 12345",
    bio: "Supports daily workflow planning and operational performance indexes for standard portfolios.",
    avatar: "SP",
    supervisorId: "vedic-yadav"
  },
  {
    id: "arpan-sinha",
    name: "Arpan Sinha",
    role: "Junior Consultant",
    department: "Business Consultant",
    office: "Kolkata Office",
    email: "a.sinha@chelsongordon.com",
    phone: "+91 98311 00001",
    bio: "Supports business diagnostic reviews and collects critical market intelligence.",
    avatar: "AS",
    supervisorId: "sonu-padiyar"
  },
  {
    id: "ritraj-banerjee",
    name: "Ritraj Banerjee",
    role: "Consultant",
    department: "Business Consultant",
    office: "Kolkata Office",
    email: "r.banerjee@chelsongordon.com",
    phone: "+91 98311 00002",
    bio: "Applies risk assessment standards to active consulting projects.",
    avatar: "RB",
    supervisorId: "sonu-padiyar"
  },
  {
    id: "shish-khan",
    name: "Shish Khan",
    role: "Junior Consultant",
    department: "Business Consultant",
    office: "Kolkata Office",
    email: "s.khan@chelsongordon.com",
    phone: "+91 98311 00003",
    bio: "Provides data modeling and analysis for prospective provider frameworks.",
    avatar: "SK",
    supervisorId: "sonu-padiyar"
  },
  {
    id: "puspita-pal",
    name: "Puspita Pal",
    role: "Consultant in Training",
    department: "Business Consultant",
    office: "Kolkata Office",
    email: "p.pal@chelsongordon.com",
    phone: "+91 98311 00004",
    bio: "Diligently evaluates standard provider policies for alignment benchmarks.",
    avatar: "PP",
    supervisorId: "sonu-padiyar"
  },
  {
    id: "ratul-dasgupta",
    name: "Ratul Dasgupta",
    role: "Consultant in Training",
    department: "Business Consultant",
    office: "Kolkata Office",
    email: "r.dasgupta@chelsongordon.com",
    phone: "+91 98311 00005",
    bio: "Understands risk models and builds business compliance summaries.",
    avatar: "RD",
    supervisorId: "sonu-padiyar"
  },
  {
    id: "woindree-la-mondal",
    name: "Woindree La Mondal",
    role: "Junior Consultant",
    department: "Business Consultant",
    office: "Kolkata Office",
    email: "w.mondal@chelsongordon.com",
    phone: "+91 98311 00006",
    bio: "Maintains consultation notes and coordinates background documentation logs.",
    avatar: "WL",
    supervisorId: "sonu-padiyar"
  },
  {
    id: "paula-misa-saha",
    name: "Paula Misa Saha",
    role: "Junior Consultant",
    department: "Business Consultant",
    office: "Kolkata Office",
    email: "p.saha@chelsongordon.com",
    phone: "+91 98311 00007",
    bio: "Undergoes specialized training and assists senior consultants with workflow diagnostics.",
    avatar: "PS",
    supervisorId: "sonu-padiyar"
  },
  {
    id: "rajdeep-singh",
    name: "Rajdeep Singh",
    role: "Junior Consultant",
    department: "Business Consultant",
    office: "Kolkata Office",
    email: "r.singh@chelsongordon.com",
    phone: "+91 98311 00008",
    bio: "Prepares meeting logs and assists with database maintenance parameters.",
    avatar: "RS",
    supervisorId: "sonu-padiyar"
  },
  {
    id: "arya-sah",
    name: "Arya Sah",
    role: "Junior Consultant",
    department: "Business Consultant",
    office: "Kolkata Office",
    email: "a.sah@chelsongordon.com",
    phone: "+91 98311 00009",
    bio: "Undertakes comprehensive market review operations and structures comparative data tables.",
    avatar: "AS",
    supervisorId: "sonu-padiyar"
  },
  {
    id: "shreyasi-ghatak",
    name: "Shreyasi Ghatak",
    role: "Junior Consultant",
    department: "Business Consultant",
    office: "Kolkata Office",
    email: "s.ghatak@chelsongordon.com",
    phone: "+91 98311 00010",
    bio: "Translates audit compliance requirements into streamlined advisory checklists.",
    avatar: "SG",
    supervisorId: "sonu-padiyar"
  },
  {
    id: "sweta-kumari",
    name: "Sweta Kumari",
    role: "Junior Consultant",
    department: "Business Consultant",
    office: "Kolkata Office",
    email: "s.kumari@chelsongordon.com",
    phone: "+91 98311 00011",
    bio: "Coordinates report generation workflows and supports advisory transitions.",
    avatar: "SK",
    supervisorId: "sonu-padiyar"
  },
  {
    id: "soham-auddy",
    name: "Soham Auddy",
    role: "Junior Consultant",
    department: "Business Consultant",
    office: "Kolkata Office",
    email: "s.auddy@chelsongordon.com",
    phone: "+91 98311 00012",
    bio: "Performs technical evaluations and maps out process improvement recommendations.",
    avatar: "SA",
    supervisorId: "sonu-padiyar"
  },
  {
    id: "soumili-chakraborty",
    name: "Soumili Chakraborty",
    role: "Junior Consultant",
    department: "Business Consultant",
    office: "Kolkata Office",
    email: "s.chakraborty@chelsongordon.com",
    phone: "+91 98311 00013",
    bio: "Aids in provider capability verification checks and organizes files.",
    avatar: "SC",
    supervisorId: "sonu-padiyar"
  },
  {
    id: "debankur-dey",
    name: "Debankur Dey",
    role: "Junior Business Administrator",
    department: "Business Consultant",
    office: "Kolkata Office",
    email: "d.dey@chelsongordon.com",
    phone: "+91 98311 00014",
    bio: "Manages business operations trackers and maintains active customer files.",
    avatar: "DD",
    supervisorId: "sonu-padiyar"
  },
  {
    id: "parthib-sarkar",
    name: "Parthib Sarkar",
    role: "Junior Business Administrator",
    department: "Business Consultant",
    office: "Kolkata Office",
    email: "p.sarkar@chelsongordon.com",
    phone: "+91 98311 00015",
    bio: "Maintains communication indexes and coordinates external liaison logs.",
    avatar: "PS",
    supervisorId: "sonu-padiyar"
  },
  {
    id: "shreyosi-saha",
    name: "Shreyosi Saha",
    role: "Junior Business Administrator",
    department: "Business Consultant",
    office: "Kolkata Office",
    email: "s.shaha@chelsongordon.com",
    phone: "+91 98311 00016",
    bio: "Directs scheduling frameworks and structures data folders for consulting projects.",
    avatar: "SS",
    supervisorId: "sonu-padiyar"
  },
  {
    id: "yashi-sharma",
    name: "Yashi Sharma",
    role: "Junior Consultant",
    department: "Business Consultant",
    office: "Kolkata Office",
    email: "y.sharma@chelsongordon.com",
    phone: "+91 98311 00017",
    bio: "Assists with client feedback collation and optimizes review workflows.",
    avatar: "YS",
    supervisorId: "sonu-padiyar"
  },
  {
    id: "sahil-khan",
    name: "Sahil Khan",
    role: "Junior Consultant",
    department: "Business Consultant",
    office: "Kolkata Office",
    email: "s.khan2@chelsongordon.com",
    phone: "+91 98311 00018",
    bio: "Assists with business diagnostics and researches training market setups.",
    avatar: "SK",
    supervisorId: "sonu-padiyar"
  },
  {
    id: "andrew-moitra",
    name: "Andrew Moitra",
    role: "Consultant in Training",
    department: "Business Consultant",
    office: "Kolkata Office",
    email: "a.moitra@chelsongordon.com",
    phone: "+91 98311 00019",
    bio: "Undergoes rigorous corporate standard tutorials and supports active diagnostic campaigns.",
    avatar: "AM",
    supervisorId: "sonu-padiyar"
  },
  {
    id: "drooti-chatterjee",
    name: "Drooti Chatterjee",
    role: "Junior Consultant",
    department: "Business Consultant",
    office: "Kolkata Office",
    email: "d.chatterjee@chelsongordon.com",
    phone: "+91 98311 00020",
    bio: "Assists with consultation briefings and keeps accurate administrative logs.",
    avatar: "DC",
    supervisorId: "sonu-padiyar"
  },

  // ==========================================
  // SPECIALIST CONSULTANT DEPARTMENT
  // ==========================================
  {
    id: "isaac-lallawmsanga",
    name: "Isaac Lallawmsanga",
    role: "Senior Consultant",
    department: "Specialist Consultant",
    office: "Kolkata Office",
    email: "i.lallawmsanga@chelsongordon.com",
    phone: "+91 98333 11111",
    bio: "Gives premier oversight across advanced technical and curriculum consulting fields.",
    avatar: "IL",
    supervisorId: "fiona-kee"
  },
  {
    id: "abhik-purkayastha",
    name: "Abhik Purkayastha",
    role: "Senior Consultant in Training",
    department: "Specialist Consultant",
    office: "Kolkata Office",
    email: "a.purkayastha@chelsongordon.com",
    phone: "+91 98333 22222",
    bio: "Maintains active operational checklists and provides key oversight for local engineering and biotech cases.",
    avatar: "AP",
    supervisorId: "isaac-lallawmsanga"
  },
  {
    id: "adrija-chakraborty",
    name: "Adrija Chakraborty",
    role: "Specialist Business Consultant (Electronic)",
    department: "Specialist Consultant",
    office: "Kolkata Office",
    email: "a.chakraborty@chelsongordon.com",
    phone: "+91 98333 33333",
    bio: "Reviews standards for electronic programs and validates compliance profiles.",
    avatar: "AC",
    supervisorId: "abhik-purkayastha"
  },
  {
    id: "dr-nisha-chadda",
    name: "Dr. Nisha Chadda",
    role: "Specialist Business Consultant (Business)",
    department: "Specialist Consultant",
    office: "Udaipur Office",
    email: "n.chadda@chelsongordon.com",
    phone: "+91 98290 11111",
    bio: "Provides elite academic advice on higher administration and enterprise syllabus planning.",
    avatar: "NC",
    supervisorId: "isaac-lallawmsanga"
  },
  {
    id: "dr-shweta-solanki",
    name: "Dr. Shweta Solanki",
    role: "Specialist Business Consultant (Business)",
    department: "Specialist Consultant",
    office: "Udaipur Office",
    email: "s.solanki@chelsongordon.com",
    phone: "+91 98290 22222",
    bio: "Guides institutional faculty frameworks and ensures strategic training alignments.",
    avatar: "SS",
    supervisorId: "isaac-lallawmsanga"
  },
  {
    id: "gopal-kochak",
    name: "Gopal Kochak",
    role: "Specialist Business Consultant (Hospitality)",
    department: "Specialist Consultant",
    office: "Kolkata Office",
    email: "g.kochak@chelsongordon.com",
    phone: "+91 98333 44444",
    bio: "Directs evaluation processes for hospitality management curriculum modules.",
    avatar: "GK",
    supervisorId: "abhik-purkayastha"
  },
  {
    id: "dr-puja-joshi",
    name: "Dr. Puja Joshi",
    role: "Specialist Business Consultant (Community Service)",
    department: "Specialist Consultant",
    office: "Udaipur Office",
    email: "p.joshi@chelsongordon.com",
    phone: "+91 98290 33333",
    bio: "Validates healthcare training methodologies and maps public sector safety checks.",
    avatar: "PJ",
    supervisorId: "isaac-lallawmsanga"
  },
  {
    id: "suvrima-das",
    name: "Suvrima Das",
    role: "Specialist Business Consultant (Civil Engineering)",
    department: "Specialist Consultant",
    office: "Udaipur Office",
    email: "s.das@chelsongordon.com",
    phone: "+91 98290 44444",
    bio: "Prepares detailed audits for civil and heavy engineering curriculum projects.",
    avatar: "SD",
    supervisorId: "isaac-lallawmsanga"
  },
  {
    id: "subhankar-roy",
    name: "Subhankar Roy",
    role: "Specialist Business Consultant (Biotechnology)",
    department: "Specialist Consultant",
    office: "Kolkata Office",
    email: "s.roy@chelsongordon.com",
    phone: "+91 98333 55555",
    bio: "Reviews biotechnology program credentials and guides corporate clinical audits.",
    avatar: "SR",
    supervisorId: "abhik-purkayastha"
  },
  {
    id: "rishikesh-das",
    name: "Rishikesh Das",
    role: "Specialist Business Consultant (Biotechnology)",
    department: "Specialist Consultant",
    office: "Kolkata Office",
    email: "r.das@chelsongordon.com",
    phone: "+91 98333 66666",
    bio: "Validates laboratory training frameworks and maps biotech syllabus parameters.",
    avatar: "RD",
    supervisorId: "abhik-purkayastha"
  },
  {
    id: "priya-pal-singh",
    name: "Priya Pal Singh",
    role: "Specialist Business Consultant (Logistics)",
    department: "Specialist Consultant",
    office: "Udaipur Office",
    email: "p.singh@chelsongordon.com",
    phone: "+91 98290 55555",
    bio: "Directs evaluation processes for global transport, logistics, and supply chain modules.",
    avatar: "PS",
    supervisorId: "isaac-lallawmsanga"
  },
  {
    id: "srijita-chakraborty",
    name: "Srijita Chakraborty",
    role: "Specialist Business Consultant",
    department: "Specialist Consultant",
    office: "Kolkata Office",
    email: "s.chakraborty2@chelsongordon.com",
    phone: "+91 98333 77777",
    bio: "Guides training compliance checkups and designs general assessment layouts.",
    avatar: "SC",
    supervisorId: "abhik-purkayastha"
  },
  {
    id: "nilargha-roy",
    name: "Nilargha Roy",
    role: "Specialist Business Consultant",
    department: "Specialist Consultant",
    office: "Kolkata Office",
    email: "n.roy@chelsongordon.com",
    phone: "+91 98333 88888",
    bio: "Conducts standard technical course reviews and maps training goals.",
    avatar: "NR",
    supervisorId: "abhik-purkayastha"
  },
  {
    id: "sagnik-saha",
    name: "Sagnik Saha",
    role: "Specialist Business Consultant",
    department: "Specialist Consultant",
    office: "Kolkata Office",
    email: "s.saha2@chelsongordon.com",
    phone: "+91 98333 99999",
    bio: "Structures operational check-ins and evaluates instructional material formats.",
    avatar: "SS",
    supervisorId: "abhik-purkayastha"
  },
  {
    id: "debangshu-roy",
    name: "Debangshu Roy",
    role: "Specialist Business Consultant (AI and Machine Learning)",
    department: "Specialist Consultant",
    office: "Kolkata Office",
    email: "d.roy@chelsongordon.com",
    phone: "+91 98333 00001",
    bio: "Analyzes AI technology curriculums and ensures adherence to global educational credentials.",
    avatar: "DR",
    supervisorId: "abhik-purkayastha"
  },
  {
    id: "iffat-ali",
    name: "Iffat Ali",
    role: "Specialist Business Consultant",
    department: "Specialist Consultant",
    office: "Kolkata Office",
    email: "i.ali@chelsongordon.com",
    phone: "+91 98333 00002",
    bio: "Supports active system audits and produces high-quality compliance documentation.",
    avatar: "IA",
    supervisorId: "abhik-purkayastha"
  },
  {
    id: "mirza-musaraf-ali",
    name: "Mirza Musaraf Ali",
    role: "Specialist Business Consultant (Civil Engineering)",
    department: "Specialist Consultant",
    office: "Kolkata Office",
    email: "m.m.ali@chelsongordon.com",
    phone: "+91 98333 00003",
    bio: "Provides engineering curriculum support and organizes laboratory guides.",
    avatar: "MA",
    supervisorId: "abhik-purkayastha"
  },
  {
    id: "mohammad-ali",
    name: "Mohammad Ali",
    role: "Specialist Business Consultant (Civil Engineering)",
    department: "Specialist Consultant",
    office: "Kolkata Office",
    email: "m.ali@chelsongordon.com",
    phone: "+91 98333 00004",
    bio: "Reviews building construction curriculum material and compiles audit paperwork.",
    avatar: "MA",
    supervisorId: "abhik-purkayastha"
  },

  // ==========================================
  // LEARNING & ACADEMIC OPERATIONS
  // ==========================================
  {
    id: "navdeep-verma",
    name: "Navdeep Verma",
    role: "Administrative Manager",
    department: "Learning & Academic Operations",
    office: "Sydney Office",
    email: "n.verma@chelsongordon.com",
    phone: "+61 499 994 550",
    bio: "Oversees operational efficiency under academic rules, audits, support staff, and student systems globally.",
    avatar: "NV",
    supervisorId: "charles-dejsakultorn"
  },
  {
    id: "yijing-ong",
    name: "Yijing Ong",
    role: "Senior Consultant",
    department: "Learning & Academic Operations",
    office: "Bangkok Office",
    email: "y.ong@chelsongordon.com",
    phone: "+66 62 174 5081",
    bio: "Guiding VET policies, academic transitions, and complex compliance portfolios across Asian offices.",
    avatar: "YO",
    supervisorId: "charles-dejsakultorn"
  },

  // Sub Team leads
  {
    id: "kenji-panwa",
    name: "Kenji Panwa",
    role: "Student Support Officer",
    department: "Learning & Academic Operations",
    office: "Bangkok Office",
    email: "k.panwa@chelsongordon.com",
    phone: "+66 62 174 5210",
    bio: "Leads Southeast Asian student inquiries, local files, and support systems.",
    avatar: "KP",
    supervisorId: "navdeep-verma"
  },
  {
    id: "somriknath-ayan-mitra",
    name: "Somriknath Ayan Mitra",
    role: "Student Support Officer",
    department: "Learning & Academic Operations",
    office: "Kolkata Office",
    email: "s.mitra@chelsongordon.com",
    phone: "+91 98344 11111",
    bio: "Aids client and learner integration files and handles standard questions.",
    avatar: "SM",
    supervisorId: "navdeep-verma"
  },
  {
    id: "kaokla-gerttawee",
    name: "Kaokla Gerttawee",
    role: "Administrative Support",
    department: "Learning & Academic Operations",
    office: "Bangkok Office",
    email: "k.gerttawee@chelsongordon.com",
    phone: "+66 62 174 5211",
    bio: "Directs internal documentation checks and validates regional admin pipelines.",
    avatar: "KG",
    supervisorId: "navdeep-verma"
  },
  {
    id: "michelle-campbell",
    name: "Michelle Campbell",
    role: "Course Coordinator",
    department: "Learning & Academic Operations",
    office: "Brisbane Office",
    email: "m.campbell@chelsongordon.com",
    phone: "+61 499 994 560",
    bio: "Reviews Brisbane courses, student records, and ensures perfect academic timelines.",
    avatar: "MC",
    supervisorId: "navdeep-verma"
  },
  {
    id: "parvindar-singh",
    name: "Parvindar Singh",
    role: "Course Coordinator",
    department: "Learning & Academic Operations",
    office: "Brisbane Office",
    email: "p.singh@chelsongordon.com",
    phone: "+61 499 994 561",
    bio: "Oversees local vocational training, coordinate faculty meetings, and manages timelines.",
    avatar: "PS",
    supervisorId: "navdeep-verma"
  },
  {
    id: "princess-araje-antapil",
    name: "Princess Araje Antapil",
    role: "Senior Administrative Officer",
    department: "Learning & Academic Operations",
    office: "Philippines",
    email: "p.antapil@chelsongordon.com",
    phone: "+63 917 111 2222",
    bio: "Coordinates all Philippines administrative support teams and LMS operation protocols.",
    avatar: "PA",
    supervisorId: "navdeep-verma"
  },

  // Student Support Team Members
  {
    id: "ming-attamaethakul",
    name: "Ming Attamaethakul",
    role: "Student Support Officer",
    department: "Learning & Academic Operations",
    office: "Bangkok Office",
    email: "m.attamaethakul@chelsongordon.com",
    phone: "+66 62 174 5212",
    bio: "Assists student queries and keeps precise records of course progress.",
    avatar: "MA",
    supervisorId: "kenji-panwa"
  },
  {
    id: "varapula-suyash-murty",
    name: "Varapula Suyash Murty",
    role: "Student Support Officer",
    department: "Learning & Academic Operations",
    office: "Sydney Office",
    email: "v.murty@chelsongordon.com",
    phone: "+61 499 994 562",
    bio: "Coordinates Sydney regional support inquiries and structures onboarding databases.",
    avatar: "VM",
    supervisorId: "navdeep-verma"
  },
  {
    id: "sohana-pakhira",
    name: "Sohana Pakhira",
    role: "Student Support Officer",
    department: "Learning & Academic Operations",
    office: "Kolkata Office",
    email: "s.pakhira@chelsongordon.com",
    phone: "+91 98344 22222",
    bio: "Provides learner assistance and coordinates feedback surveys.",
    avatar: "SP",
    supervisorId: "somriknath-ayan-mitra"
  },
  {
    id: "ahraz-arshad",
    name: "Ahraz Arshad",
    role: "Student Support Officer",
    department: "Learning & Academic Operations",
    office: "Kolkata Office",
    email: "a.arshad@chelsongordon.com",
    phone: "+91 98344 33333",
    bio: "Ensures responsive support ticket resolutions and tracks academic progress.",
    avatar: "AA",
    supervisorId: "somriknath-ayan-mitra"
  },
  {
    id: "anjali-yadav",
    name: "Anjali Yadav",
    role: "Student Support Officer",
    department: "Learning & Academic Operations",
    office: "Kolkata Office",
    email: "a.yadav@chelsongordon.com",
    phone: "+91 98344 44444",
    bio: "Handles onboarding sessions and aids enrollment documentation pathways.",
    avatar: "AY",
    supervisorId: "somriknath-ayan-mitra"
  },
  {
    id: "sahil-singh",
    name: "Sahil Singh",
    role: "Student Support Officer",
    department: "Learning & Academic Operations",
    office: "Kolkata Office",
    email: "s.singh2@chelsongordon.com",
    phone: "+91 98344 55555",
    bio: "Coordinates and schedules online learning webinars and supports student queries.",
    avatar: "SS",
    supervisorId: "somriknath-ayan-mitra"
  },
  {
    id: "debdoot-karmakar",
    name: "Debdoot Karmakar",
    role: "Student Support Officer",
    department: "Learning & Academic Operations",
    office: "Kolkata Office",
    email: "d.karmakar@chelsongordon.com",
    phone: "+91 98344 66666",
    bio: "Assists student registrations and logs operational inquiry databases.",
    avatar: "DK",
    supervisorId: "somriknath-ayan-mitra"
  },

  // Administrative Support Team Members
  {
    id: "knight-yontawin",
    name: "Knight Yontawin",
    role: "Junior Administrative Officer",
    department: "Learning & Academic Operations",
    office: "Bangkok Office",
    email: "k.yontawin@chelsongordon.com",
    phone: "+66 62 174 5213",
    bio: "Supports file validation checkups and updates office administrative trackers.",
    avatar: "KY",
    supervisorId: "kaokla-gerttawee"
  },
  {
    id: "tanvi-yamudi",
    name: "Tanvi Yamudi",
    role: "Junior Business Administrator",
    department: "Learning & Academic Operations",
    office: "Kolkata Office",
    email: "t.yamudi@chelsongordon.com",
    phone: "+91 98345 11111",
    bio: "Aids corporate planning schedules and coordinates cross-office directories.",
    avatar: "TY",
    supervisorId: "kaokla-gerttawee"
  },
  {
    id: "ayan-bhattacharya",
    name: "Ayan Bhattacharya",
    role: "Junior Business Administrator",
    department: "Learning & Academic Operations",
    office: "Kolkata Office",
    email: "a.bhattacharya@chelsongordon.com",
    phone: "+91 98345 22222",
    bio: "Maintains files, logs communications, and indexes regional files.",
    avatar: "AB",
    supervisorId: "kaokla-gerttawee"
  },
  {
    id: "arishma-sahil",
    name: "Arishma Sahil",
    role: "Junior Business Administrator",
    department: "Learning & Academic Operations",
    office: "Kolkata Office",
    email: "a.sahil@chelsongordon.com",
    phone: "+91 98345 33333",
    bio: "Coordinates correspondence archives and structures digital directories.",
    avatar: "AS",
    supervisorId: "kaokla-gerttawee"
  },
  {
    id: "jaidan-krishna",
    name: "Jaidan Krishna",
    role: "Junior Business Administrator",
    department: "Learning & Academic Operations",
    office: "Kolkata Office",
    email: "j.krishna@chelsongordon.com",
    phone: "+91 98345 44444",
    bio: "Provides data entry backups and compiles academic status summaries.",
    avatar: "JK",
    supervisorId: "kaokla-gerttawee"
  },
  {
    id: "sohana-parvin",
    name: "Sohana Parvin",
    role: "Junior Business Administrative Officer",
    department: "Learning & Academic Operations",
    office: "Kolkata Office",
    email: "s.parvin2@chelsongordon.com",
    phone: "+91 98345 55555",
    bio: "Schedules corporate meetings and records compliance logs.",
    avatar: "SP",
    supervisorId: "kaokla-gerttawee"
  },
  {
    id: "manab-saha",
    name: "Manab Saha",
    role: "Administrative Support Officer",
    department: "Learning & Academic Operations",
    office: "Kolkata Office",
    email: "m.saha@chelsongordon.com",
    phone: "+91 98345 66666",
    bio: "Manages central filing channels and monitors compliance trackers.",
    avatar: "MS",
    supervisorId: "kaokla-gerttawee"
  },
  {
    id: "ronny-saha",
    name: "Ronny Saha",
    role: "Administration Officer in Training",
    department: "Learning & Academic Operations",
    office: "Kolkata Office",
    email: "r.saha@chelsongordon.com",
    phone: "+91 98345 77777",
    bio: "Assists with daily clerical duties and logs operational activities.",
    avatar: "RS",
    supervisorId: "kaokla-gerttawee"
  },
  {
    id: "suruchi-sharma",
    name: "Suruchi Sharma",
    role: "Junior Administration Support",
    department: "Learning & Academic Operations",
    office: "Kolkata Office",
    email: "s.sharma2@chelsongordon.com",
    phone: "+91 98345 88888",
    bio: "Provides administrative backup and supports coordination workflows.",
    avatar: "SS",
    supervisorId: "kaokla-gerttawee"
  },

  // Course Coordination
  {
    id: "sailosi-davetanivalu",
    name: "Sailosi Davetanivalu",
    role: "Junior Course Coordinator",
    department: "Learning & Academic Operations",
    office: "Lautoka Office",
    email: "s.davetanivalu@chelsongordon.com",
    phone: "+679 666 1111",
    bio: "Provides regional course material indexing and manages schedules.",
    avatar: "SD",
    supervisorId: "michelle-campbell"
  },

  // Learning Support Team Members
  {
    id: "aastha-rai",
    name: "Aastha Rai",
    role: "Learning Support Assistant",
    department: "Learning & Academic Operations",
    office: "Kolkata Office",
    email: "a.rai@chelsongordon.com",
    phone: "+91 98346 11111",
    bio: "Aids classroom material alignment and structures study databases.",
    avatar: "AR",
    supervisorId: "navdeep-verma"
  },

  // Philippines group reporting to Princess Araje Antapil
  {
    id: "elly-shahgiana-latorre",
    name: "Elly Shahgiana Latorre",
    role: "Administration Support Officer",
    department: "Learning & Academic Operations",
    office: "Philippines",
    email: "e.latorre@chelsongordon.com",
    phone: "+63 917 222 3333",
    bio: "Coordinates LMS administrative pipelines for global student structures.",
    avatar: "EL",
    supervisorId: "princess-araje-antapil"
  },
  {
    id: "susan-cruz",
    name: "Susan Cruz",
    role: "Administration Support",
    department: "Learning & Academic Operations",
    office: "Philippines",
    email: "s.cruz@chelsongordon.com",
    phone: "+63 917 333 4444",
    bio: "Processes admissions registers and structures digital student databases.",
    avatar: "SC",
    supervisorId: "princess-araje-antapil"
  },
  {
    id: "maria-pedrosa",
    name: "Maria Pedrosa",
    role: "Administration Support",
    department: "Learning & Academic Operations",
    office: "Philippines",
    email: "m.pedrosa@chelsongordon.com",
    phone: "+63 917 444 5555",
    bio: "Coordinates clerical workflows and handles high-volume record checkups.",
    avatar: "MP",
    supervisorId: "princess-araje-antapil"
  },
  {
    id: "cyril-ann-parilla",
    name: "Cyril Ann Parilla",
    role: "Administration Support Officer",
    department: "Learning & Academic Operations",
    office: "Philippines",
    email: "c.parilla@chelsongordon.com",
    phone: "+63 917 555 6666",
    bio: "Schedules review cycles and manages database integrity.",
    avatar: "CP",
    supervisorId: "princess-araje-antapil"
  },
  {
    id: "joey-mitchel-r-alia",
    name: "Joey Mitchel R. Alia",
    role: "Administration Support",
    department: "Learning & Academic Operations",
    office: "Philippines",
    email: "j.alia@chelsongordon.com",
    phone: "+63 917 666 7777",
    bio: "Executes document checks and structures high-contrast data indexes.",
    avatar: "JA",
    supervisorId: "princess-araje-antapil"
  },
  {
    id: "hangelica-minase",
    name: "Hangelica Minase",
    role: "Administration Support Officer",
    department: "Learning & Academic Operations",
    office: "Philippines",
    email: "h.minase@chelsongordon.com",
    phone: "+63 917 777 8888",
    bio: "Reviews customer communications and tracks compliance parameters.",
    avatar: "HM",
    supervisorId: "princess-araje-antapil"
  },
  {
    id: "john-mark-verar",
    name: "John Mark Verar",
    role: "Administration Support Officer (Learning Support)",
    department: "Learning & Academic Operations",
    office: "Philippines",
    email: "j.verar@chelsongordon.com",
    phone: "+63 917 888 9999",
    bio: "Supports teacher dashboards and compiles course progress metrics.",
    avatar: "JV",
    supervisorId: "princess-araje-antapil"
  },
  {
    id: "jesmilym-parajas",
    name: "Jesmilym Parajas",
    role: "Administration Support Officer (Learning Support)",
    department: "Learning & Academic Operations",
    office: "Philippines",
    email: "j.parajas@chelsongordon.com",
    phone: "+63 917 999 0000",
    bio: "Aligns tutorial resources and coordinates learner inquiries.",
    avatar: "JP",
    supervisorId: "princess-araje-antapil"
  },
  {
    id: "kim-coleen-h-delossantos",
    name: "Kim Coleen H. Delossantos",
    role: "Administration Support Officer (Learning Support)",
    department: "Learning & Academic Operations",
    office: "Philippines",
    email: "k.delossantos@chelsongordon.com",
    phone: "+63 917 111 3333",
    bio: "Aids in managing LMS user groups and logs academic support tickets.",
    avatar: "KD",
    supervisorId: "princess-araje-antapil"
  },
  {
    id: "tessa-abigail-g-parawan",
    name: "Tessa Abigail G. Parawan",
    role: "Business Support Officer",
    department: "Learning & Academic Operations",
    office: "Philippines",
    email: "t.parawan@chelsongordon.com",
    phone: "+63 917 222 4444",
    bio: "Ensures operational readiness and aids communication alignments.",
    avatar: "TP",
    supervisorId: "princess-araje-antapil"
  },
  {
    id: "charlene-c-papa",
    name: "Charlene C. Papa",
    role: "Administration Support",
    department: "Learning & Academic Operations",
    office: "Philippines",
    email: "c.papa@chelsongordon.com",
    phone: "+63 917 333 5555",
    bio: "Performs document archiving and structures compliance files.",
    avatar: "CP",
    supervisorId: "princess-araje-antapil"
  },
  {
    id: "michaleb-b-jacomilla",
    name: "Michaleb B. Jacomilla",
    role: "Administration Support",
    department: "Learning & Academic Operations",
    office: "Philippines",
    email: "m.jacomilla@chelsongordon.com",
    phone: "+63 917 444 6666",
    bio: "Aids with general clerical operations and student system updates.",
    avatar: "MJ",
    supervisorId: "princess-araje-antapil"
  },
  {
    id: "kimberly-t-reyes",
    name: "Kimberly T. Reyes",
    role: "Administration Support",
    department: "Learning & Academic Operations",
    office: "Philippines",
    email: "k.reyes@chelsongordon.com",
    phone: "+63 917 555 7777",
    bio: "Processes information verification requests and organizes core data records.",
    avatar: "KR",
    supervisorId: "princess-araje-antapil"
  },
  {
    id: "genevieve-a-pamintuan",
    name: "Genevieve A. Pamintuan",
    role: "Administration Support Officer",
    department: "Learning & Academic Operations",
    office: "Philippines",
    email: "g.pamintuan@chelsongordon.com",
    phone: "+63 917 666 8888",
    bio: "Oversees local administrative checklists and prepares audit records.",
    avatar: "GP",
    supervisorId: "princess-araje-antapil"
  },
  {
    id: "tracy-joy-noval",
    name: "Tracy Joy Noval",
    role: "Administration Support Officer",
    department: "Learning & Academic Operations",
    office: "Philippines",
    email: "t.noval@chelsongordon.com",
    phone: "+63 917 777 9999",
    bio: "Validates files, organizes system indexes, and manages core schedules.",
    avatar: "TN",
    supervisorId: "princess-araje-antapil"
  },
  {
    id: "kartika",
    name: "Kartika",
    role: "Administration Support Officer",
    department: "Learning & Academic Operations",
    office: "Philippines",
    email: "kartika@chelsongordon.com",
    phone: "+63 917 888 0000",
    bio: "Coordinates admissions data tracking and performs daily record validations.",
    avatar: "KA",
    supervisorId: "princess-araje-antapil"
  },

  // Lautoka Operations / Customer service
  {
    id: "sevuloni-ratu",
    name: "Sevuloni Ratu",
    role: "Academic Assistant - Management and Leadership",
    department: "Learning & Academic Operations",
    office: "Lautoka Office",
    email: "s.ratu@chelsongordon.com",
    phone: "+679 666 1111",
    bio: "Supports course resource alignment for management programs.",
    avatar: "SR",
    supervisorId: "navdeep-verma"
  },
  {
    id: "anada-beikorolevu",
    name: "Anada Beikorolevu",
    role: "Academic Assistant - Community Services",
    department: "Learning & Academic Operations",
    office: "Lautoka Office",
    email: "a.beikorolevu@chelsongordon.com",
    phone: "+679 666 2222",
    bio: "Maintains files for healthcare and community services training.",
    avatar: "AB",
    supervisorId: "navdeep-verma"
  },
  {
    id: "ashwini-devi",
    name: "Ashwini Devi",
    role: "Academic Assistant - Hospitality Management",
    department: "Learning & Academic Operations",
    office: "Lautoka Office",
    email: "a.devi@chelsongordon.com",
    phone: "+679 666 3333",
    bio: "Compiles syllabus materials and supports academic hospitality operations.",
    avatar: "AD",
    supervisorId: "navdeep-verma"
  },
  {
    id: "humaera-khan",
    name: "Humaera Khan",
    role: "Customer Service Officer",
    department: "Learning & Academic Operations",
    office: "Lautoka Office",
    email: "h.khan@chelsongordon.com",
    phone: "+679 666 4444",
    bio: "Answers customer queries and maintains the regional switchboard.",
    avatar: "HK",
    supervisorId: "navdeep-verma"
  },
  {
    id: "laisa-mariana-kaloudrau",
    name: "Laisa Mariana Kaloudrau",
    role: "Customer Service Officer",
    department: "Learning & Academic Operations",
    office: "Lautoka Office",
    email: "l.kaloudrau@chelsongordon.com",
    phone: "+679 666 5555",
    bio: "Conducts customer support audits and indexes standard administrative files.",
    avatar: "LK",
    supervisorId: "navdeep-verma"
  },

  // Zhangzhou
  {
    id: "jerry-wang",
    name: "Jerry Wang",
    role: "Administrative Service Support",
    department: "Learning & Academic Operations",
    office: "Zhangzhou Office",
    email: "j.wang@chelsongordon.com",
    phone: "+61 499 994 554",
    bio: "Optimizes client care interfaces, monitors inquiries, and implements corporate support response guidelines.",
    avatar: "JW",
    supervisorId: "navdeep-verma"
  }
];

// Helper to structure flat list recursively
export const buildHierarchicalTree = (employees: Employee[]): Employee => {
  // Global company root node
  const companyRoot: Employee = {
    id: "company-root",
    name: "Chelson Gordon Consultancy",
    role: "Global Enterprise",
    department: "Executive Board",
    office: "Global",
    email: "info@chelsongordon.com",
    phone: "+61 499 994 530",
    bio: "A premier international advisory group supporting compliance, legal, academic, and strategic operations for educational providers on a global scale.",
    avatar: "CG"
  };

  // Find topmost actual executives (Charles and Fiona)
  const executives = employees.filter(e => e.id === "charles-dejsakultorn" || e.id === "fiona-kee");
  
  // Build relationship tree recursively
  const buildTreeHelper = (node: Employee) => {
    // Collect direct reportees who point to this supervisor id
    const directReports = employees.filter(e => e.supervisorId === node.id);
    
    // Group department leaders under executives
    if (node.id === "charles-dejsakultorn") {
      // Departments under Charles: Human Strategy, Marketing, Learning & Academic Operations
      const adminDepts = ["Human Strategy", "Marketing", "Learning & Academic Operations"];
      const deptNodes = adminDepts.map(deptName => {
        // Find the main leader of the department under Charles
        const deptHead = employees.find(e => {
          if (deptName === "Human Strategy" && e.id === "boss-arkkarametyingyod") return true;
          if (deptName === "Marketing" && e.id === "peace-kunthongkaew") return true;
          if (deptName === "Learning & Academic Operations" && e.id === "navdeep-verma") return true;
          return false;
        });
        if (deptHead) {
          const headNode = { ...deptHead };
          buildTreeHelper(headNode);
          return headNode;
        }
        return null;
      }).filter(Boolean) as Employee[];
      node.children = deptNodes;
    } else if (node.id === "fiona-kee") {
      // Departments under Fiona: Specialist Consultant, Business Consultant
      const advisoryDepts = ["Specialist Consultant", "Business Consultant"];
      const deptNodes = advisoryDepts.map(deptName => {
        const deptHead = employees.find(e => {
          if (deptName === "Specialist Consultant" && e.id === "isaac-lallawmsanga") return true;
          if (deptName === "Business Consultant" && e.id === "vedic-yadav") return true;
          return false;
        });
        if (deptHead) {
          const headNode = { ...deptHead };
          buildTreeHelper(headNode);
          return headNode;
        }
        return null;
      }).filter(Boolean) as Employee[];
      node.children = deptNodes;
    } else {
      // Standard deep recursive step for leaders to employees
      if (directReports.length > 0) {
        node.children = directReports.map(report => {
          const reportNode = { ...report };
          buildTreeHelper(reportNode);
          return reportNode;
        });
      }
    }
  };

  companyRoot.children = executives.map(exec => {
    const execNode = { ...exec };
    buildTreeHelper(execNode);
    return execNode;
  });

  return companyRoot;
};
