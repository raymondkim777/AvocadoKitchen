import React, { useState, } from 'react';
import { View, Image, TouchableOpacity, Modal, } from 'react-native';
import TitleTextComponent from '../text/TitleTextComponent';
import SideBarPage from './SideBarPage';
import SideBarModal from './SideBarModal';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import SideBarView from './SideBarView';

const SideBar = ({ wideScreen, username, showSideBar, setShowSideBar,pages, updatePage, buttonCSS, textCSS}) => {
  return (
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
}

export default SideBar