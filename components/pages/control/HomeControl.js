import React, {useState, useTransition, createContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CommonActions } from '@react-navigation/native';
import { View, Dimensions, SafeAreaView, Platform, } from 'react-native';
import 'intl-pluralrules';
import '../../text/i18n'
import HomePage from '../main/HomePage';
import MyMeals from '../main/MyMeals';
import MyCart from '../main/MyCart';
import BrowseControl from './BrowseControl';
import AddMealControl from './AddMealControl';
import ProfilePage from '../main/ProfilePage';
import UserInfoPage from '../main/UserInfoPage';
import Tutorial from '../main/Tutorial';
import SideBar from '../../general/sidebar/SideBar';
import AlertCheck from '../../general/misc/AlertCheck';

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
    'BrowseControl',
    'AddMealControl',
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

  const updateStack = (index, options = {}) => {
    let initialOptions = { screen: index == 3 ? 'Browse' : index == 4 ? 'AddMealPage' : undefined };
    if ('screen' in options) {
      initialOptions.screen = options.screen;
    }
    let navOptions = {...initialOptions, ...options.params};

    navigation.dispatch(
      CommonActions.navigate({
        name: pageID[index], 
        params: navOptions,
      })
    );
  }
  {/*
    forceUpdateStack is for Modal Sidebar delay; 
    SideBarPage callback only runs updateSideBar, 
    Modal onModalHide runs updateStack.

    updatePage format: 
      updatePage(0, true, {
        screen: 'InsertScreenHere',
        params: { key: value },
      });
  */}
  const updatePage = (index, forceUpdateStack = true, options = {}) => { 
    if (!forceUpdateStack) {
      setNextPageIndex(index);
      setForceUpdateStack(forceUpdateStack);
      setPageOptions(options);
      setShowAlert(true);
    } else {
      updatePageExecute(index, forceUpdateStack, options);
    }
  }

  const updatePageExecute = (index, forceUpdateStack = true, options = {}) => {
    updateSideBar(index);
    if (wideScreen || forceUpdateStack) {
      updateStack(index, options);
    } 
  }

  const [showAlert, setShowAlert] = useState(false);
  const [nextPageIndex, setNextPageIndex] = useState(0);
  const [forceUpdateStack, setForceUpdateStack] = useState(true);
  const [pageOptions, setPageOptions] = useState({});
  
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
          <PageStack.Screen name="BrowseControl" component={BrowseControl} />
          <PageStack.Screen name="AddMealControl" component={AddMealControl} />
          <PageStack.Screen name="UserInfoPage" component={UserInfoPage} />
          <PageStack.Screen name="ProfilePage" component={ProfilePage} />
          <PageStack.Screen name="Tutorial" component={Tutorial} />
          
        </PageStack.Navigator>
        <AlertCheck 
        showModal={showAlert} 
        setShowModal={setShowAlert}
        handlePageChange={updatePageExecute}
        nextPageIndex={nextPageIndex} 
        forceUpdateStack={forceUpdateStack} 
        pageOptions={pageOptions}
        />  
      </SideBarContext.Provider>
    </Container>
  );
}

export default HomeControl;