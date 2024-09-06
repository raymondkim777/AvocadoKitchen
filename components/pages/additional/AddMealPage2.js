import React, { useState, useContext, } from 'react';
import { SideBarContext } from '../control/HomeControl';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler, Text, View, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, StyleSheet, Platform, ScrollView, FlatList } from 'react-native';
import ExitButton from '../../general/buttons/ExitButton';
import BackButton from '../../general/buttons/BackButton';
import Tag from '../../addfunction/tag/Tag';
import TagSuggest from '../../addfunction/tag/TagSuggest';
import TitleTextComponent from '../../text/TitleTextComponent';
import ItemLargeTextComponent from '../../text/ItemLargeTextComponent';
import ItemTextInputComponent from '../../text/ItemTextInputComponent';
import LargeButton from '../../general/buttons/LargeButton';

const { width, height } = Dimensions.get('window');

const AddMealPage2 = ({ navigation }) => {
  const {wideScreen, setShowSideBar, updatePage} = useContext(SideBarContext);

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

  const handleBack = ()=>{
    navigation.goBack();
  }
  
  const handleSave = () => {
    // "Adding Meal to Plan" message/alert
    updatePage(0);
  }

  {/* References */}
  
  {/* Data */}
  const nutrientNames = ['Cal', 'Protein', 'Carbs'];
   
  { /* State/Functions */}
  const allIngredientsFound = false;

  const [minBudget, setMinBudget] = useState(16000);
  const [maxBudget, setMaxBudget] = useState(22000);
  
  const [nutrientsData, setNutrientsData] = useState([
    {
      id: 'calorie',
      value: '1261',
      type: 'Cal',
      unit: '',
    },
    {
      id: 'protein',
      value: '140',
      type: 'Protein',
      unit: 'g',
    },
    {
      id: 'carb',
      value: '724',
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

  const [tags, setTags] = useState([
    {
      id: '0',
      text: 'Chicken'
    },
    {
      id: '0',
      text: 'Sandwich'
    },
    {
      id: '0',
      text: 'Healthy'
    },
    {
      id: '0',
      text: 'Protein'
    },
    {
      id: '0',
      text: 'SomeOtherTagasdfasdfasdfasdfasdfasdf'
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

  }

  const [publishTrue, setPublishTrue] = useState(false);
  const [publishButtonCSS, setPublishButtonCSS] = useState(['', 'bg-screenText']);
  const updatePublishButton = (index) => {
    setPublishTrue(index == 0);
    const new_css = ['', ''];
    new_css[index] = 'bg-screenText';
    setPublishButtonCSS(new_css);
  }

  {/* View */}

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
              <View className='w-fit h-12 items-center justify-center px-3 py-2 bg-itemBgLight rounded-xl'>
                <Text className='font-inconsolataBold text-3xl text-itemText'>
                  ₩{minBudget} ~ ₩{maxBudget}
                </Text>
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