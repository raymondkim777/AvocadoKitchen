import React from 'react';
import { TouchableOpacity } from 'react-native';
import RightArrow from '../../assets/icons/arrowright.svg';

const SideBarButton = ({ callback }) => (
  <TouchableOpacity className='w-8 h-8 bg-buttonBg rounded-lg items-center justify-center'
  activeOpacity={0.9} onPress={()=>callback(true)}>
    <RightArrow width={30} height={30} stroke={'#85855B'} strokeWidth={3} />
  </TouchableOpacity>
)

export default SideBarButton;