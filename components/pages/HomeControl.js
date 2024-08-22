import React, {useState, useTransition, createContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CommonActions } from '@react-navigation/native';
import { Text, View, Dimensions, SafeAreaView, Image,ScrollView,  TextInput, TouchableOpacity, StyleSheet, Platform, FlatList } from 'react-native';
import 'intl-pluralrules';
import '../text/i18n'
import HomePage from './HomePage';
import MyMeals from './MyMeals';
import Browse from './Browse';
import RecipePage from './RecipePage';
import AddMealPage from './AddMealPage';
import AddMealPage2 from './AddMealPage2';
import ProfilePage from './ProfilePage';
import UserInfoPage from './UserInfoPage';
import Tutorial from './Tutorial';
import SideBar from '../general/SideBar';
import PagePopup from '../general/PagePopup';

const { width, height } = Dimensions.get('window');
const PageStack = createStackNavigator();
export const SideBarContext = createContext();

const HomeControl = ({ navigation }) => {
  {/* SideBar Context */}
  const [showSideBar, setShowSideBar] = useState(false);
  const pageID = [
    'HomePage', 
    'MyMeals',
    'Browse',
    'AddMealPage',
    'UserInfoPage',
    'ProfilePage',
    'Tutorial',
  ];
  const pages = [
    'Home', 
    'My Meals',
    'Recipe Search', 
    'Add a Meal', 
    'Info', 
    'Profile', 
    'Tutorial',
  ];
  const [pageIndex, setPageIndex] = useState(0);
  const [buttonCSS, setButtonCSS] = useState(
    new Array(pageIndex).fill('').concat(
      ['bg-itemText'].concat(
        new Array(pages.length - pageIndex - 1).fill('')
      )
    )
  );
  const [textCSS, setTextCSS] = useState(
    new Array(pageIndex).fill('text-itemText').concat(
      ['text-itemBgLight'].concat(
        new Array(pages.length - pageIndex - 1).fill('text-itemText')
      )
    )
  );
  const updatePage = (index) => {
    setPageIndex(index);
    navigation.navigate(pageID[index])
    
   
    setShowSideBar(false);

    const new_button = new Array(pages.length).fill('');
    new_button[index] = 'bg-itemText';
    setButtonCSS(new_button);

    const new_text = new Array(pages.length).fill('text-itemText');
    new_text[index] = 'text-itemBgLight';
    setTextCSS(new_text);


  }
  
  {/* HomeControl */}
  const [username, setUsername] = useState('Username');
  
  const wideScreen = Platform.OS === 'ios' ? (height / width) < 1.6: (height / width) < 1.4;
  const Container = wideScreen ?  View : SafeAreaView;

  const SideBarContextValue = {wideScreen, setShowSideBar, updatePage};
  return (
    <Container className='flex flex-row w-full h-full justify-center items-center bg-screenBg'>
      {/* SideBar */}
      <SideBar 
      navigation={navigation}
      PageStack={PageStack}
      wideScreen={wideScreen}
      username={username}
      showSideBar={showSideBar}
      setShowSideBar={setShowSideBar}
      pages={pages}
      buttonCSS={buttonCSS}
      textCSS={textCSS} 
      updatePage={updatePage}
      />
      <SideBarContext.Provider value={SideBarContextValue}>
        <PageStack.Navigator 
          initialRouteName="HomePage"
          screenOptions={{ headerShown: false, animationEnabled: false }}
         
        >
          <PageStack.Screen name="HomePage" component={HomePage}/>
          <PageStack.Screen name="MyMeals" component={MyMeals} />
          <PageStack.Screen name="Browse" component={Browse} />
          <PageStack.Screen name="AddMealPage" component={AddMealPage} />
          <PageStack.Screen name="AddMealPage2" component={AddMealPage2} />
          <PageStack.Screen name="UserInfoPage" component={UserInfoPage} />
          <PageStack.Screen name="ProfilePage" component={ProfilePage} />
          <PageStack.Screen name="Tutorial" component={Tutorial} />
        </PageStack.Navigator>        
      </SideBarContext.Provider>


      {/*
      <PagePopup 
      navigation={navigation}
      wideScreen={wideScreen}
      index={showScreenIdx} 
      setShowSideBar={setShowSideBar}/>
      */}
        
    </Container>
  );
}

export default HomeControl;