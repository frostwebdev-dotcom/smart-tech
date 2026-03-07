export type ProjectType =
  | "website"
  | "web-app"
  | "saas"
  | "mobile-app"
  | "ui-ux"
  | "api-automation"
  | "ai-integration"
  | "maintenance"
  | "other";

export type BudgetRange =
  | "under-10k"
  | "10k-25k"
  | "25k-50k"
  | "50k-100k"
  | "100k-plus"
  | "undecided";

export type Timeline =
  | "asap"
  | "1-3-months"
  | "3-6-months"
  | "6-12-months"
  | "exploring";

export interface ContactFormData {
  fullName: string;
  email: string;
  company?: string;
  projectType: ProjectType;
  budgetRange: BudgetRange;
  timeline: Timeline;
  message: string;
}

export interface LeadRecord extends ContactFormData {
  id?: string;
  created_at?: string;
  source?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  problem?: string;
  solution?: string;
  impact?: string;
  techStack: string[];
  image?: string;
  link?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}
