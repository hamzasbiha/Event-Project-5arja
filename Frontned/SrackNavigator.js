import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import TicketScreen from './Screens/TicketScreen';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from "@expo/vector-icons";
import tailwind from 'react-native-tailwindcss';
import { Entypo } from "@expo/vector-icons";
import { BlurView } from 'expo-blur';


const SrackNavigator = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();
    function BotttomTabs() {
        return (

            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: 'black',
                        height: 100,
                        borderTopWidth: 1,
                        borderTopColor: 'white',
                    },
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: "Home",
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Entypo name="home" size={24} color="#FFB703" />
                            ) : (
                                <AntDesign name="home" size={24} color="white" />
                            ),
                        tabBarLabelStyle: {
                            fontSize: 11,
                            fontWeight: "600",
                            marginBottom: 10,
                            color: '#FFB703',
                        },
                    }}
                />
                <Tab.Screen
                    name="ticket"
                    component={TicketScreen}
                    options={{
                        tabBarLabel: "ticket",
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Entypo name="ticket" size={24} color="#FFB703" />
                            ) : (
                                <Entypo name="ticket" size={24} color="white" />
                            ),
                        tabBarLabelStyle: {
                            fontSize: 11,
                            fontWeight: "600",
                            marginBottom: 10,
                            color: '#FFB703',
                        },
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: "Profile",
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Ionicons name="person" size={24} color="#FFB703" />

                            ) : (
                                <Ionicons name="person-outline" size={24} color="white" />
                            ),
                        tabBarLabelStyle: {
                            fontSize: 11,
                            fontWeight: "600",
                            marginBottom: 10,
                            color: '#FFB703',
                        },
                    }}
                />

            </Tab.Navigator>
        )

    }



    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="main" component={BotttomTabs} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default SrackNavigator

const styles = StyleSheet.create({})