import React from 'react';
import Modal from 'react-native-modal';
import { View } from 'react-native';
import HomePage from '../pages/HomePage';
import Browse from '../pages/Browse';
import AddMealPage from '../pages/AddMealPage';
import UserInfoPage from '../pages/UserInfoPage';
import ProfilePage from '../pages/ProfilePage';
import Tutorial from '../pages/Tutorial';

const HomeBarPopup = ({ index, setShowSideBar }) => {
  return (
      <View className='flex-1'>
      {index === 0 ? (
          <HomePage setShowSideBar={setShowSideBar}/>
      ) : index === 1 ? (
          <Browse setShowSideBar={setShowSideBar}/>
      ) : index === 2? (
          <AddMealPage setShowSideBar={setShowSideBar}/>
      ) : index === 3 ? (
          <UserInfoPage setShowSideBar={setShowSideBar}/>
      ) : index === 4 ? (
          <ProfilePage setShowSideBar={setShowSideBar}/>
      ) : index === 5 ? (
         <Tutorial setShowSideBar={setShowSideBar}/>
      ) : null}
          </View>
  );
};

export default HomeBarPopup;
