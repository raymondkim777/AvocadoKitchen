import React, { useState, useContext, } from 'react';
import { SideBarContext } from '../pages/HomeControl';
import { View, TouchableHighlight } from 'react-native';
import Modal from 'react-native-modal';
import TitleTextComponent from '../text/TitleTextComponent';
import LargeButton from './LargeButton';

const LeaveAlert = ({ showAlert, setShowAlert}) => {
  const {wideScreen, setShowSideBar, updatePage} = useContext(SideBarContext);

  const handleCancel = () => {
    setShowAlert(false);
  }
  const handleLeave = () => {
    setShowAlert(false);
    updatePage(0, true);
  }

  return(
    <Modal
    className='w-full h-full m-0 items-center justify-center'
    isVisible={showAlert}
    animationInTiming={300}
    animationOutTiming={600}
    onBackdropPress={() => setShowAlert(false)}
    >
      <View className='w-80 h-fit items-center justify-center p-4 bg-itemBgLight rounded-xl'>
        <View className='flex-col w-fit h-fit items-center justify-center'>
          <TitleTextComponent translate={true} size={'text-2xl'} css={'text-itemText text-center'}>
            AlertTitle
          </TitleTextComponent>
          <TitleTextComponent translate={true} size={'text-base'} css={'mt-2 text-itemText text-center'}>
            AlertMessage
          </TitleTextComponent>
          <View className='flex-row w-full h-fit mt-4 items-center justify-center'>
            <TouchableHighlight className='shrink w-full h-12 mr-2 rounded-xl'
            activeOpacity={0.9} onPress={handleCancel}>
              <View className='w-full h-full items-center justify-center bg-buttonBg border-2 border-itemText rounded-xl'>
                <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemText text-center'}>
                  Cancel
                </TitleTextComponent>
              </View>
            </TouchableHighlight>
            <TouchableHighlight className='shrink w-full h-12 mr-2 rounded-xl'
            activeOpacity={0.7} onPress={handleLeave}>
              <View className='w-full h-full items-center justify-center bg-itemText border-2 border-itemText rounded-xl'>
                <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemBgLight text-center'}>
                  Leave
                </TitleTextComponent>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default LeaveAlert
