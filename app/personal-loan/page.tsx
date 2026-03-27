import ProductTemplate from '@/components/product-template'

const personalLoanData = {
  title: "Personal Loan",
  subtitle: "Instant approval for all your personal needs",
  description: "Get personal loans up to ₹25 lakhs with minimal documentation, competitive interest rates, and flexible repayment options. Quick approval within 5 minutes.",
  interestRate: "10.99%* p.a.",
  maxAmount: "₹25 Lakhs",
  tenure: "1-5 Years",
  processingFee: "2-3%",
  features: [
    "Instant approval in 5 minutes",
    "Loan amount up to ₹25 lakhs",
    "Flexible tenure from 12 to 60 months",
    "No collateral required",
    "Minimal documentation",
    "Quick disbursal within 24 hours",
    "Flexible EMI options",
    "Online application process",
    "Pre-approved offers for existing customers",
    "Part payment facility available"
  ],
  eligibility: [
    "Age: 21 to 60 years",
    "Minimum monthly income: ₹25,000",
    "Work experience: At least 1 year",
    "CIBIL score: 650 and above",
    "Salaried individuals in private/public sector",
    "Self-employed professionals and business owners",
    "Existing MNS Bank customers get preferential rates"
  ],
  documents: [
    "PAN Card (mandatory)",
    "Aadhaar Card",
    "Address proof (Utility bill, rent agreement)",
    "Income proof (Latest 3 months salary slips)",
    "Bank statements for last 6 months",
    "Form 16 or Income Tax returns",
    "Passport size photograph",
    "Office ID card (for salaried employees)",
    "Business proof (for self-employed)"
  ],
  relatedProducts: [
    {
      name: "Home Loan",
      link: "/home-loan",
      description: "Lowest rates for your dream home"
    },
    {
      name: "Car Loan",
      link: "/car-loan",
      description: "Drive home your dream car"
    },
    {
      name: "Education Loan",
      link: "/education-loan",
      description: "Invest in your future education"
    }
  ]
}

export default function PersonalLoanPage() {
  return <ProductTemplate data={personalLoanData} />
}
