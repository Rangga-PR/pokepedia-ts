import React from "react";
import Flexbox from "../common/flexbox";
import Typo from "../common/typo";
import MoveCard from "../movecard";
import MoveCardSkeleton from "../movecard/skeleton";
import { IMove } from "../../interface";

interface MoveListProps {
  moves: IMove[];
  color: string;
  loading?: boolean;
}

const MoveList = ({ moves, color, loading, ...props }: MoveListProps) => {
  return (
    <Flexbox dir="column" p="16px" {...props}>
      <Typo as="h2" m="0 0 16px 0">
        Moves
      </Typo>
      {loading
        ? [1, 2, 3].map((v) => (
            <MoveCardSkeleton key={v} data-testid="move-loading" m="16px 0 0" />
          ))
        : moves?.map((m, i) => (
            <MoveCard
              key={m.name}
              idx={i + 1}
              data={m}
              color={color}
              m="8px 0 8px 16px"
            />
          ))}
    </Flexbox>
  );
};

export default MoveList;
