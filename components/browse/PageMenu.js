import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import TitleTextComponent from '../text/TitleTextComponent';
import LeftArrow from "../../assets/icons/arrowleft.svg";
import RightArrow from "../../assets/icons/arrowright.svg";

const PageMenu = ({pageButtons, shiftPageIndex}) => (
  <View className='w-full h-8 mt-2 items-center justify-center'>
    <View className='flex-row w-fit h-8 items-center justify-center bg-buttonBg rounded-xl'>
      <TouchableHighlight className={`w-8 h-8 items-center justify-center rounded-xl`}
        activeOpacity={0.9} onPress={()=>shiftPageIndex(-1)}>
        <View className='w-full h-full items-center justify-center bg-buttonBg rounded-xl'>
          <LeftArrow width={25} height={25} stroke={'#85855B'} strokeWidth={2} />
        </View>
      </TouchableHighlight>
      {
        pageButtons
      }
      <TouchableHighlight className={`w-8 h-8 items-center justify-center rounded-xl`}
      activeOpacity={0.9} onPress={()=>shiftPageIndex(1)}>
        <View className='w-full h-full items-center justify-center bg-buttonBg rounded-xl'>
          <RightArrow width={25} height={25} stroke={'#85855B'} strokeWidth={2} />
        </View>
      </TouchableHighlight>
    </View>
  </View>
)

export default PageMenu