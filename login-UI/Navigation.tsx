import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Registration from "./screens/Registration";
import Tips from "./screens/Tips";

// Stack
const HomeStack = createStackNavigator();

const HomeStackGroup = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Registration" component={Registration} />
      <HomeStack.Screen name="Login" component={Login} />
      <HomeStack.Screen name="DrawerGroup" component={DrawerGroup} />
    </HomeStack.Navigator>
  );
};

// Drawer
const Drawer = createDrawerNavigator();

const DrawerGroup = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Tips" component={Tips} />
    </Drawer.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <HomeStackGroup />
    </NavigationContainer>
  );
};

export default Navigation;
