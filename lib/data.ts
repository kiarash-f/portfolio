export const personal = {
  name: 'Kiarash Fayaz',
  fullName: 'Amir Mohammad (Kiarash) Fayaz',
  title: 'Backend Engineer',
  titleStack: 'Node.js · NestJS · TypeScript',
  location: 'Niederkassel, Germany',
  email: 'kiarash.fayyaz72@gmail.com',
  linkedin: 'https://linkedin.com/in/amirmfayaz',
  github: 'https://github.com/kiarash-f',
  availability: 'Open to remote roles in English-first teams',
  summary:
    'Backend engineer with 2+ years building production REST APIs for real clients. Specialized in Node.js, NestJS, and TypeScript — owning full project lifecycle from schema design and auth architecture through Docker containerization and CI/CD deployment. Strong experience with PostgreSQL (Prisma), MongoDB (Mongoose), Redis, JWT/OAuth2, Socket.IO, and third-party integrations including Cloudinary, Resend, and the Anthropic SDK. Based in Germany, open to remote roles in English-first teams.',
  languages: [
    { lang: 'Persian', level: 'Native' },
    { lang: 'English', level: 'C1' },
    { lang: 'German', level: 'B2' },
  ],
  certifications: [
    {
      title: 'NestJS: The Complete Developer Guide',
      platform: 'Udemy',
      date: 'Sept 2025',
    },
    {
      title: 'Node.js: The Complete Developer Guide',
      platform: 'Udemy',
      date: 'Oct 2025',
    },
  ],
}

export type Project = {
  name: string
  description: string
  highlights: string[]
  stack: string[]
  github: string | null
  live: string | null
}

export const projects: Project[] = [
  {
    name: 'Block Tattoo Studio',
    description:
      'Full-featured booking backend for a tattoo studio, including an AI-powered assistant chat widget.',
    highlights: [
      'Two-step booking flow with stateless token system for client uploads',
      '20+ field PostgreSQL schema with 15+ composite indexes',
      'Redis caching + AI chat widget via Anthropic SDK',
      'Full Swagger docs and GitHub Actions CI/CD pipeline',
    ],
    stack: [
      'NestJS 11',
      'TypeScript 5',
      'PostgreSQL',
      'Prisma 6',
      'Redis',
      'JWT/Passport',
      'Argon2',
      'Cloudinary',
      'Resend',
      'Anthropic SDK',
      'Docker',
      'Swagger',
    ],
    github: 'https://github.com/kiarash-f/block-tattoo-studio',
    live: null,
  },
  {
    name: 'Conteschool Art Academy',
    description:
      'Production API powering a live online art academy with OTP auth and high-throughput endpoints.',
    highlights: [
      '50+ REST endpoints with OTP authentication (email & SMS)',
      'Load tested with k6 — p95=482ms, 0% error rate',
      '40% stability improvement via caching layer',
    ],
    stack: [
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'JWT',
      'OTP',
      'Multer',
      'React',
      'Vite',
      'TailwindCSS',
    ],
    github: null,
    live: 'https://www.conteschool.ir',
  },
  {
    name: 'Burger House Restaurant',
    description:
      'Real-time restaurant management system with QR-code table ordering and live order tracking.',
    highlights: [
      'Real-time orders via Socket.IO with signed QR table token system',
      'k6 load tested — p95=27–44ms, 0% error rate',
      '25% latency reduction through query optimisation',
    ],
    stack: [
      'NestJS 11',
      'TypeScript 5',
      'SQLite',
      'TypeORM',
      'JWT',
      'Google OAuth2',
      'Socket.IO',
      'Cloudinary',
      'Pino',
      'Swagger',
    ],
    github: 'https://github.com/kiarash-f/burgerhouse-nest',
    live: null,
  },
  {
    name: 'Fika Cafe',
    description:
      'Digital menu and order management backend for a live cafe, with image upload support.',
    highlights: [
      'Digital menu management with Multer image uploads',
      'Order and reservation handling',
    ],
    stack: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Multer'],
    github: null,
    live: 'https://fikacoffeeanzali.ir',
  },
  {
    name: 'Younghunter Photography',
    description:
      'Portfolio backend for a professional photographer with nested album management and a full admin dashboard.',
    highlights: [
      'Nested album/category portfolio system',
      'Metadata-rich photo upload pipeline',
      'Full admin dashboard',
    ],
    stack: ['Node.js', 'Express', 'MongoDB', 'Mongoose'],
    github: null,
    live: 'https://younghunter.net',
  },
]

export const skills = [
  { category: 'Core', items: ['Node.js', 'NestJS 11', 'TypeScript 5', 'Express'] },
  { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'SQLite', 'Redis'] },
  { category: 'ORM / ODM', items: ['Prisma 6', 'TypeORM', 'Mongoose'] },
  { category: 'Auth & Security', items: ['JWT', 'OAuth2', 'Passport', 'RBAC', 'Argon2'] },
  { category: 'APIs & Protocols', items: ['REST', 'Swagger/OpenAPI', 'WebSocket', 'Socket.IO'] },
  { category: 'DevOps', items: ['Docker', 'GitHub Actions', 'CI/CD', 'Linux'] },
  { category: 'Testing', items: ['Jest', 'k6'] },
  { category: 'AI / SDK', items: ['Anthropic SDK', 'OpenAI API'] },
  { category: 'Tools', items: ['Git', 'Postman', 'Joi', 'Luxon'] },
]
