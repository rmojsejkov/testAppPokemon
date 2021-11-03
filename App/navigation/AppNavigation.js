import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PokemonNavigator} from './PokemonNavigator';

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <PokemonNavigator />
    </NavigationContainer>
  );
};
