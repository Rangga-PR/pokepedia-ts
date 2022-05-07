export interface PokemonData {
  id: number;
  name: string;
  artwork: string;
}

export interface LocalPokemonData {
  catch_id: number;
  id: number;
  name: string;
  nickname: string;
  sprites: string;
}

export interface Stat {
  name: string;
  stat: number;
}

export interface IMove {
  name: string;
  level: number;
  method: string;
}
