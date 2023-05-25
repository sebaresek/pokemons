import { GET_ALL_POKEMONS, 
  SEARCH_POKEMON,
  RESET_POKEMON,
  HANDLE_NUMBER,
  NEXT_PAGE,
  PREV_PAGE,
  ORDER,
  FILTER,
  FILTER_TYPES,
  DELETE_POKEMON
 } from "./action-types";


const initialState  = {
    pokemons: [],
    pokemonsOrigin: [],
    numPage: 1,
    filteredPokemons: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: [...payload.result],
        pokemonsOrigin: [...payload.result], // Actualizar el valor de pokemonsOrigin
        filteredPokemons: [...payload.result], // Actualizar el valor de filteredPokemons
      };

    case SEARCH_POKEMON:
      return {
        ...state,
        filteredPokemons: [payload],
      };

    case RESET_POKEMON:
      return {
        ...state,
        filteredPokemons: [...state.pokemonsOrigin],
      };

    case HANDLE_NUMBER:
      return {
        ...state,
        numPage: payload,
      };

    case NEXT_PAGE:
      return {
        ...state,
        numPage: state.numPage + 1,
      };
        
    case PREV_PAGE:
      return {
        ...state,
        numPage: state.numPage - 1,
      };


    case ORDER:
      console.log(payload)
      const orderedPokemons = [...state.filteredPokemons];
      orderedPokemons.sort((a, b) => {
        if (payload === 'Attack') {
          // return payload === 'Attack' ? a.ataque - b.ataque : b.ataque - a.ataque;
            return a.stroke - b.stroke
        }  else if ( payload === 'AttackD') {
          console.log(`payload `, payload)
          return b.stroke - a.stroke
        } else {
        return payload === 'A' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        }
      });



      return {
        ...state,
        filteredPokemons: orderedPokemons
      };

    case FILTER:
      let filteredPokemons = [...state.pokemons];

      if (payload === 'all') {
        filteredPokemons = [...state.pokemons];
      } else if (payload === 'API') {
        //por cada elemento pokemons del array state.pokemons
        filteredPokemons = state.pokemons.filter(pokemon => typeof pokemon.id === 'number'); 
      } else if (payload === 'Database') {
        filteredPokemons = state.pokemons.filter(pokemon => typeof pokemon.id === 'string');
      } return {
        ...state,
        filteredPokemons: filteredPokemons
      };


  case FILTER_TYPES:
    const currentFilteredPokemons = [...state.pokemons]; // Paso 1: Copia de los Pokémon filtrados actualmente
    const filteredByTypes = currentFilteredPokemons.filter(pokemon => {
      const types = pokemon.types ? pokemon.types : [];
      const typesOfPokemons = pokemon.TypesOfPokemons ? pokemon.TypesOfPokemons.map(type =>   type.name) : [];

      const isNormalType = types.includes(payload) || typesOfPokemons.includes(payload); // Verificar si es del tipo "normal"
      return isNormalType; // Aplicar filtro de tipo "normal"
    });
    return {
      ...state,
      filteredPokemons: filteredByTypes
    };
    

  case DELETE_POKEMON:
    return {
      ...state,
      pokemons: state.pokemons.filter(pokemon => pokemon.id !== payload),
      filteredPokemons: state.filteredPokemons.filter(pokemon => pokemon.id !== payload)
    };
    



    default:
      return state;

  }

};

export default reducer;


