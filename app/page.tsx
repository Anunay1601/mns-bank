'use client'

import PremiumHeader from '@/components/premium-header'
import PremiumHero from '@/components/premium-hero'
import PremiumFeatures from '@/components/premium-features'
import WhatsNew from '@/components/whats-new'
import QuickLinks from '@/components/quick-links'
import FraudAwarenessBanner from '@/components/fraud-awareness-banner'

export default function Home() {
  return (
    <div className="flex flex-col">
      <FraudAwarenessBanner />
      <PremiumHeader />
      <PremiumHero />
      <PremiumFeatures />
      <WhatsNew />
      <QuickLinks />
    </div>
  );
}
