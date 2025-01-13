import React from "react";

const BlogsDetailsMain: React.FC = () => {
  return (
    <section className="bg-[#121212] text-white py-16">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Blog Header */}
        <div className="bg-gray-800 rounded-lg overflow-hidden mb-8">
          <div className="bg-white w-full h-60"></div>
          <div className="p-6 bg-[#121212]">
            <div className="flex justify-between items-center text-gray-400 text-sm mb-2">
              <span>Jan 05, 2024 | Marketing</span>
              <span>5 min read</span>
            </div>
            <h1 className="text-2xl font-semibold mb-4 text-red-500">
              Focus On Conversations, Value People Over Pageviews
            </h1>
            <p className="text-gray-400">
              Discover why meaningful conversations should be the cornerstone of
              your marketing strategy. Shift the focus from vanity metrics to
              what truly matters: human connections.
            </p>
          </div>
        </div>

        {/* Blog Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              On The Day Of The Shoot
            </h2>
            <p className="text-gray-400 mb-6">
              Preparation is key! Ensure your team is aligned and everything is
              set for a smooth execution. During the shoot, stay flexible to
              capture unexpected yet authentic moments that truly resonate with
              your audience.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="bg-white w-full md:w-1/2 h-40"></div>
              <div className="bg-white w-full md:w-1/2 h-40"></div>
            </div>
          </div>

          <div>
  <h2 className="text-2xl font-bold text-white mb-4">
    What You Will Do:
  </h2>
  <ul className="space-y-2">
    <li className="flex items-start text-gray-400">
      <span className="text-red-500 mr-2">★</span>
      Vestibulum In Ipsum Velit. Aliquam Libero Sem Asfds Asf, Rutrum Eu
      Scelerisque
    </li>
    <li className="flex items-start text-gray-400">
      <span className="text-red-500 mr-2">★</span>
      Ut, Vehicula A Erat. Phasellus Ac Sem Sed Erat Pos Se Quam Dignissim.
      Mauris
    </li>
    <li className="flex items-start text-gray-400">
      <span className="text-red-500 mr-2">★</span>
      Feugiat, Nisi Nec Dapibuasas A Gas Dictum, Ligula Nulla Gravida Ante,
      Non Aliquet
    </li>
    <li className="flex items-start text-gray-400">
      <span className="text-red-500 mr-2">★</span>
      Odio Elit Ac Orci. Curabi Tinc Nunc Eu Rhoncus Justo, Nec Mattis Risus
      Auris
    </li>
    <li className="flex items-start text-gray-400">
      <span className="text-red-500 mr-2">★</span>
      Consequat Viverra Sapien Id Lobortis. Vivamus Auctor Turpis
    </li>
  </ul>
</div>
        </div>

        {/* Call-to-Action */}
        <div className="bg-black p-6 rounded-lg mt-10">
  <p className="text-gray-300 mb-4">
    Quisque Eget Risus Maximus Erat Porttitor Tincidunt Vitae Ac Nulla. Ut
    Ut Augue Id Ex Vehicula Fermentum Quis Sit Amet Felis. Duis Sit
    Ametfaucibus Porta.
  </p>
  <p className="text-red-500 font-bold text-right">• Jadir Khan</p>
</div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-10">
          <button className="text-gray-400 hover:text-white transition">
            Previous
          </button>
          <button className="text-gray-400 hover:text-white transition">
            Next
          </button>
        </div>

        {/* Comment Section */}
        <div className="mt-10">
  <h3 className="text-sm font-medium text-white mb-4 uppercase">
    Feedback Form
  </h3>
  <h2 className="text-3xl font-bold text-white mb-6">Leave A Reply</h2>
  <form className="bg-red-500 p-8 rounded-lg space-y-6">
    <input
      type="text"
      placeholder="First Name"
      className="w-full p-4 rounded-md bg-red-500  text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
    />
    <input
      type="email"
      placeholder="Your Email ID"
      className="w-full p-4 rounded-md bg-red-500  text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
    />
    <input
      type="tel"
      placeholder="Mobile Number"
      className="w-full p-4 rounded-md bg-red-500  text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
    />
    <textarea
      placeholder="Additional Message"
      rows={4}
      className="w-full p-4 rounded-md bg-red-500  text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
    ></textarea>
    <button
      type="submit"
      className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition font-semibold"
    >
      Submit Now
    </button>
  </form>
</div>

      </div>
    </section>
  );
};

export default BlogsDetailsMain;
