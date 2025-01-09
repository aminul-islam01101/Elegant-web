/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";

const PricePlan: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="bg-black text-white py-20 px-4 lg:px-20 ">
        <div className="max-w-[1400px] px-4 mx-auto">
     {/* Header */}
     <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-sm font-medium text-[#9ca3af]">Blogs</p>
            <h2 className="text-4xl font-semibold mt-2">
            Explore Latest <span className="text-red-500">Blogs & News</span>
            </h2>
          </div>
          {/* Toggle Button */}
      <div className="flex justify-center items-center mb-12">
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
        <div className="w-full lg:w-1/3 bg-[#1b1b1b] text-left p-8 rounded-lg border border-gray-500">
          <div className="flex justify-between items-center mb-6">
            <div>
            <p className="text-3xl font-bold text-white mb-2">{isYearly ? "$2300" : "$230"}</p>
            <p className=" text-sm text-gray-400">Per month</p>
            </div>
            <p className="text-white text-sm uppercase tracking-widest mb-6">Basic Plan</p>
          </div>
          
          
          <ul className="text-gray-400 text-sm space-y-4 mb-8">
            <li>✔ Your Powerhouse Digital Marketing Solutions</li>
            <li>✔ Capture Attention And Inspire Your Audience</li>
            <li>✔ Marrying The Magic Of Marketing Science</li>
            <li>✔ Craft Your Brand's Distinctive Voice</li>
            <li>✔ Precision Targeting Maximized Brand Growth</li>
          </ul>
          <button className="px-6 py-2 bg-red-500 text-white rounded-full text-sm font-medium hover:bg-red-600 transition">
            Get Plan
          </button>
        </div>

        {/* Standard Plan */}
        <div className="w-full lg:w-1/3 bg-[#292929] text-left p-8 rounded-lg border border-red-500">
        <div className="flex justify-between items-center mb-6">
            <div>
            <p className="text-3xl font-bold text-white mb-2">{isYearly ? "$2900" : "$299"}</p>
            <p className=" text-sm text-gray-400">Per month</p>
            </div>
            <p className="text-white text-sm uppercase tracking-widest mb-6">Standard</p>
          </div>
          <ul className="text-gray-400 text-sm space-y-4 mb-8">
            <li>✔ Transform Ideas Into Reality, Swiftly</li>
            <li>✔ Turbocharge Your Startup's Growth</li>
            <li>✔ Skyrocket Our Expert Digital Marketing</li>
            <li>✔ Your Growth, Our Mission Customers</li>
            <li>✔ The Triple-C Force: Creativity, Content</li>
          </ul>
          <button className="px-6 py-2 bg-red-500 text-white rounded-full text-sm font-medium hover:bg-red-600 transition">
            Get Plan
          </button>
        </div>

        {/* Premium Plan */}
        <div className="w-full lg:w-1/3 bg-[#1b1b1b] text-left p-8 rounded-lg border border-gray-500">
        <div className="flex justify-between items-center mb-6">
            <div>
            <p className="text-3xl font-bold text-white mb-2">{isYearly ? "$3500" : "$350"}</p>
            <p className=" text-sm text-gray-400">Per month</p>
            </div>
            <p className="text-white text-sm uppercase tracking-widest mb-6">Premium</p>
          </div>
          <ul className="text-gray-400 text-sm space-y-4 mb-8">
            <li>✔ Propel Forward With Data-Driven Marketing</li>
            <li>✔ Target, Align, And Launch To Success</li>
            <li>✔ Strategies, Execute, Triumph Drives</li>
            <li>✔ Tailored Digital Marketing That Conversions</li>
            <li>✔ Are You Ready To Scale: Drives Expansion</li>
          </ul>
          <button className="px-6 py-2 bg-red-500 text-white rounded-full text-sm font-medium hover:bg-red-600 transition">
            Get Plan
          </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default PricePlan;
