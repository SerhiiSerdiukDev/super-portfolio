import { ContactInfo, Education, Job, Skill } from './types';

export const CONTACT: ContactInfo = {
  email: 'serhii.serdiuk.dev@gmail.com',
  linkedin: 'www.linkedin.com/in/serhii-serdiuk',
  github: 'github.com/SerhiiSerdiukDev',
};

export const SUMMARY =
  'Highly proficient Senior Software Engineer with over 7 years of specialized experience in front-end development. Brings a comprehensive understanding of modern technology stacks, including JavaScript, Angular, and TypeScript. Proven expertise in constructing user-friendly interfaces, optimizing web applications, and system upgrades.';

export const SKILLS: Skill[] = [
  { name: 'Angular', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 95, category: 'Language' },
  { name: 'React', level: 10, category: 'Frontend' },
  { name: 'RxJS', level: 95, category: 'Frontend' },
  { name: 'NgRx', level: 85, category: 'Frontend' },
  { name: 'Dart', level: 80, category: 'Language' },
  { name: 'Kotlin/Java', level: 20, category: 'Backend' },
  { name: 'HTML/CSS', level: 98, category: 'Frontend' },
];

export const EXPERIENCE: Job[] = [
  {
    company: 'BIScience',
    role: 'Senior Frontend Developer',
    period: 'June 2025 - Present',
    location: 'Vinnytsya, Ukraine',
    description: [
      'Leads front-end development initiatives.',
      'Contributes to system architecture and high-level design.',
      'Mentors junior developers and conducts code reviews.',
    ],
    tech: ['Angular', 'TypeScript', 'RxJS'],
    type: 'tech',
  },
  {
    company: 'BIScience',
    role: 'Frontend Engineer',
    period: 'May 2024 - May 2025',
    location: 'Vinnytsya, Ukraine',
    description: ['Developed complex UI components.', 'Optimized application performance.'],
    tech: ['Angular', 'WebSockets'],
    type: 'tech',
  },
  {
    company: 'EPAM Systems',
    role: 'Senior Software Engineer',
    period: 'Feb 2022 - May 2024',
    location: 'Kharkiv, Ukraine',
    description: [
      "Assisted world's largest tech companies in software development.",
      'Constructed UIs utilizing Angular, TypeScript, and Dart.',
      'Developed backend RPC services using Kotlin and Java.',
      'Worked with Protocol Buffers and gRPC.',
      'Built tools using ANTLR and Monaco Editor.',
    ],
    tech: ['Angular', 'Dart', 'Kotlin', 'Java', 'gRPC', 'Bazel'],
    type: 'tech',
  },
  {
    company: 'INSART',
    role: 'Frontend Developer',
    period: 'July 2020 - Jan 2022',
    location: 'Kharkiv, Ukraine',
    description: [
      'Upgraded massive hybrid Angular apps (v8 to v12).',
      'Eliminated XSS vulnerabilities and enhanced security.',
      'Rewrote AngularJS legacy code to Angular 2+ best practices.',
      'Resolved critical performance issues using DevTools.',
    ],
    tech: ['Angular', 'AngularJS', 'Webpack', 'RxJS'],
    type: 'tech',
  },
  {
    company: 'ISD',
    role: 'Frontend Developer',
    period: 'Jan 2018 - July 2020',
    location: 'Dnipropetrovsk, Ukraine',
    description: [
      'Built web applications with Angular 2+ from scratch.',
      'Implemented module architecture using NgRx and RxJS.',
      'Worked closely with UI/UX designers for best design practices.',
      'Built Node.js mock servers with Express.js.',
    ],
    tech: ['Angular', 'PrimeNG', 'NgRx', 'Node.js'],
    type: 'tech',
  },
  {
    company: 'Zaporizhzhya Nuclear Power Plant',
    role: 'Senior Master (Relay Protection)',
    period: 'Aug 2003 - Feb 2018',
    location: 'Ukraine',
    description: [
      'Senior master of the relay protection service.',
      'Managed complex technical systems in a high-stakes environment.',
      '14+ years of engineering discipline and leadership.',
    ],
    type: 'industrial',
  },
];

export const EDUCATION: Education[] = [
  {
    school: 'Zaporizhzhya National Technical University',
    degree: 'Master, Electrotechnical Systems',
    period: '1998 - 2003',
  },
  {
    school: 'Classical Private University',
    degree: 'Master, Organization Management',
    period: '2006 - 2007',
  },
];

