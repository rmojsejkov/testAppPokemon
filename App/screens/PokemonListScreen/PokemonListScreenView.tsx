import { LoadingScreen } from '@components/LoadingScreen';
import React, { FC } from 'react';
import { FlatList } from 'react-native';
import {
  pokemonItemKeyExtractor,
  pokemonRenderItem,
} from './components/PokemonItem/pokemonRenderItem';
import { styles } from './styles';
import { PokemonListScreenViewProps } from './types';

export const PokemonListScreenView: FC<PokemonListScreenViewProps> = (props) => {
  const { pokemonList, isLoading, loadPokemonList, scrollEndPokemons } = props;

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <FlatList
      style={styles.screen}
      columnWrapperStyle={styles.columnWrapperStyle}
      numColumns={2}
      onRefresh={loadPokemonList}
      horizontal={false}
      refreshing={isLoading}
      keyExtractor={pokemonItemKeyExtractor}
      data={pokemonList}
      renderItem={pokemonRenderItem}
      onEndReached={scrollEndPokemons}
      onEndReachedThreshold={0.8}
    />
  );
};
