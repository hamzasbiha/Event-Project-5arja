import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { withExpoSnack } from 'nativewind';
import { useNavigation } from "@react-navigation/native";
const SingupUser = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true

    })

  }, [])
  return (
    <View>
      <Text>SingupUser</Text>
    </View>
  )
}

export default withExpoSnack(SingupUser)