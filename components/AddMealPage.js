import React, { useState, } from 'react';
import { Text, View, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, StyleSheet, Platform, ScrollView, FlatList } from 'react-native';
import ExitButton from './ExitButton';
import IngredientsTable from './recipe/IngredientsTable';
import SmallButton from './addmeal/SmallButton';
import ProcedureTable from './recipe/ProcedureTable';

const { width, height } = Dimensions.get('window');

const RecipePage = ({}) => {
  {/* References */}
  
  {/* Data */}
   
  { /* State/Functions */}
  const [mealName, setMealName] = useState('');

  const [ingredients, setIngredients] = useState(new Array(0));
  // const [procedure, setProcedure] = useState(new Array(0));

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

  {/* View */}

  return (
    <SafeAreaView id='screen' className='w-full h-full justify-center items-center bg-screenBg'>
      <ScrollView className='grow w-full h-fit'>
        <View id='content' className='grow w-full h-fit p-4'>
          {/* Title */}
          <View className='flex-row w-full h-10 items-center justify-between'>
            <Text className="font-inconsolata mx-4 text-3xl text-screenText">
              Add Your Meal
            </Text>
            <ExitButton/>
          </View>

          {/* Choose Recipe Button */}
          <View className='flex-row w-full h-fit items-center mt-2'>
            <SmallButton text='Choose a Recipe' callback={null}/>
          </View>

          {/* Name */}
          <View className='flex-col w-full h-fit mt-4'>
            <View className='w-full h-6'>
              <Text className='font-inconsolata text-screenText text-xl mx-4'>Name</Text>
            </View>
            <View className='flex-row items-center justify-center shrink w-full h-fit pr-1 mt-2 bg-itemBgLight rounded-lg'>
              <TextInput className='font-inconsolataLight shrink w-full h-10 text-xl pb-1.5 pl-3'
                placeholder="ex. Chicken Sandwich" 
                placeholderTextColor={'#85855B'}
                value={mealName} 
                onChangeText={setMealName} 
                underlineColorAndroid={'transparent'}
              />
            </View>
          </View>

          {/* Ingredients */}
          <View className='flex-col w-full h-fit mt-4'>
            <View className='w-full h-6'>
              <Text className='font-inconsolata text-screenText text-xl mx-4'>Ingredients</Text>
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
          <View className='flex-col w-full h-fit mt-4'>
            <View className='w-full h-6'>
              <Text className='font-inconsolata text-screenText text-xl mx-4'>Procedure (Optional)</Text>
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
            <TouchableOpacity className='w-36 h-12 items-center justify-center bg-buttonBg rounded-xl'
              activeOpacity={0.7}>
                <Text className='font-inconsolata text-center text-itemText text-2xl'>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default RecipePage;