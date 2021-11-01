import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { PokemonNavigator } from "./pokemonScreensNavigators/pokemonNavigator";

const MainStackNavigator = createStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator>
      <MainStackNavigator.Screen
        name="PokemonMain"
        component={PokemonNavigator}
        options={{
          headerTitle: ''
        }}
      />
    </MainStackNavigator.Navigator>
  );
};
