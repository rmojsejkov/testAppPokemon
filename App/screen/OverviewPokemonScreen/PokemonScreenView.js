import React from "react";
import { Button, FlatList, Text, View } from "react-native";
import Colors from "../../constants/colors";
import { LoadingScreen } from "../../components/LoadingScreen";
import { PokemonItem } from "../../components/PokemonItem";
import { styles } from "./styles";

export const PokemonScreenView = props => {
  const { error, isLoading, loadPokemons, defaultPokemons, selectPokemon } =
    props;

  if (error) {
    return (
      <View
        style={styles.screen}>
        <Text>{error}</Text>
        <View>
          <Button
            title="Try again"
            color={Colors.black}
            onPress={() => loadPokemons()}
          />
        </View>
      </View>
    );
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <FlatList
        data={defaultPokemons}
        numColumns={1}
        renderItem={itemData => (
          <PokemonItem pokemon={itemData.item} onSelect={selectPokemon} />
        )}
        refreshing={isLoading}
        onRefresh={() => loadPokemons}
      />
    </>
  );
};


