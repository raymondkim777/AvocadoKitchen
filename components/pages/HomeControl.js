import React, {useState, useTransition, createContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CommonActions } from '@react-navigation/native';
import { Text, View, Dimensions, SafeAreaView, Image,ScrollView,  TextInput, TouchableOpacity, StyleSheet, Platform, FlatList } from 'react-native';
import 'intl-pluralrules';
import '../text/i18n'
import HomePage from './HomePage';
import MyMeals from './MyMeals';
import MyCart from './MyCart';
import Browse from './Browse';
import RecipePage from './RecipePage';
import AddMealPage from './AddMealPage';
import AddMealPage2 from './AddMealPage2';
import ProfilePage from './ProfilePage';
import UserInfoPage from './UserInfoPage';
import Tutorial from './Tutorial';
import SideBar from '../general/SideBar';

const { width, height } = Dimensions.get('window');
const PageStack = createStackNavigator();
export const SideBarContext = createContext();

const HomeControl = ({ navigation }) => {
  /* SideBar Context */
  const [showSideBar, setShowSideBar] = useState(false);
  const [sideBarHidden, setSideBarHidden] = useState(false);
  const pageID = [
    'HomePage', 
    'MyMeals',
    'MyCart',
    'Browse',
    'AddMealPage',
    'UserInfoPage',
    'ProfilePage',
    'Tutorial',
  ];
  const pages = [
    'Home', 
    'My Meals',
    'My Cart',
    'Recipe Search', 
    'Add a Meal', 
    'Info', 
    'Profile', 
    'Tutorial',
  ];
  const [pageIndex, setPageIndex] = useState(0);
  const [buttonCSS, setButtonCSS] = useState(
    new Array(pageIndex).fill('bg-itemBgLight').concat(
      ['bg-itemText'].concat(
        new Array(pages.length - pageIndex - 1).fill('bg-itemBgLight')
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
  const updateSideBar = (index) => {
    setPageIndex(index);
    setShowSideBar(false);

    const new_button = new Array(pages.length).fill('bg-itemBgLight');
    new_button[index] = 'bg-itemText';
    setButtonCSS(new_button);

    const new_text = new Array(pages.length).fill('text-itemText');
    new_text[index] = 'text-itemBgLight';
    setTextCSS(new_text);
  }
  const updateStack = (index) => {
    navigation.dispatch(
      CommonActions.navigate(pageID[index])
    );
  }
  {/*
    forceUpdateStack is for Modal Sidebar delay; 
    SideBarPage callback only runs updateSideBar, 
    Modal onModalHide runs updateStack.
  */}
  const updatePage = (index, forceUpdateStack = true) => { 
    updateSideBar(index);
    if (wideScreen || forceUpdateStack) {
      updateStack(index);
    } 
  }
  
  /* HomeControl */
  const [username, setUsername] = useState('Username');
  
  const wideScreen = Platform.OS === 'ios' ? (height / width) < 1.6: (height / width) < 1.4;
  const Container = wideScreen ? View : SafeAreaView;

  const [contentWidth, setContentwWidth] = useState(Dimensions.get('window').width);
  const onLayoutContent = (event) => {
    const { width } = event.nativeEvent.layout;
    setContentwWidth(width);
  };

  const SideBarContextValue = { wideScreen, setShowSideBar, updatePage, contentWidth, onLayoutContent };
  return (
    <Container className='flex flex-row w-full h-full justify-center items-center bg-screenBg'>
      {/* SideBar */}
      <SideBar 
      PageStack={PageStack}
      wideScreen={wideScreen}
      username={username}
      showSideBar={showSideBar}
      setShowSideBar={setShowSideBar}
      pages={pages}
      buttonCSS={buttonCSS}
      textCSS={textCSS} 
      updatePage={updatePage}
      updateStack={updateStack}
      pageIndex={pageIndex}
      />
      <SideBarContext.Provider value={SideBarContextValue}>
        <PageStack.Navigator 
          initialRouteName="HomePage"
          screenOptions={{ headerShown: false }}
        >
          <PageStack.Screen name="HomePage" component={HomePage}/>
          <PageStack.Screen name="MyMeals" component={MyMeals} />
          <PageStack.Screen name="MyCart" component={MyCart} />
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