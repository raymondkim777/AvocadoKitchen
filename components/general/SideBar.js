import React, { useState } from 'react';
import { CommonActions } from '@react-navigation/native';
import SideBarModal from './SideBarModal';
import SideBarView from './SideBarView';

const SideBar = ({ 
  navigation, 
  wideScreen, username, 
  showSideBar, setShowSideBar,
  pages, buttonCSS, textCSS, updatePage,
 }) => (
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
)

export default SideBar