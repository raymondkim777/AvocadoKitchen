import React from 'react';
import { TouchableOpacity } from 'react-native';
import TitleTextComponent from '../text/TitleTextComponent';

const LargeButton = ({css, text, textSize = 'text-xl', callback}) => (
  <TouchableOpacity className={`w-fit h-12 items-center justify-center bg-buttonBg rounded-xl ${css}`}
    activeOpacity={0.9}>
      <TitleTextComponent translate={true} size={textSize} css={'text-itemText text-center'}>
        {text}
      </TitleTextComponent>
  </TouchableOpacity>
)

export default LargeButton