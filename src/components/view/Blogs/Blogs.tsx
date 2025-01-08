import React from "react";

const Blogs = () => {
  return (
    <section className="bg-black text-white py-16 px-4 lg:px-20">
      <div className="max-w-[1400px] px-4 mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-sm font-medium text-[#9ca3af]">Blogs</p>
            <h2 className="text-4xl font-semibold mt-2">
            Explore Latest <span className="text-red-500">Blogs & News</span>
            </h2>
          </div>
          <button className="px-6 py-2 bg-red-500 text-white rounded-full text-sm font-medium hover:bg-red-600 transition">
            View All Services
          </button>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Left Side (Images) */}
          <div className="flex flex-col space-y-12">
            <div className="h-40 bg-gray-700 rounded-md"></div>
            <div className="h-40 bg-gray-700 rounded-md"></div>
            <div className="h-40 bg-gray-700 rounded-md"></div>
          </div>

          {/* Right Side (Blog Details) */}
          <div className="flex flex-col space-y-12">
            {/* Single Blog */}
            {[
              {
                category: "Branding",
                title: "Tailored Digital Marketing That Drives Conversions",
                description:
                  "Vestibulum consectetur velit, eget dignissim nibh. Nam tempor volutpat eu pellentesque. Nam maximus justo magna.",
                date: "Jan 25, 2024",
              },
              {
                category: "Development",
                title: "The Breeding Ground For Breakthrough Ideas",
                description:
                  "Vestibulum consectetur velit, eget dignissim nibh. Nam tempor volutpat eu pellentesque. Nam maximus justo magna.",
                date: "Jan 25, 2024",
              },
              {
                category: "Administration",
                title: "Steer Your Vision With Our Expertise Our Insights",
                description:
                  "Vestibulum consectetur velit, eget dignissim nibh. Nam tempor volutpat eu pellentesque. Nam maximus justo magna.",
                date: "Jan 25, 2024",
              },
            ].map((blog, index) => (
              <div key={index} className="border-l-2 border-gray-600 pl-6">
                <p className="text-sm text-red-500 font-semibold">
                  {blog.category}
                </p>
                <h3 className="text-xl font-bold mt-3">{blog.title}</h3>
                <p className="text-sm text-gray-400 mt-3">{blog.description}</p>
                <div className="flex justify-between items-center mt-6">
                  <p className="text-sm text-gray-500">{blog.date}</p>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
