import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6"; //daqui usar o icon "clock" e "user"
import AntDesign from "@expo/vector-icons/AntDesign"; // daqui usar o icon "calendar"

import Home from "./screens/Home";
import RegisterScreen from "./screens/RegistersScreen";
import Profile from "./screens/Profile";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#050E17",
          borderTopColor: "transparent",
          height: 58,
        },
        tabBarActiveTintColor: "#FFF",
        tabBarItemStyle: {
          paddingBottom: 7,
        },
      }}
    >
      <Tab.Screen
        options={{
          headerTransparent: true,
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="calendar" size={size} color={color} />
          ),
        }}
        name="Registros"
        component={RegisterScreen}
      />
      <Tab.Screen
        options={{
          headerTransparent: true,
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome6 name="clock" size={size} color={color} />
          ),
        }}
        name="Início"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerTransparent: true,
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome6 name="user" size={size} color={color} />
          ),
        }}
        name="Perfil"
        component={Profile}
      />
    </Tab.Navigator>
  );
}
