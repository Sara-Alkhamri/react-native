import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const EditImage = ({ navigation }) => (
  <ScreenContainer>
    <Text>Upload Your Image</Text>
    <Button title="Upload" onPress={() => navigation.push("Home")} />
  </ScreenContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: 50
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: "flex-start",
    color: "#e9967a"
  },
  updatButton: {
    // backgroundColor: "black",
    // borderWidth: 0.9
    color: "black"
  },
  Image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    margin: 30
  },
  textInput: {
    borderWidth: 0.3,
    margin: 10,
    padding: 10,
    borderColor: "black"
  }
});
