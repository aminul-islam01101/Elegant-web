// components/BlogsMain.tsx
import React from "react";

const blogs = [
  {
    id: 1,
    category: "Marketing",
    title: "Tailored Digital Marketing That Drives Conversions",
    description:
      "Unlock new possibilities for your digital growth with personalized marketing strategies designed to drive conversions.",
    date: "Jan 05, 2024",
  },
  {
    id: 2,
    category: "Development",
    title: "The Breeding Ground For Breakthrough Ideas",
    description:
      "Witness creativity and skill align to create ideas that reshape industries and surpass expectations.",
    date: "Jan 05, 2024",
  },
  {
    id: 3,
    category: "Architecture",
    title: "Steer Your Vision With Our Expertise & Insights",
    description:
      "Explore architectural marvels brought to life by unparalleled expertise and innovative thinking.",
    date: "Jan 05, 2024",
  },
  {
    id: 4,
    category: "Branding",
    title: "Elevate Small To Mighty With Our Specialized Approach",
    description:
      "Empower your brand to achieve remarkable recognition through a tailored branding strategy.",
    date: "Jan 05, 2024",
  },
  {
    id: 5,
    category: "Journalism",
    title: "Unleashing The Potential Of Your Online Presence",
    description:
      "Revolutionize your online footprint with insights that unlock the true potential of your digital presence.",
    date: "Jan 05, 2024",
  },
];

const BlogsNewsMain: React.FC = () => {
  return (
    <section className="bg-[#121212] text-white py-16">
      <div className="max-w-[1400px] mx-auto text-white py-10 px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          Explore Latest <span className="text-red-500">Blogs & News</span>
        </h2>
        <div className="space-y-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col md:flex-row bg-gray-800 rounded-lg overflow-hidden"
            >
              {/* Placeholder for image */}
              <div className="bg-white w-full md:w-1/3 h-40 md:h-auto"></div>
              <div className="p-6 flex-1 bg-[#121212] hover:bg-black transition">
                <div className="flex justify-between items-center text-gray-400 text-sm mb-2">
                  <span>{blog.category}</span>
                  <span>{blog.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{blog.title}</h3>
                <p className="text-gray-400 mb-4">{blog.description}</p>
                <div className="flex justify-between items-center">
                    <div>
                    <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition ">
                  Read More
                </button>
                    </div>
                    <div className=" border-x border-gray-500 ">

                    </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsNewsMain;
