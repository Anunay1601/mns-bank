// Admin Panel TypeScript Interfaces

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string; // HTML content
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
  createdAt: Date;
  updatedAt: Date;
}

export type ContactStatus = 'Unread' | 'Read' | 'Resolved';

export interface ContactQuery {
  id: string;
  name: string;
  email: string;
  message: string;
  status: ContactStatus;
  createdAt: Date;
  updatedAt: Date;
}
