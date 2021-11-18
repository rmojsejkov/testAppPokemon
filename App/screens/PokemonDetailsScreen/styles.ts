import { Dimensions, ImageStyle, StyleSheet, ViewStyle } from 'react-native';

type PokemonDetailsScreenViewStyles = {
  pokemonAvatar: ImageStyle;
  imageContainer: ViewStyle;
};

export const styles = StyleSheet.create<PokemonDetailsScreenViewStyles>({
  pokemonAvatar: {
    width: Dimensions.get('window').width - 100,
    height: Dimensions.get('window').width - 100,
  },
  imageContainer: {
    alignItems: 'center',
  },
});
