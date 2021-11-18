import { POKEMON_NAVIGATION_ROUTE, PokemonParamList } from '@navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootState } from '@store/rootReducer';

export type PokemonListScreenViewProps = {
  pokemonList: RootState['pokemonListState']['pokemonList'];
  isLoading: RootState['pokemonListState']['isLoading'];
  error: RootState['pokemonListState']['error'];
  loadPokemonList: () => void;
  scrollEndPokemons: () => void;
};

export type PokemonListScreenNavigation = StackNavigationProp<
  PokemonParamList,
  POKEMON_NAVIGATION_ROUTE.POKEMON_LIST
>;
