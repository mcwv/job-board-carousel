import { Region } from './regions';

export interface Job {
  id: number;
  title: string;
  company: string;
  companyTagline: string;
  salary: string;
  location: string;
  country: string;
  workType: 'OFFICE' | 'HYBRID' | 'REMOTE';
  backgroundColor: string;
  countryCode: string; // e.g., 'GB', 'US', 'CA', etc.
  region?: Region; // The region this job belongs to
}

export interface Region {
  name: string;
  countryCode: string;
  jobs: Job[];
}