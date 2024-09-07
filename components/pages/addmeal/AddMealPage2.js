import React, { useState, useContext, } from 'react';
import { SideBarContext } from '../control/HomeControl';
import { MealContext } from '../control/AddMealControl';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler, View, SafeAreaView, Dimensions, TouchableOpacity, TouchableHighlight, ScrollView, Alert } from 'react-native';
import ExitButton from '../../general/buttons/ExitButton';
import BackButton from '../../general/buttons/BackButton';
import Tag from '../../addfunction/tag/Tag';
import TagSuggest from '../../addfunction/tag/TagSuggest';
import TitleTextComponent from '../../text/TitleTextComponent';
import ItemLargeTextComponent from '../../text/ItemLargeTextComponent';
import ItemTextInputComponent from '../../text/ItemTextInputComponent';
import LargeButton from '../../general/buttons/LargeButton';
import CircleCheck from '../../../assets/icons/circlecheck.svg';
import CirclePlus from '../../../assets/icons/circleplus.svg';
import SquareCheck from '../../../assets/icons/squarecheck.svg';

const { width, height } = Dimensions.get('window');

const AddMealPage2 = ({ navigation }) => {
  const { updatePage } = useContext(SideBarContext);
  const { 
    originPage,
    recipeItem, setRecipeItem,
  } = useContext(MealContext);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.goBack();
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => subscription.remove();
    })
  ); 

  const handleCleanUp = () => {
    setRecipeItem({
      preset: false,
      id: '',
      mealTime: {dayIndex: 0, mealIndex: 1},
      title: '', 
      nutrition: {
        cal: 0,
        protein: 0, 
        carb: 0,
      },
      tags: [],
      public: false,
      data: {
        likes: 0,
        comments: 0, 
        downloads: 0,
      },
      image: null,
      ingredients: [],
      procedure: [],
    });
  }

  const handleBack = ()=>{
    navigation.goBack();
  }

  const handleExitPress = () => {
    handleCleanUp();
    originPage == 'RecipePage' ? updatePage(3, true, { screen: 'RecipePage' })
    : originPage == 'HomePage' ? updatePage(0) 
    : originPage == 'MyMeals' ? updatePage(1)
    : updatePage(0);
  }

  const handleSaveCheck = () => {
    const result = (allIngredientsFound);
    setSaveCheck(result);
    return(result);
  }
  
  const handleSave = () => {
    if (handleSaveCheck()) {
      const newRecipeItem = recipeItem;
      newRecipeItem.nutrition = {
        cal: nutrientsData[0].value,
        protein: nutrientsData[1].value, 
        carb: nutrientsData[2].value,
      };
      newRecipeItem.tags = tags;
      setRecipeItem(newRecipeItem);
      // send recipeItem to database
      handleExitPress();
    }
  }

  {/* References */}
  
  {/* Data */}
  const nutrientNames = ['Cal', 'Protein', 'Carbs'];
   
  { /* State/Functions */}
  const [allIngredientsFound, setAllIngredientsFound] = useState(true);

  const [minBudget, setMinBudget] = useState(16000);
  const [maxBudget, setMaxBudget] = useState(22000);
  
  const [nutrientsData, setNutrientsData] = useState([
    {
      id: 'calorie',
      value: 1261,
      type: 'Cal',
      unit: '',
    },
    {
      id: 'protein',
      value: 140,
      type: 'Protein',
      unit: 'g',
    },
    {
      id: 'carb',
      value: 724,
      type: 'Carbs',
      unit: 'g',
    },
  ]);
  const updateCal = (value) => {
    const new_data = nutrientsData;
    new_data[0].value = value;
    setNutrientsData(new_data);
  }
  const updateProtein = (value) => {
    const new_data = nutrientsData;
    new_data[1].value = value;
    setNutrientsData(new_data);
  }
  const updateCarb = (value) => {
    const new_data = nutrientsData;
    new_data[2].value = value;
    setNutrientsData(new_data);
  }

  const [tags, setTags] = useState(recipeItem.tags);
  const [tagInput, setTagInput] = useState('');
  const [tagSuggest, setTagSuggest] = useState('');
  const [tagSuggestID, setTagSuggestID] = useState('');

  const updateTagInput = (text) => {
    setTagInput(text);
    // search tag query for suggestions
    setTagSuggest(text);
    setTagSuggestID('example-suggested-tag');
  }
  
  const addNewTag = (text, id = '', ) => {
    setTagInput('');
    const new_arr = tags.slice();
    new_arr.push({index: tags.length, id: id == '' ? 'example-tag': id, text: text})
    setTags(new_arr);
  }

  const removeTag = (item) => {
    const new_arr = tags.slice();
    new_arr.splice(item.index, 1);
    for (let i = item.index; i < new_arr.length; i++) {
      new_arr[i].index--;
    }
    setTags(new_arr);
  }

  const [publishTrue, setPublishTrue] = useState(false);
  const [publishButtonCSS, setPublishButtonCSS] = useState(['', 'bg-screenText']);
  const updatePublishButton = (index) => {
    setPublishTrue(index == 0);
    const new_css = ['', ''];
    new_css[index] = 'bg-screenText';
    setPublishButtonCSS(new_css);
  }

  const [saveCheck, setSaveCheck] = useState(true);

  return (
    <SafeAreaView id='screen' className='w-full h-full justify-center items-center bg-screenBg'>
      <ScrollView className='grow w-full h-fit'>
        <View id='content' className='grow w-full h-fit p-4'>
          {/* Title */}
          <View className='flex-row w-full h-10 items-center justify-between'>
            <BackButton callback={handleBack}/>
            <ExitButton exitCheck={true} />
          </View>

          {/* Coupang/MarketCurly Error */}
          {
            allIngredientsFound
            ? null
            : <View className='w-full h-fit items-center justify-center px-6 mt-6'>
                <View className='flex-col w-fit h-fit p-2 bg-itemBgLight rounded-xl'>
                  <TitleTextComponent translate={true} size={'text-xl'} css={'text-center leading-6 text-itemText'}>
                    (Error Message 1)
                  </TitleTextComponent>
                  <TitleTextComponent translate={true} sizeDiff={-1} size={'text-base'} css={'mt-1 text-center leading-6 text-hyperLink'}>
                    (Error Message 2)
                  </TitleTextComponent>
                </View>
              </View>
          }

          {/* Estimated Budget */}
          <View className='flex-col w-full h-fit mt-6'>
            <View className='w-full h-6'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                Estimated Budget
              </TitleTextComponent>
            </View>
            <View className='flex-col w-full px-8 h-fit items-center justify-center mt-4'>
              <View className='flex-row w-fit h-12 items-center justify-center px-3 py-2 bg-itemBgLight rounded-xl'>
                <TitleTextComponent money={true} size={'text-2xl'} css={'text-itemText'}>
                  {minBudget}
                </TitleTextComponent>
                <TitleTextComponent size={'text-2xl'} css={'text-itemText'}>
                  원
                </TitleTextComponent>
                <TitleTextComponent size={'text-2xl'} css={'ml-2 text-itemText'}>
                  ~
                </TitleTextComponent>
                <TitleTextComponent money={true} size={'text-2xl'} css={'ml-2 text-itemText'}>
                  {minBudget}
                </TitleTextComponent>
                <TitleTextComponent size={'text-2xl'} css={'text-itemText'}>
                  원
                </TitleTextComponent>
              </View>
              <View className='w-fit h-fit items-center justify-center mt-2'>
                <TitleTextComponent translate={true} size={'text-base'} css={'text-center text-screenText leading-5'}>
                  (Budget Notice)
                </TitleTextComponent>
              </View>
            </View>
          </View>

          {/* Nutrient Information */}
          <View className='flex-col w-full h-fit mt-6'>
            <View className='w-full h-6'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                Nutrient Information
              </TitleTextComponent>
            </View>
            <View className='flex-row w-full h-fit items-center justify-center space-x-2 mt-4'>
              {nutrientsData.map((item, index)=>(
                <View className='flex-1 flex-col w-full h-32 items-center justify-center bg-itemBgLight rounded-xl'>
                  <ItemLargeTextComponent bold={true} size={'text-3xl'} css={'text-itemText'}>
                    {item.value}{item.unit}
                  </ItemLargeTextComponent>
                  <ItemLargeTextComponent translate={true} bold={true} size={'text-2xl'} css={' text-itemText'}>
                    {item.type}
                  </ItemLargeTextComponent>
                </View>
              ))}
            </View>
          </View>

          {/* Tags */}
          <View className='flex-col w-full h-fit mt-6'>
            <View className='w-full h-6'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                Tags (Optional)
              </TitleTextComponent>
            </View>
            <View className='flex-row items-center justify-center shrink w-full h-10 mt-2 '>
              <View className='flex-row items-center justify-center shrink w-full h-10 pr-1.5 bg-itemBgLight rounded-xl'>
                <ItemTextInputComponent
                translate={true}
                size={'text-xl'}
                css={'shrink w-full h-10 text-itemText pb-1 pl-3'}
                placeholder="Add Tag" 
                placeholderTextColor={'#85855B'}
                value={tagInput} 
                onChangeText={updateTagInput} 
                underlineColorAndroid={'transparent'}
                />

                {/* Suggested Tag */}
                <View className='flex-row w-fit h-10 items-center justify-center'>
                  <TagSuggest tagQuery={tagInput} tagID={tagSuggestID} addTagPress={addNewTag} showSuggest={tagSuggest != ''} />
                </View>
              </View>

              {/* Add Tag */}
              <TouchableHighlight className='w-10 h-10 ml-2 rounded-xl'
              activeOpacity={0.9} onPress={()=>addNewTag(tagInput)} disabled={tagInput == ''}>
                <View className='w-full h-full items-center justify-center rounded-xl bg-itemBgLight'>
                  <SquareCheck width={30} height={30} stroke={tagInput == '' ? '#ACACAC' : '#85855B'} strokeWidth={2} />
                </View>
              </TouchableHighlight>
            </View>

            {/* Display Tags */}
            <View key='display-tags' className='flex-row flex-wrap mt-2 -mr-2'>
              {tags.map((item, index) => (
                <Tag item={item} removeTag={removeTag} />
              ))}
            </View>
          </View>

          {/* Publish Recipe */}
          <View className='flex-col w-full h-fit mt-6'>
            <View className='w-full h-6'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                Publish Recipe
              </TitleTextComponent>
            </View>
            <View className='flex-row w-full h-8 mt-2 px-4'>
              <TouchableOpacity className='flex-row w-fit h-7 items-center justify-center mr-5'
                activeOpacity={1} onPress={()=>updatePublishButton(0)}>
                <View className={`w-4 h-4 rounded-md border-2 ${publishButtonCSS[0]} border-screenText mr-2`}/>
                <TitleTextComponent translate={true} size={'text-xl'} sizeDiff={-1} css={'text-screenText'}>
                  Publish Yes
                </TitleTextComponent>
              </TouchableOpacity>
              <TouchableOpacity className='flex-row w-fit h-7 items-center justify-center mr-5'
                activeOpacity={1} onPress={()=>updatePublishButton(1)}>
                <View className={`w-4 h-4 rounded-md border-2 ${publishButtonCSS[1]} border-screenText mr-2`}/>
                <TitleTextComponent translate={true} size={'text-xl'} sizeDiff={-1} css={'text-screenText'}>
                  Publish No
                </TitleTextComponent>
              </TouchableOpacity>
            </View>
          </View>

          {/* Finish */}
          <View className='w-full h-fit items-center justify-center mt-7 mb-3'>
            <LargeButton cssIn={'px-4'} text={'Finish'} textSize={'text-2xl'} callback={handleSave}/>
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AddMealPage2;