import {
  PokemonListActions,
  PokemonListState,
  PokemonListTypes,
} from '@store/types/pokemonListTypes';

const initialState: PokemonListState = {
  page: 0,
  pokemonList: [],
  isLoading: false,
  error: null,
};

export const pokemonListReducer = (state = initialState, action: PokemonListActions) => {
  switch (action.type) {
    case PokemonListTypes.FETCH_POKEMON_LIST_REQUEST:
      return {
        ...state,
        page: 0,
        pokemonList: [],
        isLoading: true,
      };
    case PokemonListTypes.SCROLL_END_POKEMON_LIST_REQUEST:
      return {
        ...state,
        page: state.page + 1,
      };
    case PokemonListTypes.FETCH_POKEMON_LIST_SUCCESS:
      return {
        ...state,
        pokemonList: [...state.pokemonList, ...action.payload],
        isLoading: false,
        error: null,
      };
    case PokemonListTypes.FETCH_POKEMON_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
