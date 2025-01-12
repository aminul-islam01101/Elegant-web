import Image from "next/image";
import banner from "../../../../public/assets/mainBg.png";
import style from "./ServicesHome.module.css";
// import SocialMediaLink from "../../re-ui/SocialMediaLink";
// import fb from "../../../../public/assets/socialIcons/facebook.png";
// import twitter from "../../../../public/assets/socialIcons/twitter.png";
// import insta from "../../../../public/assets/socialIcons/insta.png";
// import google from "../../../../public/assets/socialIcons/google.png";
// import side1 from "../../../../public/assets/banner-side-main.png";
// import side2 from "../../../../public/assets/banner-side-2.png";

const ServicesHome = () => {
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
        <div>
            <span className="text-6xl text-white font-bold">Services</span>
            <p className="text-white text-lg font-normal mt-2">Home / Page / Service</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;
