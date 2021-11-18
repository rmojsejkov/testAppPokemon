import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PokemonDetailsScreen, PokemonListScreen } from '@screens';
import { POKEMON_NAVIGATION_ROUTE, PokemonParamList } from '@navigation/types';
import { pokemonDetailsStackOptions } from '@screens/PokemonDetailsScreen/options';
import { pokemonListStackOptions } from '@screens/PokemonListScreen/options';

const PokemonStackNavigator = createStackNavigator<PokemonParamList>();

export const PokemonNavigator = () => {
  return (
    <PokemonStackNavigator.Navigator>
      <PokemonStackNavigator.Screen
        name={POKEMON_NAVIGATION_ROUTE.POKEMON_LIST}
        component={PokemonListScreen}
        options={pokemonListStackOptions}
      />
      <PokemonStackNavigator.Screen
        name={POKEMON_NAVIGATION_ROUTE.POKEMON_DETAILS}
        component={PokemonDetailsScreen}
        options={pokemonDetailsStackOptions}
      />
    </PokemonStackNavigator.Navigator>
  );
};
