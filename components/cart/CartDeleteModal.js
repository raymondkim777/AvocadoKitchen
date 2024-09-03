import React, { useState, useContext, } from 'react';
import { SideBarContext } from '../pages/HomeControl';
import { View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Modal from 'react-native-modal';
import TitleTextComponent from '../text/TitleTextComponent';

const CartDeleteModal = ({ 
  viewWidth,
  showDeleteCheck, setShowDeleteCheck, 
  handleDeleteItem, handleCloseModal,
}) => {
  const {wideScreen, setShowSideBar, updatePage} = useContext(SideBarContext);

  const handleCancel = () => {
    setShowDeleteCheck(false);
  }
  const handleLeave = () => {
    setShowDeleteCheck(false);
    handleDeleteItem();
    handleCloseModal(false);
  }

  return(
    <Modal
    style={{width: viewWidth}}
    className={`w-full h-full ${wideScreen ? 'ml-64' : 'm-0'} items-center justify-center`}
    isVisible={showDeleteCheck}
    animationInTiming={300}
    animationOutTiming={600}
    customBackdrop={
      <TouchableWithoutFeedback className='h-full' onPress={() => setShowDeleteCheck(false)}>
        <View style={{ width: viewWidth }} className={`h-full ${wideScreen ? 'ml-64' : 'm-0'} bg-black`} />
      </TouchableWithoutFeedback>
    }
    >
      <View className='w-80 h-fit items-center justify-center p-4 bg-itemBgLight rounded-xl'>
        <View className='flex-col w-fit h-fit items-center justify-center'>
          <TitleTextComponent translate={true} size={'text-2xl'} css={'text-itemText text-center'}>
            EditDeleteCheckTitle
          </TitleTextComponent>
          <TitleTextComponent translate={true} size={'text-base'} css={'mt-2 text-itemText text-center'}>
            EditDeleteCheckMessage
          </TitleTextComponent>
          <View className='flex-row w-full h-fit mt-4 items-center justify-center'>
            <TouchableOpacity className='shrink w-full h-12 mr-2 items-center justify-center bg-buttonBg border-2 border-itemText rounded-xl'
              activeOpacity={0.7} onPress={handleCancel}>
                <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemText text-center'}>
                  Cancel
                </TitleTextComponent>
            </TouchableOpacity>
            <TouchableOpacity className='shrink w-full h-12 mr-2 items-center justify-center bg-itemText border-2 border-itemText rounded-xl'
              activeOpacity={0.7} onPress={handleLeave}>
                <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemBgLight text-center'}>
                  Delete
                </TitleTextComponent>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default CartDeleteModal
