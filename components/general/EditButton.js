import React from 'react';
import { View, TouchableOpacity, TouchableHighlight } from 'react-native';
import TitleTextComponent from '../text/TitleTextComponent';
import MoreVert from '../../assets/icons/more_vert.svg';

const EditButton = ({ showDropDown, openDropDown, EditDropDown }) => (
  <View className='relative z-20 w-fit h-fit'>
    <TouchableHighlight className='w-3 h-10 items-center justify-center rounded-full'
    activeOpacity={0.9} onPress={openDropDown}>
      <View className='w-3 h-10 items-center justify-center bg-itemBgLight rounded-full space-y-1'>
        <MoreVert width={35} height={35} stroke={'#85855B'} strokeWidth={2} />
      </View>
    </TouchableHighlight>
    {
      showDropDown ? EditDropDown : null
    }
  </View>
)

export default EditButton