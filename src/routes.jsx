import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./screens/Home";
import RegisterScreen from "./screens/RegistersScreen";
import Profile from "./screens/Profile";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerTransparent: true,
          headerShown: false,
        }}
        name="Registers"
        component={RegisterScreen}
      />
      <Tab.Screen
        options={{
          headerTransparent: true,
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerTransparent: true,
          headerShown: false,
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}
