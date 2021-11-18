import React from 'react';
import { useSelector } from 'react-redux';

import {
  getEvolutionChainErrorSelector,
  getEvolutionChainIsLoadingSelector,
  getEvolutionChainSelector,
} from '@store/selectors/pokemonDetailsSelector';
import { EvolutionBoxView } from './EvolutionBoxView';

export const EvolutionBox = () => {
  const evolutionChain = useSelector(getEvolutionChainSelector);
  const isLoading = useSelector(getEvolutionChainIsLoadingSelector);
  const error = useSelector(getEvolutionChainErrorSelector);

  return <EvolutionBoxView evolutionChain={evolutionChain} isLoading={isLoading} error={error} />;
};
