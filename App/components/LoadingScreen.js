import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Colors from "../constants/colors";

export const LoadingScreen = () => {
  return (
    <View style={screen}>
      <ActivityIndicator color={Colors.primary} size="large" />
    </View>
  );
};

const { screen } = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
