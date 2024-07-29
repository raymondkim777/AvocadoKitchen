import React, { useState, } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TitleTextComponent from '../text/TitleTextComponent';
import ItemTextComponent from '../text/ItemTextComponent';

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
          <TitleTextComponent translate={true} bold={true} size={'text-xl'} css={'text-itemText'}>
            Found
          </TitleTextComponent>
          <TitleTextComponent size={'text-xl'} css={'text-itemText mr-2'}>
            :
          </TitleTextComponent>
          <TouchableOpacity className='flex-row w-fit h-7 items-center justify-center pl-2 pr-1 bg-itemBgDark rounded-lg'
            activeOpacity={0.7} onPress={()=>addTag(suggestedTag.id)}>
            <ItemTextComponent size={'text-xl'} sizeDiff={-2} css={'text-itemText mr-2'}>
              {suggestedTag.text}
            </ItemTextComponent>
            <TagSuggestRemoveButton callback={removeSuggestion} />
          </TouchableOpacity>
        </View>
    )
  )
}

export default TagSuggest