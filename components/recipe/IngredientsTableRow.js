import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const IngredientsTableRow = ({item, index}) => (
  <TouchableOpacity className={`flex-row w-full h-8 border-b border-itemBgDark`}
    activeOpacity={0.7}>
    <View className={`w-2/3 h-full items-center justify-center border-r border-itemBgDark`}>
      <Text className='font-inconsolata text-lg text-itemText'>{item.name}</Text>
    </View>
    <View className={`w-1/3 h-full items-center justify-center`}>
      <Text className='font-inconsolata text-lg text-itemText'>{item.amount}</Text>
    </View>
  </TouchableOpacity>
)

export default IngredientsTableRow
