import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import ItemTextComponent from '../text/ItemTextComponent';

const RemoveButton = ({id, callback}) => (
  <TouchableOpacity className='w-6 h-6 bg-itemBgDark rounded-md'
    activeOpacity={0.7} onPress={()=>callback(id)}>

  </TouchableOpacity>
)

const Tag = ({tagID, tagName, removeTag}) => (
  <View className='flex-row w-fit h-7 items-center justify-center pl-2 pr-1 mr-2 mb-2 bg-buttonBg rounded-lg'>
    <ItemTextComponent translate={true} bold={true} size={'text-xl'} sizeDiff={-2} css={'max-w-[160px] text-itemText w-fit truncate mr-2'}>
      {tagName}
    </ItemTextComponent>
    <RemoveButton id={tagID} callback={removeTag} />
  </View>
)

export default Tag