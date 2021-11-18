import React, { FC } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { ProgressBarProps } from './types';
import { styles } from './styles';

export const ProgressBar: FC<ProgressBarProps> = (props) => {
  const { value } = props;
  let style;
  if (value <= 33) {
    style = styles.lowProgress;
  } else if (value <= 66) {
    style = styles.mediumProgress;
  } else {
    style = styles.fullProgress;
  }
  const styleWidth = StyleSheet.flatten<ViewStyle>({ width: `${value}%` });

  return <View style={[style, styleWidth]} />;
};
