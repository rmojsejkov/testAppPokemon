import { PokemonDetails, PokemonListItem } from '@root/types/pokemons';
import { Id } from '@types';

export enum PokemonDetailsTypes {
  FETCH_POKEMON_DETAILS_REQUEST = 'POKEMON_DETAILS/FETCH_POKEMON_DETAILS_REQUEST',
  FETCH_POKEMON_DETAILS_SUCCESS = 'POKEMON_DETAILS/FETCH_POKEMON_DETAILS_SUCCESS',
  FETCH_POKEMON_DETAILS_FAILURE = 'POKEMON_DETAILS/FETCH_POKEMON_DETAILS_FAILURE',
  FETCH_EVOLUTION_CHAIN_REQUEST = 'POKEMON_DETAILS/FETCH_EVOLUTION_CHAIN_REQUEST',
  FETCH_EVOLUTION_CHAIN_SUCCESS = 'POKEMON_DETAILS/FETCH_EVOLUTION_CHAIN_SUCCESS',
  FETCH_EVOLUTION_CHAIN_FAILURE = 'POKEMON_DETAILS/FETCH_EVOLUTION_CHAIN_FAILURE',
  CLEAR_STATE = 'POKEMON_DETAILS/CLEAR_STATE',
}

export type PokemonDetailsState = {
  pokemonDetails: PokemonDetails | null;
  isLoadingPokemonDetails: boolean;
  errorPokemonDetails: string | null;
  evolutionChain: PokemonListItem[];
  isLoadingEvolutionChain: boolean;
  errorEvolutionChain: string | null;
};

export type FetchPokemonDetailsRequestPayload = Id;
export type FetchPokemonDetailsSuccessPayload = PokemonDetails;
export type FetchPokemonDetailsFailurePayload = string;
export type FetchEvolutionChainRequestPayload = Id;
export type FetchEvolutionChainSuccessPayload = PokemonListItem[];
export type FetchEvolutionChainFailurePayload = string;

export type FetchPokemonDetailsRequest = {
  type: PokemonDetailsTypes.FETCH_POKEMON_DETAILS_REQUEST;
  payload: FetchPokemonDetailsRequestPayload;
};
export type FetchPokemonDetailsSuccess = {
  type: PokemonDetailsTypes.FETCH_POKEMON_DETAILS_SUCCESS;
  payload: FetchPokemonDetailsSuccessPayload;
};
export type FetchPokemonDetailsFailure = {
  type: PokemonDetailsTypes.FETCH_POKEMON_DETAILS_FAILURE;
  payload: FetchPokemonDetailsFailurePayload;
};
export type ClearPokemonDetailsState = {
  type: PokemonDetailsTypes.CLEAR_STATE;
};
export type FetchEvolutionChainRequest = {
  type: PokemonDetailsTypes.FETCH_EVOLUTION_CHAIN_REQUEST;
  payload: FetchEvolutionChainRequestPayload;
};
export type FetchEvolutionChainSuccess = {
  type: PokemonDetailsTypes.FETCH_EVOLUTION_CHAIN_SUCCESS;
  payload: FetchEvolutionChainSuccessPayload;
};
export type FetchEvolutionChainFailure = {
  type: PokemonDetailsTypes.FETCH_EVOLUTION_CHAIN_FAILURE;
  payload: FetchEvolutionChainFailurePayload;
};

export type PokemonDetailsActions =
  | FetchPokemonDetailsRequest
  | FetchPokemonDetailsSuccess
  | FetchPokemonDetailsFailure
  | FetchEvolutionChainRequest
  | FetchEvolutionChainSuccess
  | FetchEvolutionChainFailure
  | ClearPokemonDetailsState;
