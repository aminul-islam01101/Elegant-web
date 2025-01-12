"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Testimonial = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const testimonials = [
    {
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that using Lorem Ipsum is that.",
      author: "❝ Jhon Miklas – Manager",
      borderColor: "border-red-500",
      image: "https://i.postimg.cc/gk8gfSTn/istockphoto-1464539429-612x612.jpg",
    },
    {
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.",
      author: "❝ Mrine Diane – Manager",
      borderColor: "border-gray-500",
      image: "https://i.postimg.cc/YCxbS4k7/istockphoto-1413766112-612x612.jpg",
    },
    {
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.",
      author: "❝ Pather Diane – Manager",
      borderColor: "border-gray-500",
      image: "https://i.postimg.cc/T1kXnKQd/istockphoto-545583714-612x612.jpg",
    },
    {
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.",
      author: "❝ Erin Erin – Manager",
      borderColor: "border-gray-500",
      image: "https://i.postimg.cc/kXpm4tBw/360-F-792371799-SYRZRLqm9r1j-K36rf-F6-I2-Cw-A1-VR4-Ele0.jpg",
    },
    {
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.",
      author: "❝ Atherin Ane – Manager",
      borderColor: "border-gray-500",
      image: "https://i.postimg.cc/Nj2wrfXt/istockphoto-1531487122-612x612.jpg",
    },
    {
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.",
      author: "❝ Diane Diane – Manager",
      borderColor: "border-gray-500",
      image: "https://i.postimg.cc/d0McRPRy/isolated-shot-attractive-successful-young-brunette-bearded-male-entrepreneur-wearing-trendy-jacket-c.avif",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % (testimonials.length / 2));
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="bg-[#121212] text-white py-16 px-4 lg:px-20">
      <div className="max-w-[1400px] px-4 mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-sm font-normal text-[#9ca3af]">TESTIMONIAL</p>
            <h2 className="text-4xl font-semibold mt-2">
              Our <span className="text-red-500">Clients</span> Reviews
            </h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center space-y-12 lg:space-y-0 lg:space-x-12">
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6 bg-gradient-to-r from-[#0a0a0a] to-[#333333] p-6 rounded-lg shadow-lg">
            <div
              className={`h-24 w-24 border-4 ${testimonials[activeSlide * 2].borderColor} rounded-full flex-shrink-0`}
            >
              <Image
                src={testimonials[activeSlide * 2].image}
                alt={testimonials[activeSlide * 2].author}
                width={96}
                height={96}
                className="h-full w-full object-cover rounded-full"
              />
            </div>
            <div className="hidden lg:block h-40 w-[1px] bg-gray-700"></div>
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-lg max-w-md">
                {testimonials[activeSlide * 2].text}
              </p>
              <p className="text-white text-lg font-bold mt-2 flex items-center justify-center lg:justify-start">
                <span className="text-red-500 text-6xl mr-2">❝</span>
                {testimonials[activeSlide * 2].author.replace("❝", "").trim()}
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6 bg-gradient-to-r from-[#0a0a0a] to-[#333333] p-6 rounded-lg shadow-lg">
            <div
              className={`h-24 w-24 border-4 ${testimonials[activeSlide * 2 + 1].borderColor} rounded-full flex-shrink-0`}
            >
              <Image
                src={testimonials[activeSlide * 2 + 1].image}
                alt={testimonials[activeSlide * 2 + 1].author}
                width={96}
                height={96}
                className="h-full w-full object-cover rounded-full"
              />
            </div>
            <div className="hidden lg:block h-40 w-[1px] bg-gray-700"></div>
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-lg max-w-md">
                {testimonials[activeSlide * 2 + 1].text}
              </p>
              <p className="text-white text-lg font-bold mt-2 flex items-center justify-center lg:justify-start">
                <span className="text-red-500 text-6xl mr-2">❝</span>
                {testimonials[activeSlide * 2 + 1].author.replace("❝", "").trim()}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-4 mt-12">
          {Array.from({ length: testimonials.length / 2 }).map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === activeSlide ? "bg-red-500" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
