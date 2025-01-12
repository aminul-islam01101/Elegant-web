/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import History from "../../../../public/assets/HistoryImage.png";

type TimelineItem = {
  year: string;
};

const timelineData: TimelineItem[] = [
  { year: "2020" },
  { year: "2021" },
  { year: "2022" },
  { year: "2023" },
  { year: "2024" },
];

export default function OurHistory() {
  return (
    <div className="bg-[#282828] h-full lg:h-[100vh] py-10 flex justify-center items-center">
      <div className="max-w-[1400px] w-[1400px] mx-auto flex flex-col lg:flex-row justify-between  px-4 space-y-10">
        <div className="space-y-7  w-full">
          {/* Title Section */}
          <div className="flex items-center gap-4">
            <div className="w-2 h-12 bg-gradient-to-b from-[#DD4242] to-[#FF6666]"></div>
            <h3 className="text-lg uppercase tracking-widest text-[#9ca3af] font-semibold">
              OUR HISTORY
            </h3>
          </div>

          {/* Heading */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-snug text-white">
            Why we are
            <span className="text-[#DD4242]"> Different in business</span>
            <br />
            <span className="text-md md:text-xl">
              Trust, Diligence, Succeed
            </span>
          </h2>

          {/* Paragraph */}
          <p className="text-[#9ca3af] text-lg leading-relaxed max-w-2xl">
            here are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which don't look even slightly
            believable.
          </p>
          <button className="px-6 py-2 bg-red-500 text-white rounded-full text-sm font-medium hover:bg-red-600 transition">
            Know more
          </button>
          {/* history timeline */}
          <div>
            <div className="flex justify-center items-center">
              <div className="w-full flex flex-col">
                <div className="flex items-center w-full mx-auto">
                  {timelineData.map((item, index) => (
                    <div className="flex items-center w-full" key={item.year}>
                      {/* Circle */}
                      <div className="flex flex-col items-center text-center">
                        <div className="flex items-center text-xs justify-center w-10 h-10 bg-blue-500 text-white rounded-full">
                          {item.year}
                        </div>
                      </div>

                      {/* Line */}
                      {index < timelineData.length - 1 && (
                        <div className="flex-1 h-1 bg-blue-500  w-full"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="w-full  items-end flex lg:justify-end md:justify-start">
          <Image src={History} height={879} width={561} alt="History" />
        </div>
      </div>
    </div>
  );
}
