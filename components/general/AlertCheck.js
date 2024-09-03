import React, { useContext, } from 'react';
import { SideBarContext } from '../pages/HomeControl';
import { View, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import Modal from 'react-native-modal';
import TitleTextComponent from '../text/TitleTextComponent';

const AlertCheck = ({ 
  titleText = 'AlertTitle', 
  messageText = 'AlertMessage',
  cancelText = 'Cancel', 
  mainText = 'Leave',
  showModal, setShowModal,
  handleMainFunction, handleCloseParentModal = null,
}) => {
  const { wideScreen, contentWidth } = useContext(SideBarContext);

  const handleCancelPress = () => {
    setShowModal(false);
  }
  const handleMainButtonPress = () => {
    setShowModal(false);
    handleMainFunction();
    if (handleCloseParentModal != null) 
      handleCloseParentModal(false);
  }

  return(
    <Modal
    style={{width: contentWidth}}
    className={`h-full ${wideScreen ? 'ml-64' : 'm-0'} items-center justify-center`}
    isVisible={showModal}
    animationInTiming={300}
    animationOutTiming={600}
    customBackdrop={
      <TouchableWithoutFeedback className='h-full' onPress={() => setShowModal(false)}>
        <View style={{ width: contentWidth }} className={`h-full ${wideScreen ? 'ml-64' : 'm-0'} bg-black`} />
      </TouchableWithoutFeedback>
    }
    >
      <View className='w-[321px] h-fit items-center justify-center p-4 bg-itemBgLight rounded-xl'>
        <View className='flex-col w-fit h-fit items-center justify-center'>
          <TitleTextComponent translate={true} size={'text-2xl'} css={'text-itemText text-center'}>
            {titleText}
          </TitleTextComponent>
          <TitleTextComponent translate={true} size={'text-base'} css={'mt-2 text-itemText text-center'}>
            {messageText}
          </TitleTextComponent>
          <View className='flex-row w-full h-fit mt-4 items-center justify-center'>
            <TouchableHighlight className='shrink w-full h-12 mr-2 rounded-xl'
            activeOpacity={0.9} onPress={handleCancelPress}>
              <View className='w-full h-full items-center justify-center bg-buttonBg border-2 border-itemText rounded-xl'>
                <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemText text-center'}>
                  {cancelText}
                </TitleTextComponent>
              </View>
            </TouchableHighlight>
            <TouchableHighlight className='shrink w-full h-12 mr-2 rounded-xl'
            activeOpacity={0.7} onPress={handleMainButtonPress}>
              <View className='w-full h-full items-center justify-center bg-itemText border-2 border-itemText rounded-xl'>
                <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemBgLight text-center'}>
                 {mainText}
                </TitleTextComponent>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default AlertCheck
