import React from 'react';
import { View, TouchableOpacity, TouchableHighlight } from 'react-native';
import TitleTextComponent from '../text/TitleTextComponent';
import MoreVert from '../../assets/icons/more_vert.svg';

const EditButton = ({ showDropDown, openDropDown, closeDropDown }) => (
  <View className='relative z-20 w-fit h-fit'>
    <TouchableHighlight className='w-3 h-10 items-center justify-center rounded-full'
    activeOpacity={0.9} onPress={openDropDown}>
      <View className='w-3 h-10 items-center justify-center bg-itemBgLight rounded-full space-y-1'>
        <MoreVert width={35} height={35} stroke={'#85855B'} strokeWidth={2} />
      </View>
    </TouchableHighlight>
    {
      showDropDown
      ? <View className='absolute z-30 top-0 -left-24 w-24 h-20'>
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