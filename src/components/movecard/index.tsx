import React from "react";
import { CardContainer, CardNumberContainer } from "./style";
import Section from "./section";
import { IMove } from "../../interface";

interface MoveCardProps {
  idx: number;
  data: IMove;
  color: string;
  m?: string;
}

const MoveCard = ({ idx, data, color, m, ...props }: MoveCardProps) => {
  return (
    <CardContainer m={m} {...props}>
      <CardNumberContainer bg={color}>{idx}</CardNumberContainer>
      <Section color={color} title="Name" value={data.name} w="50%" />
      <Section color={color} title="Level" value={data.level} w="20%" />
      <Section color={color} title="Method" value={data.method} />
    </CardContainer>
  );
};

export default MoveCard;
