import React, { useState, useRef } from 'react';
import { Text, View, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, StyleSheet, Platform, ScrollView, FlatList } from 'react-native';

const OptionButton = ({callback, showOptions}) => (
  <TouchableOpacity className='w-8 h-8 ml-2 bg-itemBgDark rounded-lg'
  activeOpacity={0.7} onPress={()=>callback(!showOptions)}>

  </TouchableOpacity>
)

const OptionsMenu = ({optionList, updateDiet, dietCSS, categories, setCatFocus, catColor, catText}) => (
  <View className={`w-full h-fit mt-6`}>
    {/* Checkbox */}
    <View className='w-full min-h-16 h-fit items-center justify-center px-2 bg-buttonBg rounded-lg'>
      <View className='flex-row flex-wrap w-full h-fit'>
        {optionList.map((option_name, index) => (
          <DietButton key={`diet-bt-${index}`} callback={updateDiet} css={dietCSS} title={option_name} index={index}/>
        ))}
      </View>
    </View>

    {/* Sliders */}
    <View className='flex-row w-full h-16 mt-2 bg-buttonBg rounded-lg'>
      {/* ADD LATER */}
    </View>

    {/* More Search Options */}
    <View className='flex-row w-full h-8 mt-2 items-center justify-center px-3 bg-buttonBg rounded-lg'>
      <Text className='font-inconsolata text-base'>
        Search By:
      </Text>
      <View className='flex-row grow w-fit h-fit items-center justify-center'>
        {categories.map((cat, index) => (
          <TouchableOpacity key={`search-opt-${index}`} className={`w-12 h-6 items-center justify-center rounded-full ${catColor[index]}`}
            activeOpacity={1} onPress={()=>setCatFocus(index)}>
            <Text className={`font-inconsolata text-base ${catText[index]}`}>{cat}</Text>
          </TouchableOpacity>
        ))}
        <View id='div' className="{{height > 800 ? 'w-4': ''}}"/>
      </View>
    </View>
  </View>
)

const DietButton = ({callback, css, title, index}) => (
  <View className='flex-row w-fit h-7 items-center justify-center'>
    <TouchableOpacity className='flex-row w-fit h-7 items-center justify-center mr-5'
      activeOpacity={1} onPress={()=>callback(index)}>
      <View className={`w-4 h-4 rounded-md border-2 ${css[index]} border-itemText mr-2`}/>
      <Text className='font-inconsolata text-base'>
        {title}
      </Text>
    </TouchableOpacity>
  </View>
)

const PageButton = ({callback, index, buttonColor, buttonText}) => (
  <TouchableOpacity className={`w-8 h-8 items-center justify-center rounded-xl ${buttonColor}`}
    activeOpacity={1} onPress={()=>callback(index)}>
    <Text className={`font-inconsolataBold text-xl ${buttonText}`}>{index + 1}</Text>
  </TouchableOpacity>
)

const PageMenu = ({pageButtons, shiftPageIndex}) => (
  <View className='w-full h-8 mt-2 items-center justify-center'>
    <View className='flex-row w-fit h-8 items-center justify-center bg-buttonBg rounded-xl'>
      <TouchableOpacity className={`w-8 h-8 items-center justify-center rounded-xl`}
        activeOpacity={1} onPress={()=>shiftPageIndex(-1)}>
        <Text className={`font-inconsolataBold text-xl text-itemText`}> {'<'} </Text>
      </TouchableOpacity>
      {
        pageButtons
      }
      <TouchableOpacity className={`w-8 h-8 items-center justify-center rounded-xl`}
        activeOpacity={1} onPress={()=>shiftPageIndex(1)}>
        <Text className={`font-inconsolataBold text-xl text-itemText`}> {'>'} </Text>
      </TouchableOpacity>
    </View>
  </View>
)

const RecipeCard = ({title, nutrition, tags, data, image}) => (
  <View className='flex-col w-full h-64 p-1 bg-itemBgLight rounded-xl'>
    <Image className='flex-1 w-full rounded-lg' source={image}/>
    <View className='flex-col w-full h-fit mt-1'>
      {/* Data */}
      <View className='flex-row w-full h-6 justify-start'>
        <View className='flex-row w-10 h-6 items-center justify-center'>
          <View className='w-5 h-5 bg-itemBgDark rounded-md mr-1'></View>
          <Text className='font-inconsolata text-base'>{data.likes}</Text>
        </View>
        <View className='flex-row w-10 h-6 items-center justify-center'>
          <View className='w-5 h-5 bg-itemBgDark rounded-md mr-1'></View>
          <Text className='font-inconsolata text-base'>{data.likes}</Text>
        </View>
        <View className='flex-row w-10 h-6 items-center justify-center'>
          <View className='w-5 h-5 bg-itemBgDark rounded-md mr-1'></View>
          <Text className='font-inconsolata text-base'>{data.likes}</Text>
        </View>
      </View>

      {/* Title */}
      <View className='w-full h-fit items-center justify-center mt-1'>
        <Text className='font-inconsolataBold text-itemText text-3xl'>
          {title}
        </Text>
      </View>

      {/* Nutrition */}
      <View className='flex-row w-full h-fit -mt-2 items-center justify-center'>
        <Text className='font-inconsolata text-itemText text-base mr-5'>
          {nutrition.cal} Cal
        </Text>
        <Text className='font-inconsolata text-itemText text-base mr-5'>
          {nutrition.protein}g Protein
        </Text>
        <Text className='font-inconsolata text-itemText text-base'>
          {nutrition.carb}g Carbs
        </Text>
      </View>

      {/* Tags */}
      <View className='flex-row w-full h-fit items-center justify-center mt-1'>
        {tags.map((tag, index) => (
          <Text key={`tag-${index}`} className='font-inconsolata text-itemBgMid text-base mr-3'>
            #{tag}
          </Text>
        ))}
      </View>
    </View>
  </View>
)

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
            <Text className="font-inconsolata mx-4 text-3xl text-screenText">
              Browse Recipes
            </Text>
            <View className='flex-row items-center justify-center w-full h-10 mt-2 px-1 bg-itemBgLight rounded-lg'>
              <TextInput className='font-inconsolataLight shrink w-full h-10 text-itemText text-xl pl-3 pb-1'
                placeholder="ex. Neapolitan Pizza" 
                value={searchQuery} 
                onChangeText={setSearchQuery} 
                underlineColorAndroid={'transparent'}
              />
              <TouchableOpacity activeOpacity={0.7} className='w-8 h-8 bg-itemBgDark rounded-lg'></TouchableOpacity>
              <OptionButton callback={setShowOptions} showOptions={showOptions}/>

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
            <View className='flex-row w-full h-fit justify-between px-1'>
              <Text className='font-inconsolata text-xl ml-4 text-itemBgLight'>
                Results
              </Text>
              <OptionButton/>
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