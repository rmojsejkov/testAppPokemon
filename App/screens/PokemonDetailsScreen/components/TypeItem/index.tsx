import { MainText } from '@components/MainText';
import { Colors, PokemonTypesColors } from '@config/colors';
import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { TypeItemProps } from './types';
import { styles } from './styles';

export const TypeItem: FC<TypeItemProps> = (props) => {
  const { name } = props;

  const colors = useMemo(
    () => PokemonTypesColors[name.toUpperCase()] || { back: Colors.primary, text: Colors.white },
    [name],
  );

  return (
    <View style={[styles.box, { backgroundColor: colors.back }]}>
      <MainText style={[styles.text, { color: colors.text }]}>{name.toUpperCase()}</MainText>
    </View>
  );
};
