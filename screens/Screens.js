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

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

//Home function receives screen params
export function Home({ route, navigation }) {
  // const { setName } = route.params;
  // const { setPhone } = route.params;
  // const { setEmail } = route.params;
  // const { setBio } = route.params;
  return (
    <ScreenContainer>
      <Text styles={styles.text}>Edit Profile</Text>
      <TouchableOpacity onPress={() => navigation.push("EditImage")}>
        <Image
          style={styles.Image}
          source={{
            uri: "https://picsum.photos/200/300"
          }}
        />
      </TouchableOpacity>

      <View style={styles.button}>
        <Text onPress={() => navigation.push("EditName")}>
          Name
          {/* Name: {setName.name} */}
        </Text>

        <Text onPress={() => navigation.push("EditPhone")}>
          Phone
          {/* Phone: {setPhone.phone} */}
        </Text>

        <Text onPress={() => navigation.push("EditEmail")}>
          Email
          {/* Email: {setEmail.email} */}
        </Text>

        <Text onPress={() => navigation.push("EditBio")}>
          Bio
          {/* Tell us About Yourself {setBio.bio} */}
        </Text>
      </View>
    </ScreenContainer>
  );
}
