import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import SrackNavigator from './SrackNavigator';





export default function App() {
  return (
    <>
      < SrackNavigator />

    </>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
