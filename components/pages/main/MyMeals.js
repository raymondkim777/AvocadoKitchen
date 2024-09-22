import React, { useState, useContext, } from 'react';
import { SideBarContext } from '../control/HomeControl';
import { BackHandler, SafeAreaView, Text, SectionList, View, Image, Pressable, TouchableOpacity, TouchableHighlight } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import TitleTextComponent from '../../text/TitleTextComponent';
import ItemLargeTextComponent from '../../text/ItemLargeTextComponent';
import SideBarButton from '../../general/sidebar/SideBarButton';
import ExitButton from '../../general/buttons/ExitButton';
import EditButtonDropDown from '../../general/buttons/EditButtonDropDown';
import Check from '../../../assets/icons/check.svg';
import ArrowDown from '../../../assets/icons/arrowdown.svg';
import ArrowUp from '../../../assets/icons/arrowup.svg';
import DoubleArrowDown from '../../../assets/icons/doublearrowdown.svg';
import DoubleArrowUp from '../../../assets/icons/doublearrowup.svg';
import AlertCheck from '../../general/misc/AlertCheck';

const HeaderSection = ({
  navigation, nutrition, 
  nutritionStandard, nutritionStandardRange, 
  dropDownOpen, closeDropDowns
}) => (
  <View className='flex-col w-full h-fit mt-4'>
    <TitleSection navigation={navigation} />
    <NutritionSection 
    nutrition={nutrition} 
    nutritionStandard={nutritionStandard} 
    nutritionStandardRange={nutritionStandardRange} 
    />
    {
      dropDownOpen ? 
      <Pressable className='absolute z-20 top-0 bottom-0 left-0 right-0'
      onPress={closeDropDowns}/>
      : null
    }
  </View>
)

const TitleSection = ({ navigation }) => {
  const {wideScreen, setShowSideBar, updatePage} = useContext(SideBarContext);
  return(
    <View className='w-full h-fit mt-2'>
      <View className='flex-row w-full h-10 justify-between'>
        {
          wideScreen ? null : <SideBarButton callback={setShowSideBar} />
        }
        <TitleTextComponent translate={true} size={'text-3xl'} css={'mx-4 text-screenText'}>
          My Meals
        </TitleTextComponent>
        <ExitButton/>
      </View>
    </View>
  )
}

const NutritionSection = ({ nutrition, nutritionStandard, nutritionStandardRange }) => (
  <View className='grow min-h-fit mt-6'>
    <TitleTextComponent translate={true} size={'text-3xl'} css={'mx-4 text-screenText'}>
      Average Daily Stats
    </TitleTextComponent>
    {/* Three Cards */}
    <View className={`grow flex-row w-full h-40 mt-2 space-x-4`}>
      {nutrition.map((item, index) => (
        <View className='shrink w-full h-full'>
          <NutritionCard 
          item={item} 
          index={index} 
          nutritionStandard={nutritionStandard} 
          nutritionStandardRange={nutritionStandardRange} 
          />
        </View>
      ))}
    </View>
  </View>
);

const NutritionCard = ({item, index, nutritionStandard, nutritionStandardRange}) => {
  let IconName = null;
  if (item.value < nutritionStandard[index] - nutritionStandardRange[index]) {
    IconName = ArrowUp;
  } else if (item.value > nutritionStandard[index] + nutritionStandardRange[index]) {
    IconName = ArrowDown;
  } else {
    IconName = Check;
  }
  return(
    <View className={`w-full h-full min-h-40 items-center justify-center bg-itemBgLight rounded-lg`}>
      <View className='w-6 h-6 -mt-4 items-center justify-center'>
        <IconName width={30} height={30} stroke={'#85855B'} strokeWidth={3} />
      </View>
      <ItemLargeTextComponent bold={true} size={'text-3xl'} css={'text-itemText mt-4'}>
        {item.value}{ index == 0? '' : 'g' }
      </ItemLargeTextComponent>
      <ItemLargeTextComponent translate={true} bold={true} size={'text-2xl'} css={'text-itemText'}>
        {item.unit}
      </ItemLargeTextComponent>
    </View>
  )
}

