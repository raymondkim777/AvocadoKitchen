import React from 'react';
import { View, TouchableOpacity } from 'react-native';

const EditButton = ({ callback }) => (
  <TouchableOpacity className='w-5 h-10 items-center justify-center'
  activeOpacity={0.7} onPress={()=>callback()}>
    <View className='w-3 h-10 items-center justify-center bg-itemBgDark rounded-full space-y-1'>
      <View className='w-2 h-2 bg-buttonBg rounded-full'/>
      <View className='w-2 h-2 bg-buttonBg rounded-full'/>
      <View className='w-2 h-2 bg-buttonBg rounded-full'/>
    </View>
  </TouchableOpacity>
)

export default EditButton