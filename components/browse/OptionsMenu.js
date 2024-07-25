import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DietButton from './DietButton';

const OptionsMenu = ({optionList, updateDiet, dietCSS, categories, setCatFocus, catColor, catText}) => (
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
    <View className='flex-row w-full h-16 mt-2 bg-buttonBg rounded-lg'>
      {/* ADD LATER */}
    </View>

    {/* More Search Options */}
    <View className='flex-row w-full h-8 mt-2 items-center justify-center px-3 bg-buttonBg rounded-lg'>
      <Text className='font-inconsolata text-base'>
        Search By:
      </Text>
      <View className='flex-row grow w-fit h-fit items-center justify-center'>
        {categories.map((cat, index) => (
          <TouchableOpacity key={`search-opt-${index}`} className={`w-12 h-6 items-center justify-center rounded-full ${catColor[index]}`}
            activeOpacity={1} onPress={()=>setCatFocus(index)}>
            <Text className={`font-inconsolata text-base ${catText[index]}`}>{cat}</Text>
          </TouchableOpacity>
        ))}
        <View id='div' className="{{height > 800 ? 'w-4': ''}}"/>
      </View>
    </View>
  </View>
)

export default OptionsMenu