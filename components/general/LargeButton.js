import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import TitleTextComponent from '../text/TitleTextComponent';

const LargeButton = ({cssOut, cssIn, text, textSize = 'text-xl', callback}) => (
  <TouchableHighlight onPress={callback} className={`w-fit h-12 rounded-xl ${cssOut}`}
  activeOpacity={0.9}>
    <View className={`w-fit h-12 items-center justify-center bg-buttonBg rounded-xl ${cssIn}`}>
      <TitleTextComponent translate={true} size={textSize} css={'text-itemText text-center'}>
        {text}
      </TitleTextComponent>
    </View>
  </TouchableHighlight>
)

export default LargeButton