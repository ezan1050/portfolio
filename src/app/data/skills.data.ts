import { SkillCategory } from '../models/skills.model';

export const skills: SkillCategory[] = [
  {
    name: 'Frontend',
    technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular']
  },
  {
    name: 'Backend',
    technologies: ['C#', '.NET', 'REST API','Java']
  },
  {
    name: 'Database',
    technologies: ['SQL', 'SQL Server']
  },
  {
    name: 'Cloud / DevOps',
    technologies: ['Azure', 'Docker', 'Git', 'GitHub', 'CI/CD']
  },

    {
    name: 'Systems & Networking',
    technologies: ['Linux Administration', 'Bash Scripting', 'Networking (TCP/IP, DNS, DHCP)', 'Subnetting & VLANs', 'Routing & Switching', 'Network Security', 'Cisco Packet Tracer']
  },
  {
    name: 'Currently Learning',
    technologies: ['Azure Certifications', 'Cloud Architecture']
  }
];