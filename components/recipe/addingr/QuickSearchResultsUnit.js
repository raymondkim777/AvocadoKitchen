import React, { useState, } from 'react';
import { View, Text, Image } from 'react-native';

const QuickSearchResultsUnit = ({item}) => (
  (
    item.empty
    ? <View className='flex-1 h-60 bg-transparent'/>
    : <View className='flex-1 h-60 items-center justify-center p-1'>
        <Image className='w-full h-40 rounded-lg' source={item.image} />
        <View className='flex-col w-full h-fit items-center justify-center mt-1'>
          <Text className='font-inconsolata text-wrap text-center text-base leading-4 text-itemText'>({item.site}) {item.name}</Text>
          <View className='flex-row w-full h-fit items-center justify-center space-x-2'>
            <Text className='font-inconsolata text-base text-redHighlight'>₩{item.price}</Text>
            <Text className='font-inconsolata text-base text-greenHighlight'>({item.deliver})</Text>
          </View>
        </View>
      </View>
  )
)

export default QuickSearchResultsUnit