import MarqueeItem from "@/components/re-ui/MarqueeItem";
import React from "react";

export default function Marquee() {
  return (
    <div className="bg-black h-full w-full flex flex-col">
      <MarqueeItem speed={100} x={["0%", "-100%"]}>
        Design development portfolio
      </MarqueeItem>
      <MarqueeItem speed={100} x={["-100%", "0%"]}>
        Design development portfolio
      </MarqueeItem>
    </div>
  );
}
