import axios from "axios";
import { GET_ALL_POKEMONS, 
  ORDER, 
  FILTER, 
  SEARCH_POKEMON ,
  HANDLE_NUMBER,
  RESET_POKEMON,
  PREV_PAGE,
  NEXT_PAGE,
  FILTER_TYPES
} from "./action-types";


export const getAllPokemons = () => async (dispatch) => {
  try {
    await axios.get("http://localhost:3001/types/");
    const result = await axios.get("http://localhost:3001/pokemons/");
    dispatch({
      type: GET_ALL_POKEMONS,
      payload: { result: result.data },
    });
  } catch (error) {
    console.error(error);
    }
};

export const searchPokemon = (pokemon) => {
  return { type: SEARCH_POKEMON, 
    payload: pokemon 
  };
};

export function resetPokemons() {
  return {
    type: RESET_POKEMON,
  };
}

export function prevPage() {
  return {
    type: PREV_PAGE,
  };
}

export function nextPage() {
  return {
    type: NEXT_PAGE,
  };
}
export function handleNumber(num) {
  return {
    type: HANDLE_NUMBER,
    payload: num,
  };
}

export const filterCards = (filter) => {
  // console.log(filter)
    return { type: FILTER, 
      payload: filter 
    };
}


export const filterTypes = (filter) => {
    return { type: FILTER_TYPES, 
      payload: filter 
    };
}

export const orderCards = (order) => {
    return { type: ORDER, 
      payload: order 
    };
}