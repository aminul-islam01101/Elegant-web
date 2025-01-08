import React from "react";

const DataServices = () => {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-[1400px] px-4 mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-sm font-medium text-[#9ca3af]">Services</p>
            <h2 className="text-4xl font-bold mt-2">
              Propel <span className="text-red-500">Data-Services</span> Marketing
            </h2>
          </div>
          <button className="px-6 py-2 bg-red-500 text-white rounded-full text-sm font-medium hover:bg-red-600 transition">
            View All Services
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="flex items-center bg-black rounded-lg overflow-hidden shadow-lg border border-gray-400">
            <div className="w-1/3 bg-gray-200 h-full"></div>
            <div className="w-2/3 p-4">
              <h3 className="text-lg font-bold">Branding Growth</h3>
              <p className="text-sm text-gray-400 mt-2">
                You need to be sure there isn’t anything embarrassing hidden in
                the middle of text.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center bg-black rounded-lg overflow-hidden shadow-lg border border-gray-400">
          <div className="w-1/3 bg-gray-200 h-full"></div>
            <div className="w-2/3 p-4">
              <h3 className="text-lg font-bold">Digital Marketing</h3>
              <p className="text-sm text-gray-400 mt-2">
                You need to be sure there isn’t anything embarrassing hidden in
                the middle of text.
              </p>
            </div>
            
          </div>

          {/* Card 3 */}
          <div className="flex items-center bg-red-500 rounded-lg overflow-hidden shadow-lg border border-gray-400">
            
            <div className="w-2/3 p-4">
              <h3 className="text-lg font-bold">UI & UX Design</h3>
              <p className="text-sm text-white mt-2">
                You need to be sure there isn’t anything embarrassing hidden in
                the middle of text.
              </p>
            </div>
            <div className="w-1/3 bg-gray-200 h-full"></div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center bg-black rounded-lg overflow-hidden shadow-lg border border-gray-400">
            
            <div className="w-2/3 p-4">
              <h3 className="text-lg font-bold">Focus Media</h3>
              <p className="text-sm text-gray-400 mt-2">
                You need to be sure there isn’t anything embarrassing hidden in
                the middle of text.
              </p>
            </div>
            <div className="w-1/3 bg-gray-200 h-full"></div>
          </div>

          {/* Card 5 */}
          <div className="flex items-center bg-black rounded-lg overflow-hidden shadow-lg border border-gray-400">
            <div className="w-1/3 bg-gray-200 h-full"></div>
            <div className="w-2/3 p-4">
              <h3 className="text-lg font-bold">Branding</h3>
              <p className="text-sm text-gray-400 mt-2">
                You need to be sure there isn’t anything embarrassing hidden in
                the middle of text.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="flex items-center bg-black rounded-lg overflow-hidden shadow-lg border border-gray-400">
            <div className="w-1/3 bg-gray-200 h-full"></div>
            <div className="w-2/3 p-4">
              <h3 className="text-lg font-bold">Digital Marketing</h3>
              <p className="text-sm text-gray-400 mt-2">
                You need to be sure there isn’t anything embarrassing hidden in
                the middle of text.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataServices;
