import React, { useState, useContext, } from 'react';
import { SafeAreaView, Text, SectionList, View, Image, Pressable, TouchableOpacity } from 'react-native';
import TitleTextComponent from '../text/TitleTextComponent';
import ItemTextComponent from '../text/ItemTextComponent';
import ItemLargeTextComponent from '../text/ItemLargeTextComponent';
import SideBarButton from '../general/SideBarButton';
import ExitButton from '../general/ExitButton';
import EditButton from '../general/EditButton';
import { SideBarContext } from './HomeControl';

const TitleSection = ({ navigation }) => {
  const {wideScreen, setShowSideBar, updatePage} = useContext(SideBarContext);
  return(
    <View className='w-full h-fit mt-2'>
      <View className='flex-row w-full h-10 justify-between'>
        {
          wideScreen ? null : <SideBarButton callback={setShowSideBar} />
        }
        <TitleTextComponent translate={true} size={'text-3xl'} css={'mx-4 text-screenText'}>
          My Meals
        </TitleTextComponent>
        <ExitButton/>
      </View>
    </View>
  )
}

const NutritionSection = ({ nutrition }) => (
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
);

const HeaderSection = ({navigation, nutrition, dropDownOpen, closeDropDowns}) => (
  <View className='flex-col w-full h-fit mt-4'>
    <TitleSection navigation={navigation} />
    <NutritionSection nutrition={nutrition} />
    {
      dropDownOpen ? 
      <Pressable className='absolute z-20 top-0 bottom-0 left-0 right-0'
      onPress={closeDropDowns}/>
      : null
    }
  </View>
)

const ItemDiv = () => (
  <View className='w-full h-2' />
)

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

const MealCardThin = ({item, dropDownOpen, showDropDown, openDropDown, closeDropDowns}) => (
  <View className='z-10 flex-row w-full h-28 p-1 pr-0 rounded-lg bg-itemBgLight'>
    {
      dropDownOpen ? 
      <Pressable className='absolute z-20 top-0 bottom-0 left-0 right-0'
      onPress={closeDropDowns}/>
      : null
    }
    <TouchableOpacity className='flex-row shrink w-full h-full'
    activeOpacity={0.7}>
      <Image className='shrink w-1/2 h-full rounded-md' source={item.image} />
      <View className='flex-col grow w-1/2 ml-1 pl-2 h-full items-center justify-center'>
        <TitleTextComponent translate={true} size={'text-2xl'} css={'h-8 text-itemText text-center'}>
          {item.title}
        </TitleTextComponent>
        <ItemLargeTextComponent bold={true} size={'text-3xl'} css={'mt-1 text-itemText'}>
          {item.cal} Cal
        </ItemLargeTextComponent>
      </View>
    </TouchableOpacity>
    <View className='w-5 h-full items-center justify-center'>
      <EditButton showDropDown={showDropDown} openDropDown={openDropDown} />
    </View>
  </View>
)

const MyMeals = ({ navigation }) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
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
      data: [
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
      data: [
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
      data: [
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
      data: [
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
      data: [
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
      data: [
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
      data: [
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
  // Collapsible
  const [showMeals, setShowMeals] = useState(new Array(7).fill(true));
  const [displayedMeals, setDisplayedMeals] = useState(meals);
  const updateDisplayedMeals = () => {
    const new_arr = [];
    for (let i = 0; i < 7; i++) {
      if (showMeals[i]) {
        new_arr.push(meals[i]);
      } else {
        new_arr.push({
          day: meals[i].day,
          data: [],
        });
      }
    }
    setDisplayedMeals(new_arr);
  }
  const updateShowMeals = (index) => {
    const new_arr = showMeals;
    new_arr[index] = !new_arr[index];
    setShowMeals(new_arr);
    updateDisplayedMeals();
  }

  // Edit Button DropDowns
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const dropDownStates = [];
  const dropDownOpenFunctions = [];
  const dropDownCloseFunctions = [];
  for (let i = 0; i < 21; i++) {
    const [showDropDown, setShowDropDown] = useState(false);
    const openDropDown = () => {
      setDropDownOpen(true);
      setShowDropDown(true);
    }
    dropDownStates.push(showDropDown);
    dropDownOpenFunctions.push(openDropDown);
    dropDownCloseFunctions.push(setShowDropDown);
  }
  const closeDropDowns = () => {
    dropDownCloseFunctions.forEach(f => f(false));
    setDropDownOpen(false);
  }

  return(
    <SafeAreaView id='screen' className='relative z-0 w-full h-full justify-center items-center'>
      <View className='w-full h-full'>
        <SectionList
        className='z-10 w-full h-fit px-4 bg-screenBg'
        contentContainerStyle={{flexGrow: 1}} 
        sections={displayedMeals}
        renderItem={({item, index, section: {day}}) => (
          <View className='z-30 flex-col w-full h-fit'>
            {/* Cards */}
            <View className='z-30 w-full h-fit'>
              <MealCardThin 
              item={item} 
              dropDownOpen={dropDownOpen}
              showDropDown={dropDownStates[days.indexOf(day) * 3 + index]}
              openDropDown={dropDownOpenFunctions[days.indexOf(day) * 3 + index]}
              closeDropDowns={closeDropDowns}
              />
            </View>
          </View>
        )}
        renderSectionHeader={({section: {day}}) => (
          <View className='flex-row w-full h-fit items-center pb-2 pt-4 bg-screenBg'>
            <TitleTextComponent translate={true} size={'text-3xl'} css={'mx-4 text-screenText'}>
              {day}
            </TitleTextComponent>
            <TouchableOpacity className='w-8 h-8 bg-buttonBg rounded-lg' 
            activeOpacity={0.9} onPress={()=>updateShowMeals(days.indexOf(day))}/>
            {
              dropDownOpen ? 
              <Pressable className='absolute z-20 top-0 bottom-0 left-0 right-0'
              onPress={closeDropDowns}/>
              : null
            }
          </View>
        )}
        ListHeaderComponent={
        <HeaderSection 
          navigation={navigation} 
          nutrition={nutrition} 
          dropDownOpen={dropDownOpen} 
          closeDropDowns={closeDropDowns}
        />}
        ListFooterComponent={<View className='w-full h-4' />}
        ItemSeparatorComponent={ItemDiv}
        stickySectionHeadersEnabled={true}
        />
      </View>
    </SafeAreaView>
  )
}

export default MyMeals;