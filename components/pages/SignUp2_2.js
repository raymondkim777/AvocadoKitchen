import React, { useState, useRef } from 'react';
import { Text, View, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, StyleSheet, ScrollView,  } from 'react-native';
import TitleTextComponent from '../text/TitleTextComponent';
import ItemTextInputComponent from '../text/ItemTextInputComponent';
import DietButton from '../browse/DietButton';
import Tag from '../addfunction/Tag';
import TagSuggest from '../addfunction/TagSuggest';
import AccountButton from '../profile/AccountButton';
import LargeButton from '../general/LargeButton';
import MealplanDropdown from '../dropdown/MealplanDropdown';
const { width, height } = Dimensions.get('window');

const SignUp2_2 = ({ navigation }) => {
  const handleSignUpComplete = ({}) => {
    navigation.navigate('Login2')
  }

  {/* References */}

  {/* Data */}
  const optionList = [
    'Lacto-Ovo', 
    'Lacto', 
    'Ovo', 
    'Vegan',
    'Vegetarian', 
    'Pescatarian',
  ]
  const categories = [
    'All', 'Name', 'User', 'Tag',
  ]

  { /* State/Functions */}
  const [dietIndex, setDietIndex] = useState(-1);
  const [dietButtonCSS, setDietButtonCSS] = useState(new Array(optionList.length).fill(''));
  const updateDiet = (index) => {
    if (index == dietIndex) {
      setDietIndex(-1);
      const new_css = new Array(optionList.length).fill('');
      setDietButtonCSS(new_css);
    } else {
      setDietIndex(index);
      const new_css = new Array(optionList.length).fill('');
      new_css[index] = 'bg-screenText'
      setDietButtonCSS(new_css);
    }
  }

  const [tags, setTags] = useState([
    {
      id: '0',
      text: 'Peanut'
    },
    {
      id: '0',
      text: 'Kiwi'
    },
    {
      id: '0',
      text: 'Peach'
    },
  ]);

  const [tagInput, setTagInput] = useState('');
  const addNewTag = () => {
    const new_arr = tags;
    new_arr.push({id: '0', text: ''})
    setTags(new_arr);
  }
  const addTagByID = (id) => {
    // ADD LATER
  }
  const removeTag = (tagID) => {
    // ADD LATER
  }

  const [allergy, setAllergy] = useState([
    {
      id: '0',
      text: 'Gluten Free'
    },
  ])

  const [allergyInput, setAllergyInput] = useState('');
  const addNewAllergy = () => {
    const new_arr = allergy;
    new_arr.push({id: '0', text:''})
    setAllergy(new_arr);
  }
  const addAllergyByID = (id) => {
    // ADD LATER
  }
  const removeAllergy = (tagID) => {
    // ADD LATER
  }
  const options = ["Per Meal", 'Daily', 'Weekly'];
  return (
    <SafeAreaView id='screen' className='w-full h-full justify-center items-center bg-screenBg'>
      <ScrollView 
      contentContainerStyle={{flexGrow: 1}} 
      className='w-full h-full'>
        <View className='shrink w-full h-full items-center justify-center'>
          <View id='content' className='shink w-full max-w-[560px] h-fit p-4'>
            {/* Title */}
            <View className='flex-row w-full h-10 items-center justify-between'>
              <TitleTextComponent translate={true} size={'text-3xl'} css={'text-screenText mx-4'}>
                Dietary Restrictions
              </TitleTextComponent>
            </View>

            {/* Diet Options */}
            <View className='flex-col w-full min-h-16 h-fit items-center justify-center mt-8'>
              <View className='w-full h-6'>
                <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                  Select your diet
                </TitleTextComponent>
              </View>
              <View className='flex-row flex-wrap w-full h-fit mt-2'>
                {optionList.map((option_name, index) => (
                  <View className='flex-row w-fit h-7 items-center justify-center'>
                    <TouchableOpacity className='flex-row w-fit h-7 items-center justify-center mr-5'
                      activeOpacity={1} onPress={()=>updateDiet(index)}>
                      <View className={`w-4 h-4 rounded-md border-2 ${dietButtonCSS[index]} border-screenText mr-2`}/>
                      <TitleTextComponent translate={true} size={'text-base'} css={'text-screenText'}>
                        {option_name}
                      </TitleTextComponent>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>

            {/* Tags */}
            <View className='flex-col w-full h-fit mt-10'>
              <View className='w-full h-6'>
                <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                  Tags (Optional)
                </TitleTextComponent>
              </View>
              <View className='flex-row items-center justify-center shrink w-full h-fit pr-1 mt-2 bg-itemBgLight rounded-lg'>
                <ItemTextInputComponent
                translate={true}
                size={'text-xl'}
                css={'shrink w-full h-10 text-itemText pb-1 pl-3'}
                placeholder="Add Tag" 
                placeholderTextColor={'#85855B'}
                value={tagInput} 
                onChangeText={setTagInput} 
                underlineColorAndroid={'transparent'}
                />

                {/* Suggested Tag */}
                <View className='flex-row w-fit h-10 items-center justify-center'>
                  <TagSuggest tagQuery={tagInput} addTag={addTagByID} />
                </View>
              </View>

              {/* Display Tags */}
              <View className='flex-row flex-wrap mt-2 -mr-2'>
                {tags.map((item, index) => (
                  <Tag tagID={item.id} tagName={item.text} removeTag={removeTag} />
                ))}
              </View>
            </View>

            {/* Allergies */}
            <View className='flex-col w-full h-fit mt-10'>
              <View className='w-full h-6'>
                <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                  Allergies (Optional)
                </TitleTextComponent>
              </View>
              <View className='flex-row items-center justify-center shrink w-full h-fit pr-1 mt-2 bg-itemBgLight rounded-lg'>
                <ItemTextInputComponent
                translate={true}
                size={'text-xl'}
                css={'shrink w-full h-10 text-itemText pb-1 pl-3'}
                placeholder="Add Tag" 
                placeholderTextColor={'#85855B'}
                value={allergyInput} 
                onChangeText={setAllergyInput} 
                underlineColorAndroid={'transparent'}
                />

                {/* Suggested Allergies */}
                <View className='flex-row w-fit h-10 items-center justify-center'>
                  <TagSuggest tagQuery={allergyInput} addTag={addAllergyByID} />
                </View>
              </View>

              {/* Display Allergies */}
              <View className='flex-row flex-wrap mt-2 -mr-2'>
                {allergy.map((item, index) => (
                  <Tag tagID={item.id} tagName={item.text} removeTag={removeTag} />
                ))}
              </View>
            </View>

            {/* Budget */}
            <View className='flex-col w-full h-fit mt-10'>
              <View className='flex-row w-full h-fit items-center'>    
                  <MealplanDropdown options={options}></MealplanDropdown>
                <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText ml-3'}>
                  Budget
                </TitleTextComponent>
                <TitleTextComponent size={'text-xl'} css={'text-screenText mr-4'}>
                  :
                </TitleTextComponent>
                <TitleTextComponent size={'text-xl'} css={'text-screenText'}>
                  ₩50,000
                </TitleTextComponent>
              </View>
              {/*
              <View className='w-full h-12 bg-itemBgLight rounded-lg mt-2'>

              </View>
              */}
            </View>

            {/* Sign Up */}
            
            <View className='w-full h-fit items-center justify-center mt-8 mb-4'>
              <LargeButton css={'px-8'} text={'Sign Up'} textSize={'text-2xl'} callback={handleSignUpComplete}/>
            </View>
            


          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp2_2;