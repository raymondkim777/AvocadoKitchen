import React from 'react'
import { View, Text } from 'react-native'

const msg = "We're having trouble finding this ingredient.";

const QuickSearchResultsEmpty = () => (
  <View className='w-full h-12 mt-6 items-center justify-center'>
    <Text className='font-inconsolata h-fit text-center text-wrap leading-4 text-xl text-screenText'>
      {msg} 
    </Text>
  </View>
)

export default QuickSearchResultsEmpty