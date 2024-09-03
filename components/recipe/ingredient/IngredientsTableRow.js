import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import ItemTextComponent from '../../text/ItemTextComponent';

const IngredientsTableRow = ({item, index}) => {
  const handleExpandIngrediengRow = () => {
    null;
  }
  return(
    <TouchableHighlight className={`w-full h-8`}
    activeOpacity={0.95} onPress={handleExpandIngrediengRow}>
      <View className='flex-row w-full h-full'>
        <View className={`w-2/3 h-full items-center justify-center bg-itemBgLight border-r border-itemBgDark`}>
          <ItemTextComponent translate={true} size={'text-lg'} sizeDiff={-1} css={'text-itemText'}>
            {item.name}
          </ItemTextComponent>
        </View>
        <View className={`w-1/3 h-full items-center justify-center bg-itemBgLight `}>
          <ItemTextComponent translate={true} size={'text-lg'} sizeDiff={-1} css={'text-itemText'}>
            {item.amount}
          </ItemTextComponent>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default IngredientsTableRow
