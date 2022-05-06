import React, { useContext } from "react";
import MyPokemonCard from "../mypokemoncard";
import { Container } from "./style";
import { DELETE_POKEMON, myPokemonStore } from "../../context/mypokemon";
import { LocalPokemonData } from "../../interface";

interface MyPokemonListProps {
  data: LocalPokemonData[];
}

const MyPokemonlist = ({ data }: MyPokemonListProps) => {
  const { dispatch } = useContext(myPokemonStore);

  const handleRelease = (val: LocalPokemonData) => {
    dispatch({ type: DELETE_POKEMON, payload: val });
  };

  return (
    <Container>
      {data.map((d) => (
        <MyPokemonCard key={d.id} data={d} onRelease={handleRelease} />
      ))}
    </Container>
  );
};

export default MyPokemonlist;
