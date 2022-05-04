import React from "react";
import { Container } from "./style";
import Skeleton from "../common/skeleton";

interface PokemonHeroSkeletonProps {
  testId?: string;
}

const PokemonHeroSkeleton = ({ testId }: PokemonHeroSkeletonProps) => {
  return (
    <Container p="0" data-testid={testId}>
      <Skeleton w="100%" h="100%" />
    </Container>
  );
};

export default PokemonHeroSkeleton;
