import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Colors } from '@config/colors';
import { styles } from './styles';

export const LoadingScreen = () => {
  return (
    <View style={styles.screen}>
      <ActivityIndicator color={Colors.red} size={'large'} />
    </View>
  );
};
