import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { withExpoSnack } from 'nativewind';
import { useNavigation } from "@react-navigation/native";

const TicketScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true

        })

    }, [])

    return (
        <View>
            <Text>TicketScreen</Text>
        </View>
    )
}

export default TicketScreen