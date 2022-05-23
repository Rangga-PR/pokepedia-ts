import React from "react";
import Flexbox from "../common/flexbox";
import PokemonCard from "../pokemoncard";
import PokemonCardSkeleton from "../pokemoncard/skeleton";
import { PokemonData, LocalPokemonData } from "../../interface";

interface PokemonListProps {
  data: PokemonData[];
  localData?: LocalPokemonData[];
  loading?: boolean;
}

const Pokemonlist = ({ data, localData, loading }: PokemonListProps) => {
  return (
    <Flexbox dir="column" p="16px">
      {data?.map((d) => (
        <PokemonCard
          key={d.id}
          data={d}
          caught={localData?.filter((l) => d?.id === l?.id)?.length}
        />
      ))}

      {loading &&
        [1, 2, 3].map((v) => (
          <PokemonCardSkeleton key={v} testId="pokemon-loading" />
        ))}
    </Flexbox>
  );
};

export default Pokemonlist;
