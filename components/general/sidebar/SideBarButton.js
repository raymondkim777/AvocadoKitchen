import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import RightArrow from '../../../assets/icons/arrowright.svg';

const SideBarButton = ({ callback }) => (
  <TouchableHighlight className='w-8 h-8 rounded-lg'
  activeOpacity={0.9} onPress={()=>callback(true)}>
    <View className='w-full h-full bg-buttonBg rounded-lg items-center justify-center'>
      <RightArrow width={30} height={30} stroke={'#85855B'} strokeWidth={3} />
    </View>
  </TouchableHighlight>
)

export default SideBarButton;