import { StyleSheet } from "react-native";
import Colors from "react-native/Libraries/NewAppScreen/components/Colors";

export const styles = StyleSheet.create({
  title: {
    paddingVertical: 20,
  },
  titleText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.black,
  },
  dataContainer: {
    paddingHorizontal: 40,
  },
  dataText: {
    fontSize: 15,
    color: Colors.black,
  },
  abilityContainer: {
    flexDirection: "row",
  },
});
