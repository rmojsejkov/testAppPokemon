import React from "react";
import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";

import { AppNavigator } from "./App/navigation/AppNavigation";
import { store } from "./App/store";

enableScreens();

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

