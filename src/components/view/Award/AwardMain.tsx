"use client";

import { useState } from "react";
import Image from "next/image";

interface Award {
  title: string;
  logo: string;
  date: string;
  location: string;
  description: string;
  videoUrl: string;
}

const AwardMain: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const awards: Award[] = [
    {
      title: "B2B Marketing Awards",
      logo: "https://i.postimg.cc/4dzfBxRM/Group-142121.png",
      date: "01 Jan 2024",
      location: "Darmstadt",
      description:
        "Recognizing outstanding achievements in B2B marketing strategies and innovation.",
      videoUrl: "https://www.youtube.com/watch?v=Xciunyug99U&list=PLwGdqUZWnOp0xfHQFmlL52b_6-QZ0mnk_", 
    },
    {
      title: "Creative Disruptors Awards",
      logo: "https://i.postimg.cc/D0n2D32z/Group-142122.png",
      date: "15 Jan 2024",
      location: "Giessen",
      description:
        "Celebrating those who redefine creativity and disrupt industries with their ideas.",
      videoUrl: "https://www.youtube.com/watch?v=Xciunyug99U&list=PLwGdqUZWnOp0xfHQFmlL52b_6-QZ0mnk_", 
    },
    {
      title: "Digital Advertising Awards",
      logo: "https://i.postimg.cc/PfQfDJ4v/Group-142123.png",
      description:
        "Generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.",
      date: "14 Feb 2024",
      location: "Kassel",
      videoUrl: "https://www.youtube.com/watch?v=Xciunyug99U&list=PLwGdqUZWnOp0xfHQFmlL52b_6-QZ0mnk_", 
    },
    {
      title: "B2B Marketing Awards",
      logo: "https://i.postimg.cc/KvcGDbqq/Group-142177.png",
      date: "01 Jan 2024",
      location: "Darmstadt",
      description:
        "Honoring top performers in B2B marketing who set benchmarks for excellence.",
      videoUrl: "https://www.youtube.com/watch?v=Xciunyug99U&list=PLwGdqUZWnOp0xfHQFmlL52b_6-QZ0mnk_", 
    },
    {
      title: "Creative Disruptors Awards",
      logo: "https://i.postimg.cc/DyC2CNR2/Group-142159.png",
      date: "14 Feb 2024",
      location: "Kassel",
      description:
        "Showcasing pioneers in creativity who challenge conventions and innovate.",
      videoUrl: "https://www.youtube.com/watch?v=Xciunyug99U&list=PLwGdqUZWnOp0xfHQFmlL52b_6-QZ0mnk_", 
    },
  ];

  const handleToggle = (currentIndex: number) => {
    setActiveIndex((prevIndex) => (prevIndex === currentIndex ? null : currentIndex));
  };

  return (
    <section className="bg-black text-white py-16 px-4 lg:px-20">
      <div className="max-w-[1400px] px-4 mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold tracking-wide">
            Our Successful <span className="text-red-500">Awards</span>
          </h2>
        </div>

        {/* Awards List */}
        <div className="divide-y divide-gray-700 border-t border-b border-gray-700">
          {awards.map((award, currentIndex) => (
            <div
              key={currentIndex}
              className={`p-6 cursor-pointer ${
                activeIndex === currentIndex ? "bg-black" : "bg-black"
              }`}
              onClick={() => handleToggle(currentIndex)}
            >
              <div className="flex items-center justify-between">
                {/* Left Section */}
                <div className="flex items-center space-x-4">
                  {/* Icon */}
                  <span
                    className={`text-xl ${
                      activeIndex === currentIndex
                        ? "text-red-500"
                        : "text-white text-opacity-50"
                    }`}
                  >
                    {activeIndex === currentIndex ? "▼" : "▶"}
                  </span>

                  {/* Title */}
                  <h3
                    className={`text-lg font-semibold ${
                      activeIndex === currentIndex ? "text-red-500" : "text-white"
                    }`}
                  >
                    {award.title}
                  </h3>
                </div>

                {/* Center Section - Logo */}
                <Image
                  src={award.logo}
                  alt={`${award.title} logo`}
                  width={100}
                  height={50}
                  className="object-contain"
                />

                {/* Right Section - Date and Location */}
                <div className="text-right text-sm text-gray-400">
                  <p>{award.date}</p>
                  <p>{award.location}</p>
                </div>
              </div>

              {/* Expanded Section */}
              {activeIndex === currentIndex && (
                <div className="mt-4 pl-10 flex flex-col sm:flex-row sm:items-center sm:space-x-6">
                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 sm:mb-0 sm:flex-1">
                    {award.description}
                  </p>
                  {/* Watch Video */}
                  {award.videoUrl && (
                    <a
                      href={award.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-black text-white border border-gray-500 rounded-full text-xs flex-shrink-0 hover:bg-red-600 hover:border-red-600"
                    >
                      Watch Video
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardMain;
