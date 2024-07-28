import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const BackButton = ({}) => (
  <TouchableOpacity className='w-20 h-9 items-center justify-center bg-buttonBg rounded-lg'
  activeOpacity={0.7}>
    <Text className='font-inconsolataBold text-itemText text-xl'>Back</Text>
  </TouchableOpacity>
)

export default BackButton