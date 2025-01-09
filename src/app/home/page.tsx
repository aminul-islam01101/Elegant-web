import AboutUs from "@/components/view/AboutUs/AboutUs";
import Banner from "@/components/view/Banner/Banner";
import DataServices from "@/components/view/DataServices/DataServices";
import TeamMembers from "@/components/view/TeamMembers/TeamMembers";
import MarketingBrands from "@/components/view/MarketingBrands/MarketingBrands";
import Marquee from "@/components/view/Marquee/Marquee";
import Blogs from "@/components/view/Blogs/Blogs";
import Testimonial from "@/components/view/Testimonial/Testimonial";
import PricePlan from "@/components/view/PricePlan/PricePlan";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <DataServices />
      <Marquee />
      <TeamMembers />
      <MarketingBrands />
      <Blogs/>
      <Testimonial/>
      <PricePlan/>
    </div>
  );
}
