import { useContext, useEffect } from "react";
import Head from "next/head";
import Layout from "../src/layout";
import Appbar from "../src/components/apppbar";
import { GET_MY_POKEMON, myPokemonStore } from "../src/context/mypokemon";
import MyPokemonList from "../src/components/mypokemonlist";

export default function MyPokemon() {
  const { state, dispatch } = useContext(myPokemonStore);

  useEffect(() => {
    dispatch({ type: GET_MY_POKEMON });
  }, [dispatch]);

  return (
    <Layout>
      <Head>
        <title>{`Pokepedia || Koleksi pokemon`}</title>
        <meta name="description" content="Temukan pokemon favoritmu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Appbar />
      <MyPokemonList data={state} />
    </Layout>
  );
}
