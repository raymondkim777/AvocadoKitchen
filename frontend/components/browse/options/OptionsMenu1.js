import React, { useState, } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Slider } from '@rneui/themed';
import DietButton from './DietButton';
import TitleTextComponent from '../../text/TitleTextComponent';

const OptionsMenu1 = ({
optionList, dietIndex, setDietIndex, 
calorieValue, setCalorieValue,
budgetValue, setBudgetValue,
categories, searchCat, setSearchCat,
}) => {

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

  const [displayCalorie, setDisplayCalorie] = useState(calorieValue);
  const calorieMinValue = 0;
  const calorieMaxValue = 5000;
  const [displayBudget, setDisplayBudget] = useState(budgetValue);
  const budgetMinValue = 0;
  const budgetMaxValue = 100000;

  const [catColor, setCatColor] = useState(
    new Array(searchCat).fill('bg-buttonBg').concat(
      ['bg-itemText'].concat(
        new Array(categories.length - searchCat - 1).fill('bg-buttonBg')
      )
    )
  );
  const [catText, setCatText] = useState(
    new Array(searchCat).fill('text-itemText').concat(
      ['text-itemBgLight'].concat(
        new Array(categories.length - searchCat - 1).fill('text-itemText')
      )
    )
  );
  const setCatFocus = (index) => {
    setSearchCat(index);
    const new_color = new Array(categories.length).fill('bg-buttonBg');
    new_color[index] = 'bg-itemText';
    setCatColor(new_color);

    const new_text = new Array(categories.length).fill('text-itemText');
    new_text[index] = 'text-itemBgLight';
    setCatText(new_text);
  }

  return (
    <View className={`w-full h-fit mt-6`}>
      {/* Checkbox */}
      <View className='w-full min-h-16 h-fit items-center justify-center px-2 bg-buttonBg rounded-lg'>
        <View className='flex-row flex-wrap w-full h-fit'>
          {optionList.map((option_name, index) => (
            <DietButton key={`diet-bt-${index}`} callback={updateDiet} css={dietButtonCSS} title={option_name} index={index}/>
          ))}
        </View>
      </View>

      {/* Sliders */}
      <View className='flex-row w-full h-16 mt-2 px-6 items-center justify-center bg-buttonBg rounded-lg'>
        <View className='flex-col shrink w-full h-fit mr-8 items-center justify-center'>
          <View className='w-full h-fit items-center justify-center'>
            <TitleTextComponent translate={true} size={'text-base'} css={'text-itemText'}>
              Calories
            </TitleTextComponent>
          </View>
          <Slider
          value={calorieValue}
          onValueChange={(value)=>setDisplayCalorie(value)}
          onSlidingComplete={(value)=>setCalorieValue(value)}
          minimumValue={calorieMinValue}
          maximumValue={calorieMaxValue}
          step={100}
          minimumTrackTintColor={'#85855B'}
          maximumTrackTintColor={'#85855B'}
          style={{ width: "100%", height: 14, zIndex: 5 }}
          trackStyle={{ height: 4, borderRadius: 20 }}
          thumbStyle={{ height: 18, width: 18, backgroundColor: 'transparent' }}
          thumbProps={{
            children: (
              <View className='w-full h-full rounded-full bg-itemBgLight border-2 border-itemText'/>
            )
          }}
          thumbTouchSize={{ width: 60, height: 60 }}
          />

          <View className='w-full h-fit items-center justify-center'>
            <TitleTextComponent size={'text-base'} css={'text-itemText'}>
              {displayCalorie} Cal
            </TitleTextComponent>
          </View>
        </View>
        <View className='flex-col shrink w-full h-fit items-center justify-center'>
          <View className='w-full h-fit items-center justify-center'>
            <TitleTextComponent translate={true} size={'text-base'} css={'text-itemText'}>
              Budget
            </TitleTextComponent>
          </View>
          <Slider
          value={budgetValue}
          onValueChange={(value)=>setDisplayBudget(value)}
          onSlidingComplete={(value)=>setBudgetValue(value)}
          minimumValue={budgetMinValue}
          maximumValue={budgetMaxValue}
          step={1000}
          minimumTrackTintColor={'#85855B'}
          maximumTrackTintColor={'#85855B'}
          style={{ width: "100%", height: 12, zIndex: 5 }}
          trackStyle={{ height: 4, borderRadius: 20 }}
          thumbStyle={{ height: 18, width: 18, backgroundColor: 'transparent' }}
          thumbProps={{
            children: (
              <View className='w-full h-full rounded-full bg-itemBgLight border-2 border-itemText'/>
            )
          }}
          thumbTouchSize={{ width: 60, height: 60 }}
          />

          <View className='w-full h-fit items-center justify-center'>
            <TitleTextComponent size={'text-base'} css={'text-itemText'}>
              ₩{displayBudget}
            </TitleTextComponent>
          </View>
        </View>
      </View>

      {/* More Search Options */}
      <View className='flex-row w-full h-8 mt-2 items-center justify-center px-3 bg-buttonBg rounded-lg'>
        <TitleTextComponent translate={true} size={'text-base'} css={'text-itemText'}>
          Search By:
        </TitleTextComponent>
        <View className='flex-row grow w-fit h-fit items-center justify-center'>
          {categories.map((cat, index) => (
            <TouchableHighlight key={`search-opt-${index}`} className={`w-12 h-6 items-center justify-center rounded-full`}
            activeOpacity={0.9} onPress={()=>setCatFocus(index)}>
              <View className={`w-full h-full items-center justify-center  ${catColor[index]} rounded-full `}>
                <TitleTextComponent translate={true} size={'text-base'} css={catText[index]}>
                  {cat}
                </TitleTextComponent> 
              </View>
            </TouchableHighlight>
          ))}
        </View>
      </View>
    </View>
  )
}

export default OptionsMenu1