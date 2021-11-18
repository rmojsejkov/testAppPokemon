import { RootState } from '@store/rootReducer';

export type EvolutionBoxViewProps = {
  evolutionChain: RootState['pokemonDetailsState']['evolutionChain'];
  isLoading: RootState['pokemonDetailsState']['isLoadingEvolutionChain'];
  error: RootState['pokemonDetailsState']['errorEvolutionChain'];
};

export type EvolveItemProps = {
  evolveItem: RootState['pokemonDetailsState']['evolutionChain'][0];
};
