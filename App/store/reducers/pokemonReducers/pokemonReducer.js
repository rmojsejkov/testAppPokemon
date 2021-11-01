import { POKEMONS } from "../../../constants/types";

const initialState = {
  defaultPokemons: []
}

const handlers = {
  [POKEMONS.GET_DEFAULT_ALL_POKEMONS]: (state, {payload}) => {
    return {
    ...state,
    defaultPokemons: payload
  }},
  DEFAULT: state => state
}

export const pokemonReducer = (state = initialState, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action)
}
