import React, { useState, } from 'react';
import { View, Image, TouchableOpacity, } from 'react-native';
import Modal from 'react-native-modal';
import TitleTextComponent from '../text/TitleTextComponent';
import SideBarView from './SideBarView';

const SideBarModal = ({ 
  pages, username, 
  updatePage, buttonCSS, textCSS,
  showSideBar, setShowSideBar,
 }) => (
  <Modal 
  className='w-full h-full m-0'
  isVisible={showSideBar}
  animationIn={'slideInLeft'}
  animationOut={'slideOutLeft'}
  onSwipeComplete={() => setShowSideBar(false)}
  swipeDirection='left'
  onBackdropPress={() => setShowSideBar(false)}
  >
    <SideBarView
    pages={pages}
    username={username}
    updatePage={updatePage}
    buttonCSS={buttonCSS}
    textCSS={textCSS} />
  </Modal>
)

export default SideBarModal