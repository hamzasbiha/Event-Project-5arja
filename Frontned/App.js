
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SrackNavigator from "./SrackNavigator";

import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import StackNavigator from './SrackNavigator';
import { NativeBaseProvider } from 'native-base';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Seeallticket from './Screens/Seeallticket';
import { createStackNavigator } from '@react-navigation/stack';
import Drawers from './Drawers';


const Stack = createStackNavigator();

export default function App() {
  return (

   
    <> 
      <StackNavigator /> 
      {/* <Drawers /> */}
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
