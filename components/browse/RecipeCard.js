import React from 'react';
import { View, Text, Image } from 'react-native';

const RecipeCard = ({title, nutrition, tags, data, image}) => (
  <View className='flex-col w-full h-64 p-1 bg-itemBgLight rounded-xl'>
    <Image className='flex-1 w-full rounded-lg' source={image}/>
    <View className='flex-col w-full h-fit mt-1'>
      {/* Data */}
      <View className='flex-row w-full h-6 justify-start'>
        <View className='flex-row w-10 h-6 items-center justify-center'>
          <View className='w-5 h-5 bg-itemBgDark rounded-md mr-1'></View>
          <Text className='font-inconsolata text-base'>{data.likes}</Text>
        </View>
        <View className='flex-row w-10 h-6 items-center justify-center'>
          <View className='w-5 h-5 bg-itemBgDark rounded-md mr-1'></View>
          <Text className='font-inconsolata text-base'>{data.likes}</Text>
        </View>
        <View className='flex-row w-10 h-6 items-center justify-center'>
          <View className='w-5 h-5 bg-itemBgDark rounded-md mr-1'></View>
          <Text className='font-inconsolata text-base'>{data.likes}</Text>
        </View>
      </View>

      {/* Title */}
      <View className='w-full h-fit items-center justify-center mt-1'>
        <Text className='font-inconsolataBold text-itemText text-3xl'>
          {title}
        </Text>
      </View>

      {/* Nutrition */}
      <View className='flex-row w-full h-fit -mt-2 items-center justify-center'>
        <Text className='font-inconsolata text-itemText text-base mr-5'>
          {nutrition.cal} Cal
        </Text>
        <Text className='font-inconsolata text-itemText text-base mr-5'>
          {nutrition.protein}g Protein
        </Text>
        <Text className='font-inconsolata text-itemText text-base'>
          {nutrition.carb}g Carbs
        </Text>
      </View>

      {/* Tags */}
      <View className='flex-row w-full h-fit items-center justify-center mt-1'>
        {tags.map((tag, index) => (
          <Text key={`tag-${index}`} className='font-inconsolata text-itemBgMid text-base mr-3'>
            #{tag}
          </Text>
        ))}
      </View>
    </View>
  </View>
)

export default RecipeCard