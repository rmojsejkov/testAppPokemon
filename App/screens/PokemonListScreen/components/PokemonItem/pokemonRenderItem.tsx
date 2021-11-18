import React from 'react';
import { FlatListProps, ListRenderItem } from 'react-native';
import { PokemonListItem } from '@root/types/pokemons';
import { PokemonItem } from './';

export const pokemonItemKeyExtractor: FlatListProps<PokemonListItem>['keyExtractor'] = (
  item,
  index,
) => item.id + item.name + index;

export const pokemonRenderItem: ListRenderItem<PokemonListItem> = ({ item }) => {
  return <PokemonItem pokemon={item} />;
};
