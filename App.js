import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "./screens/Screens";
import { EditImage } from "./screens/EditImage";
import { EditName } from "./screens/EditName";
import { EditPhone } from "./screens/EditPhone";
import { EditEmail } from "./screens/EditEmail";
import { EditBio } from "./screens/EditBio";

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="EditImage" component={EditImage} />
    <HomeStack.Screen name="EditName" component={EditName} />
    <HomeStack.Screen name="EditPhone" component={EditPhone} />
    <HomeStack.Screen name="EditEmail" component={EditEmail} />
    <HomeStack.Screen name="EditBio" component={EditBio} />
  </HomeStack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home Screen" component={HomeStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
