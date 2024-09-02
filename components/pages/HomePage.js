import React, {useState, useContext, useEffect } from 'react';
import { SideBarContext } from './HomeControl';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler, View, Dimensions, SafeAreaView, Image,ScrollView, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import TitleTextComponent from '../text/TitleTextComponent';
import ItemTextComponent from '../text/ItemTextComponent';
import ItemLargeTextComponent from '../text/ItemLargeTextComponent';
import {useTranslation} from 'react-i18next';
import 'intl-pluralrules';
import '../text/i18n'
import SideBarButton from '../general/SideBarButton';
import Check from '../../assets/icons/check.svg';
import ArrowDown from '../../assets/icons/arrowdown.svg';
import ArrowUp from '../../assets/icons/arrowup.svg';
import DoubleArrowDown from '../../assets/icons/doublearrowdown.svg';
import DoubleArrowUp from '../../assets/icons/doublearrowup.svg';

const MealSum = ({callback, title, image, cal}) => (
  <TouchableOpacity className='flex flex-row w-full h-full space-x-2'
  activeOpacity={0.7} onPress={()=>callback()}>
    <Image className='flex flex-1 h-full rounded-md' source={image} />
    <View className='flex flex-1 flex-col h-full items-center justify-center'>
      <TitleTextComponent translate={true} size={'text-2xl'} bold={true} css={'text-center text-itemText -mt-2'}>
        {title}
      </TitleTextComponent>
      <View className='flex-row w-full h-12 items-center justify-center'>
        <ItemLargeTextComponent bold={true} size={'text-4xl'} css={'text-itemText'}>
          {cal} Cal
        </ItemLargeTextComponent>
      </View>
    </View>
  </TouchableOpacity>
)

const MealCard = ({callback, title, image}) => (
  <TouchableOpacity className='w-56 h-full justify-center items-center p-2 bg-itemBgLight rounded-lg'
  activeOpacity={0.9} onPress={()=>callback()}>
    <ItemTextComponent translate={true} size={'text-xl'} sizeDiff={-2} css={'text-center text-itemText text-center'}>
      {title}
    </ItemTextComponent>
    <Image className='flex flex-1 w-full mt-1 rounded-md' source={image} /> 
  </TouchableOpacity>
)

const MealCardDiv = () => (
  <View className='w-4 h-full'/>
)

const NutritionCard = ({item, index, nutritionStandard, nutritionStandardRange}) => {
  let IconName = null;
  if (item.value < nutritionStandard[index] - nutritionStandardRange[index]) {
    IconName = ArrowUp;
  } else if (item.value > nutritionStandard[index] + nutritionStandardRange[index]) {
    IconName = ArrowDown;
  } else {
    IconName = Check;
  }
  return(
    <View className={`w-full h-full min-h-40 items-center justify-center bg-itemBgLight rounded-lg`}>
      <View className='w-6 h-6 -mt-4 items-center justify-center'>
        <IconName width={30} height={30} stroke={'#85855B'} strokeWidth={3} />
      </View>
      <ItemLargeTextComponent bold={true} size={'text-3xl'} css={'text-itemText mt-4'}>
        {item.value}{ index == 0? '' : 'g' }
      </ItemLargeTextComponent>
      <ItemLargeTextComponent translate={true} bold={true} size={'text-2xl'} css={'text-itemText'}>
        {item.unit}
      </ItemLargeTextComponent>
    </View>
  )
}

const { width, height } = Dimensions.get('window');

