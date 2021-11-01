import React from "react";
import { Platform, TouchableNativeFeedback, TouchableOpacity } from "react-native";

export const TouchableComponent = ({ children, ...props }) => {
  const TouchableCmp = Platform.OS === "android" && Platform.Version >= 21 ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <TouchableCmp {...props}>
      {children}
    </TouchableCmp>
  );
};
