import {
  BrainCircuit,
  Boxes,
  CodeXml,
  Calculator,
  GraduationCap,
  Megaphone,
  Wrench,
  Search,
  Compass,
  Hammer,
  TrendingUp,
} from 'lucide-react'

export const pillars = [
  {
    key: 'technology',
    name: 'Technology',
    blurb: 'Build and integrate intelligent, secure digital solutions.',
    services: ['Artificial Intelligence', 'Blockchain Technology', 'Software Development', 'AI Tools & Technology'],
  },
  {
    key: 'business',
    name: 'Business Services',
    blurb: 'Professional support for compliance, growth and visibility.',
    services: ['Taxation & Business Consultancy', 'Digital Marketing'],
  },
  {
    key: 'education',
    name: 'Education',
    blurb: 'Practical skills for evolving careers and teams.',
    services: ['Educational Academy & Training'],
  },
]

export const services = [
  {
    id: '01',
    title: 'Artificial Intelligence Services',
    short: 'Artificial Intelligence',
    pillar: 'Technology',
    icon: BrainCircuit,
    span: 'md:col-span-2',
    note: 'Build & integrate',
    description:
      'Intelligent solutions that help businesses automate operations, improve productivity and work smarter.',
    capabilities: [
      'AI solutions and integration',
      'AI chatbot development',
      'AI-powered automation',
      'AI content generation',
      'AI agents and virtual assistants',
      'AI tools implementation',
    ],
  },
  {
    id: '02',
    title: 'Blockchain Technology Services',
    short: 'Blockchain',
    pillar: 'Technology',
    icon: Boxes,
    description:
      'Building secure, decentralised and innovative digital solutions using blockchain technology.',
    capabilities: [
      'Blockchain development',
      'Smart contract development',
      'Decentralised applications',
      'Web3 solutions',
      'Blockchain consulting',
    ],
  },
  {
    id: '03',
    title: 'Software Development Services',
    short: 'Software Development',
    pillar: 'Technology',
    icon: CodeXml,
    description: 'Custom digital products and software solutions designed around business requirements.',
    capabilities: [
      'Website development',
      'Mobile application development',
      'Custom software development',
      'Web applications',
      'E-commerce development',
      'Business software solutions',
    ],
  },
  {
    id: '04',
    title: 'Taxation & Business Consultancy',
    short: 'Taxation & Consultancy',
    pillar: 'Business Services',
    icon: Calculator,
    description:
      'Professional support for taxation, accounting, business registration and compliance requirements.',
    capabilities: [
      'Income tax return filing assistance',
      'GST registration and return assistance',
      'PAN and TAN application assistance',
      'Accounting and bookkeeping',
      'Business registration assistance',
      'Tax and compliance consultancy',
    ],
  },
  {
    id: '05',
    title: 'Educational Academy & Training',
    short: 'Academy & Training',
    pillar: 'Education',
    icon: GraduationCap,
    description:
      'Practical technology education and professional training to prepare individuals for evolving career opportunities.',
    capabilities: [
      'Artificial Intelligence courses',
      'Blockchain technology courses',
      'Python programming',
      'Software development courses',
      'Web development',
      'Digital marketing courses',
      'Computer education and IT training',
    ],
  },
  {
    id: '06',
    title: 'Digital Marketing Services',
    short: 'Digital Marketing',
    pillar: 'Business Services',
    icon: Megaphone,
    description:
      'Helping brands improve their digital presence, connect with audiences and grow their businesses.',
    capabilities: [
      'Social media marketing',
      'Search engine optimisation (SEO)',
      'Google and Meta advertising',
      'Content marketing',
      'Graphic design and branding',
      'Video editing and promotions',
    ],
  },
  {
    id: '07',
    title: 'AI Tools & Technology Solutions',
    short: 'AI Tools & Technology',
    pillar: 'Technology',
    icon: Wrench,
    span: 'lg:col-span-2',
    note: 'Adoption & productivity',
    description: 'Helping businesses adopt modern technology tools and improve everyday productivity.',
    capabilities: [
      'AI software tools setup',
      'AI tools consulting',
      'Business productivity tools',
      'AI software implementation',
      'Technology tools training',
    ],
  },
]

export const differentiators = [
  {
    id: '01',
    title: 'Multiple Services Under One Roof',
    text: 'Technology, consultancy, education and digital solutions through one organisation.',
  },
  {
    id: '02',
    title: 'Modern Technology-Driven Solutions',
    text: 'Practical adoption of modern technologies to solve real-world problems.',
  },
  {
    id: '03',
    title: 'Customer-Focused Approach',
    text: 'Solutions and services designed around individual and organisational requirements.',
  },
  {
    id: '04',
    title: 'Reliable Professional Support',
    text: 'A service-oriented approach focused on quality, clarity and long-term relationships.',
  },
]

export const steps = [
  { id: '01', title: 'Understand', text: "Understand the customer's goals and challenges.", icon: Search },
  { id: '02', title: 'Strategise', text: 'Identify the right technology or professional solution.', icon: Compass },
  { id: '03', title: 'Implement', text: 'Deliver practical, reliable and tailored solutions.', icon: Hammer },
  { id: '04', title: 'Grow', text: 'Support continuous improvement and long-term growth.', icon: TrendingUp },
]

export const audiences = ['Individuals', 'Startups', 'Established organisations']
