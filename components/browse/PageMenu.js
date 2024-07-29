import React from 'react';
import { View, Text, TouchableOpacity, YellowBox } from 'react-native';
import TitleTextComponent from '../text/TitleTextComponent';

const PageMenu = ({pageButtons, shiftPageIndex}) => (
  <View className='w-full h-8 mt-2 items-center justify-center'>
    <View className='flex-row w-fit h-8 items-center justify-center bg-buttonBg rounded-xl'>
      <TouchableOpacity className={`w-8 h-8 items-center justify-center rounded-xl`}
        activeOpacity={1} onPress={()=>shiftPageIndex(-1)}>
        <TitleTextComponent size={'text-xl'} css={'text-itemText'}>
          {'<'}
        </TitleTextComponent>
      </TouchableOpacity>
      {
        pageButtons
      }
      <TouchableOpacity className={`w-8 h-8 items-center justify-center rounded-xl`}
      activeOpacity={1} onPress={()=>shiftPageIndex(1)}>
        <TitleTextComponent size={'text-xl'} css={'text-itemText'}>
          {'>'}
        </TitleTextComponent>
      </TouchableOpacity>
    </View>
  </View>
)

export default PageMenu