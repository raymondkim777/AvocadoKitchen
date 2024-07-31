import React, { useState, } from 'react';
import { SafeAreaView, View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import TitleTextComponent from '../text/TitleTextComponent';
import ItemTextInputComponent from '../text/ItemTextInputComponent';
import ExitButton from '../general/ExitButton';
import QuickSearchResults from './addingredient/QuickSearchResults';
import QuickSearchResultsEmpty from './addingredient/QuickSearchResultsEmpty';
import SmallButton from './SmallButton';

const AddIngredient = ({
  // item, index
}) => {
  const item = {
    step: 1, 
    description: 'Combine tuna, mayonnaise, celery, onion, parsley, lemon juice, garlic powder, salt, and pepper in a large bowl.',
    image: require('../../assets/images/procedure-example/step-1.webp'),
  }

  const [ingSearchQuery, setIngSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [foundResults, setFoundResults] = useState(true);

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
            <TitleTextComponent translate={true} size={'text-3xl'} css={'text-screenText mx-4'}>
              Add/Edit Ingredient
            </TitleTextComponent>
            <ExitButton/>
          </View>

          {/* Quick Search */}
          <View className='flex-col w-full h-fit mt-6'>
            <View className='w-full h-6'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                Quick Search
              </TitleTextComponent>
            </View>
            <View className='flex-row items-center justify-center shrink w-full h-fit pr-1 mt-2 bg-itemBgLight rounded-lg'>
              <ItemTextInputComponent
              translate={true}
              size={'text-xl'}
              css={'shrink w-full h-10 text-itemText pb-1 pl-3'}
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

          {/* Manual Add/Edit */}
          <View className='flex-row w-full h-10 items-center mt-10'>
            <TitleTextComponent translate={true} size={'text-3xl'} css={'text-screenText mx-4'}>
              Manual Add/Edit
            </TitleTextComponent>
          </View>
          
          {/* Name */}
          <View className='flex-col w-full h-fit mt-4'>
            <View className='w-full h-6'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                Ingredient Name
              </TitleTextComponent>
            </View>
            <View className='flex-row items-center justify-center shrink w-full h-fit pr-1 mt-2 bg-itemBgLight rounded-lg'>
              <ItemTextInputComponent
              translate={true}
              size={'text-xl'}
              css={'shrink w-full h-10 text-itemText pb-1 pl-3'}
              placeholder={"ex. Canned Tuna"}
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
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                Amount
              </TitleTextComponent>
            </View>
            <View className='flex-row items-center justify-center shrink w-full h-fit pr-1 mt-2'>
              <ItemTextInputComponent
              translate={true}
              size={'text-xl'}
              css={'shrink w-full h-10 text-itemText pb-1 pl-3 bg-itemBgLight rounded-lg'}
              placeholder="ex. 30" 
              placeholderTextColor={'#85855B'}
              value={amount} 
              onChangeText={setAmount} 
              underlineColorAndroid={'transparent'}
              />
              <View className='w-16 h-10 items-center justify-center bg-itemBgLight ml-2 rounded-lg'>
                <TitleTextComponent size={'text-xl'} sizeDiff={-2} css={'text-itemText'}>oz.</TitleTextComponent>
              </View>
            </View>
          </View>

          {/* Image */}
          <View className='flex-col w-full h-fit mt-4'>
            <View className='w-full h-6'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                Image
              </TitleTextComponent>
            </View>
            <View className='flex-col items-center justify-center shrink w-full h-fit mt-2'>
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
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                Coupang/MarketCurly Link
              </TitleTextComponent>
            </View>
            <View className='flex-row items-center justify-center shrink w-full h-fit pr-1 mt-2 bg-itemBgLight rounded-lg'>
              <TextInput className='font-inconsolataLight shrink w-full h-10 text-xl pb-1.5 pl-3'
                placeholder="ex. https://coupang.com/insert_link" 
                placeholderTextColor={'#85855B'}
                value={itemLink} 
                onChangeText={setItemLink} 
                underlineColorAndroid={'transparent'}
                inputMode={'url'}
              />
            </View>
          </View>

          {/* Save */}
          <View className='w-full h-fit items-center justify-center mt-10 mb-6'>
            <TouchableOpacity className='w-fit h-12 items-center justify-center px-8 bg-buttonBg rounded-xl'
              activeOpacity={0.7}>
                <TitleTextComponent translate={true} bold={true} size={'text-2xl'} css={'text-center text-itemText'}>
                  Save
                </TitleTextComponent>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AddIngredient
