import React from 'react';
import { TouchableOpacity } from 'react-native';
import TitleTextComponent from '../text/TitleTextComponent';

const SmallButton = ({text, callback}) => (
  <TouchableOpacity className='w-fit h-9 px-3 items-center justify-center bg-buttonBg rounded-lg'
  activeOpacity={0.9} onPress={callback}>
    <TitleTextComponent translate={true} bold={true} size={'text-xl'} css={'text-itemText'}>
      {text}
    </TitleTextComponent>
  </TouchableOpacity>
)

export default SmallButton