import Carousel from "@/components/carousel"
import ProductCards from "@/components/product-cards"
import WhatsNew from "@/components/whats-new"
import QuickLinks from "@/components/quick-links"
import FraudAwarenessBanner from "@/components/fraud-awareness-banner"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Carousel />
      <FraudAwarenessBanner />
      <ProductCards />
      <WhatsNew />
      <QuickLinks />
    </div>
  );
}
