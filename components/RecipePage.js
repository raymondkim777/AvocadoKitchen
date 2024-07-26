import React, { useState, } from 'react';
import { Text, View, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, StyleSheet, Platform, ScrollView, FlatList } from 'react-native';
import ExitButton from './ExitButton';
import IngredientsSection from './recipe/IngredientsSection';
import ProcedureSection from './recipe/ProcedureSection';
import IngredientsSectionEmpty from './recipe/IngredientsSectionEmpty';
import Buttons from './recipe/Buttons';
import ProcedureSectionEmpty from './recipe/ProcedureSectionEmpty';

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
      name: 'Canned Tuna',
      amount: '20 oz',
    },
    {
      name: 'Celery',
      amount: '1/3 cup',
    },
    {
      name: 'Red Onion',
      amount: '2 tbsp',
    },
    {
      name: 'Sweet Pickle Relish',
      amount: '2 tbsp',
    },
    {
      name: 'Lemon',
      amount: 'x1',
    },
    {
      name: 'Garlic Clove',
      amount: 'x1',
    },
    {
      name: 'Salt',
      amount: 'N/A',
    },
    {
      name: 'Black Pepper',
      amount: 'N/A',
    },
    {
      name: 'Mayonnaise',
      amount: '1 cup',
    },
  ];
  const procedure = [
    {
      step: 1, 
      description: 'Combine tuna, mayonnaise, celery, onion, parsley, lemon juice, garlic powder, salt, and pepper in a large bowl.',
      image: require('../assets/images/procedure-example/step-1.webp'),
    },
    {
      step: 2, 
      description: 'Mix well. Season with paprika; refrigerate until chilled. Divide tuna mixture evenly onto two slices of bread; top with remaining slices of bread.',
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
            <Text className="font-inconsolata mx-4 text-3xl text-screenText">
              Recipe Info
            </Text>
            <ExitButton/>
          </View>

          {/* Name / Ingredients */}
          <View className={`${(procedure.length == 0 || ingredients.length == 0) ? '' : 'grow'} flex-col w-full h-fit items-center justify-center mt-4`}>
            {/* Name */}
            <View className='flex-row w-full h-12 items-center'>
              <Text className='font-inconsolata mx-4 text-screenText text-xl'>
                Name: {name} 
              </Text>
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