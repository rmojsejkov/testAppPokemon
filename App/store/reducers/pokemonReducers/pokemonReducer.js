import {POKEMONS} from '../../../constants/types';

const initialState = {
  defaultPokemons: [],
  pokemonDetails: undefined,
};

const handlers = {
  [POKEMONS.GET_DEFAULT_ALL_POKEMONS]: (state, {payload}) => ({
    ...state,
    defaultPokemons: payload,
  }),
  [POKEMONS.GET_POKEMON_DETAILS]: (state, {payload}) => ({
    ...state,
    pokemonDetails: payload,
  }),
  [POKEMONS.POKEMON_CLEAR_DETAILS]: state => ({
    ...state,
    pokemonDetails: undefined,
  }),
  DEFAULT: state => state,
};

export const pokemonReducer = (state = initialState, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
