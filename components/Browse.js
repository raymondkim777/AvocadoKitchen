import React, {useState,} from 'react';
import { Text, View, SafeAreaView, Image,  TextInput, TouchableOpacity, StyleSheet, Platform, ScrollView, FlatList } from 'react-native';

const OptionButton = ({title, index}) => (
  <View className='flex-row w-fit h-7 items-center justify-center'>
    <TouchableOpacity activeOpacity={1} className='w-4 h-4 rounded-md border-2 border-itemText mr-2'
    />
    <Text className='font-inconsolata text-base mr-5'>
      {title}
    </Text>
  </View>
)

const Browse = () => {
  
  { /* State/Functions */}
  const [searchQuery, setSearchQuery] = useState('');

  {/* Data */}
  const optionList = [
    'Lacto-Ovo', 
    'Lacto', 
    'Ovo', 
    'Vegan', 
    'Pescastarian',
  ]
  const [options, setOptions] = useState(new Array(optionList.length).fill(false))
  const updateOptions = (index) => {
    const new_options = options;
    new_options[index] = !options[index];
    setOptions(new_options);
  }

  return (
    <SafeAreaView id='screen' className='flex flex-col w-full h-full justify-center items-center'>
      <ScrollView id='scroll' className='w-full h-full'>
        <View id='content' className='w-full h-fit p-4 bg-screenBg'>
          {/* Frame 1 - Search Bar */}
          <View className='w-full h-fit mt-2'>
            <Text className="font-inconsolata mx-4 text-3xl text-screenText">
              Browse Recipes
            </Text>
            <View className='flex-row items-center justify-center w-full h-fit mt-2 '>
              <TextInput className='font-inconsolataLight shrink w-full h-10 bg-itemBgLight text-itemText text-xl rounded-lg pl-4 pb-1'
                placeholder="ex. Neapolitan Pizza" 
                value={searchQuery} 
                onChangeText={setSearchQuery} 
                underlineColorAndroid={'transparent'}
              />
              <TouchableOpacity activeOpacity={0.5} className='w-8 h-8 ml-2 bg-buttonBg rounded-lg'>

              </TouchableOpacity>
            </View>
          </View>

          {/* Frame 2 - Options */}
          <View className='w-full h-fit mt-6'>
            {/* Checkbox */}
            <View className='w-full h-16 items-center justify-center px-2 bg-buttonBg rounded-lg'>
              <View className='flex-row flex-wrap w-full h-fit'>
                {optionList.map((option_name, index) => (
                  <OptionButton title={option_name} index={index}/>
                ))}
              </View>
            </View>

            {/* Sliders */}
            <View className='flex-row w-full h-16 mt-2 bg-buttonBg rounded-lg'>
              
            </View>

            {/* More Search Options */}
            <View className='w-full h-8 mt-2 bg-buttonBg rounded-lg'>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Browse;