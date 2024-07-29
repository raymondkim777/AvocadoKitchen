import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ItemTextComponent from '../text/ItemTextComponent';

const ProcedureTableRow = ({item, index}) => (
  <TouchableOpacity className={`flex-row w-full h-8 border-b border-itemBgDark`}
    activeOpacity={0.7}>
    <View className={`w-12 h-full items-center justify-center border-r border-itemBgDark`}>
      <ItemTextComponent translate={true} size={'text-lg'} sizeDiff={-1} css={'text-itemText'}>
        {item.step}
      </ItemTextComponent>
    </View>
    <View className={`shrink w-full h-full items-center justify-center px-2`}>
      <ItemTextComponent translate={true} size={'text-lg'} sizeDiff={-1} css={'text-itemText'}>
        {item.description}
      </ItemTextComponent>
    </View>
  </TouchableOpacity>
)

export default ProcedureTableRow
