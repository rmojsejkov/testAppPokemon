import { Colors } from '@config/colors';
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

type PokemonItemStyles = {
  mainContainer: ViewStyle;
  nameText: TextStyle;
  idText: TextStyle;
  pokemonAvatar: ImageStyle;
  nameBox: ViewStyle;
};

export const styles = StyleSheet.create<PokemonItemStyles>({
  mainContainer: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: Colors.white,
    overflow: 'hidden',
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  idText: {
    color: Colors.gray,
    paddingLeft: 20,
  },
  pokemonAvatar: {
    width: 170,
    height: 170,
  },
  nameBox: {
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft: 20,
  },
});
