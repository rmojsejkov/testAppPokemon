import { StyleSheet, ViewStyle } from 'react-native';

type PokemonListScreenViewStyles = {
  screen: ViewStyle;
  columnWrapperStyle: ViewStyle;
};

export const styles = StyleSheet.create<PokemonListScreenViewStyles>({
  screen: {
    flex: 1,
  },
  columnWrapperStyle: {
    justifyContent: 'center',
  },
});
