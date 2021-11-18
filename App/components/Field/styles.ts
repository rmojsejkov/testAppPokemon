import { StyleSheet, ViewStyle } from 'react-native';

type FieldStyles = {
  propLine: ViewStyle;
};

export const styles = StyleSheet.create<FieldStyles>({
  propLine: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingLeft: 0,
  },
});
