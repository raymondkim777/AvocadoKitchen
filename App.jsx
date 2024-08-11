import React from 'react';
import { NativeWindStyleSheet } from "nativewind";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login2 from './components/pages/Login2';
import SignUp2 from './components/pages/SignUp2';
import SignUp2_2 from './components/pages/SignUp2_2';
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
          initialRouteName="Login2"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login2" component={Login2} />
          <Stack.Screen name="SignUp2" component={SignUp2} />
          <Stack.Screen name="SignUp2_2" component={SignUp2_2} />
          <Stack.Screen name="HomeControl" component={HomeControl} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}