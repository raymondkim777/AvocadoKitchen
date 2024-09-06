import React, { useState, useTransition, createContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CommonActions } from '@react-navigation/native';
import { Text, View, Dimensions, SafeAreaView, Image,ScrollView,  TextInput, TouchableOpacity, StyleSheet, Platform, FlatList } from 'react-native';
import 'intl-pluralrules';
import '../../text/i18n'
import Browse from '../browse/Browse';
import RecipePage from '../browse/RecipePage';

const BrowsePageStack = createStackNavigator();

export const BrowseContext = createContext();
const BrowseContextValue = { };

const BrowseControl = ({ navigation }) => {

  return(
    <BrowseContext.Provider value={BrowseContextValue}>
      <BrowsePageStack.Navigator 
        initialRouteName="Browse"
        screenOptions={{ headerShown: false }}
        >
          <BrowsePageStack.Screen name="Browse" component={Browse} />
          <BrowsePageStack.Screen name="RecipePage" component={RecipePage} />
          
        </BrowsePageStack.Navigator>   
    </BrowseContext.Provider>
  )
}

export default BrowseControl