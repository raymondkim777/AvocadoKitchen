import React, { useState, useContext } from 'react';
import { SideBarContext } from '../main/HomeControl';
import { BackHandler, SafeAreaView, View, ScrollView, TextInput, TouchableHighlight, FlatList, Image, Alert } from 'react-native';
import {useTranslation} from 'react-i18next';
import 'intl-pluralrules';
import '../../text/i18n'
import TitleTextComponent from '../../text/TitleTextComponent';
import ItemTextInputComponent from '../../text/ItemTextInputComponent';
import ExitButtonGeneral from '../../general/buttons/ExitButtonGeneral';
import QuickSearchResults from '../../addfunction/quicksearch/QuickSearchResults';
import QuickSearchResultsEmpty from '../../addfunction/quicksearch/QuickSearchResultsEmpty';
import SmallButton from '../../general/buttons/SmallButton';
import LargeButton from '../../general/buttons/LargeButton';
import Search from "../../../assets/icons/search.svg";
import { useFocusEffect } from '@react-navigation/native';

const AddIngredient = ({
  route, navigation,
  // item, index
}) => {
  const {t, i18n} = useTranslation();
  const currentLanguage = i18n.language;
  const { wideScreen } = useContext(SideBarContext);

  const currentList = route.params.currentList;
  const existingItem = route.params?.existingItem;

  const [newItem, setNewItem] = useState(existingItem != undefined ? existingItem : {
    index: currentList.length, id: '', name: '', amount: '', unit: 'g', image: null, link: '',
  });

  useFocusEffect(
    React.useCallback(() => {
      // Back Button Press
      const onBackPress = () => {
        navigation.goBack();
        return true;
      };
      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => {
        subscription.remove();
      }
    }, [])
  );

  const handleExitPress = () => {
    navigation.navigate({
      name: 'AddMealPage', 
      params: {},
    });
  }

  const handleSavePress = () => {
    const finalItem = {
      index: currentList.length,
      id: '', 
      name: mealName, 
      amount: parseInt(amount), 
      unit: unitList[unitIndex], 
      image: imageUploaded, 
      link: itemLink,
    }
    const finalList = currentList;
    if (existingItem == undefined) {
      finalList.push(finalItem);
    } else {
      finalItem.index = existingItem.index;
      finalList[finalItem.index] = finalItem;
    }
    navigation.navigate({
      name: 'AddMealPage', 
      params: { newIngredientList: finalList }, 
      merge: true,
    }); 
  }

  const handleDeletePress = () => {
    const finalList = currentList.splice(existingItem.index, existingItem.index);
    Alert.alert(`${finalList.length}`)
    navigation.navigate({
      name: 'AddMealPage', 
      params: { newIngredientList: finalList }, 
      merge: true,
    }); 
  }

  const [ingSearchQuery, setIngSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [foundResults, setFoundResults] = useState(true);
  const resultColumnNum = wideScreen ? 3 : 2;
  const searchItem = () => {
    // run search
    setFoundResults(resultsList.length > 0);
    setShowResults(true);
  }

  const [mealName, setMealName] = useState(t(newItem.name));

  const unitList = [
    'g', 'kg', 'ml', 'L', 'Ts', 'ts',  '컵', '종이컵', 
    '개', '마리', '포기', '톨', '꼬집', '줌', '주먹', '근', '적당량',
  ];
  const unitListSection = [
    {
      type: 'Specific', 
      data: [
        'g', 'kg', 'ml', 'L', 'Ts', 'ts',  '컵', '종이컵', 
      ],
    }, 
    {
      type: 'General', 
      data: [
        '개', '마리', '포기', '톨', '꼬집', '줌', '주먹', '근', '적당량',
      ],
    }, 
  ];
  
  const [amount, setAmount] = useState(newItem.amount.toString());
  const [unitIndex, setUnitIndex] = useState(unitList.indexOf(newItem.unit));
  const [showUnitMenu, setShowUnitMenu] = useState(false);

  const handleUnitPress = () => {
    setShowUnitMenu(!showUnitMenu);
  }

  const updateUnit = (item) => {
    setUnitIndex(unitList.indexOf(item));
    setShowUnitMenu(false);
  }
  
  const [imageFound, setImageFound] = useState(newItem.image != null);
  const [imageUploaded, setImageUploaded] = useState(newItem.image);
  const updateImage = () => {
    setImageUploaded(require('../../../assets/images/ingredient-example/canned-tuna.jpg'));
    setImageFound(true);
  }
  const deleteImage = () => {
    setImageFound(false);
  }
  const [itemLink, setItemLink] = useState(newItem.link);
  const [linkValid, setLinkValid] = useState(true);
  const updateLink = (link) => {
    setItemLink(link);
    checkLink(link);
  }
  const checkLink = (link) => {
    // check if link is valid coupang/marketcurly link
    setLinkValid(false);
  }

  const resultsList = [
    {
      site: 'Coupang', 
      name: "(Quick Result 2)", 
      price: '19140', 
      deliver: '7/28',
      image: require('../../../assets/images/ingredient-example/ingredient-1.jpg'),
      empty: false,
    }, 
    {
      site: 'Coupang', 
      name: "(Quick Result 2)", 
      price: '19140', 
      deliver: '7/28',
      image: require('../../../assets/images/ingredient-example/ingredient-1.jpg'),
      empty: false,
    },
    {
      site: 'Coupang', 
      name: "(Quick Result 1)", 
      price: '19140', 
      deliver: '7/28',
      image: require('../../../assets/images/ingredient-example/ingredient-1.jpg'),
      empty: false,
    },
    {
      site: 'Coupang', 
      name: "(Quick Result 2)", 
      price: '19140', 
      deliver: '7/28',
      image: require('../../../assets/images/ingredient-example/ingredient-1.jpg'),
      empty: false,
    },
    {
      site: 'Coupang', 
      name: "(Quick Result 2)", 
      price: '19140', 
      deliver: '7/28',
      image: require('../../../assets/images/ingredient-example/ingredient-1.jpg'),
      empty: false,
    },
  ];

  return (
    <SafeAreaView id='screen' className='w-full h-full justify-center items-center bg-screenBg'>
      <ScrollView contentContainerStyle={{flexGrow: 1}} className='grow w-full h-fit'>
        <View id='content' className='w-full h-full p-4 justify-between'>
          <View className='flex-col w-full h-fit'>
            {/* Title */}
            <View className='flex-row w-full h-10 items-center justify-between'>
              <TitleTextComponent translate={true} size={'text-3xl'} css={'text-screenText mx-4'}>
                {existingItem == undefined ? 'Add Ingredient' : 'Edit Ingredient'}
              </TitleTextComponent>
              <ExitButtonGeneral handleMainFunction={handleExitPress} exitCheck={true} />
            </View>

            {/* Quick Search */}
            <View className='flex-col w-full h-fit mt-6'>
              <View className='w-full h-6'>
                <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                  Quick Search Long
                </TitleTextComponent>
              </View>
              <View className='flex-row items-center justify-center shrink w-full h-fit pr-1 mt-2 bg-itemBgLight rounded-lg'>
                <ItemTextInputComponent
                translate={true}
                size={'text-xl'}
                css={'shrink w-full h-10 text-itemText pb-1 pl-3'}
                placeholder="ex. Canned Tuna" 
                placeholderTextColor={'#85855B'}
                value={ingSearchQuery} 
                onChangeText={setIngSearchQuery} 
                onSubmitEditing={searchItem}
                underlineColorAndroid={'transparent'}
                />
                <TouchableHighlight className='w-8 h-8 rounded-lg'
                activeOpacity={0.9} onPress={searchItem}>
                  <View className='w-full h-full items-center justify-center bg-itemBgLight rounded-lg'>
                    <Search width={25} height={25} stroke={'#85855B'} strokeWidth={3} />
                  </View>
                </TouchableHighlight>
              </View>
            </View>

            {/* Results */}
            {
              showResults
              ? (
                foundResults 
                ? <View className='flex-col w-full h-fit mt-2 -mb-[77px]'>
                    <QuickSearchResults 
                    background={'bg-itemBgLight'}
                    numberOfColumns={resultColumnNum}
                    resultsList={resultsList}/>
                    <View className='w-full h-fit mt-2 items-end'>
                      <SmallButton text={'Close Search'} callback={()=>setShowResults(false)}/>
                    </View>
                  </View>
                : <View className='w-full h-fit mt-2'>
                    <QuickSearchResultsEmpty textColor={'text-screenText'} />
                  </View>
                )
              : null
            }

            {/* Manual Add/Edit */}
            <View className='flex-row w-full h-10 items-center mt-10'>
              <TitleTextComponent translate={true} size={'text-3xl'} css={'text-screenText mx-4'}>
                Manual Add/Edit
              </TitleTextComponent>
            </View>
            
            {/* Name */}
            <View className='flex-col w-full h-fit mt-4'>
              <View className='w-full h-6'>
                <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                  Ingredient Name
                </TitleTextComponent>
              </View>
              <View className='flex-row items-center justify-center shrink w-full h-fit pr-1 mt-2 bg-itemBgLight rounded-lg'>
                <ItemTextInputComponent
                translate={true}
                size={'text-xl'}
                css={'shrink w-full h-10 text-itemText pb-1 pl-3'}
                placeholder={"ex. Canned Tuna"}
                placeholderTextColor={'#85855B'}
                value={mealName} 
                onChangeText={setMealName} 
                underlineColorAndroid={'transparent'}
                />
              </View>
            </View>

            {/* Amount */}
            <View className='flex-col w-full h-fit mt-4'>
              <View className='w-full h-6'>
                <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                  Amount
                </TitleTextComponent>
              </View>
              <View className='flex-row items-center justify-center shrink w-full h-fit mt-2'>
                <ItemTextInputComponent
                translate={true}
                size={'text-xl'}
                css={'shrink w-full h-10 text-itemText pb-1 pl-3 bg-itemBgLight rounded-lg'}
                placeholder="ex. 30" 
                placeholderTextColor={'#85855B'}
                value={amount} 
                onChangeText={setAmount} 
                underlineColorAndroid={'transparent'}
                />
                <TouchableHighlight className='w-16 h-10 ml-2 rounded-lg'
                activeOpacity={0.9} onPress={handleUnitPress}>
                  <View className='w-full h-full items-center justify-center bg-buttonBg rounded-lg border-2 border-itemText'>
                    <TitleTextComponent size={'text-xl'} sizeDiff={-2} css={'text-itemText'}>
                      {unitList[unitIndex]}
                    </TitleTextComponent>
                  </View>
                </TouchableHighlight>
              </View>
              {
                showUnitMenu
                ? <View className='flex-col w-full h-fit mt-2.5 p-1 pb-1.5 bg-itemBgDark rounded-xl border-2 border-itemText'>
                    {/* Specific */}
                    <View className='flex-col w-full h-fit items-center justify-center'>
                      <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemText'}>
                        {unitListSection[0].type}
                      </TitleTextComponent>
                      <FlatList
                      key='flatList4'
                      className='w-full h-fit mt-1'
                      scrollEnabled={false}
                      numColumns={4}
                      data={unitListSection[0].data}
                      renderItem={
                        ({item}) => 
                        <View className='flex-1 h-fit px-0.5'>
                          <TouchableHighlight className='w-full h-8 rounded-lg'
                          activeOpacity={0.9} onPress={()=>updateUnit(item)}>
                            <View className='w-full h-full items-center justify-center bg-buttonBg rounded-lg'>
                              <TitleTextComponent size={'text-lg'} css={'text-itemText'}>
                                {item}
                              </TitleTextComponent>
                            </View>
                          </TouchableHighlight>
                        </View>
                      }
                      ItemSeparatorComponent={<View className='h-1'/>}
                      />
                    </View>

                    {/* General */}
                    <View className='flex-col w-full h-fit mt-2 items-center justify-center'>
                      <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemText'}>
                        {unitListSection[1].type}
                      </TitleTextComponent>
                      <FlatList
                      key='flatList4'
                      className='w-full h-fit mt-1'
                      scrollEnabled={false}
                      numColumns={4}
                      data={unitListSection[1].data}
                      renderItem={
                        ({item}) => 
                        <View className='flex-1 h-fit px-0.5'>
                          <TouchableHighlight className='w-full h-8 rounded-lg'
                          activeOpacity={0.9} onPress={()=>updateUnit(item)}>
                            <View className='w-full h-full items-center justify-center bg-buttonBg rounded-lg'>
                              <TitleTextComponent size={'text-lg'} css={'text-itemText'}>
                                {item}
                              </TitleTextComponent>
                            </View>
                          </TouchableHighlight>
                        </View>
                      }
                      ItemSeparatorComponent={<View className='h-1'/>}
                      />
                    </View>
                  </View>
                : null
              }
            </View>

            {/* Image */}
            <View className='flex-col w-full h-fit mt-4'>
              <View className='w-full h-6'>
                <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                  Image
                </TitleTextComponent>
              </View>
              <View className='flex-col items-center justify-center shrink w-full h-fit mt-2'>
                {
                  imageFound
                  ? (
                    <View className='w-full h-64 bg-itemBgLight rounded-xl mb-2 overflow-hidden'>
                      <Image className='w-full h-full' source={imageUploaded} /> 
                    </View>
                  )
                  : null
                }
                
                {/* Add/Change Image */}
                <View className='flex-row w-full h-fit items-center'>
                  <SmallButton text={imageFound ? 'Change Image' : 'Add Image'} callback={updateImage}/>
                  {
                    imageFound 
                    ? <View className='w-fit h-fit ml-2'>
                        <SmallButton text={'Delete Image'} callback={deleteImage} /> 
                      </View>
                    : null
                  }
                </View>
              </View>
            </View>

            {/* Coupang/MarketCurly Link */}
            <View className='flex-col w-full h-fit mt-4'>
              <View className='w-full h-6'>
                <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                  Coupang/MarketCurly Link
                </TitleTextComponent>
              </View>
              <View className='flex-row items-center justify-center shrink w-full h-fit pr-1 mt-2 bg-itemBgLight rounded-lg'>
                <TextInput className='font-inconsolataLight shrink w-full h-10 text-itemText text-xl pb-1.5 pl-3'
                  placeholder="ex. https://coupang.com/insert_link" 
                  placeholderTextColor={'#85855B'}
                  value={itemLink} 
                  onChangeText={(value) => updateLink(value)} 
                  underlineColorAndroid={'transparent'}
                  inputMode={'url'}
                />
              </View>
              {/* Link Valid */}
              { 
                linkValid 
                ? null
                : <View className='w-full h-fit mt-2 items-center justify-center'>
                    <TitleTextComponent translate={true} size={'text-lg'} css={'text-hyperLink'}>
                      Link Invalid Message
                    </TitleTextComponent>
                  </View>
              }
            </View>
          </View>
          
          {/* Save */}
          <View className='flex-row w-full h-fit items-center justify-center mt-8 mb-2'>
            {
              existingItem != undefined 
              ? <LargeButton cssIn={'shrink w-full'} cssOut={'shrink w-full mr-4'} text={'Delete'} textSize={'text-2xl'} callback={handleDeletePress}/>
              : null
            }
            <LargeButton cssIn={'shrink w-full'} cssOut={'shrink w-full'} text={'Save'} textSize={'text-2xl'} callback={handleSavePress} />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AddIngredient
