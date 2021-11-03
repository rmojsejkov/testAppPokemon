import React from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/colors';
import {LoadingScreen} from '../../components/LoadingScreen';
import {PokemonItem} from '../../components/PokemonItem';

export const PokemonScreenView = props => {
  const {error, isLoading, loadPokemons, defaultPokemons, selectPokemon} =
    props;

  if (error) {
    return (
      <View
        style={{
          ...styles.screen,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  buttonSearch: {
    bottom: '15%',
    right: '3%',
    position: 'absolute',
  },
  buttonAdd: {
    bottom: '6%',
    position: 'absolute',
    right: '3%',
  },
});
