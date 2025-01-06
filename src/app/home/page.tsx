import AboutUs from "@/components/view/AboutUs/AboutUs";
import Banner from "@/components/view/Banner/Banner";
import DataServices from "@/components/view/DataServices/DataServices";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <Banner/>
      <AboutUs/>
      <DataServices />
    </div>
  );
}
