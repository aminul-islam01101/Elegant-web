import React from "react";

const teamMembers = [
  { name: "ROCKY KAAI", role: "Senior Designer" },
  { name: "JENIFER NISHA", role: "Senior Manager", social: true },
  { name: "MARGARET", role: "Senior Designer" },
  { name: "KATHLEEN", role: "Senior Designer" },
  { name: "SAMANTHA", role: "Marketing" },
  { name: "THOMASRO", role: "Senior Manager" },
  { name: "NICOLEN", role: "Senior Designer" },
  { name: "PATRICK", role: "Marketing" },
  { name: "LAURENON", role: "Senior Designer" },
];

const TeamMain = () => {
  return (
    <section className="bg-[#121212] text-white py-16">
      <div className="max-w-[1200px] mx-auto text-white py-10 px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-300 h-[280px] w-[200px] mx-auto relative rounded-lg shadow-lg"
            >
              {/* Placeholder for Image */}
              <div className="w-full h-[60%] bg-gray-400 rounded-t-lg"></div>

              {/* Name */}
              <h3 className="text-lg font-bold text-black mt-4">{member.name}</h3>

              {/* Role */}
              <p className="text-sm text-gray-600">{member.role}</p>

              {/* Social Icons (only for JENIFER NISHA) */}
              {member.social && (
                <div className="absolute bottom-4 flex space-x-3">
                  <a
                    href="#"
                    className="text-red-500 hover:text-red-600 text-xl"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-600 text-xl"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="text-blue-700 hover:text-blue-800 text-xl"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMain;
