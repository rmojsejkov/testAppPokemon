import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';
import { styles } from './styles';

export const Field: FC<ViewProps> = (props) => {
  const { children, style } = props;

  return (
    <View {...props} style={[styles.propLine, style]}>
      {children}
    </View>
  );
};
