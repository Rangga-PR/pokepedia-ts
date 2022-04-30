import React from "react";
import { Container } from "./style";
import Navicon from "./navicon";
import Flexbox from "../common/flexbox";
import Backstep from "../backstep";

interface AppbarProps {
  bg?: string;
}

const Appbar = ({ bg, ...props }: AppbarProps) => {
  return (
    <Container {...props} bg={bg}>
      <Flexbox fg="1">
        <Backstep />
      </Flexbox>
      <Navicon
        src="/assets/svg/backpack_black.svg"
        alt="backpack"
        href="/my-pokemon"
      />
      <Navicon src="/assets/svg/home_black.svg" alt="home" href="/" />
    </Container>
  );
};

export default Appbar;
