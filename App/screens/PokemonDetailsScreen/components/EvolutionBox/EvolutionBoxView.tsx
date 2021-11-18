import { LoadingScreen } from '@components/LoadingScreen';
import { MainText } from '@components/MainText';
import { evolveItemKeyExtractor, evolveRenderItem } from './evolveRenderItem';
import React, { FC } from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './styles';
import { EvolutionBoxViewProps } from './types';

export const EvolutionBoxView: FC<EvolutionBoxViewProps> = (props) => {
  const { evolutionChain, isLoading } = props;
  if (isLoading) {
    return (
      <View style={styles.mainContainer}>
        <LoadingScreen />
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <MainText style={styles.titleText}>Evolution chain</MainText>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={evolveItemKeyExtractor}
        horizontal={true}
        data={evolutionChain}
        renderItem={evolveRenderItem}
      />
    </View>
  );
};
