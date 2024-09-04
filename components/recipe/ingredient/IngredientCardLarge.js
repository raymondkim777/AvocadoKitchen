import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import TitleTextComponent from '../../text/TitleTextComponent';

const IngredientCardLarge = ({ item }) => {
  return (
    <View className={`shrink flex-col w-full h-144 justify-center items-center p-2 bg-itemBgLight rounded-xl`}>
      <TitleTextComponent translate={true} bold={true} size={'text-2xl'} css={'text-itemText'}>
        Ingredient Info
      </TitleTextComponent>
      <Image className='shrink h-72 w-full mt-2 rounded-lg' source={item.image}/>
      <View className='shrink w-full h-28 items-center justify-center mt-2'>
        <ScrollView nestedScrollEnabled={true} className='w-full'>
          <View className='flex-col w-full h-fit px-2 items-center justify-center'>
            <View className='flex-row w-full h-8 items-center'>
              <TitleTextComponent translate={true} size={'text-lg'} css={'h-full text-itemText text-center'}>
                Ingredient Name
              </TitleTextComponent>
              <TitleTextComponent size={'text-lg'} css={'h-full text-itemText text-center mr-2'}>
                :
              </TitleTextComponent>
              <TitleTextComponent translate={true} size={'text-lg'} css={'h-full text-itemText text-center'}>
                {item.name}
              </TitleTextComponent>
            </View>
            <View className='flex-row w-full h-8 items-center'>
              <TitleTextComponent translate={true} size={'text-lg'} css={'h-full text-itemText text-center'}>
                Amount
              </TitleTextComponent>
              <TitleTextComponent size={'text-lg'} css={'h-full text-itemText text-center mr-2'}>
                :
              </TitleTextComponent>
              <TitleTextComponent size={'text-lg'} css={'h-full text-itemText text-center'}>
                {item.amount} {item.unit}
              </TitleTextComponent>
            </View>
            <View className='flex-row w-full h-8 items-center'>
              <TitleTextComponent translate={true} size={'text-lg'} css={'h-full text-itemText text-center'}>
                Coupang/MarketCurly Link
              </TitleTextComponent>
              <TitleTextComponent size={'text-lg'} css={'h-full text-itemText text-center'}>
                :
              </TitleTextComponent>
            </View>
            <View className='flex-row w-full h-fit items-center'>
              <Text className='font-inconsolata h-full text-hyperLink text-left text-lg leading-4'>
                {item.link}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}
  

export default IngredientCardLarge
