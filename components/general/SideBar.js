import React, { useState, createContext } from 'react';
import { CommonActions } from '@react-navigation/native';
import SideBarModal from './SideBarModal';
import SideBarView from './SideBarView';

export const SideBarVar = createContext();
const SideBar = ({ 
  navigation, 
  wideScreen, username, setShowSideBar,
  
 }) => {

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
    setShowSideBar(false);

    const new_button = new Array(pages.length).fill('');
    new_button[index] = 'bg-itemText';
    setButtonCSS(new_button);

    const new_text = new Array(pages.length).fill('text-itemText');
    new_text[index] = 'text-itemBgLight';
    setTextCSS(new_text);

    navigation.navigate(pageID[index])
  }

  const SideBarContextValue = {setShowSideBar, updatePage};
    return(
      <SideBarVar.Provider value={SideBarContextValue}>
        {
          wideScreen
          ? <SideBarView
            pages={pages}
            username={username}
            updatePage={updatePage}
            buttonCSS={buttonCSS}
            textCSS={textCSS} 
            />
          : <SideBarModal 
            pages={pages}
            username={username}
            showSideBar={showSideBar}
            setShowSideBar={setShowSideBar}
            updatePage={updatePage}
            buttonCSS={buttonCSS}
            textCSS={textCSS}
            />
        }
      </SideBarVar.Provider>
      
    )
 }

export default SideBar