import ProductTemplate from '@/components/product-template'

const homeLoanData = {
  title: "Home Loan",
  subtitle: "Turn your dream home into reality",
  description: "Avail home loans up to ₹5 crores with attractive interest rates starting from 8.5%* p.a. Flexible repayment options and quick approval process.",
  interestRate: "8.5%* p.a.",
  maxAmount: "₹5 Crores",
  tenure: "Up to 30 Years",
  processingFee: "0.5-2%",
  features: [
    "Interest rates starting from 8.5%* p.a.",
    "Loan amount up to ₹5 crores",
    "Flexible tenure up to 30 years",
    "80-90% of property value as loan",
    "Quick approval within 48 hours",
    "Simple documentation process",
    "Tax benefits under Section 24 and 80C",
    "Balance transfer facility available",
    "Top-up loan facility",
    "No prepayment charges",
    "Special rates for women applicants"
  ],
  eligibility: [
    "Age: 21 to 65 years",
    "Minimum income: ₹25,000 per month",
    "Work experience: At least 2 years",
    "CIBIL score: 700 and above preferred",
    "Salaried individuals in stable employment",
    "Self-employed professionals and business owners",
    "Property should be legally clear and marketable",
    "Co-applicants allowed for higher eligibility"
  ],
  documents: [
    "PAN Card (mandatory)",
    "Aadhaar Card",
    "Address proof (Utility bill, passport, etc.)",
    "Income proof (Salary slips, Form 16, ITR)",
    "Bank statements for last 6 months",
    "Property documents (Title deed, sale agreement)",
    "Property valuation report",
    "NOC from society/apartment association",
    "Photographs of applicant and co-applicants",
    "Signature verification"
  ],
  relatedProducts: [
    {
      name: "Home Loan Balance Transfer",
      link: "/home-loan-balance-transfer",
      description: "Transfer your existing home loan for better rates"
    },
    {
      name: "Home Improvement Loan",
      link: "/home-improvement-loan",
      description: "Renovate your dream home"
    },
    {
      name: "Plot Loan",
      link: "/plot-loan",
      description: "Buy residential plot for construction"
    }
  ]
}

export default function HomeLoanPage() {
  return <ProductTemplate data={homeLoanData} />
}
