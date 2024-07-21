import React, {useState,} from 'react';
import { Text, View, SafeAreaView, Image,  TextInput, TouchableOpacity, StyleSheet, Platform, FlatList, Dimensions } from 'react-native';


const MealCard = ({title, image}) => (
  <View className='w-48 h-40 justify-center items-center bg-itemBgLight rounded-lg'>
    <Text style={{ fontFamily: 'inconsolata-bold' }} className='text-lg text-itemText -mt-1'>
      {title}
    </Text>

    <Image className='w-[170px] h-[110px] mt-1 rounded-md' source={image} /> 
  </View>
)

const MealCardDiv = () => (
  <View className='w-4 h-36 bg-transparent'/>
)

const HomePage = () => {

  const [isFocusedText,setFocusedText] = useState(new Array(7).fill('text-itemText'))

  const [isFocused, setIsFocused] =  useState(new Array(7).fill(''))
  const setFocus = (index) =>{
    const new_focus = new Array(7).fill('')
    new_focus[index] = 'bg-itemBgLight';
    // const new_text = new Array(7).fill('text-itemText')
    // new_text[index] = 'text-itemBgLight' 
    // setFocusedText(new_text)
    setIsFocused(new_focus);
  }

  const views = new Array(7).fill(null);
  const days = ['Su', 'M', 'T', 'W', 'Th', 'F', 'Sa'];
  const meals = [
    {
      id: 'meal-1',
      image: require('../assets/images/image-recipe-1.jpg'), 
      title: 'Tuna Sandwich', 
    },
    {
      id: 'meal-2',
      image: require('../assets/images/image-recipe-1.jpg'), 
      title: '1 Hour Chili Hot Dog', 
    },
    {
      id: 'meal-3',
      image: require('../assets/images/image-recipe-1.jpg'), 
      title: 'Apple Pie', 
    },
  ]
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
  ]
  
  return (
    <View className='w-full h-full bg-screenBg'>
      {/* Frame 1 - Calendar */}
      <View className='h-fit mx-4 mt-10'>
        <Text style={{ fontFamily: 'inconsolata' }} className=" mx-4 text-3xl text-screenText">
          Your Meal Plan
        </Text>
        {/* Calendar */}
        <View className='h-fit mt-2'>
          
          <View className='flex flex-row w-full h-8 bg-itemBgDark rounded-t-lg'>
            {days.map((day,index) => (
              index == 0? 
                <View className='flex-1 items-center justify-center h-8'>
                 <TouchableOpacity activeOpacity={1} className={`w-full h-full items-center justify-center rounded-t-lg ${isFocused[index]}`}
                  onPress={()=>setFocus(index)}
                 >
                    <Text style={{ fontFamily: 'inconsolata-bold' }} className={`text-xl ${isFocusedText[index]}`}>{day}</Text>
                  </TouchableOpacity>
                </View> 
              : index == 6? 
                <View className='flex-1 items-center justify-center h-8'>
                  <TouchableOpacity activeOpacity={1} className={`w-full h-full items-center justify-center rounded-t-lg ${isFocused[index]}`}
                  onPress={()=>setFocus(index)}
                 >
                    <Text style={{ fontFamily: 'inconsolata-bold' }} className={`text-xl ${isFocusedText[index]}`}>{day}</Text>
                  </TouchableOpacity>
                </View>
              : <View className='flex-1 items-center justify-center h-8'>
                 <TouchableOpacity activeOpacity={1} className={`w-full h-full items-center justify-center rounded-t-lg ${isFocused[index]}`}
                  onPress={()=>setFocus(index)}
                 >
                    <Text style={{ fontFamily: 'inconsolata-bold' }} className={`text-xl ${isFocusedText[index]}`}>{day}</Text>
                  </TouchableOpacity>
                </View>
            ))}
          </View>

          <View className='flex flex-row w-full h-32 bg-itemBgLight rounded-b-lg '>
            
          </View>
        </View>
      </View>

      {/* Frame 2 - Suggested Meals */}
      <View className='h-fit mx-4 mt-6'>
        <Text style={{ fontFamily: 'inconsolata' }} className=" mx-4 text-3xl text-screenText">
          Suggested Meals
        </Text>
        {/* Scroll Cards */}
        <View className='h-fit mt-2'>
          <FlatList className='w-full h-40'
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={meals}
            renderItem={({item}) => <MealCard title={item.title} image={item.image} />}
            ItemSeparatorComponent={<MealCardDiv/>}
            keyExtractor={item => item.id}
            />
        </View>
      </View>

      {/* Frame 3 - Nutrition */}
      <View className='w-fit h-fit mx-4 mt-6'>
        <Text style={{ fontFamily: 'inconsolata' }} className=" mx-4 text-3xl text-screenText">
          Your Meal Plan has:
        </Text>
        {/* Three Cards */}
        <View className='flex-row w-full col-gap-4 h-44 mt-2 mb-8'>
          {nutrition.map((item, index) => (
            index == 2?
              <View id={`nut-${index + 1}`} className={`flex flex-1 h-44 items-center justify-center bg-itemBgLight rounded-lg`}>
                <Text className='font-bold text-xl text-itemText'>
                  {item.value}
                </Text>
                <Text className='font-bold text-xs text-itemText'>
                  {item.unit} 
                </Text>
              </View>
            : <View id={`nut-${index + 1}`} className={`flex flex-1 h-44 mr-4 items-center justify-center bg-itemBgLight rounded-lg`}>
                <Text className='font-bold text-xl text-itemText'>
                  {item.value}
                </Text>
                <Text className='font-bold text-xs text-itemText'>
                  {item.unit} 
                </Text>
              </View>
          ))}
        </View>
      </View>
    </View>
  )
}

export default HomePage;