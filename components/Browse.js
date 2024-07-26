import React, { useState, useRef } from 'react';
import { Text, View, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, StyleSheet, Platform, ScrollView, FlatList } from 'react-native';
import ExitButton from './ExitButton';
import OptionsButton from './browse/OptionsButton';
import OptionsMenu from './browse/OptionsMenu';
import PageButton from './browse/PageButton';
import PageMenu from './browse/PageMenu';
import RecipeCard from './browse/RecipeCard';

const { width, height } = Dimensions.get('window');

const Browse = () => {
  {/* References */}
  const scrollRef = useRef();
  
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
  const recipes = [
    {
      id: 'recipe-1',
      title: 'Tuna Sandwich', 
      nutrition: {
        cal: 1261,
        protein: 148, 
        carb: 429,
      },
      tags: ['Sandwich', 'Protein', 'Healthy'],
      data: {
        likes: 8,
        comments: 4, 
        downloads: 7,
      },
      image: require('../assets/images/recipe-1.webp'),
    },
    {
      id: 'recipe-2',
      title: 'Tuna Sandwich', 
      nutrition: {
        cal: 1261,
        protein: 148, 
        carb: 429,
      },
      tags: ['Sandwich', 'Protein', 'Healthy'],
      data: {
        likes: 8,
        comments: 4, 
        downloads: 7,
      },
      image: require('../assets/images/recipe-1.webp'),
    },
    {
      id: 'recipe-3',
      title: 'Tuna Sandwich', 
      nutrition: {
        cal: 1261,
        protein: 148, 
        carb: 429,
      },
      tags: ['Sandwich', 'Protein', 'Healthy'],
      data: {
        likes: 8,
        comments: 4, 
        downloads: 7,
      },
      image: require('../assets/images/recipe-1.webp'),
    },
    {
      id: 'recipe-4',
      title: 'Tuna Sandwich', 
      nutrition: {
        cal: 1261,
        protein: 148, 
        carb: 429,
      },
      tags: ['Sandwich', 'Protein', 'Healthy'],
      data: {
        likes: 8,
        comments: 4, 
        downloads: 7,
      },
      image: require('../assets/images/recipe-1.webp'),
    },
  ]
  const recipesShown = [];
  const recipeMaxCnt = 6;
  const pageCount = Math.floor(recipes.length / recipeMaxCnt) + 1 * (recipes.length % recipeMaxCnt != 0);


  { /* State/Functions */}
  const [searchQuery, setSearchQuery] = useState('');

  const [showOptions, setShowOptions] = useState(false);

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
      new_css[index] = 'bg-itemText'
      setDietButtonCSS(new_css);
    }
  }

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

  const [pageIndex, setPageIndex] = useState(0);
  const [pageButtonColor, setPageButtonColor] = useState(['bg-itemText'].concat(new Array(pageCount).fill('')));
  const [pageButtonText, setPageButtonText] = useState(['text-itemBgLight'].concat(new Array(pageCount).fill('text-itemText')));
  const updatePageIndex = (index) => {
    if (index == pageIndex) return;
    setPageIndex(index);  // STARTS AT 0

    {/* Page Button CSS */}
    const new_color = new Array(pageCount).fill('');
    new_color[index] = 'bg-itemText';
    setPageButtonColor(new_color);

    const new_text = new Array(pageCount).fill('text-itemText');
    new_text[index] = 'text-itemBgLight';
    setPageButtonText(new_text);
    
    {/* Scroll to Top */}
    scrollRef.current?.scrollTo({
      y:0,
      animated: true,
    });
  }
  const shiftPageIndex = (value) => {  // value is -1 or 1
    if (value == 1 && pageIndex < pageCount - 1) {
      updatePageIndex(pageIndex + 1);
    } else if (value == -1 && pageIndex > 0) {
      updatePageIndex(pageIndex - 1);
    }
  }

  {/* Page Button Selection */}
  let pageIndicesShown = [];
  for (let i = 0; i < pageCount; i++) {
    if (pageIndex <= 1 && i <= 4) {
      pageIndicesShown.push(i)
    } else if (pageIndex >= pageCount - 2 && i >= pageCount - 5) {
      pageIndicesShown.push(i);
    } else if (Math.abs(pageIndex - i) <= 2) {
      pageIndicesShown.push(i);
    }
  }
  let pageButtons = pageIndicesShown.map(function(index) {
    return (<PageButton 
      callback={updatePageIndex}
      index={index} 
      buttonColor={pageButtonColor[index]} 
      buttonText={pageButtonText[index]} />)
  })

  {/* Recipe Selection */}
  for (
    let i = recipeMaxCnt * pageIndex; 
    i < Math.min(recipeMaxCnt * (pageIndex + 1), recipes.length); 
    i++
  ) {
    recipesShown.push(recipes[i]);
  }

  return (
    <SafeAreaView id='screen' className='w-full h-full justify-center items-center bg-screenBg'>
      <ScrollView ref={scrollRef} className='w-full h-full'>
        <View id='content' className='w-full h-fit p-4'>
          {/* Frame 1 - Search Bar */}
          <View className='w-full h-fit mt-2'>
            <View className='flex-row w-full h-fit items-center justify-between'>
              <Text className="font-inconsolata mx-4 text-3xl text-screenText">
                Browse Recipes
              </Text>
              <ExitButton/>
            </View>
            <View className='flex-row items-center justify-center w-full h-fit mt-2'>
              <View className='flex-row items-center justify-center shrink w-full h-fit pr-1 bg-itemBgLight rounded-lg'>
                <TextInput className='font-inconsolataLight shrink w-full h-10 text-itemText text-xl pb-1.5 pl-3'
                  placeholder="ex. Neapolitan Pizza" 
                  value={searchQuery} 
                  onChangeText={setSearchQuery} 
                  underlineColorAndroid={'transparent'}
                />
                <TouchableOpacity activeOpacity={0.7} className='w-8 h-8 bg-itemBgDark rounded-lg'></TouchableOpacity>
              </View>
              <OptionsButton callback={setShowOptions} showOptions={showOptions}/>
            </View>
          </View>

          {/* Frame 2 - Options */}
          {
            showOptions
            ? <OptionsMenu 
                optionList={optionList} 
                updateDiet={updateDiet}
                dietCSS = {dietButtonCSS}
                categories={categories}
                setCatFocus={setCatFocus}
                catColor={catColor} 
                catText={catText}/> 
            : null
          }

          {/* Frame 3 - Results */}
          <View className='flex-col w-full h-fit mt-6'>
            <View className='flex-row w-full h-fit justify-between'>
              <Text className='font-inconsolata text-xl ml-4 text-itemBgLight'>
                Results
              </Text>
              <OptionsButton/>
            </View>
            
            {/* List */}
            <View className='flex-col w-full h-fit mt-2'>
            {recipesShown.map((item) => (
              <View key={`${item.id}`} className='w-full h-fit mb-2'>
                <RecipeCard 
                  title={item.title}
                  nutrition={item.nutrition}
                  tags={item.tags}
                  data={item.data}
                  image={item.image}/>
              </View>
            ))}
            </View>

            {/* Page Numbers */}
            <PageMenu key={'menu-2'} pageButtons={pageButtons} shiftPageIndex={shiftPageIndex}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Browse;