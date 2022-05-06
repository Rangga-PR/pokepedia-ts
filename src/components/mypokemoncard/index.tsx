import React from "react";
import { Container } from "./style";
import Typo from "../common/typo";
import Button from "../common/button";
import Img from "../common/img";
import { LocalPokemonData } from "../../interface";

interface MyPokemonCardProps {
  data: LocalPokemonData;
  onRelease: Function;
}

const MyPokemonCard = ({ data, onRelease }: MyPokemonCardProps) => {
  return (
    <Container>
      <Img src={data?.sprites} />
      <Typo>{data?.nickname}</Typo>
      <Typo fs="12px" fw="600">{`(${data?.name})`}</Typo>
      <Button m="4px 0 0 0" w="100%" onClick={() => onRelease(data)}>
        Lepas
      </Button>
    </Container>
  );
};

export default MyPokemonCard;
