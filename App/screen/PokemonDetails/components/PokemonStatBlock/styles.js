import { StyleSheet } from "react-native";
import Colors from "../../../../constants/colors";

export const styles = StyleSheet.create({
  statText: {
    color: Colors.darker,
    marginRight: 20,
  },
  statValue: {
    color: Colors.black,
    marginRight: 20,
    fontWeight: "bold",
  },
  statBlockContainer: {
    borderRadius: 7,
    marginHorizontal: 10,
  },
  statContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
  },
  itemContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingVertical: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 100,
    borderColor: Colors.darker,
  },
  text: {
    color: Colors.black,
  },
  nameText: {
    color: Colors.black,
  },
});
