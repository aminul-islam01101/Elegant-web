import Image from "next/image";
import React from "react";
import banner from "../../../../public/assets/mainBg.png";
import style from "./Banner.module.css";
import side1 from "../../../../public/assets/banner-side-main.jpg";
import sideMobile from "../../../../public/assets/banner-side-main-mobile.jpg";
import side2 from "../../../../public/assets/banner-side-2.png";
import AnimatedText from "../../re-ui/AnimatedText";

const Banner = () => {
  return (
    <div className="h-full lg:h-[110vh] 2xl:h-[120vh] 3xl:h-full">
      <div className={`${style.bgWrap} h-[100vh] md:h-full`}>
        <Image
          alt="Banner"
          src={banner}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
      <div
        className={`${style.bgText} text-white max-w-[1400px] mx-auto h-full container flex`}
      >
        <div className="flex flex-col mx-auto justify-center items-center !z-0 h-[70%]">
          {/* headings */}
          <div className="flex flex-col items-center">
            <span className="headings text-center">
              Bringing Your
              <strong className="secondary_color"> Digital Dreams </strong>
              <br />
              to Life
            </span>
            <span className="w-5/6 lg:w-2/3 text-sm md:text-base text-balance mt-6 font-thin hidden lg:block">
              Your vision deserves more than just a website. It deserves a
              partner who cares as much about your success as you do. At Elegant
              Web Studio, we combine creativity and the power of React and
              Next.js to build websites that don’t just look good but feel
              right. Let’s create something extraordinary together and make your
              digital presence truly unforgettable.
            </span>
          </div>
          {/* banner Image */}
          <div className="flex flex-col items-start self-start justify-start h-full w-full">
            <Image
              src={side2}
              width={120}
              height={133}
              alt="side Image"
              className="self-center bg-black rounded-full relative top-14"
            />
            {/* desktop */}
            <Image
              src={side1}
              width={1400}
              height={600}
              alt="side Image"
              className="rounded-2xl mx-auto hidden lg:block"
            />
            {/* mobile */}
            <Image
              src={sideMobile}
              width={600}
              height={600}
              alt="side Image"
              className="rounded-2xl mx-auto block lg:hidden"
            />
            <span className="w-5/6 lg:w-2/3 text-sm md:text-base text-pretty mx-auto mt-6 font-thin lg:hidden block text-center">
              Your vision deserves more than just a website. It deserves a
              partner who cares as much about your success as you do. At Elegant
              Web Studio, we combine creativity and the power of React and
              Next.js to build websites that don’t just look good but feel
              right. Let’s create something extraordinary together and make your
              digital presence truly unforgettable.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
