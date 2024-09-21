import React, { useState, useContext, useEffect } from 'react';
import { SideBarContext } from '../control/HomeControl';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler, View, SafeAreaView, Pressable, TouchableOpacity, ScrollView, TouchableHighlight, } from 'react-native';
import { Slider } from '@rneui/themed';
import TitleTextComponent from '../../text/TitleTextComponent';
import ItemTextInputComponent from '../../text/ItemTextInputComponent';
import SideBarButton from '../../general/sidebar/SideBarButton';
import ExitButton from '../../general/buttons/ExitButton';
import Tag from '../../addfunction/tag/Tag';
import TagSuggest from '../../addfunction/tag/TagSuggest';
import AccountButton from '../../profile/AccountButton';
import AccountImage from '../../profile/AccountImage';
import SmallButton from '../../general/buttons/SmallButton';
import LargeButton from '../../general/buttons/LargeButton';
import SquareCheck from '../../../assets/icons/squarecheck.svg';

const ProfilePage = ({ navigation }) => {
  const {wideScreen, setShowSideBar, updatePage} = useContext(SideBarContext);
  
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
  
  const handleLogOut = ({}) => {
    navigation.navigate('Login')
  }
  const handleSave = () => {
    updatePage(0);
  }

  {/* References */}

  {/* Data */}
  const username = 'Username';
  const email = 'testemailaddress.gmail.com';

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

  { /* State/Functions */}
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
      new_css[index] = 'bg-screenText'
      setDietButtonCSS(new_css);
    }
  }

  // Tags
  const [tags, setTags] = useState([
    {
      index: 0,
      id: 'tag-0',
      text: '글루텐 프리'
    },
  ]);
  const [tagInput, setTagInput] = useState('');
  const [tagSuggest, setTagSuggest] = useState('');
  const [tagSuggestID, setTagSuggestID] = useState('');
  const [showTagSuggest, setShowTagSuggest] = useState();

  const updateTagInput = (text) => {
    setTagInput(text);
    // search tag query for suggestions
    setTagSuggest(text);
    setTagSuggestID('example-suggested-tag');
  }
  
  const addNewTag = (text, id = '', ) => {
    setShowTagSuggest(false);
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

  // Allergies
  const [allergies, setAllergies] = useState([
    {
      index: 0,
      id: 'allergy-0',
      text: '땅콩'
    },
    {
      index: 1,
      id: 'allergy-1',
      text: '키위'
    },
    {
      index: 2,
      id: 'allergy-2',
      text: '복숭아'
    },
  ]);
  const [allergyInput, setAllergyInput] = useState('');
  const [allergySuggest, setAllergySuggest] = useState('');
  const [allergySuggestID, setAllergySuggestID] = useState('');
  const [showAllergySuggest, setShowAllergySuggest] = useState();

  const updateAllergyInput = (text) => {
    setAllergyInput(text);
    // search tag query for suggestions
    setAllergySuggest(text);
    setAllergySuggestID('example-suggested-tag');
  }
  
  const addNewAllergy = (text, id = '', ) => {
    setShowAllergySuggest(false);
    setAllergyInput('');
    const new_arr = allergies.slice();
    new_arr.push({index: allergies.length, id: id == '' ? 'example-tag': id, text: text})
    setAllergies(new_arr);
  }

  const removeAllergy = (item) => {
    const new_arr = allergies.slice();
    new_arr.splice(item.index, 1);
    for (let i = item.index; i < new_arr.length; i++) {
      new_arr[i].index--;
    }
    setAllergies(new_arr);
  }

  // useEffect for Tags/Allergies
  useEffect(() => {
    tagInput == '' ? null : setShowTagSuggest(true);
    allergyInput == '' ? null : setShowAllergySuggest(true);
  }, [tagInput, setShowTagSuggest, allergyInput, setShowAllergySuggest]);

  // Budget
  const budgetType = [
    'Per Meal', 
    'Daily', 
    'Weekly',
  ];
  const [budgetTypeIndex, setBudgetTypeIndex] = useState(0);

  const [showDropDown, setShowDropDown] = useState(false);
  const [dropDownButtonCSS, setDropDownButtonCSS] = useState(
    new Array(budgetTypeIndex).fill('bg-buttonBg').concat(
      ['bg-itemText'].concat(
        new Array(budgetType.length - budgetTypeIndex - 1).fill('bg-buttonBg')
      )
    )
  );
  const [dropDownText, setDropDownText] = useState(
    new Array(budgetTypeIndex).fill('text-itemText').concat(
      ['text-itemBgLight'].concat(
        new Array(budgetType.length - budgetTypeIndex - 1).fill('text-itemText')
      )
    )
  );
  const updateButtonCSS = (index) => {
    const new_css = new Array(budgetType.length).fill('bg-buttonBg');
    new_css[index] = 'bg-itemText';
    setDropDownButtonCSS(new_css);
  }
  const updateTextCSS = (index) => {
    const new_text = new Array(budgetType.length).fill('text-itemText');
    new_text[index] = 'text-itemBgLight';
    setDropDownText(new_text);
  }
  const updateDropDown = (index) => {
    setBudgetTypeIndex(index);
    updateButtonCSS(index);
    updateTextCSS(index);
    setBudgetDisplayValue(budgetValues[index]);
    setShowDropDown(!showDropDown);
  }

  const budgetValuesMinMax = [
    {
      min: 0, max: 100000,
    },
    {
      min: 0, max: 500000,
    },
    {
      min: 0, max: 1000000,
    },
  ];
  const [budgetValues, setBudgetValues] = useState([20000, 100000, 200000]);
  const [budgetDisplayValue, setBudgetDisplayValue] = useState(budgetValues[budgetTypeIndex]);
  const updateBudgetValue = (value) => {
    const new_values = budgetValues;
    new_values[budgetTypeIndex] = value;
    setBudgetValues(new_values);
  }
  
  return (
    <SafeAreaView id='screen' className='relative w-full h-full justify-center items-center bg-screenBg'>
      <ScrollView className='w-full h-full'>
        <View id='content' className='w-full h-fit p-4'>
          {/* Title */}
          <View className='flex-row w-full h-fit justify-between mt-2'>
            {
              wideScreen ? null : <SideBarButton callback={setShowSideBar} />
            }
            <TitleTextComponent translate={true} size={'text-3xl'} css={'mx-4 text-screenText'}>
              Profile
            </TitleTextComponent>
            <ExitButton exitCheck={true}/>
          </View>

          {/* Profile */}
          <View className='flex-row w-full h-fit items-center justify-center mt-6'>
            <View className='flex-col w-fit h-fit items-center'>
              <View className='w-28 h-fit items-center justify-center'>
                <AccountImage image={require('../../../assets/images/logo-transparent.png')}/>
              </View>
              <View className='w-28 h-fit mt-2'>
                <SmallButton translate={true} text={'Logout'} callback={handleLogOut} />
              </View>
            </View>

            <View className='flex-col shrink w-full ml-2 justify-center'>
              <View className='grow flex-col w-full items-center justify-center '>
                <View className='flex-col w-full h-12'>
                  <TitleTextComponent size={'text-2xl'} css={'h-8 text-screenText'}>
                    @{username}
                  </TitleTextComponent>
                  <TitleTextComponent size={'text-lg'} css={'h-6 -mt-1 text-screenText'}>
                    {email}
                  </TitleTextComponent>
                </View>
              </View>
              <View className='w-full h-11'/>
            </View>
          </View>
          
          {/* Diet Options */}
          <View className='flex-col w-full min-h-16 h-fit items-center justify-center mt-10'>
            <View className='w-full h-6'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                Select your diet
              </TitleTextComponent>
            </View>
            <View className='flex-row flex-wrap w-full h-fit mt-2'>
              {optionList.map((option_name, index) => (
                <View className='flex-row w-fit h-7 items-center justify-center'>
                  <TouchableOpacity className='flex-row w-fit h-7 items-center justify-center mr-5'
                    activeOpacity={1} onPress={()=>updateDiet(index)}>
                    <View className={`w-4 h-4 rounded-md border-2 ${dietButtonCSS[index]} border-screenText mr-2`}/>
                    <TitleTextComponent translate={true} size={'text-base'} css={'text-screenText'}>
                      {option_name}
                    </TitleTextComponent>
                  </TouchableOpacity>
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
            <View className='flex-row items-center justify-center shrink w-full h-fit mt-2 '>
              <View className='flex-row items-center justify-center shrink w-full h-fit pr-1.5 bg-itemBgLight rounded-xl'>
                <ItemTextInputComponent
                translate={true}
                size={'text-xl'}
                css={'shrink w-full h-12 text-itemText pb-1 pl-3'}
                placeholder="Add Tag" 
                placeholderTextColor={'#85855B'}
                value={tagInput} 
                onChangeText={updateTagInput} 
                underlineColorAndroid={'transparent'}
                />

                {/* Suggested Tag */}
                <View className='flex-row w-fit h-10 items-center justify-center'>
                  <TagSuggest tagQuery={tagInput} tagID={tagSuggestID} addTagPress={addNewTag} showSuggest={tagSuggest != '' && showTagSuggest} />
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

          {/* Allergies */}
          <View className='flex-col w-full h-fit mt-6'>
            <View className='w-full h-6'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                Allergies (Optional)
              </TitleTextComponent>
            </View>
            <View className='flex-row items-center justify-center shrink w-full h-fit mt-2 '>
              <View className='flex-row items-center justify-center shrink w-full h-fit pr-1.5 bg-itemBgLight rounded-xl'>
                <ItemTextInputComponent
                translate={true}
                size={'text-xl'}
                css={'shrink w-full h-12 text-itemText pb-1 pl-3'}
                placeholder="Add Allergy" 
                placeholderTextColor={'#85855B'}
                value={allergyInput} 
                onChangeText={updateAllergyInput} 
                underlineColorAndroid={'transparent'}
                />

                {/* Suggested Allergy */}
                <View className='flex-row w-fit h-10 items-center justify-center'>
                  <TagSuggest tagQuery={allergyInput} tagID={allergySuggestID} addTagPress={addNewAllergy} showSuggest={allergySuggest != '' && showAllergySuggest} />
                </View>
              </View>

              {/* Add Allergy */}
              <TouchableHighlight className='w-10 h-10 ml-2 rounded-xl'
              activeOpacity={0.9} onPress={()=>addNewAllergy(allergyInput)} disabled={allergyInput == ''}>
                <View className='w-full h-full items-center justify-center rounded-xl bg-itemBgLight'>
                  <SquareCheck width={30} height={30} stroke={allergyInput == '' ? '#ACACAC' : '#85855B'} strokeWidth={2} />
                </View>
              </TouchableHighlight>
            </View>

            {/* Display Allergies */}
            <View key='display-tags' className='flex-row flex-wrap mt-2 -mr-2'>
              {allergies.map((item, index) => (
                <Tag item={item} removeTag={removeAllergy} />
              ))}
            </View>
          </View>

          {
            showDropDown ? 
            <Pressable className='absolute z-10 w-screen h-screen justify-center items-center' 
            onPress={()=>setShowDropDown(false)}/>
            : null
          }
          {/* Budget */}
          <View className='relative z-10 flex-col w-full h-fit mt-6'>
            {
              showDropDown ? 
              <Pressable className='absolute z-20 w-full h-full justify-center items-center' 
              onPress={()=>setShowDropDown(false)}/>
              : null
            }
            <View className='flex-row w-full h-fit items-center'>
              <View className='relative z-20 w-fit h-fit ml-4'>
                <TouchableHighlight className='w-24 h-8 rounded-xl'
                activeOpacity={0.9} onPress={()=>setShowDropDown(!showDropDown)}>
                  <View className='w-full h-full items-center justify-center border-2 border-itemText bg-buttonBg rounded-xl'>
                    <TitleTextComponent translate={true} size={'text-lg'} css={'text-itemText text-center h-8 mt-1'}>
                      {budgetType[budgetTypeIndex]}
                    </TitleTextComponent>
                  </View>
                </TouchableHighlight>
                {
                  showDropDown 
                  ? <View className='absolute z-30 left-0 -bottom-24 z-10 w-24 h-24 py-2'>
                      <View className='flex-col w-full h-full items-center justify-center bg-buttonBg border-2 border-itemText rounded-xl'>
                        {budgetType.map((item, index)=>(
                          <TouchableHighlight className={`shrink w-full h-full rounded-[10px] overflow-hidden`}
                          activeOpacity={0.9} onPress={()=>updateDropDown(index)}>
                            <View className={`w-full h-full items-center justify-center ${dropDownButtonCSS[index]}`}>
                              <TitleTextComponent translate={true} size={'text-lg'} css={dropDownText[index]}>
                                {item}
                              </TitleTextComponent>
                            </View>
                          </TouchableHighlight>
                        ))}
                      </View>
                    </View>
                  : null
                }
              </View>
              
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText ml-3'}>
                Budget
              </TitleTextComponent>
              <TitleTextComponent size={'text-xl'} css={'text-screenText mr-4'}>
                :
              </TitleTextComponent>
              <TitleTextComponent size={'text-xl'} css={'text-screenText'}>
                ₩{budgetDisplayValue}
              </TitleTextComponent>
            </View>
            <View className='w-full h-fit mt-4'>
              <Slider
              value={budgetValues[budgetTypeIndex]}
              onValueChange={(value)=>setBudgetDisplayValue(value)}
              onSlidingComplete={(value)=>updateBudgetValue(value)}
              minimumValue={budgetValuesMinMax[budgetTypeIndex].min}
              maximumValue={budgetValuesMinMax[budgetTypeIndex].max}
              step={1000}
              minimumTrackTintColor={'#DFDFC8'}
              maximumTrackTintColor={'#DFDFC8'}
              style={{ width: "100%", height: 14, }}
              trackStyle={{ height: 6, borderRadius: 20 }}
              thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
              thumbProps={{
                children: (
                  <View className='w-full h-full rounded-full bg-itemBgLight border-2 border-itemText'/>
                )
              }}
              thumbTouchSize={{ width: 60, height: 50 }}
              />
            </View>
          </View>

          {/* Accounts */}
          <View className='relative z-0 flex-col w-full h-fit mt-6 items-center justify-center'>
            <View className='w-full h-6'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                Coupang/MarketCurly Accounts
              </TitleTextComponent>
            </View>
            {/* Buttons */}
            <View className='flex-row w-full h-12 mt-2 items-center justify-start'>
              <View className='flex-row w-fit h-12 mr-4'>
                <AccountButton />
              </View>
              <View className='flex-row w-fit h-12'>
                <AccountButton />
              </View>
            </View>
          </View>

          {/* Save */}
          <View className='w-full h-fit items-center justify-center mt-6 mb-3'>
            <LargeButton cssIn={'px-8'} text={'Save'} textSize={'text-2xl'} callback={handleSave}/>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfilePage;