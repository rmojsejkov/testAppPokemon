import { MainText } from '@components/MainText';
import { AbilityProps } from './types';
import { styles } from './styles';
import React, { FC } from 'react';

export const AbilityItem: FC<AbilityProps> = (props) => {
  const { ability } = props;

  if (ability.isHidden) {
    return (
      <MainText style={styles.abilityText}>
        {ability.name} <MainText style={styles.hiddenText}>(hidden)</MainText>
      </MainText>
    );
  }

  return <MainText style={styles.abilityText}>{ability.name}</MainText>;
};
