import React from 'react'

// Real Banking Images Component
export function BankingHeroImage() {
  return (
    <img
      src="https://images.unsplash.com/photo-1563986768494-8dee02356ea9?w=800&h=400&fit=crop&auto=format"
      alt="Digital Banking"
      className="w-full h-64 object-cover rounded-lg shadow-2xl"
      loading="lazy"
    />
  )
}

export function MobileBankingImage() {
  return (
    <img
      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop&auto=format"
      alt="Mobile Banking"
      className="w-full h-64 object-cover rounded-lg shadow-2xl"
      loading="lazy"
    />
  )
}

export function HomeLoanImage() {
  return (
    <img
      src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=400&fit=crop&auto=format"
      alt="Home Loan"
      className="w-full h-64 object-cover rounded-lg shadow-2xl"
      loading="lazy"
    />
  )
}

export function CreditCardImage() {
  return (
    <img
      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop&auto=format"
      alt="Credit Cards"
      className="w-full h-64 object-cover rounded-lg shadow-2xl"
      loading="lazy"
    />
  )
}

export function SecurityImage() {
  return (
    <img
      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop&auto=format"
      alt="Banking Security"
      className="w-full h-64 object-cover rounded-lg shadow-2xl"
      loading="lazy"
    />
  )
}

export function BranchBankingImage() {
  return (
    <img
      src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop&auto=format"
      alt="Bank Branch"
      className="w-full h-64 object-cover rounded-lg shadow-2xl"
      loading="lazy"
    />
  )
}

// Additional banking images for variety
export function PersonalLoanImage() {
  return (
    <div className="w-full h-64 bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 rounded-lg shadow-2xl overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
      </div>
      
      {/* Main illustration */}
      <svg viewBox="0 0 400 300" className="w-full h-full">
        {/* Desk surface */}
        <rect x="0" y="200" width="400" height="100" fill="#8b7355" opacity="0.3"/>
        <rect x="0" y="200" width="400" height="5" fill="#6b5945" opacity="0.5"/>
        
        {/* Documents stack */}
        <g transform="translate(50, 80)">
          {/* Back document */}
          <rect x="5" y="5" width="140" height="100" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" rx="2"/>
          {/* Middle document */}
          <rect x="3" y="3" width="140" height="100" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" rx="2"/>
          {/* Front document */}
          <rect x="0" y="0" width="140" height="100" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="2"/>
          
          {/* Document content */}
          <rect x="10" y="10" width="60" height="8" fill="#3b82f6" opacity="0.2" rx="1"/>
          <text x="10" y="17" fontFamily="Arial" fontSize="6" fill="#1e40af" fontWeight="bold">LOAN APPLICATION</text>
          
          {/* Form lines */}
          <line x1="10" y1="30" x2="130" y2="30" stroke="#e2e8f0" strokeWidth="1"/>
          <line x1="10" y1="40" x2="130" y2="40" stroke="#e2e8f0" strokeWidth="1"/>
          <line x1="10" y1="50" x2="100" y2="50" stroke="#e2e8f0" strokeWidth="1"/>
          <line x1="10" y1="60" x2="120" y2="60" stroke="#e2e8f0" strokeWidth="1"/>
          
          {/* Signature area */}
          <line x1="10" y1="80" x2="80" y2="80" stroke="#3b82f6" strokeWidth="1.5"/>
          <text x="10" y="90" fontFamily="Arial" fontSize="5" fill="#64748b">Signature</text>
          
          {/* ID card */}
          <rect x="90" y="65" width="40" height="25" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" rx="2"/>
          <circle cx="98" cy="75" r="4" fill="#fbbf24"/>
          <rect x="105" y="72" width="20" height="2" fill="#f59e0b" rx="0.5"/>
          <rect x="105" y="76" width="15" height="1.5" fill="#f59e0b" rx="0.5"/>
        </g>
        
        {/* Pen */}
        <g transform="translate(220, 120) rotate(-30)">
          <rect x="0" y="0" width="80" height="8" fill="#1f2937" rx="1"/>
          <rect x="75" y="1" width="10" height="6" fill="#374151" rx="1"/>
          <polygon points="85,4 92,4 88.5,7" fill="#1f2937"/>
          <rect x="5" y="2" width="20" height="4" fill="#3b82f6" rx="0.5"/>
        </g>
        
        {/* Money/rupee symbol */}
        <g transform="translate(280, 140)">
          <circle cx="30" cy="30" r="25" fill="#10b981" opacity="0.1"/>
          <circle cx="30" cy="30" r="20" fill="#10b981" opacity="0.2"/>
          <text x="30" y="38" fontFamily="Arial" fontSize="20" fill="#059669" textAnchor="middle" fontWeight="bold">₹</text>
        </g>
        
        {/* Approved stamp */}
        <g transform="translate(120, 40)">
          <circle cx="40" cy="40" r="35" fill="#ef4444" opacity="0.15"/>
          <circle cx="40" cy="40" r="30" fill="none" stroke="#ef4444" strokeWidth="3" opacity="0.6"/>
          <text x="40" y="35" fontFamily="Arial" fontSize="12" fill="#dc2626" textAnchor="middle" fontWeight="bold">APPROVED</text>
          <text x="40" y="48" fontFamily="Arial" fontSize="8" fill="#b91c1c" textAnchor="middle">LOAN</text>
        </g>
        
        {/* Hand silhouette pointing */}
        <g transform="translate(320, 160)" opacity="0.3">
          <ellipse cx="20" cy="35" rx="15" ry="20" fill="#64748b"/>
          <rect x="15" y="20" width="10" height="25" fill="#64748b" rx="5"/>
          <circle cx="18" cy="15" r="8" fill="#64748b"/>
          <circle cx="22" cy="15" r="8" fill="#64748b"/>
        </g>
        
        {/* Decorative elements */}
        <circle cx="350" cy="50" r="3" fill="#3b82f6" opacity="0.4"/>
        <circle cx="360" cy="60" r="2" fill="#10b981" opacity="0.4"/>
        <circle cx="340" cy="65" r="2.5" fill="#f59e0b" opacity="0.4"/>
      </svg>
    </div>
  )
}

export function SavingsAccountImage() {
  return (
    <img
      src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop&auto=format"
      alt="Savings Account - Fan of 100 US dollar banknotes"
      className="w-full h-64 object-cover rounded-lg shadow-2xl"
      loading="lazy"
    />
  )
}

export function EducationLoanImage() {
  return (
    <img
      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop&auto=format"
      alt="Education Loan - Student graduation and academic success"
      className="w-full h-64 object-cover rounded-lg shadow-2xl"
      loading="lazy"
    />
  )
}

export function FixedDepositImage() {
  return (
    <img
      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&auto=format"
      alt="Fixed Deposit"
      className="w-full h-64 object-cover rounded-lg shadow-2xl"
      loading="lazy"
    />
  )
}
