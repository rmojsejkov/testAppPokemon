import { RootState } from '@store/rootReducer';

export type PokemonItemProps = {
  pokemon: RootState['pokemonListState']['pokemonList'][0];
};
