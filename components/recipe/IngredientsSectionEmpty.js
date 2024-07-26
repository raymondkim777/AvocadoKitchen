import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const IngredientsSectionEmpty = () => (
  <View className='flex-col w-full h-fit items-center justify-center'>
    <View className='flex-row w-full h-8 items-center'>
      <Text className='font-inconsolata mx-4 text-screenText text-xl'>
        Ingredients - None Listed
      </Text>
    </View>
  </View>
)

export default IngredientsSectionEmpty