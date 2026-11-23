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
  /** Title shown on the home page leadership card. Falls back to `title`. */
  homeTitle?: string;
  /** Additional office held, shown as a badge on the profile page. */
  actingTitle?: string;
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
  /** One-line description used in cards. */
  summary: string;
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
  shortName: string;
  rc: string;
  tagline: string;
  mission: string;
  vision: string;
  email: string;
  projectEmail: string;
  phones: string[];
  linkedin: string;
  addresses: string[];
  founded: string;
  workingHours: string;
  siteUrl: string;
  boards: BoardMember[];
  partners: Partner[];
}
