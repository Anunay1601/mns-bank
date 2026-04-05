// In-memory data store for Admin Panel
// Designed so every function signature mirrors what a real ORM call would look like

import { Testimonial, Blog, PricingPlan, ContactQuery, ContactStatus } from './types';

// Helper to generate unique IDs
function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// ============================================
// TESTIMONIALS
// ============================================

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    content: 'MNS Bank has been instrumental in growing my business. Their business loan process was seamless and the interest rates are very competitive.',
    isActive: true,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Software Engineer',
    content: 'The mobile banking app is fantastic! I can manage all my accounts, pay bills, and transfer money with just a few taps. Highly recommend!',
    isActive: true,
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-02-10'),
  },
  {
    id: '3',
    name: 'Amit Patel',
    role: 'Retired Teacher',
    content: 'As a senior citizen, I appreciate the dedicated support and special FD rates offered by MNS Bank. The staff is always helpful and patient.',
    isActive: true,
    createdAt: new Date('2024-03-05'),
    updatedAt: new Date('2024-03-05'),
  },
  {
    id: '4',
    name: 'Sneha Reddy',
    role: 'Doctor',
    content: 'Got my home loan approved within a week! The documentation was minimal and the EMI calculator helped me plan my finances perfectly.',
    isActive: false,
    createdAt: new Date('2024-03-20'),
    updatedAt: new Date('2024-03-20'),
  },
];

export async function getTestimonials(): Promise<Testimonial[]> {
  return Promise.resolve([...testimonials]);
}

export async function getTestimonialById(id: string): Promise<Testimonial | undefined> {
  return Promise.resolve(testimonials.find(t => t.id === id));
}

