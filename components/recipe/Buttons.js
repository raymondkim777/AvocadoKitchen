import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Buttons = () => (
  <View className='flex-row w-full h-20 items-center justify-between px-6'>
    {/* Likes */}
    <TouchableOpacity className='w-12 h-12 items-center justify-center bg-buttonBg rounded-xl'
      activeOpacity={0.7}>

    </TouchableOpacity>
    {/* Add Meal */}
    <TouchableOpacity className='w-36 h-12 items-center justify-center bg-buttonBg rounded-xl'
      activeOpacity={0.7}>
        <Text className='font-inconsolata text-center text-itemText text-2xl'>Add Meal</Text>
    </TouchableOpacity>
    {/* Comments */}
    <TouchableOpacity className='w-12 h-12 items-center justify-center bg-buttonBg rounded-xl'
      activeOpacity={0.7}>
        
    </TouchableOpacity>
  </View>
)

export default Buttons