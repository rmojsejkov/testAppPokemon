import React, { FC } from 'react';
import { Image, ScrollView, View } from 'react-native';

import { LoadingScreen } from '@components/LoadingScreen';
import { styles } from './styles';
import { PokemonDetailsScreenViewProps } from './types';
import { EvolutionBox } from './components/EvolutionBox';
import { PokemonData } from './components/PokemonData';
import { StatsBox } from './components/StatsBox';

export const PokemonDetailsScreenView: FC<PokemonDetailsScreenViewProps> = (props) => {
  const { pokemonDetails, isLoading } = props;

  if (isLoading || !pokemonDetails) {
    return <LoadingScreen />;
  }

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image style={styles.pokemonAvatar} source={{ uri: pokemonDetails.imageUrl }} />
      </View>
      <PokemonData pokemonData={pokemonDetails.data} />
      <StatsBox stats={pokemonDetails.stats} />
      <EvolutionBox />
    </ScrollView>
  );
};
