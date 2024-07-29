import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TitleTextComponent from '../text/TitleTextComponent';

const Buttons = () => (
  <View className='flex-row w-full h-20 items-center justify-between px-6'>
    {/* Likes */}
    <TouchableOpacity className='w-12 h-12 items-center justify-center bg-buttonBg rounded-xl'
      activeOpacity={0.7}>

    </TouchableOpacity>
    {/* Add Meal */}
    <TouchableOpacity className='w-fit h-12 items-center justify-center px-4 bg-buttonBg rounded-xl'
    activeOpacity={0.7}>
      <TitleTextComponent translate={true} size={'text-2xl'} css={'text-itemText text-center'}>
        Add Meal
      </TitleTextComponent>
    </TouchableOpacity>
    {/* Comments */}
    <TouchableOpacity className='w-12 h-12 items-center justify-center bg-buttonBg rounded-xl'
      activeOpacity={0.7}>
        
    </TouchableOpacity>
  </View>
)

export default Buttons