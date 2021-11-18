import { MainText } from '@components/MainText';
import { ProgressBar } from '@components/ProgressBar';
import React, { FC } from 'react';
import { View } from 'react-native';
import { StatsItemProps } from './types';
import { styles } from './styles';

export const StatItem: FC<StatsItemProps> = (props) => {
  const { stat } = props;

  return (
    <View style={styles.statItemField}>
      <View style={styles.statItemName}>
        <MainText style={styles.nameText}>{stat.name}</MainText>
      </View>
      <View style={styles.statItemValue}>
        <MainText>{stat.value}</MainText>
      </View>
      <View style={styles.statItemProgress}>
        <ProgressBar value={stat.value} />
      </View>
    </View>
  );
};
