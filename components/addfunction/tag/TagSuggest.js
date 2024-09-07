import React, { useState, useEffect } from 'react';
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

const TagSuggest = ({tagQuery, tagID, addTagPress, showSuggest}) => {
  const [showTagSuggest, setShowTagSuggest] = useState(showSuggest);

  useEffect(() => {
    tagQuery == '' ? null : setShowTagSuggest(true);
  }, [tagQuery])

  const addSuggestion = () => {
    addTagPress(tagQuery, tagID);
    setShowTagSuggest(false);
  }

  const removeSuggestion = () => {
    setShowTagSuggest(false);
  }

  return (
    (
      showSuggest && showTagSuggest
      ? <View className='flex-row w-fit h-10 items-center justify-center'>
          <TitleTextComponent translate={true} bold={true} size={'text-xl'} css={'text-itemText'}>
            Found
          </TitleTextComponent>
          <TitleTextComponent size={'text-xl'} css={'text-itemText mr-2'}>
            :
          </TitleTextComponent>
          <TouchableOpacity className='flex-row w-fit h-7 items-center justify-center pl-2 pr-0.5 bg-itemBgDark rounded-lg'
            activeOpacity={0.7} onPress={addSuggestion}>
            <ItemTextComponent size={'text-xl'} sizeDiff={-2} css={'text-itemText mr-2'}>
              {tagQuery}
            </ItemTextComponent>
            <TagSuggestRemoveButton callback={removeSuggestion} />
          </TouchableOpacity>
        </View>
      : null
    )
  )
}

export default TagSuggest