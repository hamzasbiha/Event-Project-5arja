import { Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import Render from '../components/Render';
import { ScrollView } from 'react-native-gesture-handler';
import Feautred from '../components/Feautred'

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons name="notifications" size={24} color="white" style={{ marginRight: 20 }} />

      )


    })

  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Header />
      <Render />
      <Feautred />
    </View>
  )
}

export default HomeScreen