"use client";

import React from "react";
import Image from "next/image";

const GetInTouch = () => {
  return (
    <section className="bg-[#121212] text-white py-16">
      <div className="max-w-[1400px] mx-auto text-white py-10 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex items-center justify-center">
            <Image
              src="https://i.postimg.cc/28MKN0pz/Group-142402.png"
              alt="World Map"
              width={800} // Set appropriate width
              height={600} // Set appropriate height
              className="w-full h-auto"
            />
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <p className="text-sm uppercase text-gray-400">Get in touch</p>
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
    </section>
  );
};

export default GetInTouch;
