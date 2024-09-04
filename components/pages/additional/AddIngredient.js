import React, { useState, useContext } from 'react';
import { SideBarContext } from '../main/HomeControl';
import { SafeAreaView, View, ScrollView, TextInput, TouchableHighlight, SectionList, FlatList } from 'react-native';
import TitleTextComponent from '../../text/TitleTextComponent';
import ItemTextInputComponent from '../../text/ItemTextInputComponent';
import ExitButtonGeneral from '../../general/buttons/ExitButtonGeneral';
import QuickSearchResults from '../../addfunction/quicksearch/QuickSearchResults';
import QuickSearchResultsEmpty from '../../addfunction/quicksearch/QuickSearchResultsEmpty';
import SmallButton from '../../general/buttons/SmallButton';
import LargeButton from '../../general/buttons/LargeButton';
import Search from "../../../assets/icons/search.svg";

const AddIngredient = ({
  navigation,
  // item, index
}) => {
  const { wideScreen } = useContext(SideBarContext);

  const handleExitPress = () => {
    navigation.goBack();
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

  const [mealName, setMealName] = useState('');
  
  const unitList = [
    'g', 'kg', 'ml', 'L', '개', '마리', '포기', '톨', '적당량', 
    'T', 't', '컵', '종이컵', '꼬집', '줌', 
    '근', '주먹', 
  ];
  const unitListSection = [
    {
      type: 'General', 
      data: [
        'g', 'kg', 'ml', 'L', '개', '마리', '포기', '톨', '적당량', 
      ],
    }, 
    {
      type: 'Volume', 
      data: [
        'T', 't', '컵', '종이컵', '꼬집', '줌', 
      ],
    }, 
    {
      type: 'Weight', 
      data: [
        '근', '주먹', 
      ],
    }, 
  ];

  const [amount, setAmount] = useState('');
  const [unitIndex, setUnitIndex] = useState(0);
  
  const [showUnitDropDown, setShowUnitDropDown] = useState(false);
  const [unitDropDownCSS, setUnitDropDownCSS] = useState(
    new Array(unitIndex).fill('bg-buttonBg').concat(
      ['bg-itemText'].concat(
        new Array(unitList.length - unitIndex - 1).fill('bg-buttonBg')
      )
    )
  );
  const [unitDropDownText, setUnitDropDownText] = useState(
    new Array(unitIndex).fill('text-itemText').concat(
      ['text-itemBgLight'].concat(
        new Array(unitList.length - unitIndex - 1).fill('text-itemText')
      )
    )
  );
  const updateButtonCSS = (index) => {
    const new_css = new Array(unitList.length).fill('bg-buttonBg');
    new_css[index] = 'bg-itemText';
    setUnitDropDownCSS(new_css);
  }
  const updateTextCSS = (index) => {
    const new_text = new Array(unitList.length).fill('text-itemText');
    new_text[index] = 'text-itemBgLight';
    setUnitDropDownText(new_text);
  }
  const updateUnitDropDown = (index) => {
    setUnitIndex(index);
    updateButtonCSS(index);
    updateTextCSS(index);
    setShowUnitDropDown(!showUnitDropDown);
  }
  
  const [imageFound, setImageFound] = useState(false);
  const [imageUploaded, setImageUploaded] = useState('');
  const updateImage = () => {
    setImageFound(true);
  }
  const deleteImage = () => {
    setImageFound(false);
  }
  
  const [itemLink, setItemLink] = useState('');
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
    <SafeAreaView id='screen' className='relative w-full h-full justify-center items-center bg-screenBg'>
      <ScrollView className='grow w-full h-fit'>
        <View id='content' className='grow w-full h-fit p-4'>
          {/* Title */}
          <View className='flex-row w-full h-10 items-center justify-between'>
            <TitleTextComponent translate={true} size={'text-3xl'} css={'text-screenText mx-4'}>
              Add/Edit Ingredient
            </TitleTextComponent>
            <ExitButtonGeneral handleMainFunction={handleExitPress}/>
          </View>

          {/* Quick Search */}
          <View className='flex-col w-full h-fit mt-6'>
            <View className='w-full h-6'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                Quick Search
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
            <View className='flex-row items-center justify-center shrink w-full h-fit pr-1 mt-2'>
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
              <View className='relative z-30 w-fit h-fit items-center justify-center ml-2'>
                <TouchableHighlight className='w-16 h-10 rounded-lg '
                activeOpacity={0.9} onPress={()=>setShowUnitDropDown(!showUnitDropDown)}>
                  <View className='w-full h-full items-center justify-center border-2 border-itemText bg-buttonBg rounded-lg'>
                    <TitleTextComponent translate={true} size={'text-lg'} css={'text-itemText text-center h-8 mt-1'}>
                      {unitList[unitIndex]}
                    </TitleTextComponent>
                  </View>
                </TouchableHighlight>
                {
                  showUnitDropDown 
                  ? <View className='flex absolute z-20 right-0 -bottom-36 w-28 h-36 pt-2'>
                      <FlatList
                      className='w-full h-36 bg-buttonBg rounded-lg border-2 border-itemText'
                      nestedScrollEnabled={true}
                      data={unitList}
                      renderItem={({item}) => (
                        <TouchableHighlight className='w-full h-fit rounded-lg'>
                          <View className='w-full h-fit p-1 items-center justify-center rounded-lg bg-red-100'>
                            <TitleTextComponent size={'text-base'} css={'text-itemText'}>
                              {item}
                            </TitleTextComponent>
                          </View>
                        </TouchableHighlight>
                      )}
                      />
                    </View>
                  : null
                }
              </View>
            </View>
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
                  <View className='w-full h-64 bg-itemBgLight rounded-xl mb-2'>
                  </View>
                )
                : null
              }
              
              {/* Add/Change Image */}
              <View className='flex-row w-full h-fit items-center justify-start'>
                <SmallButton text={imageFound ? 'Change Image' : 'Add Image'} callback={updateImage} />
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
              <TextInput className='font-inconsolataLight shrink w-full h-10 text-xl pb-1.5 pl-3'
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

          {/* Save */}
          <View className='w-full h-fit items-center justify-center mt-10 mb-6'>
            <LargeButton cssIn={'px-8'} text={'Save'} textSize={'text-2xl'} callback={null} />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AddIngredient
