import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import ItemTextComponent from '../../text/ItemTextComponent';
import Exit from "../../../assets/icons/exit.svg";

const RemoveButton = ({item, callback}) => (
  <TouchableHighlight className='w-6 h-6 items-center justify-center rounded-md'
    activeOpacity={0.9} onPress={()=>callback(item)}>
      <View className='w-full h-full items-center justify-center bg-buttonBg rounded-md'>
        <Exit width={20} height={20} stroke={'#85855B'} strokeWidth={3} />
      </View>
  </TouchableHighlight>
)

const Tag = ({item, removeTag}) => (
  <View className='flex-row w-fit h-7 items-center justify-center pl-2 pr-0.5 mr-2 mb-2 bg-buttonBg rounded-lg'>
    <ItemTextComponent translate={true} bold={true} size={'text-xl'} sizeDiff={-2} css={'max-w-[160px] text-itemText w-fit truncate mr-2'}>
      {item.text}
    </ItemTextComponent>
    <RemoveButton item={item} callback={removeTag} />
  </View>
)

export default Tag