import React, { useState, } from 'react';
import { Text, View, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, StyleSheet, Platform, ScrollView, FlatList } from 'react-native';
import ExitButton from '../general/ExitButton';
import IngredientsTable from '../recipe/IngredientsTable';
import SmallButton from '../general/SmallButton';
import LargeButton from '../general/LargeButton';
import ProcedureTable from '../recipe/ProcedureTable';
import TitleTextComponent from '../text/TitleTextComponent';
import ItemTextInputComponent from '../text/ItemTextInputComponent';

const { width, height } = Dimensions.get('window');

const AddMealPage = ({}) => {
  {/* References */}
  
  {/* Data */}
   
  { /* State/Functions */}
  const [mealName, setMealName] = useState('');

  // const [ingredients, setIngredients] = useState(new Array(0));
  // const [procedure, setProcedure] = useState(new Array(0));

  const ingredients = [
    {
      id: 'canned-tuna',
      name: 'Canned Tuna',
      amount: '20 oz',
    },
    {
      id: 'celery',
      name: 'Celery',
      amount: '1/3 cup',
    },
    {
      id: 'red-onion',
      name: 'Red Onion',
      amount: '2 tbsp',
    },
    {
      id: 'pickle-relish',
      name: 'Sweet Pickle Relish',
      amount: '2 tbsp',
    },
    {
      id: 'lemon',
      name: 'Lemon',
      amount: 'x1',
    },
    {
      id: 'garlic-clove',
      name: 'Garlic Clove',
      amount: 'x1',
    },
    {
      id: 'salt',
      name: 'Salt',
      amount: 'N/A',
    },
    {
      id: 'black-pepper',
      name: 'Black Pepper',
      amount: 'N/A',
    },
    {
      id: 'mayo',
      name: 'Mayonnaise',
      amount: '1 cup',
    },
  ];
  const procedure = [
    {
      step: 1, 
      description: '(Recipe Step 1)',
      image: require('../../assets/images/procedure-example/step-1.webp'),
    },
    {
      step: 2, 
      description: '(Recipe Step 2)',
      image: require('../../assets/images/procedure-example/step-2.jpg'),
    },
  ];

  {/* View */}

  return (
    <SafeAreaView id='screen' className='w-full h-full justify-center items-center bg-screenBg'>
      <ScrollView className='grow w-full h-fit'>
        <View id='content' className='grow w-full h-fit p-4'>
          {/* Title */}
          <View className='flex-row w-full h-10 items-center justify-between'>
            <TitleTextComponent translate={true} size={'text-3xl'} css={'mx-4 text-screenText'}>
              Add Your Meal
            </TitleTextComponent>
            <ExitButton/>
          </View>

          {/* Choose Recipe Button */}
          <View className='flex-row w-full h-fit items-center mt-4'>
            <SmallButton text='Choose a Recipe' callback={null}/>
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
              css={'shrink w-full h-10 pb-1 pl-3'}
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
              <SmallButton text='Add Ingredient' callback={null}/>
            </View>
            {/* Table */}
            <View className='w-full h-fit items-center justify-center mt-3'>
              <IngredientsTable ingredients={ingredients} />
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
              <SmallButton text='Add Step' callback={null}/>
            </View>
            {/* Table */}
            <View className='w-full h-fit items-center justify-center mt-3'>
              <ProcedureTable procedure={procedure} />
            </View>
          </View>

          {/* Continue */}
          <View className='w-full h-fit items-center justify-center mt-7 mb-3'>
            <LargeButton css={'w-fit px-4'} text={'Continue'} textSize={'text-2xl'} callback={null} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AddMealPage;