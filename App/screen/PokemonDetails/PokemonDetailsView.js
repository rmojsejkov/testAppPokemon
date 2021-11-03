import React from 'react';
import {ScrollView} from 'react-native';
import {PokemonDataBlock} from './components/PokemonDataBlock/PokemonDataBlock';
import {PokemonStat} from './components/PokemonStatBlock/PokemonStat';
import {LoadingScreen} from '../../components/LoadingScreen';

export const PokemonDetailsView = props => {
  const {pokemon, isLoading} = props;

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ScrollView>
      <PokemonDataBlock pokemonData={pokemon} />
      <PokemonStat stats={pokemon.stats} />
    </ScrollView>
  );
};
