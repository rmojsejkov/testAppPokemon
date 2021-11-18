import { Colors } from '@config/colors';
import { StyleSheet, TextStyle } from 'react-native';

type AbilityItemStyles = {
  abilityText: TextStyle;
  hiddenText: TextStyle;
};

export const styles = StyleSheet.create<AbilityItemStyles>({
  abilityText: {
    color: Colors.primary,
  },
  hiddenText: {
    color: Colors.grayStrong,
  },
});
