import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import Checkbox from '../companent/CheckBox';
import {
  StyleSheet,
  Switch,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [isHidden, setIsHidden] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = (value) => {
    setRememberMe(value);
  };

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const togglePasswordVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <SafeAreaView style={{
      flex: 2,
      backgroundColor: "white",
      padding: 10,
      alignItems: "center",
    }} >
      <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}>
          <Text
            style={{ color: "#003580", fontSize: 17, fontWeight: "700" }}
          >
            Login
          </Text>
        </View>
        {/*  email view */}
        <View style={{ marginTop: 50 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Email
            </Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="enter your email"
              placeholderTextColor={"black"}
              style={{
                fontSize: email ? 18 : 18,
                borderRadius: 10,
                borderColor: "black",
                borderWidth: 1,
                marginVertical: 10,
                width: 390,
                paddingHorizontal: 10,
                paddingVertical: 5,
                paddingRight: 30,
              }}
            />
          </View>
        </View>
        {/*  password view */}
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
            password
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder="entre your password"
                placeholderTextColor={"black"}
                style={{
                  fontSize: password ? 18 : 18,
                  borderRadius: 10,
                  borderColor: "black",
                  borderWidth: 1,
                  marginVertical: 10,
                  width: 250,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  flex: 1,
                  paddingRight: 30,
                }}
                secureTextEntry={isHidden}
              />
              <TouchableOpacity onPress={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: 10,
                  height: "100%",
                  justifyContent: "center",
                }}>
                <Icon
                  name={isHidden ? "eye-slash" : "eye"}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* forget password text button */}
        <Text
          onPress={() => console.log('forget')}
          style={{
            textAlign: 'right', color: 'red'
          }}>
          forget password ?
        </Text>
        <View>
          <Checkbox label="Remember me" isChecked={rememberMe} onChange={handleRememberMeChange} />

        </View>
        {/* login button */}
        <Pressable
          onPress={() => console.log('login')}
          style={{
            width: 350,
            backgroundColor: "#003580",
            padding: 20,
            borderRadius: 15,
            marginTop: 50,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Text
            style={{

              textAlign: "center",
              color: "white",
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Login
