import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface SocialMediaLinkProps {
  imageSrc: StaticImageData;
  altText: string;
  link: string;
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({
  imageSrc,
  altText,
  link,
}) => {
  return (
    <Link href={link} passHref>
      <Image src={imageSrc} alt={altText} width={32} height={32} />
    </Link>
  );
};

export default SocialMediaLink;
