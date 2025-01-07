import React from "react";

const TeamMembers = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-[1400px] px-4 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Section: Title and Button */}
        <div className="lg:col-span-4 space-y-6">
          <p className="text-sm font-medium text-[#9ca3af]">Team Members</p>
          <h2 className="text-4xl font-bold">
            Team That Build Ideas <br /> Driven By The Future
          </h2>
          <button className="px-6 py-2 bg-red-500 text-white rounded-full text-sm font-medium hover:bg-red-600 transition">
            View All Teams
          </button>
        </div>

        {/* Middle Section: Team List */}
        <div className="lg:col-span-5 space-y-6">
          {[
            { id: "01", name: "Thomas Charles", role: "App Designer", active: false },
            { id: "02", name: "Nancy Ashley", role: "Creative Designer", active: true },
            { id: "03", name: "Nicole Helen", role: "UX Developer", active: false },
            { id: "04", name: "Patrick Jack", role: "Content Writing", active: false },
            { id: "05", name: "Diane Lauren", role: "App Designer", active: false },
          ].map((member) => (
            <div
              key={member.id}
              className={`flex items-center justify-between border-b border-gray-700 pb-4 hover:bg-gray-800 transition ${
                member.active ? "text-red-500" : ""
              }`}
            >
              <div className="flex items-center space-x-4">
                <span className="text-xl font-bold hover:text-red-500">{member.id}</span>
                <h3 className="text-lg font-bold hover:text-red-500">{member.name}</h3>
              </div>
              <p className="text-sm text-gray-400 hover:text-red-500">{member.role}</p>
              {/* {member.active && <span className="text-red-500 text-4xl font-bold"></span>} */}
            </div>
          ))}
        </div>

        {/* Right Section: Circle Graphic */}
        <div className="lg:col-span-3 flex justify-center items-center">
  <div className="relative w-64 h-64 rounded-full bg-gray-300 flex justify-center items-center">
    <div className="absolute w-48 h-48 rounded-full bg-black"></div>
    <div className="absolute w-20 h-20 bg-red-500 rounded-full top-6 right-6"></div>
  </div>
</div>

      </div>
    </section>
  );
};

export default TeamMembers;
