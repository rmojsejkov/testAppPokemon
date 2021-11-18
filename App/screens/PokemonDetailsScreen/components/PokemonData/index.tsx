import { Field } from '@components/Field';

import { MainText } from '@components/MainText';
import { AbilityItem } from '@screens/PokemonDetailsScreen/components/AbilityItem';
import { TypeItem } from '@screens/PokemonDetailsScreen/components/TypeItem';
import React, { FC } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { PokemonDataProps } from './types';

export const PokemonData: FC<PokemonDataProps> = (props) => {
  const { pokemonData } = props;

  return (
    <View style={styles.mainContainer}>
      <MainText style={styles.titleText}>Pokédex data</MainText>
      <View>
        <Field>
          <MainText style={styles.secondaryText}>National №</MainText>
          <MainText style={styles.mainText}>{pokemonData.national}</MainText>
        </Field>
        <Field>
          <MainText style={styles.secondaryText}>Type</MainText>
          <View style={styles.typesContainer}>
            {pokemonData.types.map((type) => (
              <TypeItem key={type} name={type} />
            ))}
          </View>
        </Field>
        <Field>
          <MainText style={styles.secondaryText}>Height</MainText>
          <MainText style={styles.mainText}>{pokemonData.height / 10} m</MainText>
        </Field>
        <Field>
          <MainText style={styles.secondaryText}>Weight</MainText>
          <MainText style={styles.mainText}>{pokemonData.weight / 10} kg</MainText>
        </Field>
        <Field>
          <MainText style={styles.secondaryText}>Abilities</MainText>
          <View>
            {pokemonData.abilities.map((ability) => (
              <AbilityItem key={ability.name} ability={ability} />
            ))}
          </View>
        </Field>
      </View>
    </View>
  );
};
