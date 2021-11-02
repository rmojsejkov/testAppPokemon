import React, { useCallback, useEffect, useState } from "react";
import { PokemonScreen } from "./PokemonScreen";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "react-native";
import * as pokemonActions from "../../store/actions/pokemonActions/pokemonActions";

export const PokemonScreenContainer = ({ navigation }) => {
  const { defaultPokemons } = useSelector(state => state.pokemon);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const loadPokemons = useCallback(async () => {
    setIsLoading(true);
    try {
      await dispatch(pokemonActions.getDefaultAllPokemons());
    } catch (err) {
      Alert.alert("Error", err.message, [{ message: "Okay" }]);
      setError("Something went wrong during network call");
    }
    setIsLoading(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    loadPokemons();
  }, [loadPokemons]);

  return (
    <PokemonScreen
      defaultPokemons={defaultPokemons}
      loadPokemons={loadPokemons}
      error={error}
      isLoading={isLoading}
      navigation={navigation}
    />
  );
};
