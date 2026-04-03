import ProductTemplate from '@/components/product-template'

const savingsAccountData = {
  title: "Savings Account",
  subtitle: "Secure your future with smart savings",
  description: "Open a savings account with MNS Bank and enjoy competitive interest rates, digital banking features, and the security of a trusted banking partner.",
  interestRate: "6.5%* p.a.",
  maxAmount: "No Limit",
  tenure: "Lifetime",
  processingFee: "Zero",
  features: [
    "Attractive interest rate of 6.5%* p.a. on daily balance",
    "Zero balance facility available",
    "Free debit card with ATM withdrawal facility",
    "Complete digital banking suite - mobile and internet banking",
    "Instant fund transfers via NEFT, RTGS, IMPS",
    "SMS and email alerts for all transactions",
    "Personalized cheque book facility",
    "Access to over 5000+ ATMs nationwide"
  ],
  eligibility: [
    "Individuals aged 18 years and above",
    "Minors can open account with guardian",
    "Valid KYC documents required",
    "PAN card mandatory for account opening",
    "Resident Indian individuals and HUFs",
    "Foreign nationals with valid visa and work permit"
  ],
  documents: [
    "Aadhaar Card (mandatory)",
    "PAN Card (mandatory)",
    "Passport size photograph",
    "Address proof (Utility bill, rent agreement, etc.)",
    "Identity proof (Voter ID, Passport, Driving License)",
    "Signature verification",
    "Form 60/61 (if PAN not available)",
    "For minors: Birth certificate and guardian documents"
  ],
  relatedProducts: [
    {
      name: "Fixed Deposit",
      link: "/fixed-deposits",
      description: "Higher interest rates for fixed tenure investments"
    },
    {
      name: "Recurring Deposit",
      link: "/recurring-deposits",
      description: "Systematic savings with regular monthly deposits"
    },
    {
      name: "Current Account",
      link: "/current-account",
      description: "Business banking with higher transaction limits"
    }
  ]
}

export default function SavingsAccountPage() {
  return <ProductTemplate data={savingsAccountData} />
}
