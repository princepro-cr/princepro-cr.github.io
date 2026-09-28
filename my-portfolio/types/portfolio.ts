export interface Skill {
  name: string;
}

export interface TechCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  purpose: string;
  problem?: string;
  impact?: string;
  beneficiaries?: string;
  features: string[];
  technologies: string[];
  github: string;
  coverImage: string;
  galleryImages: string[];
}

export interface Certificate {
  title: string;
  issuer: string;
  date?: string;
  details?: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  title: string;
  heroTagline: string;
  bio: string;
  heroImage: string;
  location: string;
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  portfolioWebsite?: string;
  cvLink: string;
  certificates: Certificate[];
  techStack?: TechCategory[];
}