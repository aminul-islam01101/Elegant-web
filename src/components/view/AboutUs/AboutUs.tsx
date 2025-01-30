import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-[#0a0a0a] to-[#333333] py-20">
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
          <h2 className="sub-heading font-bold leading-snug text-white">
            <span className="text">
              Your Vision. Our Passion. Your Success
            </span>
            <br />
            <span className="text-[#DD4242]"> Innovate. Connect. Thrive.</span>
            <br />
          </h2>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#6C6C6C] rounded-lg h-48 flex items-center justify-center">
              <p className="text-[#9ca3af] font-semibold text-xl">
                Placeholder
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Image Grid (Moved to First Position) */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#6C6C6C] rounded-lg h-48 flex items-center justify-center">
              <p className="text-[#9ca3af] font-semibold text-xl">
                Placeholder
              </p>
            </div>
            <div className="bg-[#6C6C6C] rounded-lg h-48 flex items-center justify-center">
              <p className="text-[#9ca3af] font-semibold text-xl">
                Placeholder
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-[#9ca3af] text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
            At Elegant Web Studio, we don’t just build websites—we build
            experiences that matter. Your vision is at the heart of everything
            we do. With a deep passion for creativity and expertise in
            technologies like React and Next.js, we craft solutions that go
            beyond aesthetics, helping you forge meaningful connections with
            your audience. Together, let’s transform your ideas into a digital
            presence that stands out, creates impact, and drives real success.
            Your journey starts here.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-4xl font-semibold text-white">25K+</h3>
              <p className="text-[#9ca3af]">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-4xl font-semibold text-white">15K</h3>
              <p className="text-[#9ca3af]">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-4xl font-semibold text-white">9K+</h3>
              <p className="text-[#9ca3af]">Years Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-semibold text-white">56+</h3>
              <p className="text-[#9ca3af]">Achievements</p>
            </div>
          </div>

          {/* Button */}
          <button className="bg-[#DD4242] hover:bg-[#FF6666] text-sm xl:text-base text-white py-2 font-normal px-5 md:px-7 md:py-2 rounded-full md:font-semibold transition-all mt-6">
            About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
