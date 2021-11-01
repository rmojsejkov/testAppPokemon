import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";
import { LoadingScreen } from "../../components/LoadingScreen";
import PokemonBlockItem from "../../components/PokemonBlockItem";

export const PokemonView = (navigation, ...props) => {
  const {
    error,
    isLoading,
    loadPokemons,
    defaultPokemons,
  } = props;


  console.log(loadPokemons);
  if (error) {
    return (
      <View style={{ ...styles.screen, justifyContent: "center", alignItems: "center" }}>
        <Text>{error}</Text>
        <View>
          <Button title="Try again" color={Colors.black} onPress={() => loadPokemons()} />
        </View>
      </View>
    );
  }

  if (isLoading) {
    return (
      <LoadingScreen />
    );
  }

  console.log(loadPokemons + " pokemon");
  console.log("dasdas");
  return (
    <>
      <Text>adsas</Text>
      <FlatList
        data={defaultPokemons}
        keyExtractor={item => item.id + ""}
        numColumns={1}
        renderItem={itemData => <PokemonBlockItem
          pokemon={itemData.item}
          onSelect={() => {
          }}
        />
        }
        refreshing={false}
        onRefresh={() => loadPokemons}
      />
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  buttonSearch: {
    bottom: "15%",
    right: "3%",
    position: "absolute",
  },
  buttonAdd: {
    bottom: "6%",
    position: "absolute",
    right: "3%",
  },
});
