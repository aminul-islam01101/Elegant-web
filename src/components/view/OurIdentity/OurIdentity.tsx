import React from "react";
import { FaTools, FaLightbulb, FaPalette, FaStar } from "react-icons/fa";

const OurIdentity = () => {
  return (
    <section className="bg-[#121212] text-white py-16">
      <div className="max-w-[1400px] mx-auto text-white py-10 px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase text-gray-400 tracking-wide">What We Are</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Precision Targeting For{" "}
            <span className="text-red-500">Monumental Brand</span> Growth <br />
            Changing Explosive.
          </h2>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1: Advance Tools */}
          <div className="group bg-[2F2F2F] p-6 rounded-lg border-2 border-black flex flex-col items-start text-start   hover:border-red-600 transition-all min-h-[350px]">
            <div className="mb-4">
              <FaTools
                size={80}
                className="text-white group-hover:text-red-600 transition-all"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-all mt-4">
              Advance Tools
            </h3>
            <p className="text-gray-400 text-sm mt-4">
              Generators on the internet tend to repeat predefined chunks as
              necessary, making this the first true generator on the internet.
            </p>
          </div>

          {/* Card 2: Innovation */}
          <div className="group bg-[2F2F2F] p-6 rounded-lg border-2 border-black flex flex-col items-start text-start hover:border-red-600 transition-all min-h-[350px]">
            <div className="mb-4">
              <FaLightbulb
                size={80}
                className="text-white group-hover:text-red-600 transition-all"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-all mt-4">
              Innovation
            </h3>
            <p className="text-gray-400 text-sm mt-4">
              Generators on the internet tend to repeat predefined chunks as
              necessary, making this the first true generator on the internet.
            </p>
          </div>

          {/* Card 3: Creative Ideas */}
          <div className="group bg-[2F2F2F] p-6 rounded-lg border-2 border-black flex flex-col items-start text-start  hover:border-red-600 transition-all min-h-[350px]">
            <div className="mb-4">
              <FaPalette
                size={80}
                className="text-white group-hover:text-red-600 transition-all"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-all mt-4">
              Creative Ideas
            </h3>
            <p className="text-gray-400 text-sm mt-4">
              Generators on the internet tend to repeat predefined chunks as
              necessary, making this the first true generator on the internet.
            </p>
          </div>

          {/* Card 4: Content */}
          <div className="group bg-[2F2F2F] p-6 rounded-lg border-2 border-black flex flex-col items-start text-start  hover:border-red-600 transition-all min-h-[350px]">
            <div className="mb-4">
              <FaStar
                size={80}
                className="text-white group-hover:text-red-600 transition-all"
              />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-all mt-4">
              Content
            </h3>
            <p className="text-gray-400 text-sm mt-4">
              Generators on the internet tend to repeat predefined chunks as
              necessary, making this the first true generator on the internet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurIdentity;
