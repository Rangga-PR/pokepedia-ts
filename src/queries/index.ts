export const GET_POKEMONS = `
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      results {
        id
        name
        artwork
      }
    }
  }
`;
