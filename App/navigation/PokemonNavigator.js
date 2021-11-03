import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {defaultStackNavOptions} from './navOptions';
import {OverviewPokemonScreen} from '../screen/OverviewPokemonScreen';
import {ROUTES} from './routes';
import {PokemonDetailsScreen} from '../screen/PokemonDetails';

const PokemonStackNavigator = createStackNavigator();

export const PokemonNavigator = () => {
  return (
    <PokemonStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
      <PokemonStackNavigator.Screen
        name={ROUTES.OVERVIEW_POKEMON_SCREEN}
        component={OverviewPokemonScreen}
      />
      <PokemonStackNavigator.Screen
        name={ROUTES.POKEMON_DETAILS}
        component={PokemonDetailsScreen}
      />
    </PokemonStackNavigator.Navigator>
  );
};
