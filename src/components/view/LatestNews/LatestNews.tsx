const LatestNews = () => {
    return (
        <section className="bg-[#121212] text-white py-16">
      <div className="max-w-[1400px] mx-auto text-white py-10 px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase text-gray-400 mb-4">Blogs</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Our Latest Blog & News
          </h2>
        </div>
  
        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className=" p-6 rounded-lg hover:shadow-lg transition">
            <div className="relative h-48 bg-gray-700 rounded-md mb-6">
              <div className="absolute bottom-0 bg-red-600 text-white text-sm font-bold px-4 py-3 ">
                JAN 2024
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">
              The Role Of Typography In Effective Design Ingenious Answers
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Donec Vel Sem Eu Ex Lobortis Aliquam. Maecenas Id Placerat Nquea,
              Vel Consectetur Tortor.
            </p>
            <button className="px-4 py-2 bg-transparent border border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition">
              Read More
            </button>
          </div>
  
          {/* Card 2 */}
          <div className=" p-6 rounded-lg hover:shadow-lg transition">
            <div className="relative h-48 bg-gray-700 rounded-md mb-6">
              <div className="absolute bottom-0 bg-red-600 text-white text-sm font-bold px-4 py-3 ">
                FEB 2024
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">
              Trends in Graphic Design For 2023 To Digital Quandaries
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Quisque Luctus, Nunc Nec Vivarra Lacinia. Nisi Sapien Tristiquet
              Sem, Nac Feugiat Eras Ipsum Ac Tortor.
            </p>
            <button className="px-4 py-2 bg-transparent border border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition">
              Read More
            </button>
          </div>
  
          {/* Card 3 */}
          <div className=" p-6 rounded-lg hover:shadow-lg transition">
            <div className="relative h-48 bg-gray-700 rounded-md mb-6">
              <div className="absolute bottom-0 bg-red-600 text-white text-sm font-bold px-4 py-3 ">
                MAR 2024
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">
              The Importance Of Visual Storytelling Stand And Scale Effortlessly
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Nulla Faucibus Ornare Lacus. Etiam Volutpate Libero Vel Nunc
              Pellentesque Ultrices. Fusce Quis Vulputate Ante.
            </p>
            <button className="px-4 py-2 bg-transparent border border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition">
              Read More
            </button>
          </div>
        </div>
      </div>
      </section>
    );
  };
  
  export default LatestNews;
  