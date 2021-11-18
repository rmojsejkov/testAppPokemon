import { Colors } from '@config/colors';
import { StyleSheet, ViewStyle } from 'react-native';

type ProgressBarStyles = {
  lowProgress: ViewStyle;
  mediumProgress: ViewStyle;
  fullProgress: ViewStyle;
};

const DEFAULT_PROGRESS_STYLES = {
  borderRadius: 5,
  width: '100%',
  height: '100%',
};

export const styles = StyleSheet.create<ProgressBarStyles>({
  lowProgress: {
    ...DEFAULT_PROGRESS_STYLES,
    backgroundColor: Colors.red,
  },
  mediumProgress: {
    ...DEFAULT_PROGRESS_STYLES,
    backgroundColor: Colors.orange,
  },
  fullProgress: {
    ...DEFAULT_PROGRESS_STYLES,
    backgroundColor: Colors.green,
  },
});
