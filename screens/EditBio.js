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

export const EditBio = ({ navigation }) => {
  const [bio, setBio] = useState("");
  return (
    <ScreenContainer>
      <Text>What Type of Passenger are you?</Text>
      <TextInput
        label="EditBio"
        placeholder="Tell us About Yourself"
        onChangeText={text => setBio(text)}
      />
      <Button
        title="Update"
        value={bio}
        onPress={() =>
          navigation.navigate("Home", {
            setBio: { bio }
          })
        }
      />
    </ScreenContainer>
  );
};

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
