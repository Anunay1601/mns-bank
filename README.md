# MNS Bank Website

A production-grade banking website built with Next.js, featuring modern UI design and comprehensive banking functionality.

## 🏦 Project Overview

MNS Bank is a fully functional banking website clone inspired by regional banking websites. It provides a complete digital banking experience with working UI components, forms, and interactive features.

## ✨ Features

### 🎨 Global Layout & Navigation
- **Sticky Header** with brand logo and navigation
- **Language Toggle** (EN/HI simulation)
- **Responsive Navigation** with mobile menu
- **Comprehensive Footer** with links and trust badges

### 🏠 Homepage Components
- **Hero Carousel** (3 slides with auto-rotation)
- **Product Cards** showcasing banking products
- **What's New Section** with latest updates
- **Quick Links** for easy navigation
- **Fraud Awareness Banner** with dismissible alerts

### 📄 Product Pages Template
- **Reusable Product Template** with tabbed interface
- **5 Tabs**: Overview, Features, Eligibility, Documents, Apply
- **Working Inquiry Forms** with validation
- **Related Products Section**
- **Success Messages** with reference numbers

### 🧮 EMI Calculator
- **Working EMI Calculator** with correct formula
- **Quick Presets** for different loan types
- **Real-time Calculations**
- **Detailed Payment Breakdown**

### 📋 Individual Pages
- **Savings Account** with features and benefits
- **Personal Loan** with eligibility criteria
- **Home Loan** with detailed information
- **Education Loan** with special features
- **Interest Rates** with current rates and trends
- **Contact Us** with multiple contact methods
- **Grievance Redressal** with complaint tracking
- **Unclaimed Deposits** with search functionality

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2.1 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **UI Components**: ShadCN UI
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
mns-bank/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── emi-calculator/    # EMI calculator page
│   ├── savings-account/   # Savings account page
│   ├── personal-loan/     # Personal loan page
│   ├── home-loan/         # Home loan page
│   ├── education-loan/    # Education loan page
│   ├── interest-rates/    # Interest rates page
│   ├── contact-us/        # Contact page
│   ├── grievance-redressal/ # Grievance page
│   └── deaf-unclaimed-deposits/ # Unclaimed deposits page
├── components/            # Reusable components
│   ├── header.tsx         # Site header
│   ├── footer.tsx         # Site footer
│   ├── carousel.tsx       # Image carousel
│   ├── product-cards.tsx  # Product showcase
│   ├── whats-new.tsx      # News section
│   ├── quick-links.tsx    # Quick navigation
│   ├── fraud-awareness-banner.tsx # Alert banner
│   ├── product-template.tsx # Product page template
│   └── emi-calculator.tsx # EMI calculator component
└── lib/                   # Utility functions
    └── utils.ts           # Tailwind utilities
```

## 🎯 Key Features Implemented

### ✅ Completed Features
- [x] Responsive design with mobile-first approach
- [x] All navigation links working
- [x] Forms with validation and success messages
- [x] EMI calculator with correct mathematical formula
- [x] Product pages with comprehensive information
- [x] Professional banking UI design
- [x] Mock data for all components
- [x] Error-free build and deployment ready

### 🔧 Technical Implementation
- **Component-based Architecture**: Reusable components for maintainability
- **Type Safety**: Full TypeScript implementation
- **Form Validation**: Client-side validation with user feedback
- **State Management**: React hooks for interactive components
- **SEO Optimization**: Proper meta tags and semantic HTML
- **Performance**: Optimized build with Next.js

## 📱 Responsive Design

The website is fully responsive and works seamlessly across:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 UI/UX Highlights

- **Clean Banking Aesthetics**: Professional color scheme with blue accents
- **Intuitive Navigation**: Clear menu structure and breadcrumbs
- **Accessible Design**: Semantic HTML and ARIA labels
- **Micro-interactions**: Hover states and smooth transitions
- **Loading States**: Proper feedback during async operations

## 📊 Mock Data

All data is mocked for demonstration purposes:
- Interest rates and loan amounts
- Customer testimonials
- News and updates
- Branch information
- Contact details

## 🔒 Security Features

- Form validation to prevent XSS
- Input sanitization
- Secure form handling simulation
- Fraud awareness banners

## 🚀 Deployment Ready

The application is production-ready with:
- Optimized build configuration
- Error handling
- Proper environment setup
- Static generation support

## 📞 Support

For any questions or issues, please refer to the code comments or contact the development team.

---

**Note**: This is a demonstration project for educational purposes. All banking data and rates are fictional and should not be used for actual banking decisions.
