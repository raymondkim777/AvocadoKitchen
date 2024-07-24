import React, {useState,} from 'react';
import { Text, View, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, StyleSheet, Platform, ScrollView, FlatList } from 'react-native';

const OptionButton = ({callback}) => (
  <TouchableOpacity activeOpacity={0.5} className='w-8 h-8 ml-2 bg-buttonBg rounded-lg'>

  </TouchableOpacity>
)

const DietButton = ({title, index}) => (
  <View className='flex-row w-fit h-7 items-center justify-center'>
    <TouchableOpacity activeOpacity={1} className='w-4 h-4 rounded-md border-2 border-itemText mr-2'
    />
    <Text className='font-inconsolata text-base mr-5'>
      {title}
    </Text>
  </View>
)

const { width, height } = Dimensions.get('window');

const Browse = () => {
  
  {/* Data */}
  const optionList = [
    'Lacto-Ovo', 
    'Lacto', 
    'Ovo', 
    'Vegan',
    'Vegetarian', 
    'Pescastarian',
  ]

  const categories = [
    'All', 'Name', 'User', 'Tag',
  ]

  { /* State/Functions */}
  const [searchQuery, setSearchQuery] = useState('');

  const [options, setOptions] = useState(new Array(optionList.length).fill(false))
  const updateOptions = (index) => {
    const new_options = options;
    new_options[index] = !options[index];
    setOptions(new_options);
  }

  const [searchCat, setSearchCat] = useState(0);
  const [catColor, setCatColor] = useState(['bg-itemText', '', '', '']);
  const [catText, setCatText] = useState(['text-itemBgLight', 'text-itemText', 'text-itemText', 'text-itemText']);
  const setCatFocus = (index) => {
    setSearchCat(index);
    const new_color = new Array(categories.length).fill('');
    new_color[index] = 'bg-itemText';
    setCatColor(new_color);

    const new_text = new Array(categories.length).fill('text-itemText');
    new_text[index] = 'text-itemBgLight';
    setCatText(new_text);
  }

  return (
    <SafeAreaView id='screen' className='w-full h-full justify-center items-center'>
      <ScrollView id='scroll' className='grow w-full h-full bg-red-100'>
        <View id='content' className='grow w-full h-fit p-4 bg-screenBg'>
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
              <OptionButton/>

            </View>
          </View>

          {/* Frame 2 - Options */}
          <View className='w-full h-fit mt-6'>
            {/* Checkbox */}
            <View className='w-full min-h-16 h-fit items-center justify-center px-2 bg-buttonBg rounded-lg'>
              <View className='flex-row flex-wrap w-full h-fit'>
                {optionList.map((option_name, index) => (
                  <DietButton title={option_name} index={index}/>
                ))}
              </View>
            </View>

            {/* Sliders */}
            <View className='flex-row w-full h-16 mt-2 bg-buttonBg rounded-lg'>
              
            </View>

            {/* More Search Options */}
            <View className='flex-row w-full h-8 mt-2 items-center justify-center px-3 bg-buttonBg rounded-lg'>
              <Text className='font-inconsolata text-base'>
                Search By:
              </Text>
              <View className='flex-row grow w-fit h-fit items-center justify-center'>
                {categories.map((cat, index) => (
                  <TouchableOpacity className={`w-12 h-6 items-center justify-center rounded-full ${catColor[index]}`}
                    activeOpacity={1} onPress={()=>setCatFocus(index)}>
                    <Text className={`font-inconsolata text-base ${catText[index]}`}>{cat}</Text>
                  </TouchableOpacity>
                ))}
                <View id='div' className="{{height > 800 ? 'w-4': ''}}"/>
              </View>
            </View>
          </View>

          {/* Frame 3 - Results */}
          <View className='flex-col w-full h-fit mt-6 bg-blue-100'>
            <View className='flex-row w-full h-fit justify-between bg-red-100'>
              <Text className='font-inconsolata text-xl ml-4 text-itemBgLight'>
                Results
              </Text>
              <OptionButton/>
            </View>
            <View className='w-full h-20'>

            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Browse;