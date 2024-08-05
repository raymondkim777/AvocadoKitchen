import React, { useState, } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Slider } from '@rneui/themed';
import DietButton from './DietButton';
import TitleTextComponent from '../text/TitleTextComponent';

const OptionsMenu = ({
optionList, updateDiet, dietCSS,
calorieValue, setCalorieValue, calorieMinValue, calorieMaxValue,
budgetValue, setBudgetValue, budgetMinValue, budgetMaxValue,
categories, setCatFocus, catColor, catText,
}) => {
  const [displayCalorie, setDisplayCalorie] = useState(calorieValue)
  const [displayBudget, setDisplayBudget] = useState(budgetValue)

  return (
    <View className={`w-full h-fit mt-6`}>
      {/* Checkbox */}
      <View className='w-full min-h-16 h-fit items-center justify-center px-2 bg-buttonBg rounded-lg'>
        <View className='flex-row flex-wrap w-full h-fit'>
          {optionList.map((option_name, index) => (
            <DietButton key={`diet-bt-${index}`} callback={updateDiet} css={dietCSS} title={option_name} index={index}/>
          ))}
        </View>
      </View>

      {/* Sliders */}
      <View className='flex-row w-full h-16 mt-2 px-6 py-1 items-center justify-center bg-buttonBg rounded-lg'>
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
          style={{ width: "100%", height: 12, marginBottom: 2, }}
          trackStyle={{ height: 4, borderRadius: 20, }}
          thumbStyle={{ height: 18, width: 18, backgroundColor: 'transparent', }}
          thumbProps={{
            children: (
              <View className='w-full h-full rounded-full bg-itemBgLight border-2 border-itemText'/>
            )
          }}
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
          style={{ width: "100%", height: 12, marginBottom: 2, }}
          trackStyle={{ height: 4, borderRadius: 20, }}
          thumbStyle={{ height: 18, width: 18, backgroundColor: 'transparent', }}
          thumbProps={{
            children: (
              <View className='w-full h-full rounded-full bg-itemBgLight border-2 border-itemText'/>
            )
          }}
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
            <TouchableOpacity key={`search-opt-${index}`} className={`w-12 h-6 items-center justify-center rounded-full ${catColor[index]}`}
            activeOpacity={1} onPress={()=>setCatFocus(index)}>
              <TitleTextComponent translate={true} size={'text-base'} css={catText[index]}>
                {cat}
              </TitleTextComponent> 
            </TouchableOpacity>
          ))}
          <View id='div' className="{{height > 800 ? 'w-4': ''}}"/>
        </View>
      </View>
    </View>
  )
}

export default OptionsMenu