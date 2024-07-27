import React, { useState, } from 'react';
import { SafeAreaView, View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import ExitButton from '../ExitButton';
import QuickSearchResults from './addingr/QuickSearchResults';
import QuickSearchResultsEmpty from './addingr/QuickSearchResultsEmpty';
import SmallButton from '../addmeal/SmallButton';

const IngredientsTableRowExpand = ({
  // item, index
}) => {
  const item = {
    step: 1, 
    description: 'Combine tuna, mayonnaise, celery, onion, parsley, lemon juice, garlic powder, salt, and pepper in a large bowl.',
    image: require('../../assets/images/procedure-example/step-1.webp'),
  }

  const [ingSearchQuery, setIngSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [foundResults, setFoundResults] = useState(false);

  const [mealName, setMealName] = useState('');
  
  const [amount, setAmount] = useState('');
  const [unit, setUnit] = useState('');
  
  const [imageFound, setImageFound] = useState(false);
  const [imageUploaded, setImageUploaded] = useState('');
  const updateImage = () => {
    setImageFound(!imageFound);
  }
  
  const [itemLink, setItemLink] = useState('');


  return (
    <SafeAreaView id='screen' className='w-full h-full justify-center items-center bg-screenBg'>
      <ScrollView className='grow w-full h-fit'>
        <View id='content' className='grow w-full h-fit p-4'>
          {/* Title */}
          <View className='flex-row w-full h-10 items-center justify-between'>
            <Text className="font-inconsolata mx-4 text-3xl text-screenText">
              Add Ingredient
            </Text>
            <ExitButton/>
          </View>

          {/* Quick Search */}
          <View className='flex-col w-full h-fit mt-4'>
            <View className='w-full h-6'>
              <Text className='font-inconsolata text-screenText text-xl mx-4'>Quick Search</Text>
            </View>
            <View className='flex-row items-center justify-center shrink w-full h-fit pr-1 mt-2 bg-itemBgLight rounded-lg'>
              <TextInput className='font-inconsolataLight shrink w-full h-10 text-xl pb-1.5 pl-3'
                placeholder="ex. Canned Tuna" 
                placeholderTextColor={'#85855B'}
                value={ingSearchQuery} 
                onChangeText={setIngSearchQuery} 
                underlineColorAndroid={'transparent'}
              />
              <TouchableOpacity className='w-8 h-8 bg-itemBgDark rounded-lg'
                activeOpacity={0.7} onPress={()=>setShowResults(!showResults)}>
              </TouchableOpacity>
            </View>
          </View>

          {/* Results */}
          {
            showResults
            ? (
              foundResults 
              ? <QuickSearchResults />
              : <QuickSearchResultsEmpty />
              )
            : null
          }

          {/* Manual Add */}
          <View className='flex-row w-full h-10 items-center mt-10'>
            <Text className="font-inconsolata mx-4 text-3xl text-screenText">
              Manual Add
            </Text>
          </View>
          
          {/* Name */}
          <View className='flex-col w-full h-fit mt-2'>
            <View className='w-full h-6'>
              <Text className='font-inconsolata text-screenText text-xl mx-4'>Name</Text>
            </View>
            <View className='flex-row items-center justify-center shrink w-full h-fit pr-1 mt-2 bg-itemBgLight rounded-lg'>
              <TextInput className='font-inconsolataLight shrink w-full h-10 text-xl pb-1.5 pl-3'
                placeholder="ex. Canned Tuna" 
                placeholderTextColor={'#85855B'}
                value={mealName} 
                onChangeText={setMealName} 
                underlineColorAndroid={'transparent'}
              />
            </View>
          </View>

          {/* Amount */}
          <View className='flex-col w-full h-fit mt-4'>
            <View className='w-full h-6'>
              <Text className='font-inconsolata text-screenText text-xl mx-4'>Amount</Text>
            </View>
            <View className='flex-row items-center justify-center shrink w-full h-fit pr-1 mt-2'>
              <TextInput className='font-inconsolataLight shrink w-full h-10 text-xl pb-1.5 pl-3 bg-itemBgLight rounded-lg'
                placeholder="ex. 30" 
                placeholderTextColor={'#85855B'}
                value={amount} 
                onChangeText={setAmount} 
                underlineColorAndroid={'transparent'}
              />
              <View className='w-16 h-10 items-center justify-center bg-itemBgLight ml-2 rounded-lg'>
                <Text className='font-inconsolataLight text-xl text-itemText'>oz.</Text>
              </View>
            </View>
          </View>

          {/* Image */}
          <View className='flex-col w-full h-fit mt-4'>
            <View className='w-full h-6'>
              <Text className='font-inconsolata text-screenText text-xl mx-4'>Image</Text>
            </View>
            <View className='flex-col items-center justify-center shrink w-full h-fit pr-1 mt-2'>
              {
                imageFound
                ? (
                  <View className='w-full h-64 bg-itemBgLight rounded-xl mb-2'>
                  </View>
                )
                : null
              }
              
              {/* Add/Change Image */}
              <View className='flex-row w-full h-fit items-center'>
                <SmallButton text={imageFound ? 'Change Image' : 'Add Image'} callback={updateImage}/>
              </View>
            </View>
          </View>

          {/* Coupang/MarketCurly Link */}
          <View className='flex-col w-full h-fit mt-4'>
            <View className='w-full h-6'>
              <Text className='font-inconsolata text-screenText text-xl mx-4'>Coupang/MarketCurly Link</Text>
            </View>
            <View className='flex-row items-center justify-center shrink w-full h-fit pr-1 mt-2 bg-itemBgLight rounded-lg'>
              <TextInput className='font-inconsolataLight shrink w-full h-10 text-xl pb-1.5 pl-3'
                placeholder="ex. https://coupang.com/insert_link" 
                placeholderTextColor={'#85855B'}
                value={itemLink} 
                onChangeText={setItemLink} 
                underlineColorAndroid={'transparent'}
              />
            </View>
          </View>

          {/* Save */}
          <View className='w-full h-fit items-center justify-center mt-10 mb-6'>
            <TouchableOpacity className='w-36 h-12 items-center justify-center bg-buttonBg rounded-xl'
              activeOpacity={0.7}>
                <Text className='font-inconsolata text-center text-itemText text-2xl'>Save</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default IngredientsTableRowExpand
