"use client";

import Image from "next/image";

const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: "Jenifer Nisha",
      role: "Creative Head",
      socials: [],
    },
    {
      name: "Jhon Wick Maker",
      role: "Founder - CEO",
      socials: ["FB", "IN", "TW", "H"],
    },
    {
      name: "Dev Richart",
      role: "Manager",
      socials: [],
    },
    {
      name: "Dymond Nisha",
      role: "Founder - CEO",
      socials: [],
    },
  ];

  const companyLogos = [
    "https://i.postimg.cc/kMvTxv8F/Group-142131.png",
    "https://i.postimg.cc/RVCXGJLr/Group-142175.png",
    "https://i.postimg.cc/g2n4b97N/Group-142132.png",
    "https://i.postimg.cc/bwWgzCc8/Group-142133.png",
    "https://i.postimg.cc/BvFgtT4F/Group-142134.png",
  ];

  return (
    <section className="bg-black text-white py-16 relative">
      <div className="max-w-[1400px] mx-auto py-10 px-4">
        {/* Company Logos */}
        <div className="flex flex-wrap justify-center gap-48 mb-12">
          {companyLogos.map((logo, index) => (
            <Image key={index} src={logo} alt={`Logo ${index + 1}`} width={120} height={60} />
          ))}
        </div>

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h3 className="text-gray-500 text-sm uppercase tracking-widest mb-2">Team Members</h3>
          <h2 className="text-4xl font-semibold tracking-wide">Meet Our Team</h2>
          <p className="text-gray-400 mt-4">
            There are many variations of passages of Lorem Ipsum available, but the majority <br /> have
            suffered alteration in some form, by injected humor.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 flex flex-col items-center text-center space-y-4 relative"
            >
              {/* Placeholder for Image */}
              <div className="bg-gray-700 w-24 h-24 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-red-500">{member.role}</p>
              {member.socials.length > 0 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex space-x-3 bg-red-500 px-4 py-2 rounded-full">
                    {member.socials.map((social, i) => (
                      <span
                        key={i}
                        className="text-white text-sm font-medium"
                      >
                        {social}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Side Text */}
      
    </section>
  );
};

export default MeetOurTeam;
