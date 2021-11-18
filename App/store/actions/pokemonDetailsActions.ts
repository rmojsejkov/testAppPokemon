import {
  FetchEvolutionChainFailure,
  FetchEvolutionChainFailurePayload,
  FetchEvolutionChainRequest,
  FetchEvolutionChainRequestPayload,
  FetchEvolutionChainSuccess,
  FetchEvolutionChainSuccessPayload,
  FetchPokemonDetailsFailure,
  FetchPokemonDetailsFailurePayload,
  FetchPokemonDetailsRequest,
  FetchPokemonDetailsRequestPayload,
  FetchPokemonDetailsSuccess,
  FetchPokemonDetailsSuccessPayload,
  PokemonDetailsTypes,
} from '@store/types/pokemonDetailsTypes';

export const fetchPokemonDetailsRequest = (
  payload: FetchPokemonDetailsRequestPayload,
): FetchPokemonDetailsRequest => ({
  type: PokemonDetailsTypes.FETCH_POKEMON_DETAILS_REQUEST,
  payload,
});

export const fetchPokemonDetailsSuccess = (
  payload: FetchPokemonDetailsSuccessPayload,
): FetchPokemonDetailsSuccess => ({
  type: PokemonDetailsTypes.FETCH_POKEMON_DETAILS_SUCCESS,
  payload,
});

export const fetchPokemonDetailsFailure = (
  payload: FetchPokemonDetailsFailurePayload,
): FetchPokemonDetailsFailure => ({
  type: PokemonDetailsTypes.FETCH_POKEMON_DETAILS_FAILURE,
  payload,
});

export const fetchEvolutionChainRequest = (
  payload: FetchEvolutionChainRequestPayload,
): FetchEvolutionChainRequest => ({
  type: PokemonDetailsTypes.FETCH_EVOLUTION_CHAIN_REQUEST,
  payload,
});

export const fetchEvolutionChainSuccess = (
  payload: FetchEvolutionChainSuccessPayload,
): FetchEvolutionChainSuccess => ({
  type: PokemonDetailsTypes.FETCH_EVOLUTION_CHAIN_SUCCESS,
  payload,
});

export const fetchEvolutionChainFailure = (
  payload: FetchEvolutionChainFailurePayload,
): FetchEvolutionChainFailure => ({
  type: PokemonDetailsTypes.FETCH_EVOLUTION_CHAIN_FAILURE,
  payload,
});
