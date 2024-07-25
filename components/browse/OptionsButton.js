import React from 'react';
import { TouchableOpacity } from 'react-native';

const OptionsButton = ({callback, showOptions}) => (
  <TouchableOpacity className='w-8 h-8 ml-2 bg-itemBgDark rounded-lg'
  activeOpacity={0.7} onPress={()=>callback(!showOptions)}>

  </TouchableOpacity>
)

export default OptionsButton