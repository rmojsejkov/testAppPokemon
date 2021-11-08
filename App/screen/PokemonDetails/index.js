import React, { useCallback, useEffect, useState } from "react";
import { PokemonDetailsView } from "./PokemonDetailsView";
import { useDispatch, useSelector } from "react-redux";
import { clearPokemonDetails, getPokemonDetails } from "../../store/actions/pokemonActions";
import { Alert } from "react-native";
import { useRoute } from "@react-navigation/native";

export const PokemonDetailsScreen = () => {
  const route = useRoute();
  const { pokemonDetails } = useSelector(state => state.pokemon);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const loadPokemonDetails = useCallback(async () => {
    setIsLoading(true);
    try {
      await dispatch(getPokemonDetails(route.params.pokemonId));
    } catch (err) {
      Alert.alert("Error", err.message, [{ message: "Okay" }]);
    }
    setIsLoading(false);
  }, [dispatch, setIsLoading]);

  useEffect(() => {
    loadPokemonDetails();
    return () => {
      dispatch(clearPokemonDetails());
    };
  }, []);

  return <PokemonDetailsView isLoading={isLoading} pokemon={pokemonDetails} />;
};
