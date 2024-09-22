import React, { useState, useContext, } from 'react';
import { SideBarContext } from '../../pages/control/HomeControl';
import { View, TouchableWithoutFeedback, TouchableHighlight, Image, Alert, } from 'react-native';
import Modal from 'react-native-modal';
import TitleTextComponent from '../../text/TitleTextComponent';
import ItemTextInputComponent from '../../text/ItemTextInputComponent';
import { use } from 'i18next';

const AddImageModal = ({  
  showImageModal, setShowImageModal, 
  handleCameraPress, handleSelectPress,
}) => {
  const { wideScreen, contentWidth } = useContext(SideBarContext);

  const [runFunctionIndex, setRunFunctionIndex] = useState(0);
  
  const handleCloseModal = () => {
    setShowImageModal(false);
  }

  const handleNothingPress = () => {
    setRunFunctionIndex(0);
    handleCloseModal();
  }

  const handleCameraButtonPress = () => {
    setRunFunctionIndex(1);
    handleCloseModal();
  }

  const handleSelectButtonPress = () => {
    setRunFunctionIndex(2);
    handleCloseModal();
  }

  const runFunction = () => {
    if (runFunctionIndex == 0) {
        null;
    } else if (runFunctionIndex == 1) {
        handleCameraPress();
    } else {
        handleSelectPress();
    }
  }

  return(
    <Modal 
    style={{width: contentWidth}}
    className={`h-full ${wideScreen ? 'm-0 ml-64' : 'm-0'} p-4 items-center justify-end`}
    isVisible={showImageModal}
    onModalHide={()=>runFunction()}
    onBackButtonPress={handleNothingPress}
    customBackdrop={
      <TouchableWithoutFeedback className='h-full' onPress={handleNothingPress}>
        <View style={{ width: contentWidth }} className={`h-full ${wideScreen ? 'ml-64' : 'm-0'} bg-black`} />
      </TouchableWithoutFeedback>
    }
    backdropOpacity={0.5}
    animationIn={'slideInUp'}
    animationInTiming={300}
    animationOut={'slideOutDown'}
    animationOutTiming={450}
    >
      <View className='flex-row shrink w-full h-16 p-1 items-center justify-center space-x-1 bg-itemBgLight rounded-xl'>
        <TouchableHighlight className={`shrink w-full h-full rounded-lg`}
        activeOpacity={0.9} onPress={handleCameraButtonPress}>
        <View className={`w-full h-full items-center justify-center bg-itemBgDark rounded-lg`}>
            <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemText'}>
            Take Photo
            </TitleTextComponent>
        </View>
        </TouchableHighlight>
        <TouchableHighlight className={`shrink w-full h-full rounded-lg`}
        activeOpacity={0.9} onPress={handleSelectButtonPress}>
        <View className={`w-full h-full items-center justify-center bg-itemBgDark rounded-lg`}>
            <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemText'}>
            Select Photo
            </TitleTextComponent>
        </View>
        </TouchableHighlight>
    </View>
    </Modal>
  )
}

export default AddImageModal
