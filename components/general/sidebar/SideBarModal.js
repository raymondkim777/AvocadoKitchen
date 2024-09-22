import React from 'react';
import Modal from 'react-native-modal';
import SideBarView from './SideBarView';

const SideBarModal = ({ 
  pages, username, 
  updatePage, buttonCSS, textCSS,
  showSideBar, setShowSideBar, setScreenIdx,
  updateStack, pageIndex,
 }) => {
  return (
    <Modal 
    className='w-full h-full m-0'
    isVisible={showSideBar}
    animationIn={'slideInLeft'}
    animationInTiming={300}
    animationOut={'slideOutLeft'}
    animationOutTiming={450}
    onModalHide={()=>updateStack(pageIndex)}
    onSwipeComplete={() => setShowSideBar(false)}
    swipeDirection='left'
    onBackdropPress={() => setShowSideBar(false)}
    onBackButtonPress={() => setShowSideBar(false)}
    >
      <SideBarView
      pages={pages}
      username={username}
      updatePage={updatePage}
      buttonCSS={buttonCSS}
      textCSS={textCSS}
      setScreenIdx={setScreenIdx} />
    </Modal>
  )
 }

export default SideBarModal