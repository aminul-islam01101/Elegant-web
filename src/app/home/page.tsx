import AboutUs from "@/components/view/AboutUs/AboutUs";
import Banner from "@/components/view/Banner/Banner";
import DataServices from "@/components/view/DataServices/DataServices";
import MarketingBrands from "@/components/view/MarketingBrands/MarketingBrands";
import Marquee from "@/components/view/Marquee/Marquee";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <DataServices />
      <Marquee />
      <MarketingBrands />
    </div>
  );
}
