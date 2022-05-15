import { createClient } from "urql";

export default createClient({
  url: process.env.NEXT_PUBLIC_POKEAPI!,
});
