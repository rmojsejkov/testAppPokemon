import { useFocusEffect } from '@react-navigation/native';
import React, { FC, memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PokemonDetailsScreenProps } from './types';
import { PokemonDetailsScreenView } from './PokemonDetailsScreenView';
import { fetchPokemonDetailsRequest } from '@store/actions/pokemonDetailsActions';
import {
  getPokemonDetailsErrorSelector,
  getPokemonDetailsIsLoadingSelector,
  getPokemonDetailsSelector,
} from '@store/selectors/pokemonDetailsSelector';

export const PokemonDetailsScreen: FC<PokemonDetailsScreenProps> = memo((props) => {
  const dispatch = useDispatch();
  const pokemonDetails = useSelector(getPokemonDetailsSelector);
  const isLoading = useSelector(getPokemonDetailsIsLoadingSelector);
  const error = useSelector(getPokemonDetailsErrorSelector);

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchPokemonDetailsRequest(props.route.params.id));
    }, [dispatch]),
  );

  return (
    <PokemonDetailsScreenView pokemonDetails={pokemonDetails} isLoading={isLoading} error={error} />
  );
});
