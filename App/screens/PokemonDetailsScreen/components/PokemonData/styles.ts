import { Colors } from '@config/colors';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type PokemonDataStyles = {
  mainContainer: ViewStyle;
  typesContainer: ViewStyle;
  titleText: TextStyle;
  secondaryText: TextStyle;
  mainText: TextStyle;
};

export const styles = StyleSheet.create<PokemonDataStyles>({
  mainContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  typesContainer: {
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    borderBottomColor: Colors.whitesmoke,
    borderBottomWidth: 2,
    paddingHorizontal: 5,
  },
  secondaryText: {
    color: Colors.grayStrong,
    width: '25%',
    textAlign: 'right',
    marginRight: 8,
  },
  mainText: {
    fontWeight: 'bold',
  },
});