const MealCardThin = ({
  item, 
  dropDownOpen, showDropDown, 
  openDropDown, closeDropDowns,
  handlePress, handleEditPress, handleDeletePress,
}) => (
  <View className='z-10 flex-row w-full h-28 p-1 pr-0 rounded-lg bg-itemBgLight'>
    {
      dropDownOpen ? 
      <Pressable className='absolute z-20 top-0 bottom-0 left-0 right-0'
      onPress={closeDropDowns}/>
      : null
    }
    <TouchableOpacity className='flex-row shrink w-full h-full'
    activeOpacity={0.7} onPress={()=>handlePress(item)}>
      <Image className='shrink w-1/2 h-full rounded-md' source={item.image} />
      <View className='flex-col grow w-1/2 ml-1 pl-2 h-full items-center justify-center'>
        <TitleTextComponent translate={true} size={'text-2xl'} css={'h-8 text-itemText text-center'}>
          {item.title}
        </TitleTextComponent>
        <ItemLargeTextComponent bold={true} size={'text-3xl'} css={'mt-1 text-itemText'}>
          {item.nutrition.cal} Cal
        </ItemLargeTextComponent>
      </View>
    </TouchableOpacity>
    <View className='w-5 h-full items-center justify-center'>
      <EditButtonDropDown 
      showDropDown={showDropDown} 
      openDropDown={openDropDown} 
      EditDropDown={<EditDropDown item={item} handleEditPress={handleEditPress} handleDeletePress={handleDeletePress} />}
      />
    </View>
  </View>
)

const EditDropDown = ({item, handleEditPress, handleDeletePress}) => (
  <View className='absolute z-30 -top-5 -bottom-5 right-4 w-24'>
    <View className='flex-col w-full h-full items-center justify-center border-2 border-itemText p-0 bg-buttonBg rounded-xl overflow-hidden'>
      <TouchableHighlight className={`shrink w-full h-full items-center justify-center rounded-[10px]`}
      activeOpacity={0.9} onPress={() => handleEditPress(item)}>
        <View className='w-full h-full items-center justify-center bg-buttonBg'>
          <TitleTextComponent translate={true} size={'text-lg'} css={'text-itemText'}>
            Edit
          </TitleTextComponent>
        </View>
      </TouchableHighlight>
      <TouchableHighlight className={`shrink w-full h-full items-center justify-center rounded-[10px]`}
      activeOpacity={0.9} onPress={handleDeletePress}>
        <View className='w-full h-full items-center justify-center bg-buttonBg'>
          <TitleTextComponent translate={true} size={'text-lg'} css={'text-itemText'}>
            Delete
          </TitleTextComponent>
        </View>
      </TouchableHighlight>
    </View>
  </View>
)

const ItemDiv = () => (
  <View className='w-full h-2' />
)

