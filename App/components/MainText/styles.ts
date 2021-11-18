import { Colors } from '@config/colors';
import { StyleSheet, TextStyle } from 'react-native';

type MainTextStyles = {
  text: TextStyle;
};

export const styles = StyleSheet.create<MainTextStyles>({
  text: {
    fontFamily: 'arial',
    color: Colors.black,
  },
});
