import React from 'react';
import { TouchableOpacity } from 'react-native';

const OptionsButton = ({callback, showOptions}) => (
  <TouchableOpacity className='w-8 h-8 ml-2 bg-buttonBg rounded-lg'
  activeOpacity={0.9} onPress={()=>callback(!showOptions)}>

  </TouchableOpacity>
)

export default OptionsButton