const MyMeals = ({ navigation }) => {
  const {wideScreen, setShowSideBar, updatePage} = useContext(SideBarContext);

  const handlePress = (item) => {
    updatePage(3, true, {
      screen: 'RecipePage',
      params: { 
        originPage: 'MyMeals',
        presetRecipeItem: item 
      },
    });
  }

  const handleEditPress = (item) => {
    closeDropDowns();
    updatePage(4, true, {
      screen: 'AddMealPage',
      params: { 
        originPage: 'MyMeals',
        selectedRecipeItem: item 
      },
    });
  }

  const handleDeleteItem = () => {
    null;
  }  

  const handleDeletePress = () => {
    closeDropDowns();
    handleDeleteItem();
    setShowDeleteCheck(true);
  }

  const [showDeleteCheck, setShowDeleteCheck] = useState(false);

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

  const [nutritionStandard, setNutritionStandard] = useState([2000, 500, 1000]);
  const [nutritionStandardRange, setNutritionStandardRange] = useState([600, 100, 200]);

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const nutrition = [
    {
      id: 'calorie',
      value: 1261,
      unit: 'Cal',
    },
    {
      id: 'protein',
      value: 487,
      unit: 'Protein',
    },
    {
      id: 'carb',
      value: 1452,
      unit: 'Carbs',
    },
  ];
  const meals = [
    {
      day: "Sunday",
      data: [
        {
          preset: true,
          id: 'meal-1',
          mealTime: {dayIndex: 0, mealIndex: 0},
          title: '와플', 
          nutrition: {
            cal: 312,
            protein: 148, 
            carb: 429,
          },
          tags: [
            {
              index: 0,
              id: 'tag-0',
              text: '샌드위치'
            },
            {
              index: 1,
              id: 'tag-0',
              text: '건강'
            },
            {
              index: 2,
              id: 'tag-0',
              text: '프로틴'
            },
          ],
          public: false,
          data: {
            likes: 800,
            comments: 40, 
            downloads: 7000,
          },
          image: require('../../../assets/images/meal-example/meal-1.jpg'),
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
          id: 'meal-2',
          mealTime: {dayIndex: 0, mealIndex: 1},
          title: '참치 샌드위치', 
          nutrition: {
            cal: 746,
            protein: 148, 
            carb: 429,
          },
          tags: [
            {
              index: 0,
              id: 'tag-0',
              text: '샌드위치'
            },
            {
              index: 1,
              id: 'tag-0',
              text: '건강'
            },
            {
              index: 2,
              id: 'tag-0',
              text: '프로틴'
            },
          ],
          public: false,
          data: {
            likes: 800,
            comments: 40, 
            downloads: 7000,
          },
          image: require('../../../assets/images/meal-example/meal-2.jpg'),
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
          id: 'meal-3',
          mealTime: {dayIndex: 0, mealIndex: 2},
          title: '안심 스테이크', 
          nutrition: {
            cal: 539,
            protein: 148, 
            carb: 429,
          },
          tags: [
            {
              index: 0,
              id: 'tag-0',
              text: '샌드위치'
            },
            {
              index: 1,
              id: 'tag-0',
              text: '건강'
            },
            {
              index: 2,
              id: 'tag-0',
              text: '프로틴'
            },
          ],
          public: false,
          data: {
            likes: 800,
            comments: 40, 
            downloads: 7000,
          },
          image: require('../../../assets/images/meal-example/meal-3.jpg'),
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
      ],
    },
    {
      day: "Monday",
      data: [
        {
          preset: true,
          id: 'meal-1',
          mealTime: {dayIndex: 1, mealIndex: 0},
          title: '와플', 
          nutrition: {
            cal: 312,
            protein: 148, 
            carb: 429,
          },
          tags: [
            {
              index: 0,
              id: 'tag-0',
              text: '샌드위치'
            },
            {
              index: 1,
              id: 'tag-0',
              text: '건강'
            },
            {
              index: 2,
              id: 'tag-0',
              text: '프로틴'
            },
          ],
          public: false,
          data: {
            likes: 800,
            comments: 40, 
            downloads: 7000,
          },
          image: require('../../../assets/images/meal-example/meal-1.jpg'),
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
          id: 'meal-2',
          mealTime: {dayIndex: 1, mealIndex: 1},
          title: '참치 샌드위치', 
          nutrition: {
            cal: 746,
            protein: 148, 
            carb: 429,
          },
          tags: [
            {
              index: 0,
              id: 'tag-0',
              text: '샌드위치'
            },
            {
              index: 1,
              id: 'tag-0',
              text: '건강'
            },
            {
              index: 2,
              id: 'tag-0',
              text: '프로틴'
            },
          ],
          public: false,
          data: {
            likes: 800,
            comments: 40, 
            downloads: 7000,
          },
          image: require('../../../assets/images/meal-example/meal-2.jpg'),
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
          id: 'meal-3',
          mealTime: {dayIndex: 1, mealIndex: 2},
          title: '안심 스테이크', 
          nutrition: {
            cal: 539,
            protein: 148, 
            carb: 429,
          },
          tags: [
            {
              index: 0,
              id: 'tag-0',
              text: '샌드위치'
            },
            {
              index: 1,
              id: 'tag-0',
              text: '건강'
            },
            {
              index: 2,
              id: 'tag-0',
              text: '프로틴'
            },
          ],
          public: false,
          data: {
            likes: 800,
            comments: 40, 
            downloads: 7000,
          },
          image: require('../../../assets/images/meal-example/meal-3.jpg'),
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
      ],
    },
    {
      day: "Tuesday",
      data: [
        {
          preset: true,
          id: 'meal-1',
          mealTime: {dayIndex: 2, mealIndex: 0},
          title: '와플', 
          nutrition: {
            cal: 312,
            protein: 148, 
            carb: 429,
          },
          tags: [
            {
              index: 0,
              id: 'tag-0',
              text: '샌드위치'
            },
            {
              index: 1,
              id: 'tag-0',
              text: '건강'
            },
            {
              index: 2,
              id: 'tag-0',
              text: '프로틴'
            },
          ],
          public: false,
          data: {
            likes: 800,
            comments: 40, 
            downloads: 7000,
          },
          image: require('../../../assets/images/meal-example/meal-1.jpg'),
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
          id: 'meal-2',
          mealTime: {dayIndex: 2, mealIndex: 1},
          title: '참치 샌드위치', 
          nutrition: {
            cal: 746,
            protein: 148, 
            carb: 429,
          },
          tags: [
            {
              index: 0,
              id: 'tag-0',
              text: '샌드위치'
            },
            {
              index: 1,
              id: 'tag-0',
              text: '건강'
            },
            {
              index: 2,
              id: 'tag-0',
              text: '프로틴'
            },
          ],
          public: false,
          data: {
            likes: 800,
            comments: 40, 
            downloads: 7000,
          },
          image: require('../../../assets/images/meal-example/meal-2.jpg'),
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
          id: 'meal-3',
          mealTime: {dayIndex: 2, mealIndex: 2},
          title: '안심 스테이크', 
          nutrition: {
            cal: 539,
            protein: 148, 
            carb: 429,
          },
          tags: [
            {
              index: 0,
              id: 'tag-0',
              text: '샌드위치'
            },
            {
              index: 1,
              id: 'tag-0',
              text: '건강'
            },
            {
              index: 2,
              id: 'tag-0',
              text: '프로틴'
            },
          ],
          public: false,
          data: {
            likes: 800,
            comments: 40, 
            downloads: 7000,
          },
          image: require('../../../assets/images/meal-example/meal-3.jpg'),
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
      ],
    },
    {
      day: "Wednesday",
      data: [
        {
          preset: true,
          id: 'meal-1',
          mealTime: {dayIndex: 3, mealIndex: 0},
          title: '와플', 
          nutrition: {
            cal: 312,
            protein: 148, 
            carb: 429,
          },
          tags: [
            {
              index: 0,
              id: 'tag-0',
              text: '샌드위치'
            },
            {
              index: 1,
              id: 'tag-0',
              text: '건강'
            },
            {
              index: 2,
              id: 'tag-0',
              text: '프로틴'
            },
          ],
          public: false,
          data: {
            likes: 800,
            comments: 40, 
            downloads: 7000,
          },
          image: require('../../../assets/images/meal-example/meal-1.jpg'),
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
          id: 'meal-2',
          mealTime: {dayIndex: 3, mealIndex: 1},
          title: '참치 샌드위치', 
          nutrition: {
            cal: 746,
            protein: 148, 
            carb: 429,
          },
          tags: [
            {
              index: 0,
              id: 'tag-0',
              text: '샌드위치'
            },
            {
              index: 1,
              id: 'tag-0',
              text: '건강'
            },
            {
              index: 2,
              id: 'tag-0',
              text: '프로틴'
            },
          ],
          public: false,
          data: {
            likes: 800,
            comments: 40, 
            downloads: 7000,
          },
          image: require('../../../assets/images/meal-example/meal-2.jpg'),
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
          id: 'meal-3',
          mealTime: {dayIndex: 3, mealIndex: 2},
          title: '안심 스테이크', 
          nutrition: {
            cal: 539,
            protein: 148, 
            carb: 429,
          },
          tags: [
            {
              index: 0,
              id: 'tag-0',
              text: '샌드위치'
            },
            {
              index: 1,
              id: 'tag-0',
              text: '건강'
            },
            {
              index: 2,
              id: 'tag-0',
              text: '프로틴'
            },
          ],
          public: false,
          data: {
            likes: 800,
            comments: 40, 
            downloads: 7000,
          },
          image: require('../../../assets/images/meal-example/meal-3.jpg'),
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
      ],
    },
    {
      day: "Thursday",
      data: [
        {
          preset: true,
          id: 'meal-1',
          mealTime: {dayIndex: 4, mealIndex: 0},
          title: '와플', 
          nutrition: {
            cal: 312,
            protein: 148, 
            carb: 429,
          },
          tags: [
            {
              index: 0,
              id: 'tag-0',
              text: '샌드위치'
            },
            {
              index: 1,
              id: 'tag-0',
              text: '건강'
            },
            {
              index: 2,
              id: 'tag-0',
              text: '프로틴'
            },
          ],
          public: false,
          data: {
            likes: 800,
            comments: 40, 
            downloads: 7000,
          },
          image: require('../../../assets/images/meal-example/meal-1.jpg'),
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
          id: 'meal-2',
          mealTime: {dayIndex: 4, mealIndex: 1},
          title: '참치 샌드위치', 
          nutrition: {
            cal: 746,
            protein: 148, 
            carb: 429,
          },
          tags: [
            {
              index: 0,
              id: 'tag-0',
              text: '샌드위치'
            },
            {
              index: 1,
              id: 'tag-0',
              text: '건강'
            },
            {
              index: 2,
              id: 'tag-0',
              text: '프로틴'
            },
          ],
          public: false,
          data: {
            likes: 800,
            comments: 40, 
            downloads: 7000,
          },
          image: require('../../../assets/images/meal-example/meal-2.jpg'),
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
          id: 'meal-3',
          mealTime: {dayIndex: 4, mealIndex: 2},
          title: '안심 스테이크', 
          nutrition: {
            cal: 539,
            protein: 148, 
            carb: 429,
          },
          tags: [
            {
              index: 0,
              id: 'tag-0',
              text: '샌드위치'
            },
            {
              index: 1,
              id: 'tag-0',
              text: '건강'
            },
            {
              index: 2,
              id: 'tag-0',
              text: '프로틴'
            },
          ],
          public: false,
          data: {
            likes: 800,
            comments: 40, 
            downloads: 7000,
          },
          image: require('../../../assets/images/meal-example/meal-3.jpg'),
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
      ],
    },
    {
      day: "Friday",
      data: [
        {
          preset: true,
          id: 'meal-1',
          mealTime: {dayIndex: 5, mealIndex: 0},
          title: '와플', 
          nutrition: {
            cal: 312,
            protein: 148, 
            carb: 429,
          },
          tags: [
            {
              index: 0,
              id: 'tag-0',
              text: '샌드위치'
            },
            {
              index: 1,
              id: 'tag-0',
              text: '건강'
            },
            {
              index: 2,
              id: 'tag-0',
              text: '프로틴'
            },
          ],
          public: false,
          data: {
            likes: 800,
            comments: 40, 
            downloads: 7000,
          },
          image: require('../../../assets/images/meal-example/meal-1.jpg'),
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
          id: 'meal-2',
          mealTime: {dayIndex: 5, mealIndex: 1},
          title: '참치 샌드위치', 
          nutrition: {
            cal: 746,
            protein: 148, 
            carb: 429,
          },
          tags: [
            {
              index: 0,
              id: 'tag-0',
              text: '샌드위치'
            },
            {
              index: 1,
              id: 'tag-0',
              text: '건강'
            },
            {
              index: 2,
              id: 'tag-0',
              text: '프로틴'
            },
          ],
          public: false,
          data: {
            likes: 800,
            comments: 40, 
            downloads: 7000,
          },
          image: require('../../../assets/images/meal-example/meal-2.jpg'),
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
          id: 'meal-3',
          mealTime: {dayIndex: 5, mealIndex: 2},
          title: '안심 스테이크', 
          nutrition: {
            cal: 539,
            protein: 148, 
            carb: 429,
          },
          tags: [
            {
              index: 0,
              id: 'tag-0',
              text: '샌드위치'
            },
            {
              index: 1,
              id: 'tag-0',
              text: '건강'
            },
            {
              index: 2,
              id: 'tag-0',
              text: '프로틴'
            },
          ],
          public: false,
          data: {
            likes: 800,
            comments: 40, 
            downloads: 7000,
          },
          image: require('../../../assets/images/meal-example/meal-3.jpg'),
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
      ],
    },
    {
      day: "Saturday",
      data: [
        {
          preset: true,
          id: 'meal-1',
          mealTime: {dayIndex: 6, mealIndex: 0},
          title: '와플', 
          nutrition: {
            cal: 312,
            protein: 148, 
            carb: 429,
          },
          tags: [
            {
              index: 0,
              id: 'tag-0',
              text: '샌드위치'
            },
            {
              index: 1,
              id: 'tag-0',
              text: '건강'
            },
            {
              index: 2,
              id: 'tag-0',
              text: '프로틴'
            },
          ],
          public: false,
          data: {
            likes: 800,
            comments: 40, 
            downloads: 7000,
          },
          image: require('../../../assets/images/meal-example/meal-1.jpg'),
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
          id: 'meal-2',
          mealTime: {dayIndex: 6, mealIndex: 1},
          title: '참치 샌드위치', 
          nutrition: {
            cal: 746,
            protein: 148, 
            carb: 429,
          },
          tags: [
            {
              index: 0,
              id: 'tag-0',
              text: '샌드위치'
            },
            {
              index: 1,
              id: 'tag-0',
              text: '건강'
            },
            {
              index: 2,
              id: 'tag-0',
              text: '프로틴'
            },
          ],
          public: false,
          data: {
            likes: 800,
            comments: 40, 
            downloads: 7000,
          },
          image: require('../../../assets/images/meal-example/meal-2.jpg'),
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
          id: 'meal-3',
          mealTime: {dayIndex: 6, mealIndex: 2},
          title: '안심 스테이크', 
          nutrition: {
            cal: 539,
            protein: 148, 
            carb: 429,
          },
          tags: [
            {
              index: 0,
              id: 'tag-0',
              text: '샌드위치'
            },
            {
              index: 1,
              id: 'tag-0',
              text: '건강'
            },
            {
              index: 2,
              id: 'tag-0',
              text: '프로틴'
            },
          ],
          public: false,
          data: {
            likes: 800,
            comments: 40, 
            downloads: 7000,
          },
          image: require('../../../assets/images/meal-example/meal-3.jpg'),
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
      ],
    },
  ];

  const [dropDownOpen, setDropDownOpen] = useState(false);
  const dropDownStates = [];
  const dropDownOpenFunctions = [];
  const dropDownCloseFunctions = [];
  for (let i = 0; i < 21; i++) {
    const [showDropDown, setShowDropDown] = useState(false);
    const openDropDown = () => {
      setDropDownOpen(true);
      setShowDropDown(true);
    }
    dropDownStates.push(showDropDown);
    dropDownOpenFunctions.push(openDropDown);
    dropDownCloseFunctions.push(setShowDropDown);
  }
  const closeDropDowns = () => {
    dropDownCloseFunctions.forEach(f => f(false));
    setDropDownOpen(false);
  }

  return(
    <SafeAreaView id='screen' className='relative z-0 w-full h-full justify-center items-center'>
      <View className='w-full h-full'>
        <SectionList
        className='z-10 w-full h-fit px-4 bg-screenBg'
        contentContainerStyle={{flexGrow: 1}} 
        sections={meals}
        renderItem={({item, index, section: {day}}) => (
          <View className='z-30 flex-col w-full h-fit'>
            {/* Cards */}
            <View className='z-30 w-full h-fit'>
              <MealCardThin 
              item={item} 
              dropDownOpen={dropDownOpen}
              showDropDown={dropDownStates[days.findIndex((element) => element === day) * 3 + index]}
              openDropDown={dropDownOpenFunctions[days.findIndex((element) => element === day) * 3 + index]}
              closeDropDowns={closeDropDowns}
              handlePress={handlePress}
              handleEditPress={handleEditPress} 
              handleDeletePress={handleDeletePress}
              />
            </View>
          </View>
        )}
        renderSectionHeader={({section: {day}}) => (
          <View className='w-full h-fit pb-2 bg-screenBg'>
            <TitleTextComponent translate={true} size={'text-3xl'} css={'mx-4 mt-4 text-screenText'}>
              {day}
            </TitleTextComponent>
            {
              dropDownOpen ? 
              <Pressable className='absolute z-20 top-0 bottom-0 left-0 right-0'
              onPress={closeDropDowns}/>
              : null
            }
          </View>
        )}
        ListHeaderComponent={
        <HeaderSection 
          navigation={navigation} 
          nutrition={nutrition} 
          nutritionStandard={nutritionStandard}
          nutritionStandardRange={nutritionStandardRange}
          dropDownOpen={dropDownOpen} 
          closeDropDowns={closeDropDowns}
        />}
        ListFooterComponent={<View className='w-full h-4' />}
        ItemSeparatorComponent={ItemDiv}
        stickySectionHeadersEnabled={true}
        />

        {/* Delete Check */}
        <AlertCheck
        titleText={'EditDeleteCheckTitle'}
        messageText={'EditDeleteCheckMessage'}
        mainText={'Delete'}
        showModal={showDeleteCheck}
        setShowModal={setShowDeleteCheck}
        handleMainFunction={handleDeleteItem}
        />
      </View>
    </SafeAreaView>
  )
}

export default MyMeals;