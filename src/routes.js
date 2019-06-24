import React from "react";
import { Image } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Feed from "./pages/Feed";
import New from "./pages/New";
import logo from "./assets/logo.png";

export default createAppContainer(
  createStackNavigator(
    {
      Feed,
      New
    },
    {
      initialRouteName: "Feed",
      defaultNavigationOptions: {
        headerTintColor: "#000",
        headerTitle: <Image style={{ marginHorizontal: 20 }} source={logo} />,
        headerBackTitle: null
      },
      mode: "modal"
    }
  )
);