export async function createTestimonial(data: Omit<Testimonial, 'id' | 'createdAt' | 'updatedAt'>): Promise<Testimonial> {
  const newTestimonial: Testimonial = {
    ...data,
    id: generateId(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  testimonials.push(newTestimonial);
  return Promise.resolve(newTestimonial);
}

export async function updateTestimonial(id: string, data: Partial<Omit<Testimonial, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Testimonial | undefined> {
  const index = testimonials.findIndex(t => t.id === id);
  if (index === -1) return Promise.resolve(undefined);
  
  testimonials[index] = {
    ...testimonials[index],
    ...data,
    updatedAt: new Date(),
  };
  return Promise.resolve(testimonials[index]);
}

export async function deleteTestimonial(id: string): Promise<boolean> {
  const index = testimonials.findIndex(t => t.id === id);
  if (index === -1) return Promise.resolve(false);
  
  testimonials.splice(index, 1);
  return Promise.resolve(true);
}

// ============================================
// BLOGS
// ============================================

const blogs: Blog[] = [
  {
    id: '1',
    title: 'Understanding Fixed Deposits: A Complete Guide',
    slug: 'understanding-fixed-deposits-complete-guide',
    content: '<h2>What are Fixed Deposits?</h2><p>Fixed Deposits (FDs) are one of the safest investment options available in India. They offer guaranteed returns and are ideal for risk-averse investors.</p><h2>Benefits of FDs</h2><ul><li>Guaranteed returns</li><li>Flexible tenure options</li><li>Loan against FD facility</li><li>Senior citizen benefits</li></ul><p>At MNS Bank, we offer competitive FD rates starting from 6.5% p.a.</p>',
    isPublished: true,
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
  },
  {
    id: '2',
    title: 'Digital Banking: The Future of Financial Services',
    slug: 'digital-banking-future-financial-services',
    content: '<h2>The Rise of Digital Banking</h2><p>Digital banking has revolutionized how we manage our finances. From mobile apps to online transfers, banking is now at your fingertips.</p><h2>Our Digital Services</h2><p>MNS Bank offers a comprehensive suite of digital banking services including:</p><ul><li>Mobile Banking App</li><li>Net Banking</li><li>UPI Payments</li><li>Digital Account Opening</li></ul>',
    isPublished: true,
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-02-15'),
  },
  {
    id: '3',
    title: 'Home Loan Tips for First-Time Buyers',
    slug: 'home-loan-tips-first-time-buyers',
    content: '<h2>Planning Your First Home Purchase</h2><p>Buying your first home is a significant milestone. Here are some tips to help you navigate the home loan process.</p><h2>Key Considerations</h2><ol><li>Check your credit score</li><li>Calculate your EMI affordability</li><li>Compare interest rates</li><li>Understand processing fees</li></ol>',
    isPublished: false,
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-03-01'),
  },
  {
    id: '4',
    title: 'Protecting Yourself from Banking Fraud',
    slug: 'protecting-yourself-banking-fraud',
    content: '<h2>Stay Safe from Fraudsters</h2><p>Banking fraud is on the rise. Learn how to protect yourself and your hard-earned money.</p><h2>Safety Tips</h2><ul><li>Never share OTP with anyone</li><li>Verify caller identity</li><li>Use official bank apps only</li><li>Enable transaction alerts</li></ul><p>Remember: MNS Bank will never ask for your PIN or password.</p>',
    isPublished: true,
    createdAt: new Date('2024-03-15'),
    updatedAt: new Date('2024-03-15'),
  },
];

export async function getBlogs(): Promise<Blog[]> {
  return Promise.resolve([...blogs]);
}

export async function getBlogById(id: string): Promise<Blog | undefined> {
  return Promise.resolve(blogs.find(b => b.id === id));
}

export async function createBlog(data: Omit<Blog, 'id' | 'createdAt' | 'updatedAt'>): Promise<Blog> {
  const newBlog: Blog = {
    ...data,
    id: generateId(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  blogs.push(newBlog);
  return Promise.resolve(newBlog);
}

export async function updateBlog(id: string, data: Partial<Omit<Blog, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Blog | undefined> {
  const index = blogs.findIndex(b => b.id === id);
  if (index === -1) return Promise.resolve(undefined);
  
  blogs[index] = {
    ...blogs[index],
    ...data,
    updatedAt: new Date(),
  };
  return Promise.resolve(blogs[index]);
}

export async function deleteBlog(id: string): Promise<boolean> {
  const index = blogs.findIndex(b => b.id === id);
  if (index === -1) return Promise.resolve(false);
  
  blogs.splice(index, 1);
  return Promise.resolve(true);
}

// ============================================
// PRICING PLANS
// ============================================

const pricingPlans: PricingPlan[] = [
  {
    id: '1',
    name: 'Basic Savings',
    price: 0,
    features: [
      'Zero balance account',
      'Free debit card',
      'Mobile & net banking',
      'Up to 5 free ATM withdrawals/month',
    ],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  {
    id: '2',
    name: 'Premium Account',
    price: 500,
    features: [
      'Priority banking services',
      'Premium debit card',
      'Unlimited ATM withdrawals',
      'Free demand drafts',
      'Dedicated relationship manager',
      'Airport lounge access',
    ],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  {
    id: '3',
    name: 'Business Account',
    price: 1000,
    features: [
      'High transaction limits',
      'Multiple authorized users',
      'Business credit card',
      'Trade finance services',
      'Cash management solutions',
      'Bulk payment processing',
      'Dedicated support team',
    ],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  {
    id: '4',
    name: 'NRI Account',
    price: 250,
    features: [
      'NRE/NRO accounts',
      'Forex services',
      'International transfers',
      'Investment options',
      'Repatriation facility',
    ],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
];

export async function getPricingPlans(): Promise<PricingPlan[]> {
  return Promise.resolve([...pricingPlans]);
}

export async function getPricingPlanById(id: string): Promise<PricingPlan | undefined> {
  return Promise.resolve(pricingPlans.find(p => p.id === id));
}

export async function createPricingPlan(data: Omit<PricingPlan, 'id' | 'createdAt' | 'updatedAt'>): Promise<PricingPlan> {
  const newPlan: PricingPlan = {
    ...data,
    id: generateId(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  pricingPlans.push(newPlan);
  return Promise.resolve(newPlan);
}

export async function updatePricingPlan(id: string, data: Partial<Omit<PricingPlan, 'id' | 'createdAt' | 'updatedAt'>>): Promise<PricingPlan | undefined> {
  const index = pricingPlans.findIndex(p => p.id === id);
  if (index === -1) return Promise.resolve(undefined);
  
  pricingPlans[index] = {
    ...pricingPlans[index],
    ...data,
    updatedAt: new Date(),
  };
  return Promise.resolve(pricingPlans[index]);
}

export async function deletePricingPlan(id: string): Promise<boolean> {
  const index = pricingPlans.findIndex(p => p.id === id);
  if (index === -1) return Promise.resolve(false);
  
  pricingPlans.splice(index, 1);
  return Promise.resolve(true);
}

// ============================================
// CONTACT QUERIES
// ============================================

const contactQueries: ContactQuery[] = [
  {
    id: '1',
    name: 'Vikram Singh',
    email: 'vikram.singh@email.com',
    message: 'I would like to know more about your home loan interest rates and eligibility criteria. Can someone please call me back?',
    status: 'Unread',
    createdAt: new Date('2024-03-25T10:30:00'),
    updatedAt: new Date('2024-03-25T10:30:00'),
  },
  {
    id: '2',
    name: 'Meera Joshi',
    email: 'meera.j@email.com',
    message: 'Having trouble logging into my net banking account. It says my account is locked. Please help!',
    status: 'Read',
    createdAt: new Date('2024-03-24T15:45:00'),
    updatedAt: new Date('2024-03-24T16:00:00'),
  },
  {
    id: '3',
    name: 'Arjun Mehta',
    email: 'arjun.mehta@company.com',
    message: 'Interested in opening a current account for my business. What documents are required and what is the minimum balance?',
    status: 'Resolved',
    createdAt: new Date('2024-03-23T09:15:00'),
    updatedAt: new Date('2024-03-23T14:30:00'),
  },
  {
    id: '4',
    name: 'Kavita Nair',
    email: 'kavita.nair@email.com',
    message: 'Can you please confirm the fixed deposit rates for senior citizens for a 3-year term?',
    status: 'Unread',
    createdAt: new Date('2024-03-25T14:20:00'),
    updatedAt: new Date('2024-03-25T14:20:00'),
  },
  {
    id: '5',
    name: 'Rahul Verma',
    email: 'rahul.v@email.com',
    message: 'I want to update my mobile number linked to my account. What is the process for the same?',
    status: 'Read',
    createdAt: new Date('2024-03-22T11:00:00'),
    updatedAt: new Date('2024-03-22T12:15:00'),
  },
];

export async function createContactQuery(data: Pick<ContactQuery, 'name' | 'email' | 'message'>): Promise<ContactQuery> {
  const newQuery: ContactQuery = {
    id: generateId(),
    name: data.name,
    email: data.email,
    message: data.message,
    status: 'Unread',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  contactQueries.push(newQuery);
  return Promise.resolve(newQuery);
}

export async function getContactQueries(): Promise<ContactQuery[]> {
  // Return sorted by newest first
  return Promise.resolve([...contactQueries].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()));
}

export async function getContactQueryById(id: string): Promise<ContactQuery | undefined> {
  return Promise.resolve(contactQueries.find(c => c.id === id));
}

export async function updateContactQueryStatus(id: string, status: ContactStatus): Promise<ContactQuery | undefined> {
  const index = contactQueries.findIndex(c => c.id === id);
  if (index === -1) return Promise.resolve(undefined);
  
  contactQueries[index] = {
    ...contactQueries[index],
    status,
    updatedAt: new Date(),
  };
  return Promise.resolve(contactQueries[index]);
}

// ============================================
// DASHBOARD STATS
// ============================================

export async function getDashboardStats(): Promise<{
  testimonials: { total: number; active: number };
  blogs: { total: number; published: number };
  pricing: { total: number };
  contacts: { total: number; unread: number };
}> {
  return Promise.resolve({
    testimonials: {
      total: testimonials.length,
      active: testimonials.filter(t => t.isActive).length,
    },
    blogs: {
      total: blogs.length,
      published: blogs.filter(b => b.isPublished).length,
    },
    pricing: {
      total: pricingPlans.length,
    },
    contacts: {
      total: contactQueries.length,
      unread: contactQueries.filter(c => c.status === 'Unread').length,
    },
  });
}
