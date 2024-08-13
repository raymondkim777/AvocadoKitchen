import React, {useState, useTransition, useContext, createContext} from 'react';
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
import ProfilePage from './ProfilePage';
import UserInfoPage from './UserInfoPage';
import Tutorial from './Tutorial';
import SideBar from '../general/SideBar';
import PagePopup from '../general/PagePopup';

const { width, height } = Dimensions.get('window');
const PageStack = createStackNavigator();
export const MyContext = createContext();
const HomeControl = ({ navigation }) => {
  {/* SideBar */}
  const [showSideBar, setShowSideBar] = useState(false);
  
  const [username, setUsername] = useState('Username');
  
  const wideScreen = Platform.OS === 'ios' ? (height / width) < 1.6: (height / width) < 1.4;
  const Container = wideScreen ?  View : SafeAreaView;

  const contextValue = {wideScreen, setShowSideBar};
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
      />
      <MyContext.Provider value={contextValue}>
      <PageStack.Navigator 
        initialRouteName="HomePage"
        screenOptions={{ headerShown: false }}
      >
        <PageStack.Screen name="HomePage">
          {(props) => <HomePage {...props} wideScreen={wideScreen} setShowSideBar={setShowSideBar}/>}
        </PageStack.Screen>
        <PageStack.Screen name="MyMeals" component={MyMeals} />
        <PageStack.Screen name="Browse">
          {(props) => <Browse {...props} wideScreen={wideScreen} setShowSideBar={setShowSideBar}/>}
        </PageStack.Screen>
        <PageStack.Screen name="AddMealPage">
          {(props) => <AddMealPage {...props} wideScreen={wideScreen} setShowSideBar={setShowSideBar}/>}
        </PageStack.Screen>
        <PageStack.Screen name="UserInfoPage">
          {(props) => <UserInfoPage {...props} wideScreen={wideScreen} setShowSideBar={setShowSideBar}/>}
        </PageStack.Screen>
        <PageStack.Screen name="ProfilePage">
          {(props) => <ProfilePage {...props} wideScreen={wideScreen} setShowSideBar={setShowSideBar}/>}
        </PageStack.Screen>
        <PageStack.Screen name="Tutorial">
          {(props) => <Tutorial {...props} wideScreen={wideScreen} setShowSideBar={setShowSideBar}/>}
        </PageStack.Screen>
      </PageStack.Navigator>        
      </MyContext.Provider>


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