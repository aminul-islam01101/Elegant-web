import Image from "next/image";
import logo from "../../../../public/assets/marketing7.png";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="max-w-[1400px] mx-auto flex flex-col px-4">
        {/* talk us */}
        <div className="flex flex-col md:flex-row space-y-4 text-center md:text-balance justify-between items-center">
          <span className="headings">
            Have a <strong className="text-[#DD4242]">project? </strong>Let’s
            talk
          </span>
          <div>
            <button className="px-6 py-4 bg-red-500 text-white rounded-full text-sm font-medium hover:bg-red-600 transition">
              View All Services
            </button>
          </div>
        </div>
        {/* horizontal line */}
        <hr className="px-1 my-10" />
        {/* logo and links */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {/* logo and paragraph */}
          <div className="flex flex-col space-y-4">
            <Image src={logo} width={141} height={75} alt="LOGO" />
            <p className="primary-text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
