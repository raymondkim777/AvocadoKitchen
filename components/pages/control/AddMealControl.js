import React, { useState, useTransition, createContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CommonActions } from '@react-navigation/native';
import { Text, View, Dimensions, SafeAreaView, Image,ScrollView,  TextInput, TouchableOpacity, StyleSheet, Platform, FlatList } from 'react-native';
import 'intl-pluralrules';
import '../../text/i18n'
import AddMealPage from '../addmeal/AddMealPage';
import AddMealPage2 from '../addmeal/AddMealPage2';
import AddIngredient from '../addmeal/AddIngredient';
import AddProcedure from '../addmeal/AddProcedure';

const MealPageStack = createStackNavigator();
export const MealContext = createContext();


const AddMealControl = ({ navigation }) => {

  const [recipeItem, setRecipeItem] = useState({
    preset: true,
    title: '', 
    nutrition: {
      cal: 0,
      protein: 0, 
      carb: 0,
    },
    tags: [],
    data: {
      likes: 0,
      comments: 0, 
      downloads: 0,
    },
    image: null,
    ingredients: [],
    procedure: [],
  });
  const [ingredientItem, setIngredientItem] = useState({
    preset: false,
    index: 0,
    name: '',
    amount: null,
    unit: 'g',
    image: null,
    link: '',
  },)
  const [procedureItem, setProcedureItem] = useState({
    preset: false,
    index: 1, 
    description: '',
    image: null,
  });

  const MealContextValue = { 
    recipeItem, setRecipeItem, 
    ingredientItem, setIngredientItem,
    procedureItem, setProcedureItem
  };

  return(
    <MealContext.Provider value={MealContextValue}>
      <MealPageStack.Navigator 
          initialRouteName="AddMealPage"
          screenOptions={{ headerShown: false }}
        >
          <MealPageStack.Screen name="AddMealPage" component={AddMealPage} />
          <MealPageStack.Screen name="AddMealPage2" component={AddMealPage2} />
          <MealPageStack.Screen name="AddIngredient" component={AddIngredient} />
          <MealPageStack.Screen name="AddProcedure" component={AddProcedure} />

        </MealPageStack.Navigator>   
    </MealContext.Provider>
  )
}

export default AddMealControl