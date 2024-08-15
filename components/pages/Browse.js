import React, { useState, useRef, useContext } from 'react';
import { SideBarContext } from './HomeControl';
import { Text, View, SafeAreaView, Dimensions, TouchableOpacity, ScrollView, FlatList, Pressable } from 'react-native';
import TitleTextComponent from '../text/TitleTextComponent';
import ItemTextComponent from '../text/ItemTextComponent';
import SideBarButton from '../general/SideBarButton';
import ExitButton from '../general/ExitButton';
import OptionsButton from '../browse/OptionsButton';
import OptionsMenu1 from '../browse/OptionsMenu1';
import OptionsMenu2 from '../browse/OptionsMenu2';
import PageButton from '../browse/PageButton';
import PageMenu from '../browse/PageMenu';
import RecipeCard from '../browse/RecipeCard';
import ItemTextInputComponent from '../text/ItemTextInputComponent';

const RecipeDisplayCard = ({item}) => (
  <TouchableOpacity key={`${item.id}`} className='w-full h-fit'
  activeOpacity={0.9}>
    <RecipeCard 
      title={item.title}
      nutrition={item.nutrition}
      tags={item.tags}
      data={item.data}
      image={item.image}/>
  </TouchableOpacity>
)

const CardDiv = () => (
  <View className='w-full h-2' />
)

const { width, height } = Dimensions.get('window');

const Browse = ({ navigation }) => {
  const scrollRef = useRef();
  const {wideScreen, setShowSideBar, updatePage} = useContext(SideBarContext);
  
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
  const filterList = [
    'Relevance', 
    'Likes', 
    'Downloads', 
    'Calories',
    'Protein', 
    'Carbs',
  ]
  const filterDirShort = [
    'Asc', 
    'Des',
  ]
  const filterDirLong = [
    'Ascending',
    'Descending',
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
      image: require('../../assets/images/recipe-1.webp'),
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
      image: require('../../assets/images/recipe-1.webp'),
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
      image: require('../../assets/images/recipe-1.webp'),
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
      image: require('../../assets/images/recipe-1.webp'),
    },
  ]
  const recipesShown = [];
  const recipeMaxCnt = 6;
  const pageCount = Math.floor(recipes.length / recipeMaxCnt) + 1 * (recipes.length % recipeMaxCnt != 0);


  { /* State/Functions */}
  // Options Menu 1
  const [searchQuery, setSearchQuery] = useState('');

  const [showOptions1, setShowOptions1] = useState(false);

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

  const [calorieValue, setCalorieValue] = useState(2000);
  const calorieMinValue = 0;
  const calorieMaxValue = 5000;

  const [budgetValue, setBudgetValue] = useState(20000);
  const budgetMinValue = 0;
  const budgetMaxValue = 100000;

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

  // Options Menu 2
  const [showOptions2, setShowOptions2] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const [filterIndex, setFilterIndex] = useState(0);
  const [filterDirIdx, setFilterDirIdx] = useState(0);
  const shiftFilterDirIdx = () => {
    setFilterDirIdx((filterDirIdx + 1) % filterDirShort.length);
  }

  // Pages

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
    <SafeAreaView id='screen' className='relative w-full h-full bg-screenBg'>
      <ScrollView ref={scrollRef} className='static w-full h-full'>
        <View id='content' className='static w-full h-fit p-4'>
          {/* Frame 1 - Search Bar */}
          <View className='w-full h-fit mt-2'>
            {/* Title */}
            <View className='flex-row w-full h-10 justify-between'>
              {
                wideScreen ? null : <SideBarButton callback={setShowSideBar} />
              }
              <TitleTextComponent translate={true} size={'text-3xl'} css={'mx-4 text-screenText'}>
                Browse Recipes
              </TitleTextComponent>
              <ExitButton/>
            </View>

            {/* Search Bar */}
            <View className='flex-row items-center justify-center w-full h-fit mt-2'>
              <View className='flex-row items-center justify-center shrink w-full h-fit pr-1 bg-itemBgLight rounded-lg'>
                <ItemTextInputComponent
                translate={true}
                size={'text-xl'}
                css={'shrink w-full h-10 text-itemText pb-1 pl-3'}
                placeholder={"ex. Neapolitan Pizza"}
                placeholderTextColor={'#85855B'}
                value={searchQuery} 
                onChangeText={setSearchQuery} 
                underlineColorAndroid={'transparent'}
                />
                <TouchableOpacity activeOpacity={0.7} className='w-8 h-8 bg-itemBgDark rounded-lg'></TouchableOpacity>
              </View>
              <OptionsButton callback={setShowOptions1} showOptions={showOptions1}/>
            </View>
          </View>

          {/* Frame 2 - Options */}
          {
            showOptions1
            ? <OptionsMenu1 
                optionList={optionList} 
                updateDiet={updateDiet}
                dietCSS = {dietButtonCSS}

                calorieValue={calorieValue} 
                setCalorieValue={setCalorieValue}
                calorieMinValue={calorieMinValue} 
                calorieMaxValue={calorieMaxValue} 

                budgetValue={budgetValue}
                setBudgetValue={setBudgetValue}
                budgetMinValue={budgetMinValue} 
                budgetMaxValue={budgetMaxValue}

                categories={categories}
                setCatFocus={setCatFocus}
                catColor={catColor} 
                catText={catText}/> 
            : null
          }
          
          {
            showDropDown ? 
            <Pressable className='absolute z-10 w-screen h-screen justify-center items-center' 
            onPress={()=>setShowDropDown(false)}/>
            : null
          }
          {/* Frame 3 - Results */}
          <View className='relative z-20 flex-col w-full h-fit mt-2'>
            {
              showDropDown ? 
              <Pressable className='absolute z-10 w-full h-full justify-center items-center' 
              onPress={()=>setShowDropDown(false)}/>
              : null
            }
            <View className='flex-row w-full h-10 -mb-2 items-center justify-between'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText ml-4 mt-2'}>
                Results
              </TitleTextComponent>
              <OptionsButton callback={setShowOptions2} showOptions={showOptions2}/>
            </View>
            {
              showOptions2 
              ? wideScreen 
                ? <OptionsMenu2 
                  filterList={filterList}
                  filterIndex={filterIndex}
                  setFilterIndex={setFilterIndex}
                  filterDir={filterDirLong}
                  filterDirIdx={filterDirIdx}
                  shiftFilterDirIdx={shiftFilterDirIdx}
                  showDropDown={showDropDown} 
                  setShowDropDown={setShowDropDown}
                  />
                : <OptionsMenu2 
                  filterList={filterList}
                  filterIndex={filterIndex}
                  setFilterIndex={setFilterIndex}
                  filterDir={filterDirShort}
                  filterDirIdx={filterDirIdx}
                  shiftFilterDirIdx={shiftFilterDirIdx}
                  showDropDown={showDropDown} 
                  setShowDropDown={setShowDropDown}
                  />
              : null
            }
          </View>

          {/* Frame 4 - Cards */}
          <View className='relative z-0 flex-col w-full h-fit mt-3'>
            <FlatList 
            scrollEnabled={false}
            className='w-full h-fit'
            data={recipesShown}
            renderItem={({item}) => <RecipeDisplayCard item={item} />}
            ItemSeparatorComponent={CardDiv}
            />
            </View>

            {/* Page Numbers */}
            {
              recipes.length != 0 
              ? <PageMenu key={'menu-2'} pageButtons={pageButtons} shiftPageIndex={shiftPageIndex}/>
              : null
            }
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Browse;