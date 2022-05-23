import Head from "next/head";
import Layout from "../src/layout";
import Appbar from "../src/components/appbar";
import Hero from "../src/components/hero";
import Pokemonlist from "../src/components/pokemonlist";
import { GET_POKEMONS } from "../src/queries";
import { withUrqlClient } from "next-urql";
import { useEffect, useState, useContext } from "react";
import { useQuery } from "urql";
import { GET_MY_POKEMON, myPokemonStore } from "../src/context/mypokemon";

function Home() {
  const [limit, setLimit] = useState(20);
  const { state, dispatch } = useContext(myPokemonStore);
  const [{ fetching, data }] = useQuery({
    query: GET_POKEMONS,
    variables: { offset: 0, limit },
  });
  const [hasMore, setHasMore] = useState(
    data?.pokemons?.results?.length >= data?.pokemons.count ? false : true
  );

  useEffect(() => {
    dispatch({ type: GET_MY_POKEMON });
  }, [dispatch]);

  useEffect(() => {
    data?.pokemons?.results?.length >= data?.pokemons?.count &&
      setHasMore(false);
  }, [data]);

  useEffect(() => {
    if (!hasMore || fetching) return;
    const handleScroll = () => {
      document.documentElement.scrollTop +
        document.documentElement.clientHeight >=
        document.documentElement.scrollHeight - 120 &&
        setLimit((prev) => prev + 20);
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [hasMore, fetching]);

  return (
    <Layout>
      <Head>
        <title>Pokepedia</title>
        <meta name="description" content="Temukan pokemon favoritmu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Appbar />
      <Hero />
      <Pokemonlist
        data={data?.pokemons?.results}
        localData={state}
        loading={fetching}
      />
    </Layout>
  );
}

export default withUrqlClient((_ssrExchange) => ({
  url: process.env.NEXT_PUBLIC_POKEAPI || "",
}))(Home);
