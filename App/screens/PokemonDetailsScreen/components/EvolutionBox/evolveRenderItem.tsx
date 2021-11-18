import { PokemonListItem } from '@root/types/pokemons';
import { EvolveItem } from './EvolveItem';
import React from 'react';
import { FlatListProps, ListRenderItem } from 'react-native';

export const evolveItemKeyExtractor: FlatListProps<PokemonListItem>['keyExtractor'] = (item) =>
  item.id + item.name;

export const evolveRenderItem: ListRenderItem<PokemonListItem> = ({ item }) => {
  return <EvolveItem evolveItem={item} />;
};
