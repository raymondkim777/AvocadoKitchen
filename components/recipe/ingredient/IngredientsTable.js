import React from 'react';
import { View, FlatList } from 'react-native';
import IngredientsTableRow from './IngredientsTableRow';
import TitleTextComponent from '../../text/TitleTextComponent';

const RowDiv = () => (
  <View className='w-full h-[1px] bg-itemBgDark' />
);

const IngredientsTable = ({ ingredients, handlePress }) => (
  <View className='grow w-full h-48 items-center justify-center'>
    {/* Header */}
    <View className='flex-row w-full h-8 bg-itemBgDark rounded-t-lg'>
      <View className='w-2/3 h-full items-center justify-center'>
        <TitleTextComponent translate={true} bold={true} size={'text-xl'} css={'text-itemText'}>
          Ingredient Name
        </TitleTextComponent>
      </View>
      <View className='w-1/3 h-full items-center justify-center'>
        <TitleTextComponent translate={true} bold={true} size={'text-xl'} css={'text-itemText'}>
          Amount
        </TitleTextComponent>
      </View>
    </View>
    
    {/* Content */}
    <View className='grow w-full h-40 bg-itemBgLight overflow-hidden rounded-b-lg'>
      <FlatList 
      nestedScrollEnabled={true}
      className='w-full h-fit rounded-b-lg'
      data={ingredients}
      extraData={ingredients}
      renderItem={({item, index}) => <IngredientsTableRow item={item} index={index} handlePress={handlePress}/>}
      ItemSeparatorComponent={RowDiv}
      ListFooterComponent={RowDiv}
      />
    </View>
  </View>
)

export default IngredientsTable