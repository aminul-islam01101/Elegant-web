import React from "react";

const Testimonial = () => {
  return (
    <section className="bg-black text-white py-16 px-4 lg:px-20">
      <div className="max-w-[1400px] px-4 mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-sm font-normal text-[#9ca3af]">TESTIMONIAL</p>
            <h2 className="text-4xl font-semibold mt-2">
              Our <span className="text-red-500">Clients</span> Reviews
            </h2>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-12 lg:space-y-0 lg:space-x-12">
          {/* Left Testimonial */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6">
            <div className="h-24 w-24 border-4 border-red-500 rounded-full flex-shrink-0"></div>
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm max-w-md">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that  using Lorem Ipsum is that.
              </p>
              <p className="text-red-500 text-sm font-bold mt-2">
                ❝ Jhon Miklas – Manager
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block h-40 w-[1px] bg-gray-700"></div>

          {/* Right Testimonial */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6">
            <div className="h-24 w-24 border-4 border-gray-500 rounded-full flex-shrink-0"></div>
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm max-w-md">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less normal.
              </p>
              <p className="text-red-500 text-sm font-bold mt-2">
                ❝ Catherine Diane – Manager
              </p>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center space-x-4 mt-12">
          <div className="w-3 h-3 rounded-full bg-gray-500"></div>
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-gray-500"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
