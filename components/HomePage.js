import React, {useState,} from 'react';
import { Text, View, SafeAreaView, Image,  TextInput, TouchableOpacity, StyleSheet, Platform, FlatList, Dimensions } from 'react-native';
import HomeBar from './HomeBar';

const MealSum = ({meal, title, image}) => (
  <View className='flex flex-col w-full h-full'>
    <Text className=''>
      {meal}
    </Text>
    <Text className=''>
      {title}
    </Text>
    <Image className='w-full h-28 rounded-md' source={image} />
  </View>
)

const MealCard = ({title, image}) => (
  <View className='w-56 h-44 justify-center items-center bg-itemBgLight rounded-lg'>
    <Text className='font-inconsolata text-xl text-itemText -mt-1'>
      {title}
    </Text>
    <Image className='w-[204px] h-[130px] mt-1 rounded-md' source={image} /> 
  </View>
)

const MealCardDiv = () => (
  <View className='w-4 h-36 bg-transparent'/>
)

const HomePage = () => {
  {/* State/Functions */}
  const [isFocused, setIsFocused] = useState(new Array(7).fill(''));
  const setFocus = (index) => {
    const new_focus = new Array(7).fill('');
    new_focus[index] = 'bg-itemBgLight';
    // const new_text = new Array(7).fill('text-itemText')
    // new_text[index] = 'text-itemBgLight' 
    // setFocusedText(new_text)
    setIsFocused(new_focus);
  }
  const [mealIndex, setMealIndex] = useState(0);  // index
  const [mealColor, setMealColor] = useState(new Array(3).fill('bg-itemBgDark'));  // button color
  const [mealText, setMealText] = useState(new Array(3).fill('text-itemText'));  // text color
  const setMealFocus = (index) => {
    setMealIndex(index);
    const new_color = new Array(3).fill('bg-itemBgDark');
    new_color[index] = 'bg-itemText';
    setMealColor(new_color);

    const new_text = new Array(3).fill('text-itemText');
    new_text[index] = 'text-itemBgLight';
    setMealText(new_text);
  }

  {/* Data */}
  const views = new Array(7).fill(null);
  const days = ['Su', 'M', 'T', 'W', 'Th', 'F', 'Sa'];
  const meals = [
    {
      title: 'Waffles', 
      image: require('../assets/images/meal-1.jpg'),
    },
    {
      title: 'Tuna Sandwich', 
      image: require('../assets/images/meal-2.jpg'),
    },
    {
      title: 'Sirloin Steak', 
      image: require('../assets/images/meal-3.jpg'),
    },
  ]
  const recipes = [
    {
      id: 'meal-1',
      title: 'Tuna Sandwich', 
      image: require('../assets/images/image-recipe-1.jpg'), 
    },
    {
      id: 'meal-2',
      title: '1 Hour Chili Hot Dog', 
      image: require('../assets/images/image-recipe-1.jpg'), 
    },
    {
      id: 'meal-3',
      title: 'Apple Pie', 
      image: require('../assets/images/image-recipe-1.jpg'), 
    },
  ];
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
  
  return (
    <View id='screen' className='flex flex-col w-full h-full'>
      <View className='flex flex-1 w-full h-full bg-screenBg p-4'>
        {/* Frame 1 - Calendar */}
        <View className='h-fit mt-2'>
          <Text className="font-inconsolata mx-4 text-3xl text-screenText">
            Your Meal Plan
          </Text>
          {/* Calendar */}
          <View className='h-fit mt-2'>
            <View className='flex flex-row w-full h-9 bg-itemBgDark rounded-t-lg'>
              {days.map((day,index) => (
                index == 0? 
                  <View key={`day-${index}`} className='flex-1 items-center justify-center h-9'>
                  <TouchableOpacity activeOpacity={1} className={`w-full h-full items-center justify-center rounded-t-lg ${isFocused[index]}`}
                    onPress={()=>setFocus(index)}>
                      <Text className={`font-inconsolata-bold text-2xl text-itemText`}>{day}</Text>
                    </TouchableOpacity>
                  </View> 
                : index == 6? 
                  <View key={`day-${index}`} className='flex-1 items-center justify-center h-9'>
                    <TouchableOpacity activeOpacity={1} className={`w-full h-full items-center justify-center rounded-t-lg ${isFocused[index]}`}
                    onPress={()=>setFocus(index)}>
                      <Text className={`font-inconsolata-bold text-2xl text-itemText`}>{day}</Text>
                    </TouchableOpacity>
                  </View>
                : <View key={`day-${index}`} className='flex-1 items-center justify-center h-9'>
                  <TouchableOpacity activeOpacity={1} className={`w-full h-full items-center justify-center rounded-t-lg ${isFocused[index]}`}
                    onPress={()=>setFocus(index)}>
                      <Text className={`font-inconsolata-bold text-2xl text-itemText`}>{day}</Text>
                    </TouchableOpacity>
                  </View>
              ))}
            </View>
            {/* Calendar Content */}
            <View className='w-full h-40 bg-itemBgLight rounded-b-lg p-2'>
              <View className='flex flex-col w-full h-full'>
                {/* Buttons */}
                <View className='flex flex-row w-full h-7'>
                  <TouchableOpacity activeOpacity={1} className={`flex flex-1 h-7 items-center justify-center rounded-l-lg ${mealColor[0]}`}
                    onPress={()=>setMealFocus(0)}>
                      <Text className={`font-inconsolata-bold text-xl ${mealText[0]}`}>Breakfast</Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1} className={`flex flex-1 h-7 items-center justify-center ${mealColor[1]}`}
                    onPress={()=>setMealFocus(1)}>
                      <Text className={`font-inconsolata-bold text-xl ${mealText[1]}`}>Lunch</Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1} className={`flex flex-1 h-7 items-center justify-center rounded-r-lg ${mealColor[2]}`}
                    onPress={()=>setMealFocus(2)}>
                      <Text className={`font-inconsolata-bold text-xl ${mealText[2]}`}>Dinner</Text>
                  </TouchableOpacity>
                </View>
                {/* Meal Content */}
                <View>

                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Frame 2 - Suggested Meals */}
        <View className='h-fit mt-6'>
          <Text className="font-inconsolata mx-4 text-3xl text-screenText">
            Suggested Meals
          </Text>
          {/* Scroll Cards */}
          <View className='h-fit mt-2'>
            <FlatList className='w-full h-44'
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={recipes}
              renderItem={({item}) => <MealCard title={item.title} image={item.image} />}
              ItemSeparatorComponent={<MealCardDiv/>}
              keyExtractor={item => item.id}
              />
          </View>
        </View>

        {/* Frame 3 - Nutrition */}
        <View className='flex-1 h-auto mt-6 mb-2'>
          <Text className="font-inconsolata mx-4 text-3xl text-screenText">
            Your Meal Plan has:
          </Text>
          {/* Three Cards */}
          <View className='flex-row flex-1 w-full col-gap-4 h-max mt-2'>
            {nutrition.map((item, index) => (
              index == 2?
                <View key={`nut-${index + 1}`} className={`flex flex-1 items-center justify-center bg-itemBgLight rounded-lg`}>
                  <View className='w-6 h-6 -mt-4 bg-itemBgDark rounded-lg'/>
                  <Text className='font-fredoka mt-3 text-3xl text-itemText'>
                    {item.value}{ index == 0? '' : 'g' }
                  </Text>
                  <Text className='font-fredoka -mt-1 text-2xl text-itemText'>
                    {item.unit} 
                  </Text>
                </View>
              : <View key={`nut-${index + 1}`} className={`flex flex-1 mr-4 items-center justify-center bg-itemBgLight rounded-lg`}>
                  <View className='w-6 h-6 -mt-4 bg-itemBgDark rounded-lg'/>
                  <Text className='font-fredoka mt-3 text-3xl text-itemText'>
                    { item.value}{ index == 0? '' : 'g' }
                  </Text>
                  <Text className='font-fredoka -mt-1 text-2xl text-itemText'>
                    {item.unit} 
                  </Text>
                </View>
            ))}
          </View>
        </View>
      </View>

      {/* HomeBar */}
      <View id='homebar' className='w-full h-20'>
        <HomeBar/>
      </View>
    </View>
  )
}

export default HomePage;