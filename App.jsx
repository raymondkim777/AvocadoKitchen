import React, {useState, createContext} from 'react';
import { NativeWindStyleSheet } from "nativewind";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import SignUp2 from './components/pages/SignUp2';
import HomeControl from './components/pages/HomeControl';

const Stack = createStackNavigator();

export default function HomeScreen() {

  NativeWindStyleSheet.setOutput({
    default: "native",
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignUp2" component={SignUp2} />
          <Stack.Screen name="HomeControl" component={HomeControl} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}