import { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../../src/layout";
import Appbar from "../../src/components/appbar";
import { GET_POKEMON } from "../../src/queries";
import { useRouter } from "next/router";
import { useTheme } from "@emotion/react";
import PokemonHero from "../../src/components/pokemonhero";
import PokemonTypeBar from "../../src/components/pokemontypebar";
import MoveList from "../../src/components/movelist";
import CatchPokemon from "../../src/components/catchpokemon";
import { useQuery } from "urql";
import PokemonStat from "../../src/components/pokemonstat";
import { IType, IStat, IMove } from "../../src/interface/api";

export default function PokemonDetail() {
  const { slug } = useRouter().query;
  const theme = useTheme();
  const [supportShareApi, setSupportShareApi] = useState(false);
  const [result] = useQuery({
    query: GET_POKEMON,
    variables: { name: slug },
  });
  const { fetching, data } = result;

  useEffect(() => {
    setSupportShareApi(typeof navigator.share !== "undefined" ? true : false);
  }, []);

  useEffect(() => {
    console.log(result);
  }, [result]);

  const handleShare = () => {
    supportShareApi &&
      navigator
        ?.share({
          title: `Pokepedia || ${data?.pokemon?.name}`,
          text: `Temukan ${data?.pokemon?.name} di Pokepedia`,
          url: window.location.href,
        })
        .catch(() => {
          return;
        });
  };

  return (
    <Layout>
      <Head>
        <title>{`Pokepedia || ${data?.pokemon?.name}`}</title>
        <meta name="description" content="Temukan pokemon favoritmu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Appbar
        bg={
          fetching
            ? "transparent"
            : theme?.color?.[
                data?.pokemon?.types?.[0]?.type
                  ?.name as keyof typeof theme.color
              ]
        }
      />
      <PokemonHero
        id={data?.pokemon?.id}
        name={data?.pokemon?.name}
        bg={
          theme?.color?.[
            data?.pokemon?.types?.[0]?.type?.name as keyof typeof theme.color
          ]
        }
        img={data?.pokemon?.sprites?.front_default}
        loading={fetching}
      />
      <PokemonTypeBar
        types={data?.pokemon?.types?.map((t: IType) => t.type.name)}
        handleShare={handleShare}
        withShare={supportShareApi}
        loading={fetching}
      />
      <PokemonStat
        stat={data?.pokemon?.stats?.map((s: IStat) => ({
          name: s.stat.name,
          stat: s.base_stat,
        }))}
        color={
          theme?.color?.[
            data?.pokemon?.types?.[0]?.type?.name as keyof typeof theme.color
          ]
        }
        loading={fetching}
      />
      <MoveList
        color={
          theme?.color?.[
            data?.pokemon?.types?.[0]?.type?.name as keyof typeof theme.color
          ]
        }
        moves={data?.pokemon?.moves?.map((m: IMove) => ({
          name: m.move.name,
          level: m.version_group_details[0].level_learned_at,
          method: m.version_group_details[0].move_learn_method.name,
        }))}
        loading={fetching}
      />
      {!fetching && data && (
        <CatchPokemon
          pokemon={{
            id: data?.pokemon?.id,
            name: data?.pokemon?.name,
            sprites: data?.pokemon?.sprites?.front_default,
          }}
        />
      )}
    </Layout>
  );
}
