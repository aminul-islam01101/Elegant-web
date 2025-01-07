import Image from "next/image";
import React from "react";
import banner from "../../../../public/assets/mainBg.png";
import style from "./Banner.module.css";
import SocialMediaLink from "../../re-ui/SocialMediaLink";
import fb from "../../../../public/assets/socialIcons/facebook.png";
import twitter from "../../../../public/assets/socialIcons/twitter.png";
import insta from "../../../../public/assets/socialIcons/insta.png";
import google from "../../../../public/assets/socialIcons/google.png";
import side1 from "../../../../public/assets/banner-side-main.png";
import side2 from "../../../../public/assets/banner-side-2.png";

const Banner = () => {
  return (
    <div>
      <div className={`${style.bgWrap} h-full`}>
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
      <div className={`${style.bgText} text-white max-w-[1400px] mx-auto h-full px-4`}>
        <div className="flex flex-row justify-center items-center !z-0">
          <div className="space-y-5 flex flex-col h-full justify-center">
            <SocialMediaLink imageSrc={fb} link={"/hello"} altText="facebook" />
            <SocialMediaLink
              imageSrc={insta}
              link={"/hello"}
              altText="facebook"
            />
            <SocialMediaLink
              imageSrc={google}
              link={"/hello"}
              altText="facebook"
            />
            <SocialMediaLink
              imageSrc={twitter}
              link={"/hello"}
              altText="facebook"
            />
          </div>
          <div className="flex-shrink w-full text-start px-5 flex flex-col items-center justify-center">
            <span className="headings md:text-start text_head self-center">
              Your <strong className="secondary_color">Digital</strong> Dreams
              <br className="hidden md:block" /> Delivered
            </span>
            <span className="w-full lg:w-1/2  xl:w-1/2 relative text-start text-[14px] self-end  bottom-16">
              Fusce consectetur ligula molestie nunc maximus, ac egestas risus
              placerat. Cras accumsan varius placerat. Vestibulum varius sodales
              ultrices. Integer congue cursus risus, at vehicula ex aliquet in.
              Utsit amet molestie risused hendrerit.
            </span>
          </div>
          <div className="flex flex-col items-start self-start justify-start h-full">
            <Image
              src={side2}
              width={134}
              height={133}
              alt="side Image"
              className="self-center bg-black rounded-full relative top-14"
            />
            <Image
              src={side1}
              width={300}
              height={394}
              alt="side Image"
              className=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-14 self-center text-center ">
          <div className="w-20 mx-auto">
           <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700 rotate-90 block" />  
          </div>
          <span className="rotate-90 text-sm">Scroll Down</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
