import PremiumHero from '@/components/premium-hero'

export default function HeroDemo() {
  return (
    <div className="min-h-screen">
      <PremiumHero />
      
      {/* Additional sections to show scroll */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Experience Premium Banking
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join millions of customers who trust MNS Bank for their financial needs. 
            Our cutting-edge technology and customer-first approach make banking simpler and more secure.
          </p>
        </div>
      </section>
    </div>
  )
}
