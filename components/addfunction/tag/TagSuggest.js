import React, { useState, } from 'react';
import { View, TouchableOpacity, TouchableHighlight } from 'react-native';
import TitleTextComponent from '../../text/TitleTextComponent';
import ItemTextComponent from '../../text/ItemTextComponent';
import Exit from "../../../assets/icons/exit.svg";

const TagSuggestRemoveButton = ({callback}) => (
  <TouchableHighlight className='w-6 h-6 items-center justify-center rounded-md'
    activeOpacity={0.9} onPress={callback}>
      <View className='w-full h-full items-center justify-center bg-itemBgDark rounded-md'>
        <Exit width={20} height={20} stroke={'#85855B'} strokeWidth={3} />
      </View>
  </TouchableHighlight>
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