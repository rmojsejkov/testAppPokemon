import React, { FC } from 'react';
import { Text, TextProps } from 'react-native';
import { styles } from './styles';

export const MainText: FC<TextProps> = (props) => {
  const { style, children } = props;

  return (
    <Text {...props} style={[styles.text, style]}>
      {children}
    </Text>
  );
};
