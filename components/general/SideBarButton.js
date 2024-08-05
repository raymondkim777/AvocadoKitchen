import React from 'react';
import { TouchableOpacity } from 'react-native';

const SideBarButton = ({ callback }) => (
  <TouchableOpacity className='w-8 h-8 bg-buttonBg rounded-lg'
  activeOpacity={0.9} onPress={()=>callback(true)}>

  </TouchableOpacity>
)

export default SideBarButton;