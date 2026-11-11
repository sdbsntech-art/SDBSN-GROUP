export type ServiceCategory =
  | 'web_development'
  | 'mobile_development'
  | 'cybersecurity'
  | 'security_audit'
  | 'legaltech'
  | 'digital_consulting'
  | 'partnership'
  | 'other';

export type RequestStatus =
  | 'New'
  | 'In Review'
  | 'In Progress'
  | 'Completed'
  | 'Archived';

export interface ContactSubmission {
  id?: string;
  reference_number?: string;
  full_name: string;
  email: string;
  phone?: string;
  organization?: string;
  service_category: ServiceCategory;
  subject: string;
  description: string;
  budget?: string;
  timeline?: string;
  privacy_consent: boolean;
  status?: RequestStatus;
  notes?: string;
  created_at?: string;
  updated_at?: string;
}

export interface AdminAuditLog {
  id: string;
  admin_id: string;
  action: string;
  target_id: string;
  details?: Record<string, any>;
  created_at: string;
}

export interface NavLinkItem {
  name: string;
  href: string;
  badge?: string;
  children?: { name: string; href: string; description?: string }[];
}

export interface ValueCardItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  accentColor?: string;
}

export interface PhilosophyQuote {
  quote: string;
  author?: string;
  tag?: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  slug: string;
  icon: string;
  features: string[];
  scopeNote?: string;
}

