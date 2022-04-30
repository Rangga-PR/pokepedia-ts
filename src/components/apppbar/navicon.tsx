import React from "react";
import { IconContainer } from "./style";
import Img from "../common/img";
import Link from "next/link";

interface NaviconProps {
  src: string;
  href: string;
  alt: string;
}

const Navicon = ({ src, href, alt, ...props }: NaviconProps) => {
  return (
    <Link href={href} passHref>
      <IconContainer role="link">
        <Img src={src} w="21px" h="21px" alt={alt} {...props} />
      </IconContainer>
    </Link>
  );
};

export default Navicon;
