import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { StyledView } from "nativewind";
import ProfilePicture from "../companent/profileImage";

const ProfileScreen = () => {
  return (
    <View style={styles.bg}>
      <View style={styles.container}>
        <View>
          <ProfilePicture />
        </View>
        <Text style={styles.name}>John Doe</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg:{
    backgroundColor:"#0000",
 
  },
  container: {
    position: "relative",
    flex: 1,
    alignItems: "center",
  },
  name: {
    marginTop: 15,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
