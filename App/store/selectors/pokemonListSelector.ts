import { RootState } from '@root/store/rootReducer';
import { createSelector } from 'reselect';

const getPokemonListIsLoading = (state: RootState) => state.pokemonListState.isLoading;
const getPokemonList = (state: RootState) => state.pokemonListState.pokemonList;
const getPokemonListError = (state: RootState) => state.pokemonListState.error;

export const getPokemonListPage = (state: RootState) => state.pokemonListState.page;

export const getPokemonListIsLoadingSelector = createSelector(
  getPokemonListIsLoading,
  (isLoading) => isLoading,
);
export const getPokemonListSelector = createSelector(getPokemonList, (pokemonList) => pokemonList);
export const getPokemonListErrorSelector = createSelector(getPokemonListError, (error) => error);
