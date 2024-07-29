import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import TitleTextComponent from '../text/TitleTextComponent';

const IngredientCardLarge = () => {
  const item = {
    id: 'canned-tuna',
    name: 'Canned Tuna',
    amount: '20 oz',
    link: 'https://www.coupang.com/insert_link_here_insert_link_here_insert_link_here_insert_link_here_insert_link_here_insert_link_here_',
    image: require('../../assets/images/ingredient-example/canned-tuna.jpg'),
  }

  return (
    <View className='w-full h-full items-center justify-center bg-red-300'>
      <View className={`shrink flex-col w-full h-144 justify-center items-center p-4 bg-itemBgLight rounded-xl`}>
        <TitleTextComponent translate={true} bold={true} size={'text-2xl'} css={'text-itemText'}>
          Ingredient Info
        </TitleTextComponent>
        <Image className='shrink h-72 w-full mt-2 rounded-lg' source={item.image}/>
        <View className='shrink w-full h-28 items-center justify-center mt-4'>
          <ScrollView nestedScrollEnabled={true} className='w-full'>
            <View className='flex-col w-full h-fit items-center justify-center'>
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
                <TitleTextComponent translate={true} size={'text-lg'} css={'h-full text-itemText text-center'}>
                  {item.amount}
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
    </View>
  )
}
  

export default IngredientCardLarge
