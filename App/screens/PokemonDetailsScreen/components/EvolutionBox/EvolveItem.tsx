import React, { FC } from 'react';
import { Image, View } from 'react-native';
import { MainText } from '@components/MainText';
import { TouchableComponent } from '@components/UI/TouchableComponent';
import { POKEMON_NAVIGATION_ROUTE } from '@navigation/types';
import { StackActions, useNavigation } from '@react-navigation/native';
import { PokemonDetailsNav } from '@screens/PokemonDetailsScreen/types';
import { capitalizeFirstLetter } from '@utils';
import { addZerosForId } from '@utils/mapUtils';
import { styles } from './styles';
import { EvolveItemProps } from './types';

export const EvolveItem: FC<EvolveItemProps> = (props) => {
  const { evolveItem } = props;
  const navigation = useNavigation<PokemonDetailsNav>();

  const onSelectPokemon = () => {
    navigation.dispatch(
      StackActions.push(POKEMON_NAVIGATION_ROUTE.POKEMON_DETAILS, {
        id: evolveItem.id,
        name: evolveItem.name,
      }),
    );
  };

  return (
    <TouchableComponent onPress={onSelectPokemon}>
      <View style={styles.evolveItem}>
        <View style={styles.avatarContainer}>
          <Image style={styles.evolveAvatar} source={{ uri: evolveItem.imageUrl }} />
        </View>
        <MainText style={styles.nameText}>
          {capitalizeFirstLetter(evolveItem.name)}{' '}
          <MainText style={styles.idText}>#{addZerosForId(evolveItem.id)}</MainText>
        </MainText>
      </View>
    </TouchableComponent>
  );
};
