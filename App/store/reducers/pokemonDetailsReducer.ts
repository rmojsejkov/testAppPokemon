import {
  PokemonDetailsActions,
  PokemonDetailsState,
  PokemonDetailsTypes,
} from '@store/types/pokemonDetailsTypes';

const initialState: PokemonDetailsState = {
  pokemonDetails: null,
  isLoadingPokemonDetails: false,
  errorPokemonDetails: null,
  evolutionChain: [],
  isLoadingEvolutionChain: false,
  errorEvolutionChain: null,
};

export const pokemonDetailsReducer = (state = initialState, action: PokemonDetailsActions) => {
  switch (action.type) {
    case PokemonDetailsTypes.FETCH_POKEMON_DETAILS_REQUEST:
      return {
        ...state,
        isLoadingPokemonDetails: true,
        errorPokemonDetails: null,
      };
    case PokemonDetailsTypes.FETCH_POKEMON_DETAILS_SUCCESS:
      return {
        ...state,
        isLoadingPokemonDetails: false,
        pokemonDetails: action.payload,
      };
    case PokemonDetailsTypes.FETCH_POKEMON_DETAILS_FAILURE: {
      return {
        ...state,
        isLoadingPokemonDetails: false,
        errorPokemonDetails: action.payload,
      };
    }
    case PokemonDetailsTypes.CLEAR_STATE:
      return {
        ...state,
        pokemonDetails: null,
        errorPokemonDetails: null,
        evolutionChain: [],
        errorEvolutionChain: null,
      };
    case PokemonDetailsTypes.FETCH_EVOLUTION_CHAIN_REQUEST:
      return {
        ...state,
        isLoadingEvolutionChain: true,
        errorEvolutionChain: null,
      };
    case PokemonDetailsTypes.FETCH_EVOLUTION_CHAIN_SUCCESS:
      return {
        ...state,
        evolutionChain: action.payload,
        isLoadingEvolutionChain: false,
      };
    case PokemonDetailsTypes.FETCH_EVOLUTION_CHAIN_FAILURE:
      return {
        ...state,
        isLoadingEvolutionChain: false,
        errorEvolutionChain: action.payload,
      };
    default:
      return state;
  }
};
