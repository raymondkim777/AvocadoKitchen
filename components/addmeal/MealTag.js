import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const MealRemoveButton = ({id, callback}) => (
  <TouchableOpacity className='w-6 h-6 bg-itemBgDark rounded-md'
    activeOpacity={0.7} onPress={()=>callback(id)}>

  </TouchableOpacity>
)

const MealTag = ({tagID, tagName, removeTag}) => (
  <View className='flex-row w-fit h-7 items-center justify-center pl-2 pr-1 mr-2 mb-2 bg-buttonBg rounded-lg'>
    <Text className='font-inconsolataBold text-itemText truncate text-xl mr-2'>{tagName}</Text>
    <MealRemoveButton id={tagID} callback={removeTag} />
  </View>
)

export default MealTag