import React, { FC, memo } from 'react';
import { Image, View } from 'react-native';
import { TouchableComponent } from '@components/UI/TouchableComponent';
import { POKEMON_NAVIGATION_ROUTE } from '@navigation/types';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { PokemonListScreenNavigation } from '@screens/PokemonListScreen/types';
import { capitalizeFirstLetter } from '@utils';
import { addZerosForId } from '@utils/mapUtils';
import { MainText } from '@components/MainText';
import { PokemonItemProps } from './types';
import { styles } from './styles';

export const PokemonItem: FC<PokemonItemProps> = memo((props) => {
  const { pokemon } = props;
  const navigation = useNavigation<PokemonListScreenNavigation>();

  const onSelectPokemon = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: POKEMON_NAVIGATION_ROUTE.POKEMON_DETAILS,
        params: {
          id: pokemon.id,
          name: pokemon.name,
        },
      }),
    );
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableComponent onPress={onSelectPokemon}>
        <View>
          <Image style={styles.pokemonAvatar} source={{ uri: pokemon.imageUrl }} />
          <MainText style={styles.idText}>#{addZerosForId(pokemon.id)}</MainText>
          <View style={styles.nameBox}>
            <MainText style={styles.nameText}>{capitalizeFirstLetter(pokemon.name)}</MainText>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
});
