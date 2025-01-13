import Image from "next/image";
import banner from "../../../../public/assets/mainBg.png";
import style from "./FaqHome.module.css";

const FaqHome = () => {
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
            <p className="text-white text-lg font-normal mt-2">Home / Page / Faq</p>
        </div>
      </div>
    </div>
  );
};

export default FaqHome;
