import { POKEMON_NAVIGATION_ROUTE, PokemonParamList } from '@navigation/types';
import { StackNavigationOptions, StackScreenProps } from '@react-navigation/stack';
import { capitalizeFirstLetter } from '@utils';

export const pokemonDetailsStackOptions = ({
  route,
}: StackScreenProps<
  PokemonParamList,
  POKEMON_NAVIGATION_ROUTE.POKEMON_DETAILS
>): StackNavigationOptions => {
  return {
    headerTitle: capitalizeFirstLetter(route.params.name),
    headerTitleAlign: 'center',
  };
};
