import React, { useState, useTransition, createContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CommonActions } from '@react-navigation/native';
import { Text, View, Dimensions, SafeAreaView, Image,ScrollView,  TextInput, TouchableOpacity, StyleSheet, Platform, FlatList } from 'react-native';
import 'intl-pluralrules';
import '../../text/i18n'
import AddMealPage from '../main/AddMealPage';
import AddMealPage2 from '../additional/AddMealPage2';
import AddIngredient from '../additional/AddIngredient';
import AddProcedure from '../additional/AddProcedure';

const MealPageStack = createStackNavigator();

export const MealContext = createContext();
const MealContextValue = { };

const AddMealControl = ({ navigation }) => {

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