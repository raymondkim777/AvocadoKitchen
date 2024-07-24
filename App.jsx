import React from 'react';
import { NativeWindStyleSheet } from "nativewind";
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Browse from './components/Browse';

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
          <Stack.Screen name="Homepage" component={Browse} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}