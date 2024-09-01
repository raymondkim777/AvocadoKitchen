import React, { useState, useContext, } from 'react';
import { SideBarContext } from '../pages/HomeControl';
import { View, TouchableWithoutFeedback, TouchableHighlight, Image, } from 'react-native';
import Modal from 'react-native-modal';
import TitleTextComponent from '../text/TitleTextComponent';
import ItemTextComponent from '../text/ItemTextComponent';
import ItemLargeTextComponent from '../text/ItemLargeTextComponent';
import Counter from '../general/Counter';
import SmallButton from '../general/SmallButton';
import ExitButtonLocal from '../general/ExitButtonLocal';
import { Text } from '@rneui/base';

const CartEditModal = ({ 
  item, siteIndex, viewWidth, 
  showEditModal, setShowEditModal, 
  handleUpdateEdit, 
}) => {
  const { wideScreen, } = useContext(SideBarContext);

  const sites = ['Coupang', 'Market Curly'];
  const site = sites[siteIndex];
  let delivery = 'Regular';
  let textColor = 'text-grayText';
  if (item.fastDelivery) {
    textColor = 'text-hyperLink';
    if (site === 'Coupang') {
      delivery = "Rocket";
    } else {
      delivery = "Dawn";
    }
  }
  
  const handleCloseModal = () => {
    setShowEditModal(false);
  }

  const handleChangeLink = () => {
    null;
  }

  const handleDeleteItem = () => {
    null;
  }

  const [autoCount, setAutoCount] = useState(3);
  const [count, setCount] = useState(item.quantity);

  return(
    <Modal 
    style={{width: viewWidth}}
    className={`h-full ${wideScreen ? 'ml-64' : 'm-0'} items-center justify-center`}
    isVisible={showEditModal}
    onModalHide={handleUpdateEdit}
    onBackButtonPress={() => setShowEditModal(false)}
    customBackdrop={
      <TouchableWithoutFeedback className='h-full' onPress={() => setShowEditModal(false)}>
        <View style={{ width: viewWidth }} className={`h-full ${wideScreen ? 'ml-64' : 'm-0'} bg-black`} />
      </TouchableWithoutFeedback>
    }
    >
      <View className='shrink w-[340px] h-52 p-2 pt-1 bg-itemBgLight rounded-xl'>
        {/* Title Row */}
        <View className='flex-row w-full h-8 justify-center'>
          <View className='shrink w-full h-full justify-center'>
            <TitleTextComponent translate={true} size={'text-xl'} css={'shrink w-full text-itemText'} numberOfLines={1}>
              {item.title}
            </TitleTextComponent>
          </View>
          <View className='w-fit h-full mx-2 items-center justify-center'>
            <TouchableHighlight className='w-fit h-6 rounded-full'
            activeOpacity={0.9} onPress={handleChangeLink}>
              <View className='w-fit h-full px-2 items-center justify-center bg-itemBgDark rounded-full'>
                <TitleTextComponent translate={true} size={'text-base'} css={'text-itemText'}>
                  Change Item
                </TitleTextComponent>
              </View>
            </TouchableHighlight>
          </View>

          <ExitButtonLocal callback={handleCloseModal} background={'bg-itemBgLight'} />
        </View>

        {/* Content */}
        <View className='flex-row shrink w-full h-full'>
          <View className='w-28 h-full items-center'>
            <View className='w-fit px-2 h-6 items-center justify-center bg-itemBgDark rounded-full'>
              <TitleTextComponent translate={true} size={'text-base'} css={textColor}>
                {delivery}
              </TitleTextComponent>
            </View>
            <Image className='shrink w-28 mt-1 h-full rounded-md' source={item.image} />
          </View>

          {/* Right Side */}
          <View className='shrink w-full h-full'>
            <View className='w-full h-12 mt-5 items-center justify-center'>
              <TitleTextComponent size={'text-2xl'} css={'w-fit text-itemText'} numberOfLines={1}>
                {item.price * count}원
              </TitleTextComponent>
            </View>

            <View className='flex-row w-full h-10 mt-1 items-center justify-center'>
              <Counter count={count} setCount={setCount} />
              <View className='flex-row w-fit h-full ml-2 items-center'>
                <TitleTextComponent translate={true} size={'text-lg'} css={'w-fit text-greenHighlight'}>
                  Auto
                </TitleTextComponent>
                <TitleTextComponent size={'text-lg'} css={'w-fit mr-2 text-greenHighlight'}>
                  : 
                </TitleTextComponent>
                <TitleTextComponent size={'text-lg'} css={'w-fit text-greenHighlight'}>
                  {autoCount}개
                </TitleTextComponent>
              </View>
            </View>

            <View className='shrink w-full h-full'/>

            <View className='flex-row w-full h-6 items-center justify-end'>
              <TouchableHighlight className='w-fit h-6 rounded-full'
              activeOpacity={0.9} onPress={handleDeleteItem}>
                <View className='w-fit h-full px-2 items-center justify-center bg-itemBgDark rounded-full'>
                  <TitleTextComponent translate={true} size={'text-base'} css={'text-redHighlight'}>
                    Delete
                  </TitleTextComponent>
                </View>
              </TouchableHighlight>
            </View>


          </View>
        </View>
      </View>
    </Modal>
  )
}


export default CartEditModal

