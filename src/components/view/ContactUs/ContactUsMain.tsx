import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaGlobe,
    FaEnvelope,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";
  
  const ContactUsMain = () => {
    return (
      <div className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <h2 className="text-4xl font-bold text-start mb-10">
            DaDa Agency <span className="text-red-500">Office Address</span>
          </h2>
  
          {/* Address Info */}
          <div className="grid md:grid-cols-4 gap-8 text-center mb-16">
            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="text-red-500 text-4xl hover:text-gray-300 transition">
                <FaMapMarkerAlt />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg">Our Location</h3>
                <p className="text-gray-400 mt-2">
                  45 Folgate Street Canberra <br />
                  Looloath El 66l
                </p>
              </div>
            </div>
  
            {/* Mobile Number */}
            <div className="flex items-center gap-4">
              <div className="text-red-500 text-4xl hover:text-gray-300 transition">
                <FaPhoneAlt />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg">Mobile Number</h3>
                <p className="text-gray-400 mt-2">
                  +00 (0)12 3456 789 <br />
                  +00 (0)12 3456 789
                </p>
              </div>
            </div>
  
            {/* Have Queries */}
            <div className="flex items-center gap-4">
              <div className="text-red-500 text-4xl hover:text-gray-300 transition">
                <FaGlobe />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg">Have Queries?</h3>
                <p className="text-gray-400 mt-2">
                  Donec imperdiet Magna <br />
                  Semperex tincidunt feugiat.
                </p>
              </div>
            </div>
  
            {/* Contact Support */}
            <div className="flex items-center gap-4">
              <div className="text-red-500 text-4xl hover:text-gray-300 transition">
                <FaEnvelope />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg">Contact Support</h3>
                <p className="text-gray-400 mt-2">
                  info@example.com <br />
                  info@example.com
                </p>
              </div>
            </div>
          </div>
  
          {/* Form and Sidebar */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="bg-[#121212] p-6 rounded-lg shadow-lg md:col-span-2">
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white text-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500"
                />
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  className="w-full bg-white text-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white text-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500"
                />
                <textarea
                  placeholder="Message Here"
                  rows={4}
                  className="w-full bg-white text-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-36 bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition"
                >
                  Let&apos;s Talk
                </button>
              </form>
            </div>
  
            {/* Sidebar */}
            <div className="bg-red-500 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Say Hello!</h3>
              <p className="text-white text-sm mb-6">
                Nam ultricies metus purus laoreet aliquam. Aliq uam lectus urna,
                tempus ac lectus et gravida bibendum Nulla consequat.
              </p>
              <div className="w-full h-40 bg-gray-700 rounded-lg mb-6"></div>
              <h4 className="font-bold text-lg">Enquiries</h4>
              <p className="text-white mt-2">info@example.com</p>
              <p className="text-white">contact@example.com</p>
  
              {/* Social Icons */}
              <div className="flex space-x-4 mt-6">
                <a
                  href="#"
                  className="text-white bg-black p-3 rounded-full hover:bg-gray-800 transition transform hover:scale-110"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-white bg-black p-3 rounded-full hover:bg-gray-800 transition transform hover:scale-110"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-white bg-black p-3 rounded-full hover:bg-gray-800 transition transform hover:scale-110"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-white bg-black p-3 rounded-full hover:bg-gray-800 transition transform hover:scale-110"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactUsMain;
  