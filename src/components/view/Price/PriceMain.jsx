/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";

const PriceMain = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    { question: "Quality Services Provided At Affordable Rates?", answer: "We provide top-notch services at competitive rates tailored to your needs." },
    { question: "Minimum Prices For The Maximum Output Advertise Anything?", answer: "Our advertising solutions maximize your output while keeping prices affordable." },
    { question: "From The Lowest To The Highest In Advertising Services?", answer: "We offer a wide range of advertising services to suit any budget or goal." },
    { question: "Advertising That Makes All The Difference Leaping Over Boundaries?", answer: "Our innovative advertising strategies ensure your message reaches beyond boundaries." },
    { question: "The Innovative Ideas You Would Love Evolution Of Brilliant?", answer: "We provide creative and brilliant ideas for your brand's growth and evolution." },
    { question: "The Agency Of Something Creative We Play Creativity?", answer: "Our agency thrives on creativity and delivers unique solutions for your needs." },
  ];


  return (
    <div>
      {/* Price Plan Section */}
      <section className="bg-[#121212] text-white py-16">
        <div className="max-w-[1400px] px-4 mx-auto">
          {/* Header */}
          <div className=" justify-center items-center mb-12">
            <div>
              {/* <p className="text-sm font-medium text-[#9ca3af]">Price Plan</p> */}
              <h2 className="text-4xl font-semibold mt-2 text-center">
                Creative Work Value <span className="text-red-500">Best Price</span>
              </h2>
            </div>
            {/* Toggle Button */}
            <div className="flex justify-center items-center mb-12 mt-4">
              <span className="text-sm text-gray-400 mr-3">Monthly</span>
              <div
                className="relative w-16 h-8 bg-gray-700 rounded-full flex items-center cursor-pointer"
                onClick={() => setIsYearly(!isYearly)}
              >
                <div
                  className={`absolute w-6 h-6 bg-red-500 rounded-full transition-transform ${
                    isYearly ? "translate-x-8" : "translate-x-0"
                  }`}
                ></div>
              </div>
              <span className="text-sm text-gray-400 ml-3">Yearly</span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            {/* Basic Plan */}
            <div className="w-full lg:w-1/3 bg-[#1b1b1b] text-left p-8 rounded-lg border border-gray-500 relative group">
              <div className="hover:bg-red-500 transition p-6 rounded-t-lg group-hover:rounded-b-none">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-3xl font-bold text-white mb-2">
                      {isYearly ? "$2300" : "$230"}
                    </p>
                    <p className="text-sm text-gray-400">Per month</p>
                  </div>
                  <p className="text-white text-sm uppercase tracking-widest mb-6">Basic Plan</p>
                </div>
              </div>
              <div className="h-[1px] w-full bg-gray-500"></div>
              <ul className="text-gray-400 text-sm space-y-4 mt-8">
                <li>✔ Your Powerhouse Digital Marketing Solutions</li>
                <li>✔ Capture Attention And Inspire Your Audience</li>
                <li>✔ Marrying The Magic Of Marketing Science</li>
                <li>✔ Craft Your Brand's Distinctive Voice</li>
                <li>✔ Precision Targeting Maximized Brand Growth</li>
              </ul>
              <button className="mt-6 px-6 py-2 bg-red-500 text-white rounded-full text-sm font-medium hover:bg-red-600 transition">
                Get Plan
              </button>
            </div>

            {/* Standard Plan */}
            <div className="w-full lg:w-1/3 bg-[#292929] text-left p-8 rounded-lg relative group">
              <div className="bg-red-500 transition p-6 rounded-t-lg group-hover:rounded-b-none">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-3xl font-bold text-white mb-2">
                      {isYearly ? "$2900" : "$299"}
                    </p>
                    <p className="text-sm text-gray-400">Per month</p>
                  </div>
                  <p className="text-white text-sm uppercase tracking-widest mb-6">Standard</p>
                </div>
              </div>
              <div className="h-[1px] w-full bg-gray-500"></div>
              <ul className="text-gray-400 text-sm space-y-4 mt-8">
                <li>✔ Transform Ideas Into Reality, Swiftly</li>
                <li>✔ Turbocharge Your Startup's Growth</li>
                <li>✔ Skyrocket Our Expert Digital Marketing</li>
                <li>✔ Your Growth, Our Mission Customers</li>
                <li>✔ The Triple-C Force: Creativity, Content</li>
              </ul>
              <button className="mt-6 px-6 py-2 bg-red-500 text-white rounded-full text-sm font-medium hover:bg-red-600 transition">
                Get Plan
              </button>
            </div>

            {/* Premium Plan */}
            <div className="w-full lg:w-1/3 bg-[#1b1b1b] text-left p-8 rounded-lg border border-gray-500 relative group">
              <div className="hover:bg-red-500 transition p-6 rounded-t-lg group-hover:rounded-b-none">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-3xl font-bold text-white mb-2">
                      {isYearly ? "$3500" : "$350"}
                    </p>
                    <p className="text-sm text-gray-400">Per month</p>
                  </div>
                  <p className="text-white text-sm uppercase tracking-widest mb-6">Premium</p>
                </div>
              </div>
              <div className="h-[1px] w-full bg-gray-500"></div>
              <ul className="text-gray-400 text-sm space-y-4 mt-8">
                <li>✔ Propel Forward With Data-Driven Marketing</li>
                <li>✔ Target, Align, And Launch To Success</li>
                <li>✔ Strategies, Execute, Triumph Drives</li>
                <li>✔ Tailored Digital Marketing That Conversions</li>
                <li>✔ Are You Ready To Scale: Drives Expansion</li>
              </ul>
              <button className="mt-6 px-6 py-2 bg-red-500 text-white rounded-full text-sm font-medium hover:bg-red-600 transition">
                Get Plan
              </button>
            </div>
          </div>
        </div>

        {/* Price Faq */}
        <div>
        <div className=" text-white py-10">
      <div className="max-w-[1400px] mx-auto text-white py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Have Any Question? <span className="text-red-500">Find Answer Here.</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-[#292929] rounded-md overflow-hidden ${activeIndex === index ? "bg-[#292929]" : "bg-[#292929]"}`}
            >
              <button
                className="w-full text-left px-4 py-3 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span>{activeIndex === index ? "-" : "+"}</span>
              </button>
              {activeIndex === index && (
                <div className="bg-[#292929] px-4 py-3 text-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
        </div>
      </section>
    </div>
  );
};

export default PriceMain;
