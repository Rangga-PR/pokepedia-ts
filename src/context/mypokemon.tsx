import { createContext, useReducer, ReactNode, Dispatch } from "react";
import { getLocalItem, setLocalItem } from "../utilities";
import { LocalPokemonData } from "../interface";

const GET_MY_POKEMON = "GET_MY_POKEMON";
const ADD_POKEMON = "ADD_POKEMON";
const DELETE_POKEMON = "DELETE_POKEMON";

interface MyPokemonProviderProps {
  children: ReactNode;
}

interface IMyPokemonAction {
  type: string;
  payload?: LocalPokemonData;
}

const myPokemonStore = createContext<{
  state: LocalPokemonData[];
  dispatch: Dispatch<IMyPokemonAction>;
}>({ state: [], dispatch: () => null });
const { Provider } = myPokemonStore;

const myPokemonReducer = (
  state: LocalPokemonData[],
  action: IMyPokemonAction
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MY_POKEMON: {
      return getLocalItem("mypokemon") || [];
    }
    case ADD_POKEMON: {
      const newState = [...state, payload];
      setLocalItem("mypokemon", newState);
      return newState;
    }
    case DELETE_POKEMON: {
      const newState = state.filter((s) => s.catch_id !== payload?.catch_id);
      setLocalItem("mypokemon", newState);
      return newState;
    }
    default: {
      return state;
    }
  }
};

const MyPokemonProvider = ({ children }: MyPokemonProviderProps) => {
  const [state, dispatch] = useReducer(myPokemonReducer, []);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export {
  myPokemonStore,
  GET_MY_POKEMON,
  ADD_POKEMON,
  DELETE_POKEMON,
  MyPokemonProvider,
};
