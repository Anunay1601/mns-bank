import Carousel from "@/components/carousel"
import ProductCards from "@/components/product-cards"
import WhatsNew from "@/components/whats-new"
import QuickLinks from "@/components/quick-links"
import FraudAwarenessBanner from "@/components/fraud-awareness-banner"
import HomeManagedContent from "@/components/home-managed-content"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Carousel />
      <FraudAwarenessBanner />
      <ProductCards />
      <HomeManagedContent />
      <WhatsNew />
      <QuickLinks />
    </div>
  );
}
