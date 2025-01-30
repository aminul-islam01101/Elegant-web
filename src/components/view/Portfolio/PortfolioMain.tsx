"use client";

import React from "react";
import Image from "next/image";

const PortfolioMain: React.FC = () => {
  return (
    <section className="bg-[#121212] text-white">
      {/* Featured Projects Section */}
      <div className="py-16">
        <div className="max-w-[1400px] px-4 mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold">
              Our Featured <span className="text-red-500">Projects</span>
            </h2>
            <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-20">
            {[
              "DIGITAL PROMOTIONS",
              "SOCIAL MEDIA",
              "WONDER CARTAGE",
              "MOBILE APPLICATION",
              "APPLICATION DEV",
              "CREATIVE ADS",
              "INTERNET INCLUDES",
              "UI FUNCTIONS",
              "BRAND DEVELOPMENT",
              "MULTI-STAGE",
              "COMPREHENSIVE",
              "CREATE STICKERS",
            ].map((title, index) => (
              <div
                key={index}
                className="group bg-gray-800 rounded-lg p-4 flex flex-col justify-between items-center relative transition-all duration-300 hover:border-2 hover:border-red-500 w-full h-64"
              >
                <div className="h-32 w-full bg-gray-600 rounded mb-4"></div>
                <h3 className="text-lg font-semibold text-center">{title}</h3>
                <div className="absolute -top-3 -right-3 bg-red-500 rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-bold">+</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="py-16 bg-[#1c1c1c]">
        <div className="max-w-[1400px] px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="flex items-center justify-center">
              <Image
                src="https://i.postimg.cc/28MKN0pz/Group-142402.png"
                alt="World Map"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <p className="text-sm uppercase text-gray-400 mb-2">Get in touch</p>
              <h2 className="text-xl md:text-3xl font-bold mb-8">
                Our Team Will Respond To You
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-[#121212] border-b-2 border-gray-700 px-4 py-3 text-sm focus:outline-none focus:border-red-600"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-[#121212] border-b-2 border-gray-700 px-4 py-3 text-sm focus:outline-none focus:border-red-600"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Number"
                    className="w-full bg-[#121212] border-b-2 border-gray-700 px-4 py-3 text-sm focus:outline-none focus:border-red-600"
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full bg-[#121212] border-b-2 border-gray-700 px-4 py-3 text-sm focus:outline-none focus:border-red-600"
                  />
                </div>
                <textarea
                  placeholder="Additional Message"
                  className="w-full bg-[#121212] border border-gray-700 px-4 py-3 rounded-md text-sm focus:outline-none focus:border-red-600"
                  rows={4}
                ></textarea>
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md text-sm font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioMain;
