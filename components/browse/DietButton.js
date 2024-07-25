import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const DietButton = ({callback, css, title, index}) => (
  <View className='flex-row w-fit h-7 items-center justify-center'>
    <TouchableOpacity className='flex-row w-fit h-7 items-center justify-center mr-5'
      activeOpacity={1} onPress={()=>callback(index)}>
      <View className={`w-4 h-4 rounded-md border-2 ${css[index]} border-itemText mr-2`}/>
      <Text className='font-inconsolata text-base'>
        {title}
      </Text>
    </TouchableOpacity>
  </View>
)

export default DietButton