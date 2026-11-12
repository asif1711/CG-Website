export interface CurriculumUnit {
  code: string;
  title: string;
  group: 'foundation' | 'specialised';
}

export interface LearningArea {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface TargetAudience {
  title: string;
  description: string;
}

export interface CourseData {
  id: string;
  slug: string;
  title: string;
  code: string;
  aqfLevel: number;
  classification: string;
  status: string;
  recognitionManager: string;
  currency: string;
  fieldOfEducation: string;
  officialSource: string;
  intake: string;
  intakeMessage: string;
  deliveryFormat: string;
  totalUnits: number;
  foundationUnitsCount: number;
  specialisedUnitsCount: number;
  heroImage: string;
  cardImage: string;
  overviewHeading: string;
  overviewParagraphs: string[];
  learningAreasHeading: string;
  learningAreas: LearningArea[];
  curriculumHeading: string;
  units: CurriculumUnit[];
  audienceHeading: string;
  audiences: TargetAudience[];
  capabilitiesHeading: string;
  capabilities: string[];
  intakeHeading: string;
  enquiryHeading: string;
  enquiryDescription: string;
  contact: {
    phone: string;
    phoneFormatted: string;
    phoneLink: string;
    email: string;
    emailLink: string;
    website: string;
    websiteLink: string;
  };
}

export const DIPLOMA_AI_COURSE: CourseData = {
  id: 'diploma-machine-learning-artificial-intelligence',
  slug: '/courses/diploma-machine-learning-artificial-intelligence/',
  title: 'Diploma of Machine Learning and Artificial Intelligence Technology',
  code: '11480NAT',
  aqfLevel: 5,
  classification: 'Nationally accredited course',
  status: 'Current',
  recognitionManager: 'Australian Skills Quality Authority (ASQA)',
  currency: '23 October 2026 – 22 October 2031',
  fieldOfEducation: 'Computer Science (0201)',
  officialSource: 'https://training.gov.au/Training/Details/11480NAT',
  intake: 'January 2027',
  intakeMessage: 'First Intake — January 2027 · Enrolments Opening Soon',
  deliveryFormat: 'Face-to-Face Training',
  totalUnits: 19,
  foundationUnitsCount: 4,
  specialisedUnitsCount: 15,
  heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
  cardImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
  overviewHeading: 'Building Practical Skills for the Future of AI',
  overviewParagraphs: [
    'The Diploma of Machine Learning and Artificial Intelligence Technology is designed to develop practical capabilities in implementing, managing and supporting AI and machine learning systems within organisational ICT environments.',
    'The course covers the AI implementation lifecycle, from programming and data preparation to machine learning development, deployment, testing, governance and enterprise integration.'
  ],
  learningAreasHeading: 'Explore the Technologies Shaping Tomorrow',
  learningAreas: [
    {
      id: '01',
      number: '01',
      title: 'Python Programming and Statistics',
      description: 'Develop Python programming capabilities and foundational statistical techniques used in AI and machine learning applications.'
    },
    {
      id: '02',
      number: '02',
      title: 'Machine Learning Development',
      description: 'Implement, train, tune and evaluate machine learning models.'
    },
    {
      id: '03',
      number: '03',
      title: 'Data Engineering and Analytics',
      description: 'Explore data engineering, data analysis and visualisation techniques for AI applications.'
    },
    {
      id: '04',
      number: '04',
      title: 'AI Deployment and Integration',
      description: 'Deploy, manage and integrate AI systems into existing organisational ICT environments.'
    },
    {
      id: '05',
      number: '05',
      title: 'Generative AI and Intelligent Solutions',
      description: 'Explore enterprise generative AI applications, decision-support systems and predictive forecasting solutions.'
    },
    {
      id: '06',
      number: '06',
      title: 'Responsible AI and Governance',
      description: 'Understand ethical AI practices, explainability, governance, testing, validation and auditing.'
    }
  ],
  curriculumHeading: 'Explore the Course Curriculum',
  units: [
    // Group A — ICT Foundation Units (4 units)
    {
      code: 'ICTNWK421',
      title: 'Install, configure and test network security',
      group: 'foundation'
    },
    {
      code: 'ICTPRG431',
      title: 'Apply query language in relational databases',
      group: 'foundation'
    },
    {
      code: 'ICTPRG433',
      title: 'Test software developments',
      group: 'foundation'
    },
    {
      code: 'ICTSAS432',
      title: 'Identify and resolve client ICT problems',
      group: 'foundation'
    },
    // Group B — Specialised AI and Machine Learning Units (15 units)
    {
      code: 'NAT11480001',
      title: 'Apply Python programming and foundational statistical techniques',
      group: 'specialised'
    },
    {
      code: 'NAT11480002',
      title: 'Implement artificial intelligence (AI) systems lifecycle',
      group: 'specialised'
    },
    {
      code: 'NAT11480003',
      title: 'Implement and tune machine learning models',
      group: 'specialised'
    },
    {
      code: 'NAT11480004',
      title: 'Deploy and manage artificial intelligence (AI) systems in operational environments',
      group: 'specialised'
    },
    {
      code: 'NAT11480005',
      title: 'Implement ethical and explainable artificial intelligence (AI) practices',
      group: 'specialised'
    },
    {
      code: 'NAT11480006',
      title: 'Implement data engineering techniques for artificial intelligence (AI) systems',
      group: 'specialised'
    },
    {
      code: 'NAT11480007',
      title: 'Test, validate and audit artificial intelligence (AI) systems',
      group: 'specialised'
    },
    {
      code: 'NAT11480008',
      title: 'Plan, develop and deploy an integrated artificial intelligence (AI) solution',
      group: 'specialised'
    },
    {
      code: 'NAT11480009',
      title: 'Analyse and visualise data for artificial intelligence (AI) applications',
      group: 'specialised'
    },
    {
      code: 'NAT11480010',
      title: 'Apply artificial intelligence (AI) governance policies in organisational contexts',
      group: 'specialised'
    },
    {
      code: 'NAT11480011',
      title: 'Develop artificial intelligence (AI) solutions for decision support and forecasting',
      group: 'specialised'
    },
    {
      code: 'NAT11480012',
      title: 'Integrate artificial intelligence systems with existing information and communications technology',
      group: 'specialised'
    },
    {
      code: 'NAT11480013',
      title: 'Implement machine learning operations pipelines and cloud-based artificial intelligence deployment',
      group: 'specialised'
    },
    {
      code: 'NAT11480014',
      title: 'Develop and apply generative artificial intelligence (AI) solutions in enterprise contexts',
      group: 'specialised'
    },
    {
      code: 'NAT11480015',
      title: 'Communicate artificial intelligence (AI) insights and support business decision-making',
      group: 'specialised'
    }
  ],
  audienceHeading: 'Who Is This Course Designed For?',
  audiences: [
    {
      title: 'Aspiring AI Professionals',
      description: 'Individuals looking to develop foundational and applied capabilities in artificial intelligence and machine learning.'
    },
    {
      title: 'IT and Software Professionals',
      description: 'People working in ICT, programming, systems administration or related technical environments.'
    },
    {
      title: 'Data and Analytics Professionals',
      description: 'Individuals interested in applying machine learning, data engineering and predictive analytics.'
    },
    {
      title: 'Technology Professionals',
      description: 'People looking to develop capabilities in AI deployment, enterprise integration and responsible AI practices.'
    }
  ],
  capabilitiesHeading: 'Turn Technical Knowledge into Practical Capabilities',
  capabilities: [
    'Develop and evaluate machine learning models.',
    'Implement Python-based AI workflows.',
    'Apply data engineering techniques.',
    'Deploy and manage AI systems.',
    'Develop enterprise generative AI solutions.',
    'Test and audit AI implementations.',
    'Integrate AI into existing ICT systems.',
    'Apply AI governance and responsible practices.'
  ],
  intakeHeading: 'Take the Next Step into the Future of AI',
  enquiryHeading: 'Interested in the Diploma of Machine Learning and Artificial Intelligence Technology?',
  enquiryDescription: 'Get in touch with Chelson Gordon Consultancy to express your interest and receive further information about the upcoming January 2027 intake.',
  contact: {
    phone: '+61 499 998 590',
    phoneFormatted: '+61 499 998 590',
    phoneLink: 'tel:+61499998590',
    email: 'n.malik@vconsultancy.com.au',
    emailLink: 'mailto:n.malik@vconsultancy.com.au?subject=Enquiry%20-%20Diploma%20of%20Machine%20Learning%20and%20AI%20(11480NAT)',
    website: 'https://chelsongordon.com/contact-us-page/',
    websiteLink: 'https://chelsongordon.com/contact-us-page/'
  }
};

export const ALL_COURSES: CourseData[] = [
  DIPLOMA_AI_COURSE
];
