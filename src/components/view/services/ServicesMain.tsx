import React from 'react';
// import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";

const services = [
  {
    id: 1,
    title: 'Web Development',
    description:
      'Fusce consectetur ligula vulputate nunc maximus. Vestibulum varius facilisis ultricies.',
    icon: 'https://i.postimg.cc/SRdr7jTp/Artboard-5-4x-1.png',
  },
  {
    id: 2,
    title: 'Game Development',
    description:
      'Vestibulum in ipsum lorem sed sodales. Suspendisse dignissim turpis eu quis egestas.',
    icon: 'https://i.postimg.cc/SRdr7jTp/Artboard-5-4x-1.png',
  },
  {
    id: 3,
    title: 'Branding & Identity',
    description:
      'Cras a ante dictum. Mauris lobortis ut mauris. Nulla pellentesque neque vel lectus.',
    icon: 'https://i.postimg.cc/SRdr7jTp/Artboard-5-4x-1.png',
  },
  {
    id: 4,
    title: 'Promo Materials',
    description:
      'In vestibulum sem ante. Aenean eget mattis velit. Maecenas eu ultricies turpis.',
    icon: 'https://i.postimg.cc/SRdr7jTp/Artboard-5-4x-1.png',
  },
  {
    id: 5,
    title: 'Video & SEO Works',
    description:
      'Vestibulum in ipsum lorem sed sodales. Suspendisse dignissim turpis eu quis egestas.',
    icon: 'https://i.postimg.cc/SRdr7jTp/Artboard-5-4x-1.png',
  },
  {
    id: 6,
    title: 'Video & SEO Works',
    description:
      'Vestibulum in ipsum lorem sed sodales. Suspendisse dignissim turpis eu quis egestas.',
    icon: 'https://i.postimg.cc/SRdr7jTp/Artboard-5-4x-1.png',
  },
];

const ServicesMain = () => {
  return (
    <section className="bg-[#121212] text-white py-16">
      <div className="max-w-[1400px] px-4 mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-4xl font-bold mb-12">
          Our <span className="text-red-500">DaDa</span> Services
        </h2>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <p className="text-gray-400 text-sm font-normal mb-6 pl-8">{service.description}</p>
              {/* Icon and Arrow */}
              <div className="flex justify-between items-center pl-8">
                <div className='pb-12'>
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
      </div>
    </section>
  );
};

export default ServicesMain;
