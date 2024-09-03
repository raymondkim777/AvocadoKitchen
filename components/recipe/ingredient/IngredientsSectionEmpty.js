import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import TitleTextComponent from '../../text/TitleTextComponent';

const IngredientsSectionEmpty = () => (
  <View className='flex-col w-full h-fit items-center justify-center mt-2'>
    <View className='flex-row w-full h-8 items-center'>
      <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
        Ingredients - None Listed
      </TitleTextComponent>
    </View>
  </View>
)

export default IngredientsSectionEmpty