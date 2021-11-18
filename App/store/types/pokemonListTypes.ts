import { PokemonListItem } from '@root/types/pokemons';

export enum PokemonListTypes {
  FETCH_POKEMON_LIST_REQUEST = 'POKEMON_LIST/FETCH_POKEMON_LIST_REQUEST',
  SCROLL_END_POKEMON_LIST_REQUEST = 'POKEMON_LIST/SCROLL_END_POKEMON_LIST_REQUEST',
  FETCH_POKEMON_LIST_SUCCESS = 'POKEMON_LIST/FETCH_POKEMON_LIST_SUCCESS',
  FETCH_POKEMON_LIST_FAILURE = 'POKEMON_LIST/FETCH_POKEMON_LIST_FAILURE',
}

export type PokemonListState = {
  page: number;
  pokemonList: PokemonListItem[];
  isLoading: boolean;
  error: string | null;
};

export type FetchPokemonListSuccessPayload = PokemonListItem[];
export type FetchPokemonListFailurePayload = string;

export type FetchPokemonListRequest = {
  type: PokemonListTypes.FETCH_POKEMON_LIST_REQUEST;
};
export type ScrollEndPokemonListRequest = {
  type: PokemonListTypes.SCROLL_END_POKEMON_LIST_REQUEST;
};
export type FetchPokemonListSuccess = {
  type: PokemonListTypes.FETCH_POKEMON_LIST_SUCCESS;
  payload: FetchPokemonListSuccessPayload;
};
export type FetchPokemonListFailure = {
  type: PokemonListTypes.FETCH_POKEMON_LIST_FAILURE;
  payload: FetchPokemonListFailurePayload;
};

export type PokemonListActions =
  | ScrollEndPokemonListRequest
  | FetchPokemonListRequest
  | FetchPokemonListSuccess
  | FetchPokemonListFailure;
