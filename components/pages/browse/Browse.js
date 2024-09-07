import React, { useState, useRef, useContext } from 'react';
import { SideBarContext } from '../control/HomeControl';
import { BrowseContext } from '../control/BrowseControl';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler, View, SafeAreaView, ScrollView, FlatList, Pressable, TouchableHighlight } from 'react-native';
import TitleTextComponent from '../../text/TitleTextComponent';
import SideBarButton from '../../general/sidebar/SideBarButton';
import ExitButton from '../../general/buttons/ExitButton';
import OptionsButton from '../../browse/options/OptionsButton';
import OptionsMenu1 from '../../browse/options/OptionsMenu1';
import OptionsMenu2 from '../../browse/options/OptionsMenu2';
import PageButton from '../../browse/page/PageButton';
import PageMenu from '../../browse/page/PageMenu';
import RecipeBrowseCard from '../../browse/misc/RecipeBrowseCard';
import ItemTextInputComponent from '../../text/ItemTextInputComponent';
import Search from "../../../assets/icons/search.svg";

const Browse = ({ navigation }) => {
  const scrollRef = useRef();
  const { wideScreen, setShowSideBar, updatePage } = useContext(SideBarContext);
  const { setSelectedRecipeItem } = useContext(BrowseContext);

  const handleSearch = () => {
    null;
  }

  const handleRecipePress = (item) => {
    setSelectedRecipeItem(item);
    navigation.navigate('RecipePage');
  }

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        updatePage(0);
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => subscription.remove();
    })
  ); 
  
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
      preset: true,
      id: 'recipe-1',
      mealTime: {dayIndex: 0, mealIndex: 1},
      title: '참치 샌드위치', 
      nutrition: {
        cal: 1261,
        protein: 148, 
        carb: 429,
      },
      tags: ['샌드위치', '프로틴', '건강'],
      public: true,
      data: {
        likes: 800,
        comments: 40, 
        downloads: 7000,
      },
      image: require('../../../assets/images/recipe-1.webp'),
      ingredients: [
        {
          preset: true,
          index: 0,
          id: 'canned-tuna',
          name: '참치 통조림',
          amount: 1,
          unit: '개',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 1,
          id: 'celery',
          name: '셀러리',
          amount: '1/3', 
          unit: '컵',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 2,
          id: 'red-onion',
          name: '빨간양파',
          amount: 2, 
          unit: 'Ts',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 3,
          id: 'pickle-relish',
          name: '스위트 피클 랠리쉬',
          amount: 2, 
          unit: 'Ts',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 4,
          id: 'lemon',
          name: '레몬',
          amount: 1,
          unit: '개',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 5,
          id: 'garlic-clove',
          name: '통마늘',
          amount: 1, 
          unit: '개',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 6,
          id: 'salt',
          name: '소금',
          amount: 0, 
          unit: '적당량',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 7,
          id: 'black-pepper',
          name: '후추',
          amount: 0, 
          unit: '적당량',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 8,
          id: 'mayo',
          name: '마요네즈',
          amount: 1,
          unit: '컵',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
      ],
      procedure: [
        {
          preset: true,
          index: 0, 
          description: '(Recipe Step 1)',
          image: require('../../../assets/images/procedure-example/step-1.webp'),
        },
        {
          preset: true,
          index: 1, 
          description: '(Recipe Step 2)',
          image: require('../../../assets/images/procedure-example/step-2.jpg'),
        },
      ],
    }, 
    {
      preset: true,
      id: 'recipe-1',
      mealTime: {dayIndex: 0, mealIndex: 1},
      title: '참치 샌드위치', 
      nutrition: {
        cal: 1261,
        protein: 148, 
        carb: 429,
      },
      tags: ['샌드위치', '프로틴', '건강'],
      public: true,
      data: {
        likes: 800,
        comments: 40, 
        downloads: 7000,
      },
      image: require('../../../assets/images/recipe-1.webp'),
      ingredients: [
        {
          preset: true,
          index: 0,
          id: 'canned-tuna',
          name: '참치 통조림',
          amount: 1,
          unit: '개',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 1,
          id: 'celery',
          name: '셀러리',
          amount: '1/3', 
          unit: '컵',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 2,
          id: 'red-onion',
          name: '빨간양파',
          amount: 2, 
          unit: 'Ts',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 3,
          id: 'pickle-relish',
          name: '스위트 피클 랠리쉬',
          amount: 2, 
          unit: 'Ts',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 4,
          id: 'lemon',
          name: '레몬',
          amount: 1,
          unit: '개',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 5,
          id: 'garlic-clove',
          name: '통마늘',
          amount: 1, 
          unit: '개',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 6,
          id: 'salt',
          name: '소금',
          amount: 0, 
          unit: '적당량',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 7,
          id: 'black-pepper',
          name: '후추',
          amount: 0, 
          unit: '적당량',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 8,
          id: 'mayo',
          name: '마요네즈',
          amount: 1,
          unit: '컵',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
      ],
      procedure: [
        {
          preset: true,
          index: 0, 
          description: '(Recipe Step 1)',
          image: require('../../../assets/images/procedure-example/step-1.webp'),
        },
        {
          preset: true,
          index: 1, 
          description: '(Recipe Step 2)',
          image: require('../../../assets/images/procedure-example/step-2.jpg'),
        },
      ],
    }, 
    {
      preset: true,
      id: 'recipe-1',
      mealTime: {dayIndex: 0, mealIndex: 1},
      title: '참치 샌드위치', 
      nutrition: {
        cal: 1261,
        protein: 148, 
        carb: 429,
      },
      tags: ['샌드위치', '프로틴', '건강'],
      public: true,
      data: {
        likes: 800,
        comments: 40, 
        downloads: 7000,
      },
      image: require('../../../assets/images/recipe-1.webp'),
      ingredients: [
        {
          preset: true,
          index: 0,
          id: 'canned-tuna',
          name: '참치 통조림',
          amount: 1,
          unit: '개',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 1,
          id: 'celery',
          name: '셀러리',
          amount: '1/3', 
          unit: '컵',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 2,
          id: 'red-onion',
          name: '빨간양파',
          amount: 2, 
          unit: 'Ts',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 3,
          id: 'pickle-relish',
          name: '스위트 피클 랠리쉬',
          amount: 2, 
          unit: 'Ts',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 4,
          id: 'lemon',
          name: '레몬',
          amount: 1,
          unit: '개',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 5,
          id: 'garlic-clove',
          name: '통마늘',
          amount: 1, 
          unit: '개',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 6,
          id: 'salt',
          name: '소금',
          amount: 0, 
          unit: '적당량',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 7,
          id: 'black-pepper',
          name: '후추',
          amount: 0, 
          unit: '적당량',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 8,
          id: 'mayo',
          name: '마요네즈',
          amount: 1,
          unit: '컵',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
      ],
      procedure: [
        {
          preset: true,
          index: 0, 
          description: '(Recipe Step 1)',
          image: require('../../../assets/images/procedure-example/step-1.webp'),
        },
        {
          preset: true,
          index: 1, 
          description: '(Recipe Step 2)',
          image: require('../../../assets/images/procedure-example/step-2.jpg'),
        },
      ],
    }, 
    {
      preset: true,
      id: 'recipe-1',
      mealTime: {dayIndex: 0, mealIndex: 1},
      title: '참치 샌드위치', 
      nutrition: {
        cal: 1261,
        protein: 148, 
        carb: 429,
      },
      tags: ['샌드위치', '프로틴', '건강'],
      public: true,
      data: {
        likes: 800,
        comments: 40, 
        downloads: 7000,
      },
      image: require('../../../assets/images/recipe-1.webp'),
      ingredients: [
        {
          preset: true,
          index: 0,
          id: 'canned-tuna',
          name: '참치 통조림',
          amount: 1,
          unit: '개',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 1,
          id: 'celery',
          name: '셀러리',
          amount: '1/3', 
          unit: '컵',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 2,
          id: 'red-onion',
          name: '빨간양파',
          amount: 2, 
          unit: 'Ts',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 3,
          id: 'pickle-relish',
          name: '스위트 피클 랠리쉬',
          amount: 2, 
          unit: 'Ts',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 4,
          id: 'lemon',
          name: '레몬',
          amount: 1,
          unit: '개',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 5,
          id: 'garlic-clove',
          name: '통마늘',
          amount: 1, 
          unit: '개',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 6,
          id: 'salt',
          name: '소금',
          amount: 0, 
          unit: '적당량',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 7,
          id: 'black-pepper',
          name: '후추',
          amount: 0, 
          unit: '적당량',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
        {
          preset: true,
          index: 8,
          id: 'mayo',
          name: '마요네즈',
          amount: 1,
          unit: '컵',
          image: require('../../../assets/images/ingredient-example/canned-tuna.jpg'),
          link: 'https://coupang.com/example_link',
        },
      ],
      procedure: [
        {
          preset: true,
          index: 0, 
          description: '(Recipe Step 1)',
          image: require('../../../assets/images/procedure-example/step-1.webp'),
        },
        {
          preset: true,
          index: 1, 
          description: '(Recipe Step 2)',
          image: require('../../../assets/images/procedure-example/step-2.jpg'),
        },
      ],
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
  const [searchCat, setSearchCat] = useState(0);

  const [calorieValue, setCalorieValue] = useState(2000);
  const [budgetValue, setBudgetValue] = useState(20000);

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
  const [pageButtonColor, setPageButtonColor] = useState(['bg-itemText'].concat(new Array(pageCount).fill('bg-buttonBg')));
  const [pageButtonText, setPageButtonText] = useState(['text-itemBgLight'].concat(new Array(pageCount).fill('text-itemText')));
  const updatePageIndex = (index) => {
    if (index == pageIndex) return;
    setPageIndex(index);  // STARTS AT 0

    {/* Page Button CSS */}
    const new_color = new Array(pageCount).fill('bg-buttonBg');
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
                <TouchableHighlight className='w-8 h-8 rounded-lg'
                activeOpacity={0.9} onPress={handleSearch}>
                  <View className='w-full h-full items-center justify-center bg-itemBgLight'>
                    <Search width={25} height={25} stroke={'#85855B'} strokeWidth={3} />
                  </View>
                </TouchableHighlight>
              </View>
              <OptionsButton callback={setShowOptions1} showOptions={showOptions1}/>
            </View>
          </View>

          {/* Frame 2 - Options */}
          {
            showOptions1
            ? <OptionsMenu1 
                optionList={optionList} 
                dietIndex={dietIndex} 
                setDietIndex={setDietIndex}

                calorieValue={calorieValue} 
                setCalorieValue={setCalorieValue}

                budgetValue={budgetValue}
                setBudgetValue={setBudgetValue}

                categories={categories}
                searchCat={searchCat}
                setSearchCat={setSearchCat}/> 
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
            renderItem={({item}) => <RecipeBrowseCard item={item} handleRecipePress={handleRecipePress}/>}
            ItemSeparatorComponent={<View className='w-full h-2' />}
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