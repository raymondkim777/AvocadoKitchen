import React, { useState, useContext } from 'react';
import { SideBarContext } from '../control/HomeControl';
import { SafeAreaView, View, ScrollView, TextInput, TouchableHighlight, FlatList, Image } from 'react-native';
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
import { MealContext } from '../control/AddMealControl';

const AddIngredient = ({
  navigation,
}) => {
  const {t, i18n} = useTranslation();
  const currentLanguage = i18n.language;

  const { wideScreen } = useContext(SideBarContext);
  const { 
    recipeItem, setRecipeItem, 
    ingredientItem, setIngredientItem,
  } = useContext(MealContext);

  const handleCleanUp = () => {
    setIngredientItem({
      preset: false,
      index: 0,
      name: '',
      amount: null,
      unit: 'g',
      image: null,
      link: '',
    })
  }

  const handleExitPress = () => {
    handleCleanUp();
    navigation.goBack();
  }

  const handleDeletePress = () => {
    const newRecipe = recipeItem;
    newRecipe.ingredients.splice(ingredientItem.index, 1);
    for (let i = ingredientItem.index; i < newRecipe.ingredients.length; i++) {
      newRecipe.ingredients[i].index--;
    }
    setRecipeItem(newRecipe);
    handleCleanUp();
    navigation.goBack();
  }

  const handleSaveCheck = () => {
    const result = (
      mealName != '' && 
      amount != null && amount != '' && 
      itemLink != '' && 
      linkValid
    );
    setSaveCheck(result);
    return(result);
  }

  const handleSavePress = () => {
    if (handleSaveCheck()) {
      const newIngredientItem = {
        preset: true,
        index: recipeItem.ingredients.length ,
        name: mealName,
        amount: parseFloat(amount),
        unit: unitList[unitIndex],
        image: imageUploaded, 
        link: itemLink,
      }
      const newRecipeItem = recipeItem;
      if (ingredientItem.preset) {
        newIngredientItem.index = ingredientItem.index;
        newRecipeItem.ingredients[ingredientItem.index] = newIngredientItem;
      } else {
        newRecipeItem.ingredients.push(newIngredientItem);
      }
      setRecipeItem(newRecipeItem);
      handleCleanUp();
      navigation.goBack();
    }
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

  const [mealName, setMealName] = useState(t(ingredientItem.name));

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
  
  // amount is string
  const [amount, setAmount] = useState(ingredientItem.amount == null ? '' : ingredientItem.amount.toString());
  const [unitIndex, setUnitIndex] = useState(unitList.indexOf(ingredientItem.unit));
  const [showUnitMenu, setShowUnitMenu] = useState(false);

  const handleUnitPress = () => {
    setShowUnitMenu(!showUnitMenu);
  }

  const updateUnit = (item) => {
    setUnitIndex(unitList.indexOf(item));
    setShowUnitMenu(false);
  }
  
  const [imageFound, setImageFound] = useState(ingredientItem.image != null);
  const [imageUploaded, setImageUploaded] = useState(ingredientItem.image);
  const updateImage = () => {
    setImageUploaded(require('../../../assets/images/ingredient-example/canned-tuna.jpg'));
    setImageFound(true);
  }
  const deleteImage = () => {
    setImageUploaded(null);
    setImageFound(false);
  }
  const [itemLink, setItemLink] = useState(ingredientItem.link);
  const [linkValid, setLinkValid] = useState(true);
  const updateLink = (link) => {
    setItemLink(link);
    checkLink(link);
  }
  const checkLink = (link) => {
    // check if link is valid coupang/marketcurly link
    setLinkValid(true);
  }

  const [saveCheck, setSaveCheck] = useState(true);

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
                {ingredientItem.preset ? 'Edit Ingredient' : 'Add Ingredient'}
              </TitleTextComponent>
              <ExitButtonGeneral handleMainFunction={handleExitPress} />
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
          <View className='flex-col w-full h-fit items-center justify-center mt-8 mb-2'>
            {
              saveCheck ? null
              : <TitleTextComponent translate={true} size={'text-lg'} css={'text-redHighlight mb-2'}>
                  SaveCheck Error Message
                </TitleTextComponent>
            }
            <View className='flex-row w-full h-fit items-center justify-center'>
              {
                ingredientItem.preset  
                ? <LargeButton cssIn={'shrink w-full'} cssOut={'shrink w-full mr-4'} text={'Delete'} textSize={'text-2xl'} callback={handleDeletePress}/>
                : null
              }
              <LargeButton cssIn={'shrink w-full'} cssOut={'shrink w-full'} text={'Save'} textSize={'text-2xl'} callback={handleSavePress} />
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AddIngredient
