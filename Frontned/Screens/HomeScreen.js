import { Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react'

import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true

    })

  }, [])

  return (
    <View>
      <Text style={{ fontStyle: 'italic' }}>
        Hello world
      </Text>
    </View>
  )
}

export default HomeScreen