import React, { useState, useContext, } from 'react';
import { SideBarContext } from '../control/HomeControl';
import { MealContext } from '../control/AddMealControl';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler, View, SafeAreaView, Dimensions, ScrollView, Pressable, TouchableHighlight } from 'react-native';
import SideBarButton from '../../general/sidebar/SideBarButton';
import ExitButtonGeneral from '../../general/buttons/ExitButtonGeneral';
import SmallButton from '../../general/buttons/SmallButton';
import LargeButton from '../../general/buttons/LargeButton';
import IngredientsTable from '../../recipe/ingredient/IngredientsTable';
import ProcedureTable from '../../recipe/procedure/ProcedureTable';
import TitleTextComponent from '../../text/TitleTextComponent';
import ItemTextInputComponent from '../../text/ItemTextInputComponent';

const AddMealPage = ({ navigation }) => {
  const { wideScreen, setShowSideBar, updatePage } = useContext(SideBarContext);
  const { 
    recipeItem,  
    setIngredientItem,
    setProcedureItem,
  } = useContext(MealContext);
  
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        updatePage(0);
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => subscription.remove();
    })
  ); 
  
  const handleExitPress = () => {
    recipeItem.preset ? navigation.goBack() : updatePage(0);
  }

  const handleChooseRecipe = () => {
    null;
  }
  const handleAddIngredient = () => {
    navigation.navigate('AddIngredient');
  }
  const handleEditIngredient = (item) => {
    setIngredientItem(item);
    navigation.navigate('AddIngredient');
  }

  const handleAddProcedure = () => {
    navigation.navigate('AddProcedure');
  }

  const handleEditProcedure = (item) => {
    setProcedureItem(item);
    navigation.navigate('AddProcedure');
  }

  const handleContinue = () =>{
    navigation.navigate('AddMealPage2');
  }
  
  {/* References */}
  
  {/* Data */}
  const ingredients = [
    {
      id: 'canned-tuna',
      name: 'Canned Tuna',
      amount: 1,
      unit: '개',
      image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
      link: 'https://coupang.com/example_link',
    },
    {
      id: 'celery',
      name: 'Celery',
      amount: '1/3', 
      unit: '컵',
      image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
      link: 'https://coupang.com/example_link',
    },
    {
      id: 'red-onion',
      name: 'Red Onion',
      amount: 2, 
      unit: 'Ts',
      image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
      link: 'https://coupang.com/example_link',
    },
    {
      id: 'pickle-relish',
      name: 'Sweet Pickle Relish',
      amount: 2, 
      unit: 'Ts',
      image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
      link: 'https://coupang.com/example_link',
    },
    {
      id: 'lemon',
      name: 'Lemon',
      amount: 1,
      unit: '개',
      image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
      link: 'https://coupang.com/example_link',
    },
    {
      id: 'garlic-clove',
      name: 'Garlic Clove',
      amount: 1, 
      unit: '개',
      image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
      link: 'https://coupang.com/example_link',
    },
    {
      id: 'salt',
      name: 'Salt',
      amount: 0, 
      unit: '적당량',
      image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
      link: 'https://coupang.com/example_link',
    },
    {
      id: 'black-pepper',
      name: 'Black Pepper',
      amount: 0, 
      unit: '적당량',
      image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
      link: 'https://coupang.com/example_link',
    },
    {
      id: 'mayo',
      name: 'Mayonnaise',
      amount: 1,
      unit: '컵',
      image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
      link: 'https://coupang.com/example_link',
    },
  ];
  const procedure = [
    {
      step: 1, 
      description: '(Recipe Step 1)',
      image: require('../../../assets/images/procedure-example/step-1.webp'),
    },
    {
      step: 2, 
      description: '(Recipe Step 2)',
      image: require('../../../assets/images/procedure-example/step-2.jpg'),
    },
  ];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const mealTime = ['Breakfast', 'Lunch', 'Dinner'];

  { /* State/Functions */}
  const [cardWidth, setCardWidth] = useState(Dimensions.get('window').width);

  const onLayoutCard = (event) => {
    const { width } = event.nativeEvent.layout;
    setCardWidth(width);
  };

  {/* DropDowns */}
  const [dayIndex, setDayIndex] = useState(0);
  const [mealTimeIndex, setMealTimeIndex] = useState(0);

  const [showDropDown1, setShowDropDown1] = useState(false)
  const [showDropDown2, setShowDropDown2] = useState(false)
  const closeDropDowns = () => {
    setShowDropDown1(false);
    setShowDropDown2(false);
  }

  const [dropDown1ButtonCSS, setDropDown1ButtonCSS] = useState(
    new Array(dayIndex).fill('bg-buttonBg').concat(
      ['bg-itemText'].concat(
        new Array(days.length - dayIndex - 1).fill('bg-buttonBg')
      )
    )
  );
  const [dropDown1Text, setDropDown1Text] = useState(
    new Array(dayIndex).fill('text-itemText').concat(
      ['text-itemBgLight'].concat(
        new Array(days.length - dayIndex - 1).fill('text-itemText')
      )
    )
  );
  const update1ButtonCSS = (index) => {
    const new_css = new Array(days.length).fill('bg-buttonBg');
    new_css[index] = 'bg-itemText';
    setDropDown1ButtonCSS(new_css);
  }
  const update1TextCSS = (index) => {
    const new_text = new Array(days.length).fill('text-itemText');
    new_text[index] = 'text-itemBgLight';
    setDropDown1Text(new_text);
  }
  const updateDropDown1 = (index) => {
    setDayIndex(index);
    update1ButtonCSS(index);
    update1TextCSS(index);
    setShowDropDown1(!showDropDown1);
  }
  const [dropDown2ButtonCSS, setDropDown2ButtonCSS] = useState(
    new Array(mealTimeIndex).fill('bg-buttonBg').concat(
      ['bg-itemText'].concat(
        new Array(mealTime.length - mealTimeIndex - 1).fill('bg-buttonBg')
      )
    )
  );
  const [dropDown2Text, setDropDown2Text] = useState(
    new Array(mealTimeIndex).fill('text-itemText').concat(
      ['text-itemBgLight'].concat(
        new Array(mealTime.length - mealTimeIndex - 1).fill('text-itemText')
      )
    )
  );
  const update2ButtonCSS = (index) => {
    const new_css = new Array(mealTime.length).fill('bg-buttonBg');
    new_css[index] = 'bg-itemText';
    setDropDown2ButtonCSS(new_css);
  }
  const update2TextCSS = (index) => {
    const new_text = new Array(mealTime.length).fill('text-itemText');
    new_text[index] = 'text-itemBgLight';
    setDropDown2Text(new_text);
  }
  const updateDropDown2 = (index) => {
    setMealTimeIndex(index);
    update2ButtonCSS(index);
    update2TextCSS(index);
    setShowDropDown2(!showDropDown2);
  }

  const [mealName, setMealName] = useState(recipeItem.name);
 
  return (
    <SafeAreaView id='screen' className='relative w-full h-full justify-center items-center bg-screenBg'>
      <ScrollView className='grow w-full h-fit'>
        <View id='content' className='grow w-full h-fit p-4'>
          {/* Title */}
          <View className='flex-row w-full h-fit justify-between mt-2'>
            {
              wideScreen ? null : <SideBarButton callback={setShowSideBar} />
            }
            <TitleTextComponent translate={true} size={'text-3xl'} css={'mx-4 text-screenText'}>
            Add Your Meal
            </TitleTextComponent>
            <ExitButtonGeneral handleMainFunction={handleExitPress} exitCheck={true}/>
          </View>

          {
            showDropDown1 || showDropDown2 ? 
            <Pressable className='absolute z-10 w-screen h-screen justify-center items-center' 
            onPress={closeDropDowns}/>
            : null
          }

          {/* Choose Day */}
          <View className='flex-col w-full h-fit mt-6'>
            <View className='w-full h-6'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                Meal Time
              </TitleTextComponent>
            </View>
            <View className='flex-row items-center justify-center shrink w-full h-fit mt-2'>
              <View onLayout={onLayoutCard} className='relative z-10 shrink w-full h-fit items-center mr-4'>
                <TouchableHighlight className='w-full h-9 items-center justify-center rounded-xl'
                activeOpacity={0.9} onPress={()=>setShowDropDown1(!showDropDown1)}>
                  <View className='w-full h-full items-center justify-center border-2 border-itemText bg-buttonBg rounded-xl'>
                    <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemText'}>
                      {days[dayIndex]}
                    </TitleTextComponent>
                  </View>
                </TouchableHighlight>
                {
                  showDropDown1 
                  ? <View style={{width: cardWidth}} className='absolute left-0 -bottom-60 z-10 h-60 py-2'>
                      <View className='flex-col w-full h-full items-center justify-center bg-buttonBg border-2 border-itemText rounded-xl'>
                        {days.map((item, index)=>(
                          <TouchableHighlight className={`shrink w-full h-full items-center justify-center rounded-[10px] overflow-hidden`}
                          activeOpacity={0.9} onPress={()=>updateDropDown1(index)}>
                            <View className={`w-full h-full items-center justify-center ${dropDown1ButtonCSS[index]}`}>
                              <TitleTextComponent translate={true} size={'text-lg'} css={dropDown1Text[index]}>
                                {item}
                              </TitleTextComponent>
                            </View>
                          </TouchableHighlight>
                        ))}
                      </View>
                    </View>
                  : null
                }
              </View>
              <View className='relative z-10 shrink w-full h-fit items-center'>
                <TouchableHighlight className='w-full h-9 items-center justify-center rounded-xl'
                activeOpacity={0.9} onPress={()=>setShowDropDown2(!showDropDown2)}>
                  <View className='w-full h-full items-center justify-center border-2 border-itemText bg-buttonBg rounded-xl'>
                    <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemText'}>
                      {mealTime[mealTimeIndex]}
                    </TitleTextComponent>
                  </View>
                </TouchableHighlight>
                {
                  showDropDown2
                  ? <View style={{width: cardWidth}} className='absolute left-0 -bottom-28 z-10 h-28 py-2'>
                      <View className='flex-col w-full h-full items-center justify-center bg-buttonBg border-2 border-itemText rounded-xl'>
                        {mealTime.map((item, index)=>(
                          <TouchableHighlight className={`shrink w-full h-full items-center justify-center rounded-[10px] overflow-hidden`}
                          activeOpacity={0.9} onPress={()=>updateDropDown2(index)}>
                            <View className={`w-full h-full items-center justify-center ${dropDown2ButtonCSS[index]}`}>
                              <TitleTextComponent translate={true} size={'text-lg'} css={dropDown2Text[index]}>
                                {item}
                              </TitleTextComponent>
                            </View>
                          </TouchableHighlight>
                        ))}
                      </View>
                    </View>
                  : null
                }
              </View>
            </View>
          </View>

          {/* Choose Recipe Button */}
          <View className='flex-col w-full h-fit items-center justify-center mt-6'>
            <View className='w-full h-6'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                Quick Meal Search
              </TitleTextComponent>
            </View>
            <View className='flex-row w-full h-fit justify-start mt-2'>
                <SmallButton text='Choose a Recipe' callback={handleChooseRecipe}/>
            </View>
          </View>

          {/* Name */}
          <View className='flex-col w-full h-fit mt-6'>
            <View className='w-full h-6'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                Recipe Name
              </TitleTextComponent>
            </View>
            <View className='flex-row items-center justify-center shrink w-full h-fit pr-1 mt-2 bg-itemBgLight rounded-lg'>
              <ItemTextInputComponent translate={true} 
              size={'text-xl'}
              css={'shrink w-full h-10 pb-1 pl-3 text-itemText'}
              placeholder={"ex. Chicken Sandwich"}
              placeholderTextColor={'#85855B'}
              value={mealName} 
              onChangeText={setMealName} 
              underlineColorAndroid={'transparent'}
              />
            </View>
          </View>

          {/* Ingredients */}
          <View className='flex-col w-full h-fit mt-6'>
            <View className='w-full h-6'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                Ingredients
              </TitleTextComponent>
            </View>
            <View className='flex-row w-full h-fit items-center mt-2'>
              <SmallButton text='Add Ingredient' callback={handleAddIngredient}/>
            </View>
            {/* Table */}
            <View className='w-full h-fit items-center justify-center mt-3'>
              <IngredientsTable ingredients={recipeItem.ingredients} handlePress={handleEditIngredient} />
            </View>
          </View>

          {/* Procedure */}
          <View className='flex-col w-full h-fit mt-6'>
            <View className='w-full h-6'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                Procedure (Optional)
              </TitleTextComponent>
            </View>
            <View className='flex-row w-full h-fit items-center mt-2'>
              <SmallButton text='Add Step' callback={handleAddProcedure}/>
            </View>
            {/* Table */}
            <View className='w-full h-fit items-center justify-center mt-3'>
              <ProcedureTable procedure={recipeItem.procedure} handlePress={handleEditProcedure} />
            </View>
          </View>

          {/* Continue */}
          <View className='w-full h-fit items-center justify-center mt-7 mb-3'>
            <LargeButton cssIn={'w-fit px-4'} text={'Continue'} textSize={'text-2xl'} callback={handleContinue} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AddMealPage;