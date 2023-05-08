import { View, Text } from 'react-native'
import React from 'react'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
const singupUserPlaner = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true

    })

  }, [])
  return (
    <View>
      <Text>singupUserPlaner</Text>
    </View>
  )
}

export default withExpoSnack(singupUserPlaner)