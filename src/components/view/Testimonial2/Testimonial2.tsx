"use client";

import React, { useState } from "react";
import Image from "next/image";

const Testimonial2 = () => {
  const reviews = [
    {
      name: "Dr Ahemed Hasim",
      role: "Client Manager",
      review:
        "Business Strategy Refers To The Set Of Decisions And Actions That A Company Formulates To Achieve Its Long-Term Goals And Objectives. It Involves Analyzing The Company's Internal Strengths And Weaknesses, Understanding The External Market Conditions. Integer Pellentesque Dignissim Est, Vitae Rhoncus Leo Tempus At. Proin Vel Magna Vitae Tellus Blandit Faucibus Sit Amet At Tellus. Suspendisse Venenatis Pharetra Molestie.",
      rating: 5,
      image: "https://i.postimg.cc/T1kXnKQd/istockphoto-545583714-612x612.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Head",
      review:
        "We Were Highly Impressed With The Results Delivered By The Team. The Understanding Of Our Business Needs And Quick Adaptability Made The Entire Process Seamless. Integer Pellentesque Dignissim Est, Vitae Rhoncus Leo Tempus At. Suspendisse Venenatis Pharetra Molestie.",
      rating: 4.5,
      image: "https://i.postimg.cc/YCxbS4k7/istockphoto-1413766112-612x612.jpg",
    },
    {
      name: "Michael Roberts",
      role: "CEO",
      review:
        "Fantastic Experience From Start To Finish. The Team Delivered Exceptional Quality And Attention To Detail. Suspendisse Venenatis Pharetra Molestie. Integer Pellentesque Dignissim Est, Vitae Rhoncus Leo Tempus At.",
      rating: 5,
      image: "https://i.postimg.cc/gk8gfSTn/istockphoto-1464539429-612x612.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const previousReview = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? reviews.length - 1 : prev - 1
    );
  };

  const { name, role, review, rating, image } = reviews[currentIndex];

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-[1400px] mx-auto text-white py-10 px-4">
        {/* Header with Arrows */}
        <div className="flex items-center justify-between mb-12 max-w-5xl mx-auto">
          <div>
            <p className="text-sm uppercase text-gray-400">Testimonial</p>
            <h2 className="text-3xl md:text-5xl font-bold">
              Customer Project Reviews
            </h2>
          </div>
          <div className="flex gap-4">
            <button
              onClick={previousReview}
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
            >
              ←
            </button>
            <button
              onClick={nextReview}
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
            >
              →
            </button>
          </div>
        </div>

        {/* Review Section */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-8">
            {/* Avatar */}
            {/* Avatar */}
<div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-700 flex-shrink-0 relative">
  <Image
    src={image}
    alt={name}
    layout="fill"
    objectFit="cover"
    className="rounded-full"
  />
</div>


            {/* Review Text */}
            <p className="text-gray-300 text-sm leading-relaxed">{review}</p>
          </div>

          {/* Author Section */}
          <div className="mt-6 flex items-center justify-between border-t border-gray-600 pt-4">
            <div>
              <h3 className="font-bold">{name}</h3>
              <p className="text-sm text-gray-400">{role}</p>
            </div>
            <div className="text-yellow-400 text-xl">
              {"★".repeat(Math.floor(rating)) +
                (rating % 1 !== 0 ? "✩" : "")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial2;
