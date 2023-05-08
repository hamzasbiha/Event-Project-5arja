import { View, Text } from 'react-native'
import React from 'react'
import { NativeBaseProvider,Box } from 'native-base'
const Card = () => {
  return (
    <NativeBaseProvider>
    <View>
    <Box alignItems="center">
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}/>
        </Box>
        <Text>zjhekajhel</Text>
    </View>
    </NativeBaseProvider>
  )
}

export default Card