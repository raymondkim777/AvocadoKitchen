import React, { useState, useContext, } from 'react';
import { SafeAreaView, ScrollView, View, Image } from 'react-native';
import TitleTextComponent from '../text/TitleTextComponent';
import ItemTextComponent from '../text/ItemTextComponent';
import ItemLargeTextComponent from '../text/ItemLargeTextComponent';
import SideBarButton from '../general/SideBarButton';
import ExitButton from '../general/ExitButton';
import EditButton from '../general/EditButton';
import { SideBarContext } from './HomeControl';

const NutritionCard = ({item, index}) => (
  <View className={`w-full h-full min-h-40 items-center justify-center bg-itemBgLight rounded-lg`}>
    <View className='w-6 h-6 -mt-4 bg-itemBgDark rounded-lg'/>
    <ItemLargeTextComponent bold={true} size={'text-3xl'} css={'text-itemText mt-3'}>
      {item.value}{ index == 0? '' : 'g' }
    </ItemLargeTextComponent>
    <ItemLargeTextComponent translate={true} bold={true} size={'text-2xl'} css={'text-itemText'}>
      {item.unit}
    </ItemLargeTextComponent>
  </View>
)

const MealCardThin = ({item}) => (
  <View className='flex-row w-full h-28 p-1 pr-0 rounded-lg bg-itemBgLight'>
    <Image className='shrink w-1/2 h-full rounded-md' source={item.image} />
    <View className='flex-col grow w-1/2 ml-1 pl-2 h-full items-center justify-center'>
      <TitleTextComponent translate={true} size={'text-2xl'} css={'h-8 text-itemText text-center'}>
        {item.title}
      </TitleTextComponent>
      <ItemLargeTextComponent bold={true} size={'text-3xl'} css={'mt-1 text-itemText'}>
        {item.cal} Cal
      </ItemLargeTextComponent>
    </View>
    <View className='w-5 h-full items-center justify-center'>
      <EditButton />
    </View>
  </View>
)

