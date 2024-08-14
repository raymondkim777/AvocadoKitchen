import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import ItemTextComponent from '../text/ItemTextComponent';

const IngredientsTableRow = ({item, index}) => (
  <TouchableOpacity className={`flex-row w-full h-8`}
    activeOpacity={0.7}>
    <View className={`w-2/3 h-full items-center justify-center border-r border-itemBgDark`}>
      <ItemTextComponent translate={true} size={'text-lg'} sizeDiff={-1} css={'text-itemText'}>
        {item.name}
      </ItemTextComponent>
    </View>
    <View className={`w-1/3 h-full items-center justify-center`}>
      <ItemTextComponent translate={true} size={'text-lg'} sizeDiff={-1} css={'text-itemText'}>
        {item.amount}
      </ItemTextComponent>
    </View>
  </TouchableOpacity>
)

export default IngredientsTableRow
