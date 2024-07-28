import React, { useState, } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TagSuggestRemoveButton = ({callback}) => (
  <TouchableOpacity className='w-6 h-6 bg-itemBgLight rounded-md'
    activeOpacity={0.7} onPress={()=>callback()}>

  </TouchableOpacity>
)

const TagSuggest = ({tagQuery, addTag}) => {
  const suggestedTag = {
    id: '0',
    text: tagQuery,
  }

  const removeSuggestion = () => {
    
  }

  return (
    (
      tagQuery == ''
      ? null
      : <View className='flex-row w-fit h-10 items-center justify-center'>
          <Text className='font-inconsolataBold text-itemText text-xl mr-2'>
            Found: 
          </Text>
          <TouchableOpacity className='flex-row w-fit h-7 items-center justify-center pl-2 pr-1 bg-itemBgDark rounded-lg'
            activeOpacity={0.7} onPress={()=>addTag(suggestedTag.id)}>
            <Text className='font-inconsolataBold text-itemText text-xl mr-2'>{suggestedTag.text}</Text>
            <TagSuggestRemoveButton callback={removeSuggestion} />
          </TouchableOpacity>
        </View>
    )
  )
}

export default TagSuggest