import React, { useState, } from 'react';
import { View, Text, Image } from 'react-native';
import TitleTextComponent from '../text/TitleTextComponent';

const FoodCard = ({text, image, css = '', variable = null}) => {
  // variable = {total, index}

  let dimensionsCSS = 'w-56 h-40';

  if (variable != null) {
    css = 'mb-3';
    dimensionsCSS = 'w-full h-36';
    if (variable.index == 1) {
      dimensionsCSS = 'w-full h-56';
    } else if (variable.index == variable.total - 2) {
      dimensionsCSS = 'w-full h-56';
      css = '';
    } else if (variable.index == variable.total - 1) {
      css = '';
    }
  }

  return(
    <View className={`flex-row ${dimensionsCSS} p-1.5 bg-itemBgLight rounded-lg ${css}`}>
      <View className='w-full h-fit items-center justify-center -mt-1'>
        <TitleTextComponent translate={true} size={'text-lg'} css={'text-itemText'}>
          {text}
        </TitleTextComponent>
        <Image className='flex-1 w-full rounded-md' source={image} />
      </View>
    </View>
  )
}

export default FoodCard