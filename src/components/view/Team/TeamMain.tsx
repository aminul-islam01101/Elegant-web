import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const TeamMain = () => {
  const teamMembers = [
    { name: "Rocky Kaai", role: "Senior Designer" },
    { name: "Jenifer Nisha", role: "Marketing", social: ["facebook", "twitter", "instagram"] },
    { name: "Margaret", role: "Senior Designer" },
    { name: "Kathleen", role: "Senior Designer" },
    { name: "Samantha", role: "Marketing" },
    { name: "Thomasro", role: "Senior Designer" },
    { name: "Nicolen", role: "Senior Designer" },
    { name: "Patrick", role: "Marketing" },
    { name: "Laurennon", role: "Senior Designer" },
  ];

  return (
    <section className="bg-[#121212] text-white py-16">
      <div className="max-w-[1400px] mx-auto flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-200 text-black p-10 shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Placeholder for Image */}
              <div className="w-full h-80 bg-gray-300 rounded-md mb-6"></div>
              <h3 className="text-2xl font-semibold">{member.name}</h3>
              <p className="text-sm text-black">{member.role}</p>
              {member.social && (
                <div className="flex justify-center space-x-6 mt-4">
                  {member.social.includes("facebook") && (
                    <a
                      href="#"
                      className="text-blue-600 text-2xl hover:text-blue-800"
                      aria-label="Facebook"
                    >
                      <FaFacebookF />
                    </a>
                  )}
                  {member.social.includes("twitter") && (
                    <a
                      href="#"
                      className="text-blue-600 text-2xl hover:text-blue-800"
                      aria-label="Twitter"
                    >
                      <FaTwitter />
                    </a>
                  )}
                  {member.social.includes("instagram") && (
                    <a
                      href="#"
                      className="text-pink-600 text-2xl hover:text-pink-800"
                      aria-label="Instagram"
                    >
                      <FaInstagram />
                    </a>
                  )}
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
