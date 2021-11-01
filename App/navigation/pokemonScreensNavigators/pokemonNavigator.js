import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { defaultStackNavOptions } from "../navOptions";
import { pokemonScreenContainer } from "../../screen/pokemon";

const PokemonStackNavigator = createStackNavigator();

export const PokemonNavigator = () => {
  return (
    <PokemonStackNavigator.Navigator screenOptions={defaultStackNavOptions}>
      <PokemonStackNavigator.Screen
        name="PokemonStack"
        component={pokemonScreenContainer}
        options={pokemonScreenContainer}
      />
    </PokemonStackNavigator.Navigator>
  );
};
