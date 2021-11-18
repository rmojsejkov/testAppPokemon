import { isAndroidVersion21Upper } from '@utils';
import React, { FC } from 'react';
import { TouchableNativeFeedback, TouchableOpacity, TouchableOpacityProps } from 'react-native';

export const TouchableComponent: FC<TouchableOpacityProps> = (props) => {
  if (isAndroidVersion21Upper()) {
    return <TouchableNativeFeedback {...props}>{props.children}</TouchableNativeFeedback>;
  }
  return <TouchableOpacity {...props}>{props.children}</TouchableOpacity>;
};
