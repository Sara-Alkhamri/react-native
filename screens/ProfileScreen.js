import { StatusBar, useState } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput
} from "react-native";

export default function ProfileScreen() {
  const [text, setText] = React.useState("");
  return (
    <View style={styles.container}>
      <Image
        style={styles.Image}
        source={{
          uri: "https://picsum.photos/200/300"
        }}
      />
      <TouchableOpacity
        onPress={() => console.log("Image Tapped")}
      ></TouchableOpacity>

      <TextInput
        label="Name"
        placeholder="Name"
        value={text}
        onChangeText={text => setText(text)}
      />

      <TextInput label="Phone" placeholder="Phone" keyboardType="number-pad" />

      <TextInput label="Email" placeholder="Email" />

      <TextInput
        label="Tell us About Yourself"
        placeholder="Tell us About Yourself"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  Image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    position: "absolute",
    top: 150
  }
});
