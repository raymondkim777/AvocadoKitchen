import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import TitleTextComponent from '../text/TitleTextComponent';

const EditButton = ({ showDropDown, openDropDown, closeDropDown }) => (
  <View className='relative z-20 w-fit h-fit'>
    <TouchableOpacity className='w-5 h-10 items-center justify-center'
    activeOpacity={0.7} onPress={openDropDown}>
      <View className='w-3 h-10 items-center justify-center bg-itemBgDark rounded-full space-y-1'>
        <View className='w-2 h-2 bg-buttonBg rounded-full'/>
        <View className='w-2 h-2 bg-buttonBg rounded-full'/>
        <View className='w-2 h-2 bg-buttonBg rounded-full'/>
      </View>
    </TouchableOpacity>
    {
      showDropDown
      ? <View className='absolute z-30 -top-2 -left-24 w-24 h-20'>
          <View className='flex-col w-full h-full items-center justify-center border-2 border-itemText p-0 bg-buttonBg rounded-xl'>
            <TouchableOpacity className={`shrink w-full h-full items-center justify-center`}
            activeOpacity={0.7}>
              <TitleTextComponent translate={true} size={'text-lg'} css={'text-itemText'}>
                Edit
              </TitleTextComponent>
            </TouchableOpacity>
            <TouchableOpacity className={`shrink w-full h-full items-center justify-center`}
            activeOpacity={0.7}>
              <TitleTextComponent translate={true} size={'text-lg'} css={'text-itemText'}>
                Delete
              </TitleTextComponent>
            </TouchableOpacity>
          </View>
        </View>
      : null
    }
  </View>
)

export default EditButton