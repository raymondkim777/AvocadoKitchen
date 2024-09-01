import React from 'react';
import { View, TouchableOpacity, TouchableHighlight, } from 'react-native';
import TitleTextComponent from '../text/TitleTextComponent';

const SideBarPage = ({text, callback, index, buttonCSS, textCSS}) => (
  <View className='w-full h-fit pr-4'>
    <TouchableHighlight className={`w-full h-16 items-center justify-center rounded-r-full`}
    activeOpacity={0.9} onPress={()=>callback(index, false)}>
      <View className={`w-full h-full pl-2 items-center justify-center ${buttonCSS[index]} rounded-r-full`}>
        <TitleTextComponent translate={true} size={'text-xl'} css={textCSS[index]}>
          {text}
        </TitleTextComponent>
      </View>
    </TouchableHighlight>
  </View>
)

export default SideBarPage