import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const ProfilePicture = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/prfil.jpg')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    borderRadius: 70,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',

  },
});

export default ProfilePicture;
