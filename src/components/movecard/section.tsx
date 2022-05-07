import React from "react";
import Typo from "../common/typo";
import Flexbox from "../common/flexbox";

interface SectionProps {
  color: string;
  title: string;
  value: string | number;
  w?: string;
}

const Section = ({ color, title, value, w, ...props }: SectionProps) => {
  return (
    <Flexbox dir="column" m="0 16px 0 0" w={w} {...props}>
      <Typo fs="14px" c={color} fw="600">
        {title}
      </Typo>
      <Typo fs="14px">{value}</Typo>
    </Flexbox>
  );
};

export default Section;
