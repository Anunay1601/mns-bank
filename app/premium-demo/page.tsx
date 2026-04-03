'use client'

import PremiumHeader from '@/components/premium-header'
import { BalanceCard } from '@/components/balance-card'

export default function PremiumDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <PremiumHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Premium Banking
              <span className="block text-blue-600">Experience</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the future of digital banking with MNS Bank. 
              Secure, smart, and designed for your modern lifestyle.
            </p>
          </div>

          {/* Balance Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <BalanceCard 
                balance={12543.67}
                subtitle="Total Balance"
              />
            </div>
            <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
              <BalanceCard 
                balance={8750.25}
                subtitle="Savings Account"
                currency="EUR"
              />
            </div>
            <div className="fade-in-up" style={{ animationDelay: '0.6s' }}>
              <BalanceCard 
                balance={25420.89}
                subtitle="Investment Portfolio"
                showToggle={false}
              />
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Instant Transfers",
                description: "Send money anywhere in seconds",
                icon: "⚡",
                delay: "0.8s"
              },
              {
                title: "Smart Analytics",
                description: "Track your spending patterns",
                icon: "📊",
                delay: "1.0s"
              },
              {
                title: "24/7 Support",
                description: "Always here to help you",
                icon: "🎧",
                delay: "1.2s"
              },
              {
                title: "Bank-Grade Security",
                description: "Your money is always safe",
                icon: "🔒",
                delay: "1.4s"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 fade-in-up"
                style={{ animationDelay: feature.delay }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections for Scroll Testing */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose MNS Bank?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Digital First Banking</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience banking reimagined for the digital age. Our platform combines 
 cutting-edge technology with intuitive design to deliver seamless financial 
 services at your fingertips.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Trusted by Millions</h3>
              <p className="text-gray-600 leading-relaxed">
                Join over 2 million satisfied customers who trust MNS Bank for their 
 financial needs. We're committed to providing exceptional service and innovative 
 solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
