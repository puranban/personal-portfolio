// Portfolio Data
// Demonstrates: const assertions, type-safe data structures

import type {
  Experience,
  Project,
  SkillCategory,
  PersonalInfo,
  NavigationSection,
  Certification,
} from './types';

export const personalInfo: PersonalInfo = {
  name: 'Puran Ban',
  title: 'Frontend Engineer',
  email: 'puranban77@gmail.com',
  location: 'Oshawa, ON, Canada',
  availability: 'Open to opportunities',
  resumeUrl: '/PuranBan_Frontend_Developer.pdf',
  socials: [
    {
      platform: 'github',
      url: 'https://github.com/puranban',
      label: 'GitHub Profile',
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/in/puranban',
      label: 'LinkedIn Profile',
    },
    // {
    //   platform: 'twitter',
    //   url: 'https://twitter.com',
    //   label: 'Twitter Profile',
    // },
    {
      platform: 'email',
      url: 'mailto:puranban77@gmail.com',
      label: 'Send Email',
    },
  ],
  skills: ['React', 'TypeScript', 'Next.js', 'React Native', 'MapBox', 'Data Visualization']
} as const;

// Profile photo URL
// export const profilePhoto = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-11%20at%2010.19.04%20PM-UzFi0jRKTNTpzJIDEsszWiHREOgf4N.jpeg';
export const profilePhoto = '/profile-photo.jpeg';

export const experiences: readonly Experience[] = [
  {
    id: 'exp-1',
    company: 'Genese Solution',
    companyUrl: 'https://genesesolution.com',
    position: 'Senior Frontend Engineer',
    startDate: '2025-04',
    endDate: '2025-12',
    description:
      'Owning frontend architecture and product delivery for a scalable SaaS subscription platform, focusing on performance, maintainability, and long-term system design.',
    highlights: [
      'Designed and led a scalable React + Next.js + TypeScript architecture with strong separation of concerns and reusable patterns',
      'Engineered complex onboarding, subscription, and payment flows with reliability and edge-case handling in mind',
      'Established component-driven standards that improved consistency across teams and reduced feature delivery time',
      'Partnered closely with Product, Backend, and QA to translate business requirements into clean, production-ready UI systems',
      'Mentored engineers through structured code reviews, architectural discussions, and documentation culture',
      'Improved development velocity using AI-assisted tooling while maintaining full ownership of implementation quality',
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'REST APIs', 'CI/CD'],
    location: 'Lalitpur, Nepal',
  },
  {
    id: 'exp-2',
    company: 'Togglecorp Business Solution Pvt. Ltd',
    companyUrl: 'https://togglecorp.com',
    position: 'Frontend Developer',
    startDate: '2021-10',
    endDate: '2025-03',
    description:
      'Built large-scale, data-driven and geospatial applications used by international organizations, focusing on complex UI systems, performance, and real-time data visualization.',
    highlights: [
      'Developed advanced geospatial visualizations using Mapbox GL JS and GeoJSON (Points, LineStrings, Polygons) for disaster risk and exposure analysis platforms',
      'Led implementation of multiple major frontend features across enterprise-grade applications with high user impact',
      'Architected scalable state management solutions using Redux, Context API, and GraphQL integrations',
      'Optimized rendering performance for heavy datasets and interactive dashboards',
      'Streamlined frontend-backend data workflows using Firebase and Cloud Functions to improve reliability',
      'Collaborated directly with global stakeholders to align UI systems with operational workflows',
      'Mentored junior developers and strengthened code ownership through documentation and architectural guidance',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Redux',
      'GraphQL',
      'Mapbox GL JS',
      'Firebase',
      'Jest',
      'Docker',
    ],
    location: 'Lalitpur, Nepal',
  },
  {
    id: 'exp-3',
    company: 'Kagati Tech',
    companyUrl: 'https://kagati.io',
    position: 'Frontend Developer',
    startDate: '2021-01',
    endDate: '2021-10',
    description:
      'Delivered modern e-commerce applications with a strong focus on transactional reliability, reusable UI systems, and predictable state management.',
    highlights: [
      'Built production-grade e-commerce interfaces handling secure payment flows and daily live transactions',
      'Implemented structured state management using Redux and Context API for predictable data flow',
      'Developed reusable UI components to accelerate feature development and reduce duplication',
      'Translated product and design requirements into responsive, mobile-first React applications',
    ],
    technologies: ['React', 'Next.js', 'Redux', 'JavaScript', 'SCSS'],
    location: 'Kathmandu, Nepal',
  },
  {
    id: 'exp-4',
    company: 'Snigdh Tech Business Solution Pvt. Ltd',
    companyUrl: 'https://snigdhtech.com',
    position: 'Junior Frontend Developer',
    startDate: '2020-01',
    endDate: '2020-12',
    description:
      'Started my frontend journey building ERP and accounting systems, gaining strong foundations in UI structure, API integration, and scalable code organization.',
    highlights: [
      'Developed business-facing ERP interfaces using React and modern JavaScript',
      'Integrated RESTful APIs to ensure smooth end-to-end data flow between frontend and backend systems',
      'Improved UI responsiveness and usability across accounting dashboards',
      'Built strong debugging and problem-solving fundamentals through hands-on production support',
    ],
    technologies: ['React', 'JavaScript', 'SCSS', 'REST APIs', 'MySQL'],
    location: 'Lalitpur, Nepal',
  },
] as const;

