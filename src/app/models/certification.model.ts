export interface Certification {
  name: string;
  issuer: string;
  date: string;
  status: 'earned' | 'in-progress';
  verifyUrl?: string;
}