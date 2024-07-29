import React, { useState, } from 'react';
import { Text, View, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, StyleSheet, Platform, ScrollView, FlatList } from 'react-native';
import ExitButton from './ExitButton';
import IngredientsSection from './recipe/IngredientsSection';
import ProcedureSection from './recipe/ProcedureSection';
import IngredientsSectionEmpty from './recipe/IngredientsSectionEmpty';
import Buttons from './recipe/Buttons';
import ProcedureSectionEmpty from './recipe/ProcedureSectionEmpty';
import TitleTextComponent from './text/TitleTextComponent';

const { width, height } = Dimensions.get('window');

const RecipePage = ({
  // name, // string
  // ingredients, // list
  // procedure, // list
}) => {
  {/* References */}
  
  {/* Data */}
  const name = "Tuna Sandwich";
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
      image: require('../assets/images/procedure-example/step-1.webp'),
    },
    {
      step: 2, 
      description: '(Recipe Step 2)',
      image: require('../assets/images/procedure-example/step-2.jpg'),
    },
  ];
   
  { /* State/Functions */}
  const [viewWidth, setViewWidth] = useState(Dimensions.get('window').width);

  const onLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setViewWidth(width);
  };

  {/* View */}
  const Container = height > 800 ?  View : ScrollView;
  return (
    <SafeAreaView id='screen' className='w-full h-full justify-center items-center bg-screenBg'>
      <Container className='grow w-full h-fit'>
        <View id='content' className='grow w-full h-fit p-4 pb-0'>
          {/* Title */}
          <View className='flex-row w-full h-10 items-center justify-between'>
            <TitleTextComponent translate={true} size={'text-3xl'} css={'text-screenText mx-4'}>
              Recipe Info
            </TitleTextComponent>
            <ExitButton/>
          </View>

          {/* Name / Ingredients */}
          <View className={`${(procedure.length == 0 || ingredients.length == 0) ? '' : 'grow'} flex-col w-full h-fit items-center justify-center mt-4`}>
            {/* Name */}
            <View className='flex-row w-full h-12 items-center'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText ml-4'}>
                Recipe Name
              </TitleTextComponent>
              <TitleTextComponent size={'text-xl'} css={'text-screenText mr-2'}>
                :
              </TitleTextComponent>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText'}>
                {name}
              </TitleTextComponent>
            </View>

            {/* Ingredients */}
            {
              ingredients.length == 0
              ? <IngredientsSectionEmpty />
              : <IngredientsSection ingredients={ingredients} />
            }
          </View>
          
          {/* Procedure */}
          <View className={`${(procedure.length == 0 || ingredients.length == 0) ? '' : 'grow'} w-full h-fit items-center justify-center`}>
            {
              procedure.length == 0
              ? <ProcedureSectionEmpty />
              : <ProcedureSection 
                  onLayout={onLayout}
                  viewWidth={viewWidth}
                  procedure={procedure}
                  divWidth={4}
                  />
            }
          </View>
        </View>
      </Container>

      {/* Buttons */}
      <View id='recipe-final-buttons' className='w-full h-20'>
        <Buttons/>
      </View>
    </SafeAreaView>
  )
}

export default RecipePage;