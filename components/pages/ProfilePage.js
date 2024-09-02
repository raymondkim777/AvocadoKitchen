import React, { useState, useContext, } from 'react';
import { SideBarContext } from './HomeControl';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler, View, SafeAreaView, Pressable, Dimensions, TouchableOpacity, ScrollView, TouchableHighlight, } from 'react-native';
import { Slider } from '@rneui/themed';
import TitleTextComponent from '../text/TitleTextComponent';
import ItemTextInputComponent from '../text/ItemTextInputComponent';
import SideBarButton from '../general/SideBarButton';
import ExitButton from '../general/ExitButton';
import DietButton from '../browse/DietButton';
import Tag from '../addfunction/Tag';
import TagSuggest from '../addfunction/TagSuggest';
import AccountButton from '../profile/AccountButton';
import AccountImage from '../profile/AccountImage';
import SmallButton from '../general/SmallButton';
import LargeButton from '../general/LargeButton';

const { width, height } = Dimensions.get('window');

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

  const [tags, setTags] = useState([
    {
      id: '0',
      text: 'Peanut'
    },
    {
      id: '0',
      text: 'Kiwi'
    },
    {
      id: '0',
      text: 'Peach'
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
    // ADD LATER
  }

  const [allergy, setAllergy] = useState([
    {
      id: '0',
      text: 'Gluten Free'
    },
  ])

  const [allergyInput, setAllergyInput] = useState('');
  const addNewAllergy = () => {
    const new_arr = allergy;
    new_arr.push({id: '0', text:''})
    setAllergy(new_arr);
  }
  const addAllergyByID = (id) => {
    // ADD LATER
  }
  const removeAllergy = (tagID) => {
    // ADD LATER
  }

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
                <AccountImage image={require('../../assets/images/logo-transparent.png')}/>
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

          {/* Allergies */}
          <View className='flex-col w-full h-fit mt-6'>
            <View className='w-full h-6'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                Allergies (Optional)
              </TitleTextComponent>
            </View>
            <View className='flex-row items-center justify-center shrink w-full h-fit pr-1 mt-2 bg-itemBgLight rounded-lg'>
              <ItemTextInputComponent
              translate={true}
              size={'text-xl'}
              css={'shrink w-full h-10 text-itemText pb-1 pl-3'}
              placeholder="Add Tag" 
              placeholderTextColor={'#85855B'}
              value={allergyInput} 
              onChangeText={setAllergyInput} 
              underlineColorAndroid={'transparent'}
              />

              {/* Suggested Allergies */}
              <View className='flex-row w-fit h-10 items-center justify-center'>
                <TagSuggest tagQuery={allergyInput} addTag={addAllergyByID} />
              </View>
            </View>

            {/* Display Allergies */}
            <View className='flex-row flex-wrap mt-2 -mr-2'>
              {allergy.map((item, index) => (
                <Tag tagID={item.id} tagName={item.text} removeTag={removeTag} />
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