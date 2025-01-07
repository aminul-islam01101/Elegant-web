import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-[#0a0a0a] to-[#333333] py-20 px-6">
      <div className="max-w-[1400px] px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Section */}
        <div className="space-y-8">
          {/* Title Section */}
          <div className="flex items-center gap-4">
            <div className="w-2 h-12 bg-gradient-to-b from-[#DD4242] to-[#FF6666]"></div>
            <h3 className="text-lg uppercase tracking-widest text-[#9ca3af] font-semibold">
              About Us
            </h3>
          </div>

          {/* Heading */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-snug text-white">
            Your Vision, <span className="text-[#DD4242]">Our Expertise...</span>
            <br />
            Your Success, <br />
            <span className="text-[#DD4242]">Get Noticed. Generate Leads. Dominate.</span>
          </h2>

          {/* Paragraph
          <p className="text-[#9ca3af] text-lg leading-relaxed max-w-2xl">
            Fusce consectetur ligula molestie nunc maximus. Ac egestas risus placerat. Cras accumsan varius placerat. Vestibulum varius sodales ultrices.
          </p> */}

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#6C6C6C] rounded-lg h-48 flex items-center justify-center">
              <p className="text-[#9ca3af] font-semibold text-xl">Placeholder</p>
            </div>
            {/* <div className="bg-[#6C6C6C] rounded-lg h-48 flex items-center justify-center">
              <p className="text-[#9ca3af] font-semibold text-xl">Placeholder</p>
            </div> */}
          </div>
        </div>

        {/* Right Section */}
<div className="space-y-8 text-center lg:text-left">
  {/* Image Grid (Moved to First Position) */}
  <div className="grid grid-cols-2 gap-6">
    <div className="bg-[#6C6C6C] rounded-lg h-48 flex items-center justify-center">
      <p className="text-[#9ca3af] font-semibold text-xl">Placeholder</p>
    </div>
    <div className="bg-[#6C6C6C] rounded-lg h-48 flex items-center justify-center">
      <p className="text-[#9ca3af] font-semibold text-xl">Placeholder</p>
    </div>
  </div>

  {/* Description */}
  <p className="text-[#9ca3af] text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
  Fusce consectetur ligula molestie nunc maximus. Ac egestas risus placerat. Cras accumsan varius placerat. Vestibulum varius sodales ultrices.
  Integer congue cursus risus, ac vehicula ex. Aliquet in elit amet molestie risus.
  </p>

  {/* Stats Grid */}
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
    <div>
      <h3 className="text-4xl font-extrabold text-white">25K+</h3>
      <p className="text-[#9ca3af]">Projects Completed</p>
    </div>
    <div>
      <h3 className="text-4xl font-extrabold text-white">15K</h3>
      <p className="text-[#9ca3af]">Happy Customers</p>
    </div>
    <div>
      <h3 className="text-4xl font-extrabold text-white">9K+</h3>
      <p className="text-[#9ca3af]">Years Experience</p>
    </div>
    <div>
      <h3 className="text-4xl font-extrabold text-white">56+</h3>
      <p className="text-[#9ca3af]">Achievements</p>
    </div>
  </div>

  {/* Button */}
  <button className="bg-[#DD4242] hover:bg-[#FF6666] text-white py-3 px-10 rounded-full font-bold uppercase transition-all mt-6">
    About Us
  </button>
</div>

      </div>
    </section>
  );
};

export default AboutUs;
