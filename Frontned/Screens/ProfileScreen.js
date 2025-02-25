import { SafeAreaView, View, Text, Pressable, Image } from 'react-native';
import tailwind from 'twrnc';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function UserProfile() {
  return (
    <SafeAreaView style={tailwind`flex-1 bg-black`}>
      <View style={tailwind`flex-1 items-center justify-center gap-8`}>
        <Image
          source={{ uri: 'https://source.unsplash.com/random' }}
          style={tailwind`w-24 h-24 rounded-full`}
          resizeMode="cover"
        />
        <View style={tailwind`gap-2 items-center`}>
          <Text style={tailwind`text-white text-3xl font-bold`}>Joe Bloggs</Text>
          <Text style={tailwind`text-white text-lg`}>joe@bloggs.com</Text>
        </View>
      </View>
      <View style={tailwind`flex-1 justify-center gap-8`}>
        <Pressable style={tailwind`flex-row items-center gap-2 px-8`}>
          <Ionicons name="settings-outline" size={24} color="#fff" />
          {/* nav to setting */}
          <Text style={tailwind`text-white text-lg`} onPress={console.log('settings')}>Settings</Text>
        </Pressable>
           {/* nav to help */}
        <Pressable style={tailwind`flex-row items-center gap-2 px-8`}>
          <Ionicons name="help-buoy-outline" size={24} color="#fff" />
          <Text style={tailwind`text-white text-lg`}>Help</Text>
        </Pressable>
          {/* nav to logout login or singup */}
        <Pressable style={tailwind`flex-row items-center gap-2 px-8`}>
          <MaterialIcons name="logout" size={24} color="#fff" />
          <Text style={tailwind`text-white text-lg`}>Logout</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}