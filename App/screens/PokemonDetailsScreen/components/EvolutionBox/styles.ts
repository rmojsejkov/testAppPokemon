import { Colors } from '@config/colors';
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

type EvolutionBoxViewStyles = {
  mainContainer: ViewStyle;
  evolveItem: ViewStyle;
  avatarContainer: ViewStyle;
  evolveAvatar: ImageStyle;
  titleText: TextStyle;
  nameText: TextStyle;
  idText: TextStyle;
};

export const styles = StyleSheet.create<EvolutionBoxViewStyles>({
  mainContainer: {
    flex: 1,
    height: 360,
    backgroundColor: Colors.grayStrong,
  },
  evolveItem: {
    paddingHorizontal: 50,
    justifyContent: 'center',
  },
  avatarContainer: {
    padding: 10,
    borderWidth: 6,
    borderRadius: 120,
    backgroundColor: Colors.hintGray,
    borderColor: Colors.white,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  evolveAvatar: {
    height: 200,
    width: 200,
  },
  titleText: {
    fontSize: 24,
    color: Colors.whitesmoke,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    borderBottomColor: Colors.whitesmoke,
    borderBottomWidth: 2,
  },
  nameText: {
    fontSize: 24,
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  idText: {
    color: Colors.lightGray,
  },
});
