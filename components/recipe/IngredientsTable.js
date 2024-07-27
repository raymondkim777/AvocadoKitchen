import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import IngredientsTableRow from './IngredientsTableRow';

const IngredientsTable = ({ingredients}) => (
  <View className='grow w-full h-48 items-center justify-center'>
    {/* Header */}
    <View className='flex-row w-full h-8 bg-itemBgDark rounded-t-lg'>
      <View className='w-2/3 h-full items-center justify-center'>
        <Text className='font-inconsolataBold text-xl text-itemText'>Name</Text>
      </View>
      <View className='w-1/3 h-full items-center justify-center'>
        <Text className='font-inconsolataBold text-xl text-itemText'>Amount</Text>
      </View>
    </View>
    
    {/* Content */}
    <View className='grow w-full h-40 bg-itemBgLight overflow-hidden rounded-b-lg'>
      <ScrollView nestedScrollEnabled={true} className='w-full h-fit rounded-b-lg'>
        {ingredients.map((item, index) => (
          <IngredientsTableRow item={item} index={index}/>
        ))}
      </ScrollView>
    </View>
  </View>
)

export default IngredientsTable