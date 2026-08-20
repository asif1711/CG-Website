import { TeamInfo } from './types';

export const TEAMS_DATA: TeamInfo[] = [
  // ==========================================
  // ROW 1
  // 1st card: Learning and Academic Operations Team (50% width, 2 units)
  // 2nd card: Consultant Team (25% width, 1 unit, 1:1 aspect ratio)
  // 3rd card: Human Strategy Team (25% width, 1 unit, 1:1 aspect ratio)
  // ==========================================
  {
    id: 'learning-academic-team',
    slug: '/learning-team',
    category: 'LEARNING & ACADEMIC',
    name: 'Learning and Academic Operations Team',
    description: 'Designing meaningful learning journeys and ensuring academic excellence at every step.',
    image: 'https://storage.googleapis.com/chelsongordon/com.chelsongordon/images/our-people/learning_2.webp',
    imageAlt: 'Learning and Academic Operations Specialist',
    row: 1,
    orderInRow: 0,
    isWideByDefault: true, // 50% width
    layoutType: 'image-top',
    accentColor: '#042F61'
  },
  {
    id: 'consultant-team',
    slug: '/consultant-team',
    category: 'CONSULTANT TEAM',
    name: 'Consultant Team',
    description: 'Strategic thinkers and problem solvers partnering with clients to drive impact and sustainable growth.',
    image: 'https://storage.googleapis.com/chelsongordon/com.chelsongordon/images/our-people/consulting.webp',
    imageAlt: 'Consultant Team Lead',
    row: 1,
    orderInRow: 1,
    isWideByDefault: false, // 25% width (1:1 aspect ratio)
    layoutType: 'image-top',
    accentColor: '#042F61'
  },
  {
    id: 'human-strategy-team',
    slug: '/human-strategy-team',
    category: 'HUMAN STRATEGY',
    name: 'Human Strategy Team',
    description: 'Building a thriving culture by nurturing talent, well-being, and people strategy that drives us forward.',
    image: 'https://storage.googleapis.com/chelsongordon/com.chelsongordon/images/our-people/HR.webp',
    imageAlt: 'Human Strategy Leader',
    row: 1,
    orderInRow: 2,
    isWideByDefault: false, // 25% width (1:1 aspect ratio)
    layoutType: 'image-top',
    accentColor: '#042F61'
  },

  // ==========================================
  // ROW 2
  // 4th card: Executive Assistant Team (25% width, 1 unit, 1:1 aspect ratio)
  // 5th card: Operational Support Team (50% width, 2 units)
  // 6th card: Marketing Team (25% width, 1 unit, 1:1 aspect ratio)
  // ==========================================
  {
    id: 'executive-assistant-team',
    slug: '/assistant-team',
    category: 'EXECUTIVE ASSISTANT',
    name: 'Executive Assistant Team',
    description: 'Providing high-level support to leaders and teams, helping drive productivity and ensuring seamless execution of priorities.',
    image: 'https://chelsongordon.com/wp-content/uploads/2026/05/assistant.webp',
    imageAlt: 'Executive Assistant Team Lead',
    row: 2,
    orderInRow: 0,
    isWideByDefault: false, // 25% width (1:1 aspect ratio)
    layoutType: 'image-top',
    accentColor: '#042F61'
  },
  {
    id: 'operational-support-team',
    slug: '/operational-team',
    category: 'OPERATIONAL SUPPORT',
    name: 'Operational Support Team',
    description: 'Keeping everything running seamlessly so the rest of the team can focus on what matters most.',
    image: 'https://storage.googleapis.com/chelsongordon/com.chelsongordon/images/our-people/operations_2.webp',
    imageAlt: 'Operational Support Specialist',
    row: 2,
    orderInRow: 1,
    isWideByDefault: true, // 50% width
    layoutType: 'image-top',
    accentColor: '#042F61'
  },
  {
    id: 'marketing-team',
    slug: '/marketing-team',
    category: 'MARKETING TEAM',
    name: 'Marketing Team',
    description: 'Telling our story, connecting with our audience, and creating campaigns that inspire action.',
    image: 'https://chelsongordon.com/wp-content/uploads/2026/05/marketing.webp',
    imageAlt: 'Marketing Strategist',
    row: 2,
    orderInRow: 2,
    isWideByDefault: false, // 25% width (1:1 aspect ratio)
    layoutType: 'image-top',
    accentColor: '#042F61'
  }
];
