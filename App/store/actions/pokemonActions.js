import {POKEMONS} from '../../constants/types';
import {URL} from '../../constants';

export const getDefaultAllPokemons = () => {
  return async dispatch => {
    const response = await fetch(`${URL}pokemon?limit=10&offset=20`);
    const fetchPokemons = await response.json();

    dispatch({
      type: POKEMONS.GET_DEFAULT_ALL_POKEMONS,
      payload: fetchPokemons.results.map(({name, url}) => ({
        name,
        id: url.split('/')[url.split('/').length - 2],
      })),
    });
  };
};

export const getPokemonDetails = id => {
  return async dispatch => {
    const response = await fetch(`${URL}/pokemon/${id}`);

    const fetchPokemonDetails = await response.json();

    dispatch({
      type: POKEMONS.GET_POKEMON_DETAILS,
      payload: fetchPokemonDetails,
    });
  };
};

export const clearPokemonDetails = () => {
  return {type: POKEMONS.POKEMON_CLEAR_DETAILS};
};
