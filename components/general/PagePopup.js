import React from 'react';
import Modal from 'react-native-modal';
import { View } from 'react-native';
import HomePage from '../pages/HomePage';
import Browse from '../pages/Browse';
import AddMealPage from '../pages/AddMealPage';
import UserInfoPage from '../pages/UserInfoPage';
import ProfilePage from '../pages/ProfilePage';
import Tutorial from '../pages/Tutorial';

const PagePopup = ({ wideScreen, index, setShowSideBar }) => {
  return (
    <View className='flex-1'>
    {index === 0 ? (
        <HomePage wideScreen={wideScreen} setShowSideBar={setShowSideBar}/>
    ) : index === 1 ? (
        <Browse wideScreen={wideScreen} setShowSideBar={setShowSideBar}/>
    ) : index === 2? (
        <AddMealPage wideScreen={wideScreen} setShowSideBar={setShowSideBar}/>
    ) : index === 3 ? (
        <UserInfoPage wideScreen={wideScreen} setShowSideBar={setShowSideBar}/>
    ) : index === 4 ? (
        <ProfilePage wideScreen={wideScreen} setShowSideBar={setShowSideBar}/>
    ) : index === 5 ? (
        <Tutorial wideScreen={wideScreen} setShowSideBar={setShowSideBar}/>
    ) : null}
        </View>
  );
};

export default PagePopup;
