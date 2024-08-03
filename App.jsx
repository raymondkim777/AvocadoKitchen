import React from 'react';
import { NativeWindStyleSheet } from "nativewind";
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login2 from './components/pages/Login2';
import SignUp2 from './components/pages/SignUp2';
import SignUp2_2 from './components/pages/SignUp2_2';
import HomePage from './components/pages/HomePage';
import Browse from './components/pages/Browse';
import RecipePage from './components/pages/RecipePage';
import IngredientCardLarge from './components/recipe/IngredientCardLarge';
import ProcedureCardLarge from './components/recipe/ProcedureCardLarge';
import AddMealPage from './components/pages/AddMealPage';
import AddMealPage2 from './components/pages/AddMealPage2';
import AddIngredient from './components/pages/AddIngredient';
import AddProcedure from './components/pages/AddProcedure';
import ProfilePage from './components/pages/ProfilePage';
import UserInfoPage from './components/pages/UserInfoPage';

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
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="Browse" component={Browse} />
          <Stack.Screen name="RecipePage" component={RecipePage} />
          <Stack.Screen name="IngredientCardLarge" component={IngredientCardLarge} />
          <Stack.Screen name="ProcedureCardLarge" component={ProcedureCardLarge} />
          <Stack.Screen name="AddMealPage" component={AddMealPage} />
          <Stack.Screen name="AddMealPage2" component={AddMealPage2} />
          <Stack.Screen name="AddIngredient" component={AddIngredient} />
          <Stack.Screen name="AddProcedure" component={AddProcedure} />
          <Stack.Screen name="ProfilePage" component={ProfilePage} />
          <Stack.Screen name="UserInfoPage" component={UserInfoPage} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}