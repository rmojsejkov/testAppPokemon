import { Colors } from '@config/colors';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type StatsBoxStyles = {
  mainContainer: ViewStyle;
  statItemField: ViewStyle;
  statItemName: ViewStyle;
  statItemValue: ViewStyle;
  statItemProgress: ViewStyle;
  titleText: TextStyle;
  nameText: TextStyle;
};

const COLUMN_STYLES = {
  flexGrow: 1,
  paddingVertical: 5,
};

export const styles = StyleSheet.create<StatsBoxStyles>({
  mainContainer: {
    backgroundColor: Colors.white,
    marginVertical: 10,
    borderRadius: 10,
  },
  statItemField: {
    flex: 1,
    flexDirection: 'row',
  },
  statItemName: {
    ...COLUMN_STYLES,
    width: '20%',
    alignItems: 'flex-end',
  },
  statItemValue: {
    ...COLUMN_STYLES,
    width: '10%',
    alignItems: 'center',
  },
  statItemProgress: {
    ...COLUMN_STYLES,
    width: '60%',
    paddingRight: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    borderBottomColor: Colors.whitesmoke,
    borderBottomWidth: 2,
    paddingHorizontal: 5,
  },
  nameText: {
    color: Colors.grayStrong,
  },
});
