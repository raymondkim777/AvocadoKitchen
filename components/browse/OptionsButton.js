import React from 'react';
import { TouchableOpacity } from 'react-native';
import List from "../../assets/icons/list.svg";

const OptionsButton = ({callback, showOptions}) => (
  <TouchableOpacity className='w-8 h-8 ml-3 bg-buttonBg rounded-lg items-center justify-center'
  activeOpacity={0.9} onPress={()=>callback(!showOptions)}>
    <List width={25} height={25} stroke={'#85855B'} strokeWidth={3} />
  </TouchableOpacity>
)

export default OptionsButton