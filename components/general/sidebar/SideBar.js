import React, { useState } from 'react';
import SideBarModal from './SideBarModal';
import SideBarView from './SideBarView';

const SideBar = ({ 
  wideScreen, username, 
  showSideBar, setShowSideBar,
  pages, buttonCSS, textCSS, 
  updatePage, updateStack, pageIndex,
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
    updateStack={updateStack}
    pageIndex={pageIndex}
    />
)

export default SideBar