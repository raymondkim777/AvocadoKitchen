import React, {useState,} from 'react';
import { Text, View, Dimensions, SafeAreaView, Image,ScrollView,  TextInput, TouchableOpacity, StyleSheet, Platform, FlatList } from 'react-native';
import HomeBar from './HomeBar';

const MealSum = ({title, image, cal}) => (
  <View className='flex flex-row w-full h-full space-x-2'>
    <Image className='flex flex-1 h-full rounded-md' source={image} />
    <View className='flex flex-1 flex-col h-full items-center justify-center'>
      <Text className='font-inconsolataBold -mt-2 text-2xl text-itemText'>
        {title}
      </Text>
      <View className='w-full h-12 items-center justify-center'>
        <Text className='font-fredoka text-4xl text-itemText'>{cal} Cal</Text>
      </View>
    </View>
  </View>
)

const MealCard = ({title, image}) => (
  <View className='w-56 h-full justify-center items-center p-2 bg-itemBgLight rounded-lg'>
    <Text className='font-inconsolata text-xl text-itemText -mt-1'>
      {title}
    </Text>
    <Image className='flex flex-1 w-full mt-1 rounded-md' source={image} /> 
  </View>
)

const MealCardDiv = () => (
  <View className='w-4 h-full'/>
)

const { width, height } = Dimensions.get('window');

const HomePage = () => {

  {/* Data */}
  const days = ['Su', 'M', 'T', 'W', 'Th', 'F', 'Sa'];
  const meals = [
    {
      title: 'Waffles', 
      image: require('../assets/images/meal-1.jpg'),
      cal: 312,
    },
    {
      title: 'Tuna Sandwich', 
      image: require('../assets/images/meal-2.jpg'),
      cal: 746,
    },
    {
      title: 'Sirloin Steak', 
      image: require('../assets/images/meal-3.jpg'),
      cal: 539,
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
  const [mealColor, setMealColor] = useState(['bg-itemText', 'bg-itemBgDark', 'bg-itemBgDark']);  // button color
  const [mealText, setMealText] = useState(['text-itemBgLight', 'text-itemText', 'text-itemText']);  // text color
  const setMealFocus = (index) => {
    setMealIndex(index);
    const new_color = new Array(meals.length).fill('bg-itemBgDark');
    new_color[index] = 'bg-itemText';
    setMealColor(new_color);

    const new_text = new Array(meals.length).fill('text-itemText');
    new_text[index] = 'text-itemBgLight';
    setMealText(new_text);
  }
  
  {/* View */}
  const Container = height > 800 ?  View : ScrollView;
  
  return (
    <View id='screen' className='flex flex-col w-full h-full justify-center items-center'>
       {Platform.OS === 'ios' && (
        <View className='w-full bg-screenBg h-8'>
        </View>
      )}
      <Container id='scroll' className='grow w-full h-fit bg-screenBg'>
        <View id='content' className='grow w-full h-fit p-4'>
          {/* Frame 1 - Calendar */}
          <View className='grow w-full min-h-fit mt-2'>
            <Text className="font-inconsolata mx-4 text-3xl text-screenText">
              Your Meal Plan
            </Text>
            {/* Calendar */}
            <View className='grow h-52 mt-2'>
              <View className='flex flex-row w-full h-8 bg-itemBgDark rounded-t-lg'>
                {days.map((day,index) => (
                  index == 0? 
                    <View key={`day-${index}`} className='flex-1 items-center justify-center h-8'>
                    <TouchableOpacity activeOpacity={1} className={`w-full h-full items-center justify-center rounded-t-lg ${isFocused[index]}`}
                      onPress={()=>setFocus(index)}>
                        <Text className={`font-inconsolataBold text-2xl text-itemText`}>{day}</Text>
                      </TouchableOpacity>
                    </View> 
                  : index == 6? 
                    <View key={`day-${index}`} className='flex-1 items-center justify-center h-8'>
                      <TouchableOpacity activeOpacity={1} className={`w-full h-full items-center justify-center rounded-t-lg ${isFocused[index]}`}
                      onPress={()=>setFocus(index)}>
                        <Text className={`font-inconsolataBold text-2xl text-itemText`}>{day}</Text>
                      </TouchableOpacity>
                    </View>
                  : <View key={`day-${index}`} className='flex-1 items-center justify-center h-8'>
                    <TouchableOpacity activeOpacity={1} className={`w-full h-full items-center justify-center rounded-t-lg ${isFocused[index]}`}
                      onPress={()=>setFocus(index)}>
                        <Text className={`font-inconsolataBold text-2xl text-itemText`}>{day}</Text>
                      </TouchableOpacity>
                    </View>
                ))}
              </View>
              {/* Calendar Content */}
              <View className='grow w-full h-44 bg-itemBgLight rounded-b-lg p-2'>
                <View className='flex flex-col w-full h-full'>
                  {/* Buttons */}
                  <View className='flex flex-row w-full h-7'>
                    <TouchableOpacity className={`flex flex-1 h-7 items-center justify-center rounded-l-lg ${mealColor[0]}`}
                      activeOpacity={1} onPress={()=>setMealFocus(0)}>
                      <Text className={`font-inconsolataBold text-xl ${mealText[0]}`}>Breakfast</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className={`flex flex-1 h-7 items-center justify-center ${mealColor[1]}`}
                      activeOpacity={1} onPress={()=>setMealFocus(1)}>
                      <Text className={`font-inconsolataBold text-xl ${mealText[1]}`}>Lunch</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className={`flex flex-1 h-7 items-center justify-center rounded-r-lg ${mealColor[2]}`}
                      activeOpacity={1} onPress={()=>setMealFocus(2)}>
                      <Text className={`font-inconsolataBold text-xl ${mealText[2]}`}>Dinner</Text>
                    </TouchableOpacity>
                  </View>
                  {/* Meal Content */}
                  <View className='flex flex-1 h-full mt-2'>
                    <MealSum title={meals[mealIndex].title} image={meals[mealIndex].image} cal={meals[mealIndex].cal} />
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Frame 2 - Suggested Meals */}
          <View className='grow min-h-fit mt-6'>
            <Text className="font-inconsolata mx-4 text-3xl text-screenText">
              Suggested Meals
            </Text>
            {/* Scroll Cards */}
            <View className='grow w-full h-fit mt-2'>
              <FlatList className='grow w-full h-40'
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
          <View className='grow min-h-fit mt-6 mb-2'>
            <Text className="font-inconsolata mx-4 text-3xl text-screenText">
              Your Meal Plan has:
            </Text>
            {/* Three Cards */}
            <View className={`grow flex-row w-full h-40 mt-2`}>
              {nutrition.map((item, index) => (
                index == 2?
                  <View key={`nut-${index + 1}`} className={`flex-1 min-h-40 items-center justify-center bg-itemBgLight rounded-lg`}>
                    <View className='w-6 h-6 -mt-4 bg-itemBgDark rounded-lg'/>
                    <Text className='font-fredoka mt-3 text-3xl text-itemText'>
                      {item.value}{ index == 0? '' : 'g' }
                    </Text>
                    <Text className='font-fredoka -mt-1 text-2xl text-itemText'>
                      {item.unit} 
                    </Text>
                  </View>
                : <View key={`nut-${index + 1}`} className={`flex-1 min-h-40 mr-4 items-center justify-center bg-itemBgLight rounded-lg`}>
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
      </Container>

      {/* HomeBar */}
      <View id='homebar' className='w-full h-20'>
        <HomeBar/>
      </View>
    </View>
  )
}

export default HomePage;