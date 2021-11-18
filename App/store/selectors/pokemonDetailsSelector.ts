import { RootState } from '@store/rootReducer';
import { createSelector } from 'reselect';

const getPokemonDetails = (state: RootState) => state.pokemonDetailsState.pokemonDetails;
const getPokemonDetailsIsLoading = (state: RootState) =>
  state.pokemonDetailsState.isLoadingPokemonDetails;
const getPokemonDetailsError = (state: RootState) => state.pokemonDetailsState.errorPokemonDetails;
const getEvolutionChain = (state: RootState) => state.pokemonDetailsState.evolutionChain;
const getEvolutionChainIsLoading = (state: RootState) =>
  state.pokemonDetailsState.isLoadingEvolutionChain;
const getEvolutionChainError = (state: RootState) => state.pokemonDetailsState.errorEvolutionChain;

export const getPokemonDetailsSelector = createSelector(
  getPokemonDetails,
  (pokemonDetails) => pokemonDetails,
);
export const getPokemonDetailsIsLoadingSelector = createSelector(
  getPokemonDetailsIsLoading,
  (isLoading) => isLoading,
);
export const getPokemonDetailsErrorSelector = createSelector(
  getPokemonDetailsError,
  (error) => error,
);
export const getEvolutionChainSelector = createSelector(
  getEvolutionChain,
  (evolutionChain) => evolutionChain,
);
export const getEvolutionChainIsLoadingSelector = createSelector(
  getEvolutionChainIsLoading,
  (isLoading) => isLoading,
);
export const getEvolutionChainErrorSelector = createSelector(
  getEvolutionChainError,
  (error) => error,
);
