import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ProcedureTableRow = ({item, index}) => (
  <TouchableOpacity className={`flex-row w-full h-8 border-b border-itemBgDark`}
    activeOpacity={0.7}>
    <View className={`w-12 h-full items-center justify-center border-r border-itemBgDark`}>
      <Text className='font-inconsolata text-lg text-itemText'>{item.step}</Text>
    </View>
    <View className={`shrink w-full h-full items-center justify-center px-2`}>
      <Text className='w-full font-inconsolata text-lg text-itemText'>{item.description}</Text>
    </View>
  </TouchableOpacity>
)

export default ProcedureTableRow
