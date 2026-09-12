import { Project } from '../models/project.model';

export const projects: Project[] = [
  {
    slug: 'padel-booking',
    name: 'Padel Court Booking Platform',
    shortDescription: 'A full-stack web app to manage padel court reservations, with role-based access from admin to standard users.',
    technologies: ['Angular', 'Tailwind CSS', 'Java', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/ezan1050/projet-padel',

    problem: 'Managing padel court reservations manually is error-prone and time-consuming, with no clear separation between administrators and regular users.',
    objective: 'Build a full-stack booking platform where users can reserve courts and administrators can manage courts, slots, and users through a role-based permission system.',
    features: [
      'Court reservation and slot management',
      'Role-based access control (admin / user)',
      'Full-stack architecture (Angular frontend, Java backend, PostgreSQL database)',
      'Containerized with Docker for consistent deployment'
    ],
    challenges: 'Designing a clean separation between frontend, backend, and database, and implementing a secure role-based permission system.',
    learnings: 'Full-stack architecture, REST communication between Angular and a Java backend, relational database design with PostgreSQL, and containerization with Docker.'
  },
  {
    slug: 'developer-portfolio',
    name: 'Developer Portfolio',
    shortDescription: 'This very website — a cyberpunk-themed developer portfolio built with Angular, TypeScript, and Tailwind CSS.',
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'SSR'],
    githubUrl: 'https://github.com/ezan1050/portfolio',

    problem: 'As a developer in career transition, I needed a professional online presence to showcase my skills, projects, and journey to recruiters.',
    objective: 'Build a fast, accessible, and visually distinctive portfolio with a clean, maintainable architecture that I can extend over time.',
    features: [
      'Cyberpunk visual identity with custom design tokens',
      'Animated hero (matrix decrypt effect, terminal typing)',
      'Data-driven sections separating content from presentation',
      'Fully responsive and accessibility-conscious (reduced-motion support)',
      'Server-side rendering for SEO and link previews'
    ],
    challenges: 'Building reusable, isolated components and animations that stay performant, while keeping the codebase clean enough to maintain solo.',
    learnings: 'Angular architecture (standalone components, signals, directives, routing), Tailwind v4 theming, SSR constraints, and a professional Git workflow with pull requests.'
  }
];