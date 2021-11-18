import { Id, Name } from '@types';

export enum POKEMON_NAVIGATION_ROUTE {
  POKEMON_LIST = 'PokemonList',
  POKEMON_DETAILS = 'PokemonDetails',
}

export type PokemonParamList = {
  [POKEMON_NAVIGATION_ROUTE.POKEMON_LIST]: undefined;
  [POKEMON_NAVIGATION_ROUTE.POKEMON_DETAILS]: {
    id: Id;
    name: Name;
  };
};
