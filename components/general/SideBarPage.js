import React from 'react';
import { View, TouchableOpacity, } from 'react-native';
import TitleTextComponent from '../text/TitleTextComponent';

const SideBarPage = ({text, callback, index, buttonCSS, textCSS}) => (
  <View className='w-full h-fit pr-4'>
    <TouchableOpacity className={`w-full h-16 pl-2 items-center justify-center rounded-r-full ${buttonCSS[index]}`}
    activeOpacity={0.9} onPress={()=>callback(index)}>
      <View className='w-full h-fit items-center justify-center'>
        <TitleTextComponent translate={true} size={'text-xl'} css={textCSS[index]}>
          {text}
        </TitleTextComponent>
      </View>
    </TouchableOpacity>
  </View>
)

export default SideBarPage