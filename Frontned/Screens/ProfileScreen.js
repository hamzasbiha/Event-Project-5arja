import { Pressable, View, Text } from "react-native";
import { StyledComponent, styled } from "nativewind";
import React, { useLayoutEffect } from 'react'
import { withExpoSnack } from 'nativewind';
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true

    })

  }, [])
  const StyledText = styled(Text)
  return (

    <StyledComponent component={Text} tw="font-bold">
      Hello world
    </StyledComponent>
    // <StyledText tw="font-bold">Hello world.</StyledText>

  )
}

export default withExpoSnack(ProfileScreen)