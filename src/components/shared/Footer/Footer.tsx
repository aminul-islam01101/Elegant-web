import Image from "next/image";
import logo from "../../../../public/assets/marketing7.png";
import globe from "../../../../public/assets/globe1.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="max-w-[1400px] container flex flex-col">
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10 justify-between items-center mx-auto">
          {/* logo and paragraph */}
          <div className="flex flex-col space-y-4">
            <Image src={logo} width={141} height={75} alt="LOGO" />
            <p className="primary-text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking.
            </p>
          </div>
          {/* navigate links */}
          <div className="flex w-full justify-between">
            {/* pages */}
            <div className="flex flex-col space-y-2">
              <span className="text-lg text-[#DD4242] font-semibold">
                Pages
              </span>
              <Link href="/" className="text-sm">
                Branding
              </Link>
              <Link href="/" className="text-sm">
                Design
              </Link>
              <Link href="/" className="text-sm">
                Marketing
              </Link>
              <Link href="/" className="text-sm">
                Advertisement
              </Link>
            </div>
            {/* Services */}
            <div className="flex flex-col space-y-2">
              <span className="text-lg text-[#DD4242] font-semibold">
                Services
              </span>
              <Link href="/" className="text-sm">
                Branding
              </Link>
              <Link href="/" className="text-sm">
                Design
              </Link>
              <Link href="/" className="text-sm">
                Marketing
              </Link>
              <Link href="/" className="text-sm">
                Advertisement
              </Link>
            </div>
          </div>
          {/* image */}
          <div className="flex justify-center items-center">
            <Image src={globe} width={418} height={415} alt="globe" />
          </div>
          {/* address line */}
          <div className="flex flex-col space-y-4">
            <span className="text-lg text-[#DD4242] font-semibold">
              Elegant Web Studio
            </span>
            <p className="primary-text">
              3F Mitaka Takagi Building, <br /> Musashino-shi,80-0006 Japan
              <br />
              Info@exampel.com
            </p>
          </div>
        </div>
        {/* horizontal line */}
        <hr className="px-1 my-10 bg-red-800" />
        <div className="flex justify-between mb-5">
          <span className="primary-text">
            All Right Reserved © 2025 ELagent Web Studio
          </span>
          <span className="primary-text">
            Privacy Policy / Terms & Conditions
          </span>
        </div>
      </div>
    </footer>
  );
}
