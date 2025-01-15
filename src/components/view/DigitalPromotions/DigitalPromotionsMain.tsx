import React from "react";
import Image from "next/image";

const DigitalPromotions = () => {
  return (
    <section className="bg-[#121212] text-white py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side */}
          <div>
            <h2 className="text-[#FF4A57] text-3xl font-bold uppercase mb-3">
              Digital Promotions
            </h2>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Monumental Brand Growth
            </h1>
            <div className="space-y-6">
              <div>
                <span className="text-lg font-semibold">Description:</span>
                <p className="text-gray-400 mt-2">
                  Variations of Lorem Ipsum have evolved over the years, with
                  some suffering alteration in some form, but the essence
                  remains intact.
                </p>
              </div>
              <div>
                <span className="text-lg font-semibold">Client:</span>
                <p className="text-gray-400 mt-2">
                  Elevate your business with cutting-edge ideas that redefine
                  growth.
                </p>
              </div>
              <div>
                <span className="text-lg font-semibold">Category:</span>
                <p className="text-gray-400 mt-2">
                  Digital Marketing, Social Media Campaigns.
                </p>
              </div>
              <div>
                <span className="text-lg font-semibold">Social Share:</span>
                <p className="text-gray-400 mt-2">FB - TW - IN - YT</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center items-center">
            <Image
              src="https://i.postimg.cc/J4hXj1BY/grap.jpg" 
              alt="Promotional Graphic"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Build A Stronger Future For{" "}
            <span className="text-[#FF4A57]">Your Business</span>
          </h2>
          <p className="text-gray-400 mb-8">
          Quisque interdum risus in fermentum sagittis. Mauris lectus erat, molestie quis malesuada quis, sagittis ut dui. Maecenas et interdum ex. Nullam non magna eu nisi congue maximus ac vel justo. Nulla viverra sapien eros, ac convallis urna semper quis. Donec convallis turpis justo, a viverra nisi cursus sit amet. Proin aliquet erat dolor, non tempus tellus euismod pellentesque. Nam iaculis diam tellus. Donec tristique, erat sit amet finibus semper, risus ipsum volutpat lacus, sit amet ultrices augue elit sit amet velit. In facilisis vulputate vestibulum. Suspendisse potenti. Curabitur a sem purus. Ut ut elit sed leo euismod laoreet sit amet feugiat ex. Nulla et enim velit. Maecenas posuere sem quis nunc faucibus, quis rutrum nunc commodo.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#FF4A57] rounded-full mr-3"></div>
              <p className="text-gray-400">Ignite your passion for success.</p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#FF4A57] rounded-full mr-3"></div>
              <p className="text-gray-400">Experience timeless growth.</p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#FF4A57] rounded-full mr-3"></div>
              <p className="text-gray-400">Achieve breakthrough results.</p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#FF4A57] rounded-full mr-3"></div>
              <p className="text-gray-400">
                Build strong connections that last.
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#FF4A57] rounded-full mr-3"></div>
              <p className="text-gray-400">
                Build strong connections that last.
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#FF4A57] rounded-full mr-3"></div>
              <p className="text-gray-400">
                Build strong connections that last.
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#FF4A57] rounded-full mr-3"></div>
              <p className="text-gray-400">
                Build strong connections that last.
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#FF4A57] rounded-full mr-3"></div>
              <p className="text-gray-400">
                Build strong connections that last.
              </p>
            </div>
          </div>
        </div>

        {/* horizontal line */}
        <hr className="px-1 my-10" />

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 text-gray-400">
          <button className="flex items-center space-x-2 hover:text-white">
            <span>&larr;</span>
            <span>Previous</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-white">
            <span>Next</span>
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DigitalPromotions;
