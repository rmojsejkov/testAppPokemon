import { POKEMONS } from "../../../constants/types";

export const clearPokemons = () => {
  return {
    type: POKEMONS.GET_DEFAULT_ALL_POKEMONS,
    payload: [],
  };
};

export const getDefaultAllPokemons = () => {
  return async dispatch => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
    const fetchPokemons = await response.json();
    const pokemonsArr = Object.keys(fetchPokemons).map(key => ({
        ...fetchPokemons[key],
        id: key,
      }),
    );
    dispatch({
      type: POKEMONS.GET_DEFAULT_ALL_POKEMONS,
      payload: pokemonsArr,
    });
  };
};
