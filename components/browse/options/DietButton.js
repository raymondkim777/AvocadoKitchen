import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import TitleTextComponent from '../../text/TitleTextComponent';

const DietButton = ({callback, css, title, index}) => (
  <View className='flex-row w-fit h-7 items-center justify-center'>
    <TouchableOpacity className='flex-row w-fit h-7 items-center justify-center mr-5'
      activeOpacity={1} onPress={()=>callback(index)}>
      <View className={`w-4 h-4 rounded-md border-2 ${css[index]} border-itemText mr-2`}/>
      <TitleTextComponent translate={true} size={'text-base'} css={'text-itemText'}>
        {title}
      </TitleTextComponent>
    </TouchableOpacity>
  </View>
)

export default DietButton