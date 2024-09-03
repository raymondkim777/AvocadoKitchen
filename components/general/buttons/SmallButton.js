import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import TitleTextComponent from '../../text/TitleTextComponent';

const SmallButton = ({text, callback, disabled=false}) => (
  <TouchableHighlight className={`w-fit h-9 rounded-lg`}
  activeOpacity={0.9} onPress={callback} disabled={disabled}>
    <View className='w-fit h-full px-3 items-center justify-center bg-buttonBg rounded-lg'>
      <TitleTextComponent translate={true} bold={true} size={'text-xl'} css={disabled ? 'text-grayText' : 'text-itemText'}>
        {text}
      </TitleTextComponent>
    </View>
  </TouchableHighlight>
)

export default SmallButton