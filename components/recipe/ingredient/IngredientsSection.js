import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import IngredientsTable from './IngredientsTable';
import TitleTextComponent from '../../text/TitleTextComponent';

const IngredientsSection = ({ ingredients }) => (
  <View className='grow flex-col w-full h-fit items-center justify-center'>
    <View className='flex-row w-full h-8 items-center'>
      <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
        Ingredients
      </TitleTextComponent>
    </View>
    <IngredientsTable ingredients={ingredients} />
  </View>
)

export default IngredientsSection