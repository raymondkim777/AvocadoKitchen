import React from 'react';
import { View,  TouchableHighlight } from 'react-native';
import ItemTextComponent from '../../text/ItemTextComponent';

const ProcedureTableRow = ({ item, index, handlePress }) => {
  return(
    <TouchableHighlight className={`w-full h-8`}
    activeOpacity={0.95} onPress={()=>handlePress(index)}>
      <View className='flex-row w-full h-full'>
        <View className={`w-12 h-full items-center justify-center bg-itemBgLight border-r border-itemBgDark`}>
          <ItemTextComponent translate={true} size={'text-lg'} sizeDiff={-1} css={'text-itemText'}>
            {item.step}
          </ItemTextComponent>
        </View>
        <View className={`shrink w-full h-full items-center justify-center px-2 bg-itemBgLight `}>
          <ItemTextComponent translate={true} size={'text-lg'} sizeDiff={-1} css={'w-full text-start text-itemText'} numberOfLines={1}>
            {item.description}
          </ItemTextComponent>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default ProcedureTableRow