export const projects: readonly Project[] = [
  {
    id: 'proj-1',
    title: 'Design System Framework',
    description: 'A comprehensive, accessible component library built with React and TypeScript',
    longDescription:
      'Enterprise-grade design system featuring 50+ components with full TypeScript support, Storybook documentation, and automated visual regression testing.',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    technologies: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS', 'Radix UI'],
    category: 'design-system',
    featured: true,
    impact: 'Adopted by 4 product teams, reducing development time by 35%',
  },
  {
    id: 'proj-2',
    title: 'Real-time Analytics Dashboard',
    description: 'High-performance dashboard visualizing millions of data points in real-time',
    longDescription:
      'Built for a fintech client to monitor trading activities with sub-second latency updates and complex data visualizations.',
    liveUrl: 'https://example.com',
    technologies: ['Next.js', 'D3.js', 'WebSocket', 'Redis', 'PostgreSQL'],
    category: 'web-app',
    featured: true,
    impact: 'Processes 1M+ events daily with 99.9% uptime',
  },
  {
    id: 'proj-3',
    title: 'E-commerce Platform',
    description: 'Headless e-commerce solution with advanced personalization features',
    longDescription:
      'Modern JAMstack e-commerce platform featuring AI-powered product recommendations and optimized checkout flow.',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    technologies: ['Next.js', 'Shopify API', 'Algolia', 'Stripe', 'Vercel'],
    category: 'web-app',
    featured: true,
    impact: 'Increased conversion rate by 25% and page load speed by 50%',
  },
  {
    id: 'proj-4',
    title: 'Open Source CLI Tool',
    description: 'Developer productivity tool for automating repetitive tasks',
    githubUrl: 'https://github.com',
    technologies: ['Node.js', 'TypeScript', 'Commander.js', 'Ink'],
    category: 'open-source',
    featured: false,
    impact: '500+ GitHub stars, used by developers worldwide',
  },
] as const;

export const skillCategories: readonly SkillCategory[] = [
  {
    name: 'Frontend',
    translationKey: 'frontend',
    skills: [
      { name: 'React', level: 'expert' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'Next.js', level: 'expert' },
      { name: 'JavaScript', level: 'expert' },
      { name: 'HTML/CSS', level: 'expert' },
      { name: 'Tailwind CSS', level: 'expert' },
      { name: 'Redux', level: 'expert' },
    ],
  },
  {
    name: 'Backend',
    translationKey: 'backend',
    skills: [
      { name: 'Node.js', level: 'intermediate' },
      // { name: 'GraphQL', level: 'intermediate' },
      { name: 'REST APIs', level: 'intermediate' },
      { name: 'PostgreSQL', level: 'intermediate' },
      { name: 'MongoDB', level: 'intermediate' },
      // { name: 'Redis', level: 'intermediate' },
    ],
  },
  {
    name: 'Tools & Platforms',
    translationKey: 'tools',
    skills: [
      { name: 'Git', level: 'expert' },
      { name: 'Docker', level: 'advanced' },
      { name: 'Vercel', level: 'advanced' },
      { name: 'AWS', level: 'intermediate' },
      { name: 'CI/CD', level: 'advanced' },
      { name: 'Figma', level: 'advanced' },
    ],
  },
  {
    name: 'Soft Skills',
    translationKey: 'soft',
    skills: [
      { name: 'Technical Leadership', level: 'advanced' },
      { name: 'Code Review', level: 'expert' },
      { name: 'Mentoring', level: 'advanced' },
      { name: 'Agile/Scrum', level: 'advanced' },
      { name: 'Communication', level: 'expert' },
      { name: 'Problem Solving', level: 'expert' },
    ],
  },
] as const;

export const certifications: readonly Certification[] = [
  {
    id: 'cert-1',
    title: 'Advanced React',
    issuer: 'Meta',
    issueDate: '2026',
    credentialUrl: 'https://coursera.org/share/9fb759572220470ef118906d99b60e15',
    skills: ['React', 'JSX', 'Component Patterns', 'Testing', 'Performance'],
  },
  {
    id: 'cert-2',
    title: 'Advanced JavaScript 1: Objects, Loops, and Hoisting',
    issuer: 'Scrimba',
    issueDate: '2026',
    credentialUrl: 'https://coursera.org/share/c7f7fc2a30e544525dc7ffbd7d8acef1',
    skills: ['JavaScript', 'Closures', 'Prototypes', 'Hoisting', 'Event Loop'],
  },
] as const;

export const navigationSections: readonly NavigationSection[] = [
  { id: 'about', label: 'About', translationKey: 'about', href: '#about', icon: 'user' },
  { id: 'experience', label: 'Experience', translationKey: 'experience', href: '#experience', icon: 'briefcase' },
  // { id: 'projects', label: 'Projects', translationKey: 'projects', href: '#projects', icon: 'folder' },
  { id: 'skills', label: 'Skills', translationKey: 'skills', href: '#skills', icon: 'code' },
  { id: 'certifications', label: 'Certifications', translationKey: 'certifications', href: '#certifications', icon: 'award' },
  { id: 'contact', label: 'Contact', translationKey: 'contact', href: '#contact', icon: 'mail' },
] as const;
