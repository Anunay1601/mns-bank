import React from 'react'

// Banking Hero Visual Component
export function BankingHeroVisual() {
  return (
    <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      <div className="relative z-10 text-center text-white">
        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2 6h20v12H2V6zm2 2v8h16V8H4zm2 2h12v4H6v-4z"/>
          </svg>
        </div>
        <p className="text-lg font-semibold">Digital Banking</p>
        <p className="text-sm opacity-80">Secure & Fast</p>
      </div>
    </div>
  )
}

// Mobile Banking Visual Component
export function MobileBankingVisual() {
  return (
    <div className="w-full h-64 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      <div className="relative z-10 text-center text-white">
        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
          </svg>
        </div>
        <p className="text-lg font-semibold">Mobile Banking</p>
        <p className="text-sm opacity-80">Bank Anywhere</p>
      </div>
    </div>
  )
}

// Home Loan Visual Component
export function HomeLoanVisual() {
  return (
    <div className="w-full h-64 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      <div className="relative z-10 text-center text-white">
        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </div>
        <p className="text-lg font-semibold">Home Loans</p>
        <p className="text-sm opacity-80">Dream Home</p>
      </div>
    </div>
  )
}

// Credit Card Visual Component
export function CreditCardVisual() {
  return (
    <div className="w-full h-64 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      <div className="relative z-10 text-center text-white">
        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
          </svg>
        </div>
        <p className="text-lg font-semibold">Credit Cards</p>
        <p className="text-sm opacity-80">Premium Benefits</p>
      </div>
    </div>
  )
}

// Security Visual Component
export function SecurityVisual() {
  return (
    <div className="w-full h-64 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      <div className="relative z-10 text-center text-white">
        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
          </svg>
        </div>
        <p className="text-lg font-semibold">Banking Security</p>
        <p className="text-sm opacity-80">Protected & Safe</p>
      </div>
    </div>
  )
}

// Branch Banking Visual Component
export function BranchBankingVisual() {
  return (
    <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      <div className="relative z-10 text-center text-white">
        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
        <p className="text-lg font-semibold">Branch Banking</p>
        <p className="text-sm opacity-80">Near You</p>
      </div>
    </div>
  )
}
