import ProductTemplate from '@/components/product-template'

const educationLoanData = {
  title: "Education Loan",
  subtitle: "Invest in your future education",
  description: "Finance your education dreams with loans up to ₹1.5 crore for studies in India or abroad. Moratorium period and flexible repayment options available.",
  interestRate: "9.5%* p.a.",
  maxAmount: "₹1.5 Crore",
  tenure: "Up to 15 Years",
  processingFee: "Zero",
  features: [
    "Loan up to ₹1.5 crore for higher education",
    "Coverage for studies in India and abroad",
    "Moratorium period - course duration + 6 months",
    "Flexible repayment tenure up to 15 years",
    "Tax benefit under Section 80E",
    "No collateral for loans up to ₹7.5 lakhs",
    "Simple documentation process",
    "Quick approval and disbursal",
    "Coverage for all education-related expenses",
    "Special rates for premier institutions",
    "Pre-approved offers for meritorious students"
  ],
  eligibility: [
    "Indian citizen aged 16-35 years",
    "Admission to recognized course/institution",
    "Academic merit and good track record",
    "Co-applicant required (parent/guardian)",
    "CIBIL score of co-applicant: 650 and above",
    "For loans above ₹7.5 lakhs: collateral required",
    "Regular income source for co-applicant",
    "Valid admission letter required"
  ],
  documents: [
    "PAN Card of student and co-applicant",
    "Aadhaar Card of student and co-applicant",
    "Admission letter from institution",
    "Academic records (Mark sheets, certificates)",
    "Fee structure from institution",
    "Income proof of co-applicant",
    "Bank statements of co-applicant",
    "Address proof of co-applicant",
    "Passport size photographs",
    "Collateral documents (if applicable)",
    "Form 16/ITR of co-applicant"
  ],
  relatedProducts: [
    {
      name: "Student Credit Card",
      link: "/student-credit-card",
      description: "Financial independence for students"
    },
    {
      name: "Skill Development Loan",
      link: "/skill-development-loan",
      description: "Finance your professional courses"
    },
    {
      name: "Personal Loan",
      link: "/personal-loan",
      description: "Quick funds for education expenses"
    }
  ]
}

export default function EducationLoanPage() {
  return <ProductTemplate data={educationLoanData} />
}
