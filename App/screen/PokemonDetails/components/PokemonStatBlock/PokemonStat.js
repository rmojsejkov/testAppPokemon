import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import { PokemonStatBlock } from "./components/PokemonStatBlock";
import { ProgressBar } from 'react-native-paper';

export const PokemonStat = props => {
  const {stats} = props;

  return (
    <View style={styles.statContainer}>
      <Text style={styles.titleText}>Base stats</Text>
      <View>
        <PokemonStatBlock stats={stats}/>
        <View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
  },
  itemContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingVertical: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 100,
    borderColor: Colors.darker,
  },
  text: {
    color: Colors.black,
  },
  nameText: {
    color: Colors.black,
  },
});
