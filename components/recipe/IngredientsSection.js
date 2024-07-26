import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import IngredientRow from './IngredientRow';

const IngredientsSection = ({ ingredients }) => (
  <View className='grow flex-col w-full h-fit items-center justify-center'>
    <View className='flex-row w-full h-8 items-center'>
      <Text className='font-inconsolata mx-4 text-screenText text-xl'>
        Ingredients {ingredients.length == 0 ? '- None Listed' : ''}
      </Text>
    </View>
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
            <IngredientRow item={item} index={index}/>
          ))}
        </ScrollView>
      </View>
    </View>
  </View>
)

export default IngredientsSection