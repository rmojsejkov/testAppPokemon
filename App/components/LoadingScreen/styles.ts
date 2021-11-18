import { StyleSheet, ViewStyle } from 'react-native';

type LoadingScreenStyles = {
  screen: ViewStyle;
};

export const styles = StyleSheet.create<LoadingScreenStyles>({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
