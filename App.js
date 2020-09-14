import { StatusBar } from "expo-status-bar";
import React from "react";
import ProfileScreen from "./screens/ProfileScreen";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.text}>Edit Profile</Text>
        <ProfileScreen />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    position: "absolute",
    top: 150,
    fontSize: 20
  }
});
