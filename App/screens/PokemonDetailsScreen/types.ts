import { POKEMON_NAVIGATION_ROUTE, PokemonParamList } from '@navigation/types';
import { StackScreenProps } from '@react-navigation/stack';
import { RootState } from '@store/rootReducer';

export type PokemonDetailsScreenViewProps = {
  pokemonDetails: RootState['pokemonDetailsState']['pokemonDetails'];
  isLoading: RootState['pokemonDetailsState']['isLoadingPokemonDetails'];
  error: RootState['pokemonDetailsState']['errorPokemonDetails'];
};

export type PokemonDetailsScreenProps = StackScreenProps<
  PokemonParamList,
  POKEMON_NAVIGATION_ROUTE.POKEMON_DETAILS
>;
export type PokemonDetailsNav = PokemonDetailsScreenProps['navigation'];
