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

export interface ProfileData {
  name: string;
  title: string;
  heroTagline: string;
  bio: string;
  heroImage: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  cvLink: string;
  certificates: {
    title: string;
    issuer: string;
    date: string;
    icon: string;
  }[];
}