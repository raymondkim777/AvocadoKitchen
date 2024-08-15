import React, { useState, useContext, } from 'react';
import { SideBarContext } from './HomeControl';
import { SafeAreaView, ScrollView, View, Text, FlatList, } from 'react-native';
import TitleTextComponent from '../text/TitleTextComponent';
import ItemTextComponent from '../text/ItemTextComponent';
import ItemTextInputComponent from '../text/ItemTextInputComponent';
import SideBarButton from '../general/SideBarButton';
import ExitButton from '../general/ExitButton';
import FoodCard from '../profile/FoodCard';

const FoodCardDiv = () => (
  <View className='w-4'/>
)

const UserInfoPage = ({ navigation }) => {
  const {wideScreen, setShowSideBar, updatePage} = useContext(SideBarContext);
  
  const avoidFood = [
    {
      id: '0',
      text: 'Fried Chicken',
      image: require('../../assets/images/info-example/fried-chicken.jpg'),
    },
    {
      id: '1',
      text: 'Fried Chicken',
      image: require('../../assets/images/info-example/fried-chicken.jpg'),
    },
    {
      id: '2',
      text: 'Fried Chicken',
      image: require('../../assets/images/info-example/fried-chicken.jpg'),
    },
    {
      id: '3',
      text: 'Fried Chicken',
      image: require('../../assets/images/info-example/fried-chicken.jpg'),
    },
  ];
  const suggestedFood = [
    {
      id: '0',
      text: 'Tofu', 
      image: require('../../assets/images/info-example/tofu.jpg'),
    },
    {
      id: '1',
      text: 'Tofu', 
      image: require('../../assets/images/info-example/tofu.jpg'),
    },
    {
      id: '2',
      text: 'Tofu', 
      image: require('../../assets/images/info-example/tofu.jpg'),
    },
    {
      id: '3',
      text: 'Tofu', 
      image: require('../../assets/images/info-example/tofu.jpg'),
    },
    {
      id: '4',
      text: 'Tofu', 
      image: require('../../assets/images/info-example/tofu.jpg'),
    },
    {
      id: '5',
      text: 'Tofu', 
      image: require('../../assets/images/info-example/tofu.jpg'),
    },
  ];

  return (
    <SafeAreaView id='screen' className='w-full h-full justify-center items-center bg-screenBg'>
      <ScrollView className='grow w-full h-fit'>
        <View id='content' className='grow w-full h-fit p-4'>
          {/* Title */}
          <View className='flex-row w-full h-10 justify-between'>
            {
              wideScreen ? null : <SideBarButton callback={setShowSideBar} />
            }
            <TitleTextComponent translate={true} size={'text-3xl'} css={'mx-4 text-screenText'}>
              Information
            </TitleTextComponent>
            <ExitButton/>
          </View>

          {/* Diet Category */}
          <View className='flex-col w-full h-fit mt-6'>
            <View className='flex-row w-full h-6'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText ml-4'}>
                Diet Category
              </TitleTextComponent>
              <TitleTextComponent size={'text-xl'} css={'text-screenText mr-4'}>
                :
              </TitleTextComponent>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText'}>
                Vegan
              </TitleTextComponent>
            </View>
          </View>

          {/* Avoid Food */}
          <View className='flex-col w-full h-fit mt-6'>
            <View className='flex-row w-full h-6'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText ml-4'}>
                Substances/Food to Avoid
              </TitleTextComponent>
              <TitleTextComponent size={'text-xl'} css={'text-screenText mr-4'}>
                :
              </TitleTextComponent>
            </View>
            {/* Scroll Cards */}
            <View className='w-full h-fit mt-2'>
              <FlatList className='w-full h-fit'
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={avoidFood}
                renderItem={({item}) => <FoodCard text={item.text} image={item.image} />}
                ItemSeparatorComponent={<FoodCardDiv/>}
                keyExtractor={item => item.id}
                />
            </View>
          </View>

          {/* Suggested Food */}
          <View className='flex-col w-full h-fit mt-6'>
            <View className='flex-row w-full h-6'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText ml-4'}>
                Suggested Food
              </TitleTextComponent>
              <TitleTextComponent size={'text-xl'} css={'text-screenText mr-4'}>
                :
              </TitleTextComponent>
            </View>
            {/* Stepped Cards */}
            <View className='flex-row w-full h-fit mt-2'>
              <View className='shrink w-full h-fit mr-4'>
                {suggestedFood.map((item, index)=>(
                  (
                    index % 2 == 0
                    ? (
                      <FoodCard 
                      text={item.text} 
                      image={item.image}
                      variable={{
                        total: suggestedFood.length, 
                        index: index,
                      }}
                      />
                    )
                    : null
                  )
                ))}
              </View>
              <View className='shrink w-full h-20'>
                {suggestedFood.map((item, index)=>(
                  (
                    index % 2 == 1
                    ? (
                      <FoodCard 
                      text={item.text} 
                      image={item.image}
                      variable={{
                        total: suggestedFood.length, 
                        index: index,
                      }}
                      />
                    )
                    : null
                  )
                ))}
              </View>
            </View>
          </View>

          {/* Legal Notice */}
          <View className='flex-col w-full h-fit mt-6'>
            <View className='flex-row w-full h-fit'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText ml-4'}>
                Caution
              </TitleTextComponent>
              <TitleTextComponent size={'text-xl'} css={'text-screenText'}>
                :
              </TitleTextComponent>
            </View>
          </View>
          <View className='w-full h-fit mt-2'>
            <TitleTextComponent translate={true} size={'text-md'} css={'text-screenText text-justify'}>
              (Legal Notice)
            </TitleTextComponent>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default UserInfoPage