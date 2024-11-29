import BestSellerProducts from "@/components/custom/BestSellerProducts";
import CategoryCards from "@/components/custom/CategoryCards";
import HeroSection from "@/components/custom/HeroSection";
import PartnerShip from "@/components/custom/PartnerShip";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <PartnerShip />
      <CategoryCards />
      <BestSellerProducts />
    </div>
  );
}

export default HomePage;
