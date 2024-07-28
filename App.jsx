import React from 'react';
import { NativeWindStyleSheet } from "nativewind";
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Browse from './components/Browse';
import RecipePage from './components/RecipePage';
import ProcedureCardLarge from './components/recipe/ProcedureCardLarge';
import IngredientCardLarge from './components/recipe/IngredientCardLarge';
import AddMealPage from './components/AddMealPage';
import AddMealPage2 from './components/AddMealPage2';
import IngredientsTableRowExpand from './components/recipe/IngredientsTableRowExpand';

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
<<<<<<< HEAD
          <Stack.Screen name="Login" component={AddMealPage2} />
=======
          <Stack.Screen name="Login" component={HomePage} />
>>>>>>> 1be0a16 (language)
          <Stack.Screen name="Homepage" component={Browse} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}