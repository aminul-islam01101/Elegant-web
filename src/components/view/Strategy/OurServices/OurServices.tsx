const OurServices = () => {
    return (
        <section className="bg-[#121212] text-white py-16">
      <div className="max-w-[1400px] mx-auto text-white py-10 px-4">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm uppercase text-gray-400">Service</p>
            <h2 className="text-3xl md:text-5xl font-bold">Our Services</h2>
          </div>
          <button className="px-6 py-2 border border-gray-600 rounded-full hover:bg-red-600 hover:text-white transition duration-300">
            View Our Services
          </button>
        </div>
  
        {/* Services List */}
        <div className="space-y-4">
          {/* Service 1 */}
          <div className="group flex items-center justify-between border-t border-gray-700 py-4 transition duration-300 hover:bg-black">
            <p className="text-gray-400 text-sm group-hover:text-red-600 transition">001</p>
            <h3 className="text-2xl font-bold group-hover:text-red-600 transition">
              BRANDING
            </h3>
            <span className="text-gray-400 text-2xl group-hover:text-red-600 transition">
              &#8599;
            </span>
          </div>
  
          {/* Service 2 */}
          <div className="group flex items-center justify-between border-t border-gray-700 py-4 bg-opacity-80 hover:bg-black transition duration-300">
            <p className="text-gray-400 text-sm group-hover:text-red-600 transition">002</p>
            <h3 className="text-2xl font-bold group-hover:text-red-600 transition">
              MARKETING
            </h3>
            <span className="text-gray-400 text-2xl group-hover:text-red-600 transition">
              &#8599;
            </span>
          </div>
  
          {/* Service 3 */}
          <div className="group flex items-center justify-between border-t border-gray-700 py-4 transition duration-300 hover:bg-black">
            <p className="text-gray-400 text-sm group-hover:text-red-600 transition">003</p>
            <h3 className="text-2xl font-bold group-hover:text-red-600 transition">
              UI & UX DESIGN
            </h3>
            <span className="text-gray-400 text-2xl group-hover:text-red-600 transition">
              &#8599;
            </span>
          </div>
  
          {/* Service 4 */}
          <div className="group flex items-center justify-between border-t border-gray-700 py-4 transition duration-300 hover:bg-black">
            <p className="text-gray-400 text-sm group-hover:text-red-600 transition">004</p>
            <h3 className="text-2xl font-bold group-hover:text-red-600 transition">
              FOCUS MEDIA
            </h3>
            <span className="text-gray-400 text-2xl group-hover:text-red-600 transition">
              &#8599;
            </span>
          </div>
  
          {/* Service 5 */}
          <div className="group flex items-center justify-between border-t border-b border-gray-700 py-4 transition duration-300 hover:bg-black">
            <p className="text-gray-400 text-sm group-hover:text-red-600 transition">005</p>
            <h3 className="text-2xl font-bold group-hover:text-red-600 transition">
              INTERFACE
            </h3>
            <span className="text-gray-400 text-2xl group-hover:text-red-600 transition">
              &#8599;
            </span>
          </div>
        </div>
      </div>
      </section>
    );
  };
  
  export default OurServices;
  