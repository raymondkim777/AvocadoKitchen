import React from 'react';
import { NativeWindStyleSheet } from "nativewind";
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './components/pages/Login';
import Login2 from './components/pages/Login2';
import SignUp from './components/pages/SignUp';
import SignUp2 from './components/pages/SignUp2';
import HomePage from './components/pages/HomePage';
import Browse from './components/pages/Browse';
import RecipePage from './components/pages/RecipePage';
import IngredientCardLarge from './components/recipe/IngredientCardLarge';
import ProcedureCardLarge from './components/recipe/ProcedureCardLarge';
import AddMealPage from './components/pages/AddMealPage';
import AddMealPage2 from './components/pages/AddMealPage2';
import AddIngredient from './components/addfunction/AddIngredient';
import AddProcedure from './components/addfunction/AddProcedure';

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

          <Stack.Screen name="Login" component={SignUp2} />
          <Stack.Screen name="Homepage" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}