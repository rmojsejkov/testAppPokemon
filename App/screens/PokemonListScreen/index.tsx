import { fetchPokemonListRequest, scrollEndPokemonList } from '@store/actions/pokemoListActions';
import {
  getPokemonListErrorSelector,
  getPokemonListIsLoadingSelector,
  getPokemonListSelector,
} from '@store/selectors/pokemonListSelector';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PokemonListScreenView } from './PokemonListScreenView';

export const PokemonListScreen = () => {
  const dispatch = useDispatch();
  const pokemonListItems = useSelector(getPokemonListSelector);
  const isLoading = useSelector(getPokemonListIsLoadingSelector);
  const error = useSelector(getPokemonListErrorSelector);

  const loadPokemonList = useCallback(() => {
    dispatch(fetchPokemonListRequest());
  }, [dispatch]);

  const scrollEndPokemons = () => {
    dispatch(scrollEndPokemonList());
  };

  useEffect(() => {
    loadPokemonList();
  }, [loadPokemonList]);

  return (
    <PokemonListScreenView
      pokemonList={pokemonListItems}
      error={error}
      isLoading={isLoading}
      loadPokemonList={loadPokemonList}
      scrollEndPokemons={scrollEndPokemons}
    />
  );
};