const HomePage = ({ navigation }) => {
  const {wideScreen, setShowSideBar, updatePage} = useContext(SideBarContext);

  // Android BackButton exits app instead of going to Login
  // https://reactnavigation.org/docs/custom-android-back-button-handling/
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => subscription.remove();
    })
  ); 

  {/* State/Functions */}
  const [isFocused, setIsFocused] = useState(new Array(7).fill('bg-itemBgDark'));
  const setFocus = (index) => {
    const new_focus = new Array(7).fill('bg-itemBgDark');
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
    const new_color = new Array(3).fill('bg-itemBgDark');
    new_color[index] = 'bg-itemText';
    setMealColor(new_color);

    const new_text = new Array(3).fill('text-itemText');
    new_text[index] = 'text-itemBgLight';
    setMealText(new_text);
  }

  const [nutritionStandard, setNutritionStandard] = useState([2000, 500, 1000]);
  const [nutritionStandardRange, setNutritionStandardRange] = useState([600, 100, 200]);

  {/* Data */}
  const views = new Array(7).fill(null);
  const days = ['Su', 'M', 'T', 'W', 'Th', 'F', 'Sa'];
  const meals = [
    {
      title: 'Waffles', 
      image: require('../../assets/images/meal-example/meal-1.jpg'),
      cal: 312,
    },
    {
      title: 'Tuna Sandwich', 
      image: require('../../assets/images/meal-example/meal-2.jpg'),
      cal: 746,
    },
    {
      title: 'Sirloin Steak', 
      image: require('../../assets/images/meal-example/meal-3.jpg'),
      cal: 539,
    },
  ]
  const recipes = [
    {
      id: 'meal-1',
      title: 'Tuna Sandwich', 
      image: require('../../assets/images/suggested-example/image-recipe-1.jpg'), 
    },
    {
      id: 'meal-2',
      title: 'Chili Hot Dog', 
      image: require('../../assets/images/suggested-example/image-recipe-1.jpg'), 
    },
    {
      id: 'meal-3',
      title: 'Apple Pie', 
      image: require('../../assets/images/suggested-example/image-recipe-1.jpg'), 
    },
  ];
  const nutrition = [
    {
      id: 'calorie',
      value: 1261,
      unit: 'Cal',
    },
    {
      id: 'protein',
      value: 487,
      unit: 'Protein',
    },
    {
      id: 'carb',
      value: 1452,
      unit: 'Carbs',
    },
  ];
 
  const {t, i18n} = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <SafeAreaView id='screen' className='w-full h-full flex-row justify-center items-center'>
      {/* Content */}
      <View className='flex-col shrink w-full h-full'>
        <ScrollView 
        contentContainerStyle={{flexGrow: 1}} 
        id='content' 
        className='grow w-full h-fit'
        showsVerticalScrollIndicator={false}>
          <View className='grow w-full h-fit p-4 bg-screenBg'>
            {/* Frame 1 - Calendar */}
            <View className='grow w-full min-h-fit mt-2'>
              <View className='flex-row w-full h-fit mt-2'>
                <View className='w-fit h-fit ml-2'>
                  {
                    wideScreen ? null : <SideBarButton callback={setShowSideBar} />
                  }
                </View>
                <TitleTextComponent translate={true} size={'text-3xl'} css={'mx-4 text-screenText'}>
                  Your Meal Plan
                </TitleTextComponent>
              </View>
              {/* Calendar */}
              <View className='grow h-48 mt-2'>
                <View className='flex flex-row w-full h-8 bg-itemBgDark rounded-t-lg'>
                  {days.map((day,index) => (
                    index == 0? 
                      <View key={`day-${index}`} className='shrink w-full h-8'>
                        <TouchableHighlight className={`w-full h-full items-center justify-center rounded-t-lg`}
                        activeOpacity={0.96} onPress={()=>setFocus(index)}>
                          <View className={`w-full h-full items-center justify-center rounded-t-lg ${isFocused[index]}`}>
                            <TitleTextComponent translate={true} size={'text-2xl'} sizeDiff={-1} css={'text-itemText'}>
                              {day}
                            </TitleTextComponent>
                          </View>
                        </TouchableHighlight>
                      </View> 
                    : index == 6? 
                      <View key={`day-${index}`} className='shrink w-full h-8'>
                        <TouchableHighlight className={`w-full h-full items-center justify-center rounded-t-lg`}
                        activeOpacity={0.96} onPress={()=>setFocus(index)}>
                          <View className={`w-full h-full items-center justify-center rounded-t-lg ${isFocused[index]}`}>
                            <TitleTextComponent translate={true} size={'text-2xl'} sizeDiff={-1} css={'text-itemText'}>
                              {day}
                            </TitleTextComponent>
                          </View>
                        </TouchableHighlight>
                      </View>
                    : <View key={`day-${index}`} className='shrink w-full h-8'>
                        <TouchableHighlight className={`w-full h-full items-center justify-center rounded-t-lg`}
                        activeOpacity={0.96} onPress={()=>setFocus(index)}>
                          <View className={`w-full h-full items-center justify-center rounded-t-lg ${isFocused[index]}`}>
                            <TitleTextComponent translate={true} size={'text-2xl'} sizeDiff={-1} css={'text-itemText'}>
                              {day}
                            </TitleTextComponent>
                          </View>
                        </TouchableHighlight>
                      </View>
                  ))}
                </View>
                {/* Calendar Content */}
                <View className='grow w-full h-40 bg-itemBgLight rounded-b-lg p-2'>
                  <View className='flex flex-col w-full h-full'>
                    {/* Buttons */}
                    <View className='flex flex-row w-full h-7'>
                      <TouchableHighlight className={`shrink w-full h-7 rounded-l-lg`}
                      activeOpacity={0.9} onPress={()=>setMealFocus(0)}>
                        <View className={`w-full h-full items-center justify-center rounded-l-lg ${mealColor[0]}`}>
                          <TitleTextComponent translate={true} size={'text-xl'} bold={true} css={mealText[0]}>
                            Breakfast
                          </TitleTextComponent>
                        </View>
                      </TouchableHighlight>
                      <TouchableHighlight className={`shrink w-full h-7 ${mealColor[1]}`}
                      activeOpacity={0.9} onPress={()=>setMealFocus(1)}>
                        <View className={`w-full h-full items-center justify-center ${mealColor[1]}`}>
                          <TitleTextComponent translate={true} size={'text-xl'} bold={true} css={mealText[1]}>
                            Lunch
                          </TitleTextComponent>
                        </View>
                      </TouchableHighlight>
                      <TouchableHighlight className={`shrink w-full h-7 rounded-r-lg`}
                      activeOpacity={0.9} onPress={()=>setMealFocus(2)}>
                        <View className={`w-full h-full items-center justify-center  rounded-r-lg ${mealColor[2]}`}>
                          <TitleTextComponent translate={true} size={'text-xl'} bold={true} css={mealText[2]}>
                            Dinner
                          </TitleTextComponent>
                        </View>
                      </TouchableHighlight>
                    </View>
                    {/* Meal Content */}
                    <View className='flex flex-1 h-full mt-2'>
                      <MealSum callback={null} title={meals[mealIndex].title} image={meals[mealIndex].image} cal={meals[mealIndex].cal} />
                    </View>
                  </View>
                </View>
              </View>
            </View>

            {/* Frame 2 - Suggested Meals */}
            <View className='grow min-h-fit mt-6'>
              <TitleTextComponent translate={true} size={'text-3xl'} css={'mx-4 text-screenText'}>
                Suggested Meals
              </TitleTextComponent>
              {/* Scroll Cards */}
              <View className='grow w-full h-fit mt-2'>
                <FlatList className='grow w-full h-36'
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={recipes}
                  renderItem={({item}) => <MealCard callback={null} title={item.title} image={item.image} />}
                  ItemSeparatorComponent={<MealCardDiv/>}
                  keyExtractor={item => item.id}
                  />
              </View>
            </View>

            {/* Frame 3 - Nutrition */}
            <View className='grow min-h-fit mt-6 mb-2'>
              <TitleTextComponent translate={true} size={'text-3xl'} css={'mx-4 text-screenText'}>
                Your Meal Plan has:
              </TitleTextComponent>
              {/* Three Cards */}
              <View className={`grow flex-row w-full h-40 mt-2 space-x-4`}>
                {nutrition.map((item, index) => (
                  <View className='shrink w-full h-full'>
                    <NutritionCard 
                    item={item} 
                    index={index} 
                    nutritionStandard={nutritionStandard}
                    nutritionStandardRange={nutritionStandardRange}/>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default HomePage;