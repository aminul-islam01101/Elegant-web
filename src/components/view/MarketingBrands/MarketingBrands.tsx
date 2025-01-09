import Image from "next/image";
import React from "react";

export default function MarketingBrands() {
  interface cardInt {
    id: number;
    image: string;
  }
  const cardData: cardInt[] = [
    { id: 1, image: "/assets/marketing1.png" },
    { id: 2, image: "/assets/marketing2.png" },
    { id: 3, image: "/assets/marketing3.png" },
    { id: 4, image: "/assets/marketing4.png" },
    { id: 5, image: "/assets/marketing5.png" },
    { id: 6, image: "/assets/marketing6.png" },
    { id: 7, image: "/assets/marketing7.png" },
    { id: 8, image: "/assets/marketing8.png" },
    { id: 9, image: "/assets/marketing1.png" },
    { id: 10, image: "/assets/marketing9.png" },
  ];
  return (
    <div className="bg-[#121212] lg:h-[720px] ">
      <div className="max-w-[1400px] mx-auto px-4 flex flex-col h-full justify-center">
        <div className="flex flex-col space-x-10">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <p className="text-sm font-medium text-[#9ca3af]">OUR BRANDS</p>
              <h2 className="text-4xl font-bold mt-2">
                Tailored Digital
                <span className="text-red-500"> Marketing Brands</span>
              </h2>
            </div>
          </div>
        </div>
        {/* card section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto justify-between md:gap-x-14 xl:gap-x-24 gap-y-10">
          {cardData.map((item) => {
            return (
              <div
                key={item.id}
                className="border w-[300px] md:w-[200px] text-center flex justify-center items-center h-[100px] hover:bg-red-800 rounded-md"
              >
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  className="card-image"
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
