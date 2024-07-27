import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import IngredientsTable from './IngredientsTable';

const IngredientsSection = ({ ingredients }) => (
  <View className='grow flex-col w-full h-fit items-center justify-center'>
    <View className='flex-row w-full h-8 items-center'>
      <Text className='font-inconsolata mx-4 text-screenText text-xl'>
        Ingredients
      </Text>
    </View>
    <IngredientsTable ingredients={ingredients} />
  </View>
)

export default IngredientsSection