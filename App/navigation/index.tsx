import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PokemonNavigator } from '@navigation/PokemonNavigator';
import 'react-native-gesture-handler';

//TODO: Delete native stack navigation from package dependencies
export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <PokemonNavigator />
    </NavigationContainer>
  );
};
