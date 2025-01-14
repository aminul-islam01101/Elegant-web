import React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const ServicesDetailsMain = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Fusce consectetur ligula molestie nunc maximus, ac egestas risus placerat.",
      icon: "/path-to-icon1.png",
    },
    {
      id: 2,
      title: "Branding & Identity",
      description: "Cras a ante dictum, mattis libero sit amet, rutrum metus.",
      icon: "/path-to-icon2.png",
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Praesent consequat nulla id ligula malesuada, non dictum neque.",
      icon: "/path-to-icon3.png",
    },
  ];

  return (
    <section className="bg-[#121212] text-white py-16 px-4">
      <div className="max-w-[1400px] px-4 mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-red-500 text-3xl font-bold mb-4">
            Web Development Branding
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Vestibulum in ipsum velit. Aliquam libero sem, rutrum eu scelerisque ut, vehicula erat. Phasellus ac sem sed erat pos se quam dignissim. Mauris feugiat, nisl nec dapibus a dictum, ligula nulla gravida ante.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            "Dreamweaver",
            "Squarespace",
            "WordPress",
            "Sublime Text",
            "Web Designer",
            "OpenElement",
            "Dreamweaver",
            "Sublime Text",
          ].map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
              <p className="text-gray-400 hover:text-white transition">
                {feature}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Proin Non Eros <span className="text-red-500">Elementumbibendum</span> Vehicula
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Vestibulum in ipsum velit. Aliquam libero sem, rutrum eu scelerisque ut, vehicula erat. Phasellus ac sem sed erat pos se quam dignissim.
            </p>
            <div className="w-[300px] h-[200px] bg-gray-500 rounded-lg"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {[
              {
                number: "01",
                title: "A Relatively Multi-Stage",
                description: "Vestibulum in ipsum velit. Aliquam libero sem, rutrum eu scelerisque ut.",
              },
              {
                number: "02",
                title: "Comprehensive Includes",
                description: "Mauris feugiat, nisl nec dapibus a dictum, ligula nulla gravida ante.",
              },
              {
                number: "03",
                title: "Characters Illustrations",
                description: "Mauris feugiat, nisl nec dapibus a dictum, ligula nulla gravida ante.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-black rounded-lg border border-gray-700 flex items-start"
              >
                <div className="text-red-500 text-2xl font-bold mr-4">
                  {item.number}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        {/* Requirements Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-6">Requirements</h3>
          <p className="text-gray-400 leading-relaxed">
            Vestibulum in ipsum velit. Aliquam libero sem, rutrum eu scelerisque ut, vehicula erat. Phasellus ac sem sed erat pos se quam dignissim.
          </p>
        </div>

        {/* Capture Attention Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-6">
            Capture Attention And Ignite Your Audience
          </h3>
          <ul className="list-disc pl-6 text-gray-400 space-y-3">
            <li>
              Elevate your business with our cutting-edge digital marketing game-changing ideas for explosive growth.
            </li>
            <li>
              Skyrocket your ROI with our expert digital marketing trifecta: advertise, analyze, optimize!
            </li>
            <li>
              Generate leads and dominate online with our all-in-one solutions the breeding ground for breakthrough ideas.
            </li>
          </ul>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-gradient-to-r from-[#0a0a0a] to-[#333333] rounded-lg p-6 shadow-lg relative overflow-hidden group"
            >
              {/* Title and Index */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-red-500">{`0${index + 1}`}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition duration-300">
                  {service.title}
                </h3>
              </div>
              {/* Description */}
              <p className="text-gray-400 text-sm font-normal mb-6 pl-8">
                {service.description}
              </p>
              {/* Icon and Arrow */}
              <div className="flex justify-between items-center pl-8">
                <div className="pb-12">
                  <div className="w-12 h-12 flex justify-center items-center bg-black rounded-full shadow-md border-red-500 group-hover:bg-red-500 transition duration-300 border-2 group-hover:border-red-500">
                    <GoArrowUpRight className="text-red-500 text-2xl group-hover:text-white transition duration-300" />
                  </div>
                </div>
                {/* Image Icon */}
                <div className="w-40 h-40">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 text-gray-400">
          <button className="flex items-center space-x-2 hover:text-white">
            <span>&larr;</span>
            <span>Previous</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-white">
            <span>Next</span>
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailsMain;
