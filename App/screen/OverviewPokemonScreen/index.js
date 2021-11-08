import React, {memo, useCallback, useEffect, useState} from 'react';
import {PokemonScreenView} from './PokemonScreenView';
import {useDispatch, useSelector} from 'react-redux';
import {Alert} from 'react-native';
import {getDefaultAllPokemons} from '../../store/actions/pokemonActions';
import {ROUTES} from '../../navigation/routes';

export const OverviewPokemonScreen = memo(({navigation}) => {
  const {defaultPokemons} = useSelector(state => state.pokemon);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const loadPokemons = useCallback(async () => {
    setIsLoading(true);
    try {
      await dispatch(getDefaultAllPokemons());
    } catch (err) {
      Alert.alert('Error', err.message, [{message: 'Okay'}]);
      setError('Something went wrong during network call');
    }
    setIsLoading(false);
  }, [dispatch, setIsLoading, setError]);

  const selectPokemon = id => {
    navigation.navigate(ROUTES.POKEMON_DETAILS, {pokemonId: id});
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <PokemonScreenView
      defaultPokemons={defaultPokemons}
      loadPokemons={loadPokemons}
      error={error}
      isLoading={isLoading}
      navigation={navigation}
      selectPokemon={selectPokemon}
    />
  );
});
