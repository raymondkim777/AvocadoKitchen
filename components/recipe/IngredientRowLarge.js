import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const IngredientRowLarge = () => {
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
        <Text className='font-inconsolataBold text-itemText text-2xl'>
          Ingredient Info 
        </Text>
        <Image className='grow h-72  w-full mt-2 rounded-lg' source={item.image}/>
        <View className='shrink w-full h-28 items-center justify-center mt-4'>
          <ScrollView nestedScrollEnabled={true} className='w-full'>
            <View className='flex-col w-full h-fit items-center justify-center'>
              <View className='flex-row w-full h-8 items-center bg-blue-300'>
                <Text className='font-inconsolata h-full text-itemText text-center text-lg'>
                  Name: {item.name}
                </Text>
              </View>
              <View className='flex-row w-full h-8 items-center bg-blue-300'>
                <Text className='font-inconsolata h-full text-itemText text-center text-lg'>
                  Amount: {item.amount}
                </Text>
              </View>
              <View className='flex-row w-full h-8 items-center bg-blue-300'>
                <Text className='font-inconsolata h-full text-itemText text-center text-lg'>
                  Coupang/MarketCurly link:
                </Text>
              </View>
              <View className='flex-row w-full h-fit items-center bg-blue-300'>
                <Text className='font-inconsolata h-full text-hyperLink text-center text-lg leading-4'>
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
  

export default IngredientRowLarge
