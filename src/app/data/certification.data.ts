import { Certification } from '../models/certification.model';

export const certifications: Certification[] = [
  {
    name: 'Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    date: 'Feb. 2026',
    status: 'earned',
    verifyUrl: 'https://learn.microsoft.com/en-us/users/bhattiezan-9941/credentials/4d794e4f64cf6bc8'
  },
  {
    name: 'Microsoft 365 Fundamentals (MS-900)',
    issuer: 'Microsoft',
    date: 'Apr. 2025',
    status: 'earned',
    verifyUrl: 'https://learn.microsoft.com/en-us/users/bhattiezan-9941/credentials/b45c4aeb846417fc'
  },
  {
    name: 'ITIL 4 Foundation',
    issuer: 'PeopleCert',
    date: 'Dec. 2023',
    status: 'earned'
  },
  {
    name: 'Azure Administrator (AZ-104)',
    issuer: 'Microsoft',
    date: 'In Progress',
    status: 'in-progress'
  }
];