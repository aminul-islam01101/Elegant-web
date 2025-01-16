import AboutUs from "@/components/view/AboutUs/AboutUs";
import Banner from "@/components/view/Banner/Banner";
import DataServices from "@/components/view/DataServices/DataServices";
import TeamMembers from "@/components/view/TeamMembers/TeamMembers";
import MarketingBrands from "@/components/view/MarketingBrands/MarketingBrands";
import Marquee from "@/components/view/Marquee/Marquee";
import Blogs from "@/components/view/Blogs/Blogs";
import Testimonial from "@/components/view/Testimonial/Testimonial";
import PricePlan from "@/components/view/PricePlan/PricePlan";
import OurHistory from "@/components/view/OurHistory/OurHistory";
import Banner2 from "@/components/view/Banner2/Banner2";
import OurIdentity from "@/components/view/OurIdentity/OurIdentity";
import Marquee2 from "@/components/view/Marquee2/Marquee2";
import Strategy from "@/components/view/Strategy/Strategy";


export default function HomePage() {
  return (
    <div>
      {/* <Banner /> */}
      <Banner2 />
      <AboutUs />
      <DataServices />
      <Marquee />
      <TeamMembers />
      <MarketingBrands />
      <PricePlan />
      <OurHistory />
      <Blogs />
      <Testimonial />
      <OurIdentity />
      <Marquee2 />
      <Strategy />
    </div>
  );
}
