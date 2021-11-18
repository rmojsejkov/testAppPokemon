import { Colors } from '@config/colors';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type TypeItemStyles = {
  box: ViewStyle;
  text: TextStyle;
};

export const styles = StyleSheet.create<TypeItemStyles>({
  box: {
    padding: 5,
    color: Colors.white,
    backgroundColor: Colors.primary,
    borderRadius: 5,
    marginRight: 4,
  },
  text: {
    color: Colors.white,
  },
});
