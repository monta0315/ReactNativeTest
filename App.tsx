import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import Style from "./src/Style";

const App: React.FC = () => {
  return (
    <View style={Style.container}>
      <Text>test</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
