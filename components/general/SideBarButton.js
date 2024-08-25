import React from 'react';
import { TouchableOpacity } from 'react-native';
import Logo from "../../assets/icons/play.svg";

const SideBarButton = ({ callback }) => (
  <TouchableOpacity className='w-8 h-8 bg-buttonBg rounded-lg'
  activeOpacity={0.9} onPress={()=>callback(true)}>
    <Logo width={30} height={30} fill={'#90BCAF'} stroke={'#85855B'} strokeWidth={1} />
  </TouchableOpacity>
)

export default SideBarButton;