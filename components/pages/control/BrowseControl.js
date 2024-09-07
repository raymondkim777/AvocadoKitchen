import React, { useState, useTransition, createContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'intl-pluralrules';
import '../../text/i18n'
import Browse from '../browse/Browse';
import RecipePage from '../browse/RecipePage';

const BrowsePageStack = createStackNavigator();
export const BrowseContext = createContext();

const BrowseControl = ({ route, navigation }) => {

  const presetRecipeItem = route.params?.presetRecipeItem;
  const originPage = route.params?.originPage;

  const [selectedRecipeItem, setSelectedRecipeItem] = useState(presetRecipeItem != undefined ? presetRecipeItem : null);

  const BrowseContextValue = { 
    originPage, selectedRecipeItem, setSelectedRecipeItem 
  };

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