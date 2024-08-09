import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import TitleTextComponent from '../text/TitleTextComponent';

const BackButton = ({ callback }) => (
  <TouchableOpacity className='w-fit h-9 items-center justify-center px-3 bg-buttonBg rounded-lg'
  activeOpacity={0.9} onPress={()=>callback()}>
    <TitleTextComponent translate={true} bold={true} size={'text-xl'} css={'text-itemText'}>
      Back
    </TitleTextComponent>
  </TouchableOpacity>
)

export default BackButton