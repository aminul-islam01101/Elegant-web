import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Banner2 = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-[1400px] mx-auto text-white py-10 px-4">
        <div className="relative h-screen flex flex-col items-center justify-between px-8">
          {/* Central Title */}
          <div className="absolute top-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold">
              Unleashing The Potential
            </h1>
          </div>

          {/* Left Social Icons */}
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 space-y-8">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors block"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors block"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors block"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors block"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Main Content */}
          <div className="flex flex-1 items-center justify-center w-full mt-16">
            {/* Left Image */}
            <div className="flex-1 flex items-center justify-center">
              <div className="bg-gray-700 w-[80%] h-[100px] md:h-[200px] lg:h-[300px] rounded-lg"></div>
            </div>

            {/* Right Content */}
            <div className="flex-1 flex flex-col items-start justify-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-snug">
                <span>Agency</span>
              </h1>
              <p className="text-gray-400 text-sm md:text-base">
                Fusce consectetur ligula malesuada nunc maximus, ac egestas
                risus placerat. Cras accumsan varius placerat. Vestibulum varius
                sodales ultricies.
              </p>
              <button className="flex items-center space-x-2 px-6 py-3 bg-black border-2 border-white hover:bg-red-600 rounded-full text-sm uppercase">
                <span>Watch Intro</span>
              </button>
            </div>
          </div>

          {/* Bottom Navigation Dots */}
          <div className="absolute bottom-6 flex items-center justify-center space-x-2">
            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
