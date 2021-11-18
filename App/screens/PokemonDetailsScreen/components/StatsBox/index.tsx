import { MainText } from '@components/MainText';
import { StatItem } from './StatItem';
import React, { FC } from 'react';
import { View } from 'react-native';
import { StatsBoxProps } from './types';
import { styles } from './styles';

export const StatsBox: FC<StatsBoxProps> = (props) => {
  const { stats } = props;

  return (
    <View style={styles.mainContainer}>
      <MainText style={styles.titleText}>Base stats</MainText>
      {stats.map((statItem) => (
        <StatItem key={statItem.name} stat={statItem} />
      ))}
    </View>
  );
};
