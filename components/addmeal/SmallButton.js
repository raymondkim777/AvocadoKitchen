import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const SmallButton = ({text, callback}) => (
  <TouchableOpacity className='w-fit h-9 px-3 items-center justify-center bg-buttonBg rounded-lg'
    activeOpacity={0.7} onPress={()=>callback()}>
    <Text className='font-inconsolataBold text-itemText text-xl'>{text}</Text>
  </TouchableOpacity>
)

export default SmallButton