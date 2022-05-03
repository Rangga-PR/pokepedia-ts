import React from "react";
import { CardContainer } from "./style";
import Skeleton from "../common/skeleton";

interface PokemonCardSkeletonProps {
  testId?: string;
}

const PokemonCardSkeleton = ({ testId }: PokemonCardSkeletonProps) => {
  return (
    <CardContainer data-testid={testId}>
      <Skeleton w="40%" h="19px" br="8px" />
      <Skeleton w="100%" h="32px" br="8px" m="8px 0" />
      <Skeleton w="25%" h="16px" br="8px" />
    </CardContainer>
  );
};

export default PokemonCardSkeleton;
