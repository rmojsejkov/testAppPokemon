import {
  FetchPokemonListFailurePayload,
  FetchPokemonListRequest,
  FetchPokemonListSuccessPayload,
  PokemonListTypes,
  ScrollEndPokemonListRequest,
} from '@root/store/types/pokemonListTypes';

export const scrollEndPokemonList = (): ScrollEndPokemonListRequest => ({
  type: PokemonListTypes.SCROLL_END_POKEMON_LIST_REQUEST,
});

export const fetchPokemonListRequest = (): FetchPokemonListRequest => ({
  type: PokemonListTypes.FETCH_POKEMON_LIST_REQUEST,
});

export const fetchPokemonListSuccess = (payload: FetchPokemonListSuccessPayload) => ({
  type: PokemonListTypes.FETCH_POKEMON_LIST_SUCCESS,
  payload,
});

export const fetchPokemonListFailure = (payload: FetchPokemonListFailurePayload) => ({
  type: PokemonListTypes.FETCH_POKEMON_LIST_FAILURE,
  payload,
});
