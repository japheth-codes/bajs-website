export type ProjectStatus =
  | 'Deployed'
  | 'MVP Development'
  | 'Conceptualization & Design'
  | 'Research & Conceptualization';

export interface Project {
  id: number;
  name: string;
  slug: string;
  status: ProjectStatus;
  statusColor: string;
  domain: string[];
  shortDescription: string;
  longDescription: string;
  highlights: string[];
}

export interface TeamMember {
  id: number;
  name: string;
  slug: string;
  title: string;
  role: string;
  shortBio: string;
  longBio: string;
  responsibilities: string[];
  skills: string[];
  linkedIn: string | null;
}

export interface ServiceItem {
  name: string;
  items: string[];
}

export interface ServiceCategory {
  id: number;
  title: string;
  icon: string;
  description: string;
  services: ServiceItem[];
}

export interface Partner {
  name: string;
  status: 'Active' | 'Inactive';
  affiliation: 'Partner' | 'Subsidiary';
}

export interface BoardMember {
  name: string;
  role: string;
  shares: string;
}

export interface CompanyInfo {
  name: string;
  rc: string;
  tagline: string;
  mission: string;
  vision: string;
  email: string;
  phones: string[];
  linkedin: string;
  addresses: string[];
  founded: string;
  workingHours: string;
  boards: BoardMember[];
  partners: Partner[];
}