const MyMeals = ({ navigation }) => {
  const {wideScreen, setShowSideBar, updatePage} = useContext(SideBarContext);

  const handleExit = ({}) => {

  }

  const nutrition = [
    {
      id: 'calorie',
      value: '1261',
      unit: 'Cal',
    },
    {
      id: 'protein',
      value: '487',
      unit: 'Protein',
    },
    {
      id: 'carb',
      value: '524',
      unit: 'Carbs',
    },
  ];

  const meals = [
    {
      day: "Sunday",
      meal: [
        {
          type: 'Breakfast',
          title: 'Waffles', 
          image: require('../../assets/images/meal-example/meal-1.jpg'),
          cal: 312,
        },
        {
          type: 'Lunch',
          title: 'Tuna Sandwich', 
          image: require('../../assets/images/meal-example/meal-2.jpg'),
          cal: 746,
        },
        {
          type: 'Dinner',
          title: 'Sirloin Steak', 
          image: require('../../assets/images/meal-example/meal-3.jpg'),
          cal: 539,
        },
      ],
    },
    {
      day: "Monday",
      meal: [
        {
          type: 'Breakfast',
          title: 'Waffles', 
          image: require('../../assets/images/meal-example/meal-1.jpg'),
          cal: 312,
        },
        {
          type: 'Lunch',
          title: 'Tuna Sandwich', 
          image: require('../../assets/images/meal-example/meal-2.jpg'),
          cal: 746,
        },
        {
          type: 'Dinner',
          title: 'Sirloin Steak', 
          image: require('../../assets/images/meal-example/meal-3.jpg'),
          cal: 539,
        },
      ],
    },
    {
      day: "Tuesday",
      meal: [
        {
          type: 'Breakfast',
          title: 'Waffles', 
          image: require('../../assets/images/meal-example/meal-1.jpg'),
          cal: 312,
        },
        {
          type: 'Lunch',
          title: 'Tuna Sandwich', 
          image: require('../../assets/images/meal-example/meal-2.jpg'),
          cal: 746,
        },
        {
          type: 'Dinner',
          title: 'Sirloin Steak', 
          image: require('../../assets/images/meal-example/meal-3.jpg'),
          cal: 539,
        },
      ],
    },
    {
      day: "Wednesday",
      meal: [
        {
          type: 'Breakfast',
          title: 'Waffles', 
          image: require('../../assets/images/meal-example/meal-1.jpg'),
          cal: 312,
        },
        {
          type: 'Lunch',
          title: 'Tuna Sandwich', 
          image: require('../../assets/images/meal-example/meal-2.jpg'),
          cal: 746,
        },
        {
          type: 'Dinner',
          title: 'Sirloin Steak', 
          image: require('../../assets/images/meal-example/meal-3.jpg'),
          cal: 539,
        },
      ],
    },
    {
      day: "Thursday",
      meal: [
        {
          type: 'Breakfast',
          title: 'Waffles', 
          image: require('../../assets/images/meal-example/meal-1.jpg'),
          cal: 312,
        },
        {
          type: 'Lunch',
          title: 'Tuna Sandwich', 
          image: require('../../assets/images/meal-example/meal-2.jpg'),
          cal: 746,
        },
        {
          type: 'Dinner',
          title: 'Sirloin Steak', 
          image: require('../../assets/images/meal-example/meal-3.jpg'),
          cal: 539,
        },
      ],
    },
    {
      day: "Friday",
      meal: [
        {
          type: 'Breakfast',
          title: 'Waffles', 
          image: require('../../assets/images/meal-example/meal-1.jpg'),
          cal: 312,
        },
        {
          type: 'Lunch',
          title: 'Tuna Sandwich', 
          image: require('../../assets/images/meal-example/meal-2.jpg'),
          cal: 746,
        },
        {
          type: 'Dinner',
          title: 'Sirloin Steak', 
          image: require('../../assets/images/meal-example/meal-3.jpg'),
          cal: 539,
        },
      ],
    },
    {
      day: "Saturday",
      meal: [
        {
          type: 'Breakfast',
          title: 'Waffles', 
          image: require('../../assets/images/meal-example/meal-1.jpg'),
          cal: 312,
        },
        {
          type: 'Lunch',
          title: 'Tuna Sandwich', 
          image: require('../../assets/images/meal-example/meal-2.jpg'),
          cal: 746,
        },
        {
          type: 'Dinner',
          title: 'Sirloin Steak', 
          image: require('../../assets/images/meal-example/meal-3.jpg'),
          cal: 539,
        },
      ],
    },
  ];

  return(
    <SafeAreaView id='screen' className='w-full h-full justify-center items-center bg-screenBg'>
      <ScrollView 
      className='w-full h-fit'
      contentContainerStyle={{flexGrow: 1}} 
      id='content' 
      showsVerticalScrollIndicator={false}>
        <View id='content' className='w-full h-fit p-4'>
          {/* Frame 1 - Search Bar */}
          <View className='w-full h-fit mt-2'>
            {/* Title */}
            <View className='flex-row w-full h-10 justify-between'>
              {
                wideScreen ? null : <SideBarButton callback={setShowSideBar} />
              }
              <TitleTextComponent translate={true} size={'text-3xl'} css={'mx-4 text-screenText'}>
                My Meals
              </TitleTextComponent>
              <ExitButton navigation={navigation}/>
            </View>
          </View>

          {/* Frame 2 - Daily Stats*/}
          <View className='grow min-h-fit mt-6'>
            <TitleTextComponent translate={true} size={'text-3xl'} css={'mx-4 text-screenText'}>
              Average Daily Stats
            </TitleTextComponent>
            {/* Three Cards */}
            <View className={`grow flex-row w-full h-40 mt-2 space-x-4`}>
              {nutrition.map((item, index) => (
                <View className='shrink w-full h-full'>
                  <NutritionCard item={item} index={index} />
                </View>
              ))}
            </View>
          </View>

          {/* Day Meals */}
          <View className='flex-col w-full h-fit mt-6'>
            {meals.map((item, index)=>(
              <View className='flex-col w-full h-fit mt-2'>
                {/* Day */}
                <View className='w-full h-fit mb-2'>
                  <TitleTextComponent translate={true} size={'text-3xl'} css={'mx-4 text-screenText'}>
                    {item.day}
                  </TitleTextComponent>
                </View>

                {/* Cards */}
                {item.meal.map((item)=>(
                  <View className='w-full h-fit mb-2'>
                    <MealCardThin item={item} />
                  </View>
                ))}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MyMeals;