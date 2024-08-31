import React, { useState, } from 'react';
import { View, Text, Image } from 'react-native';
import {useTranslation} from 'react-i18next';
import 'intl-pluralrules';
import '../text/i18n'
import TitleTextComponent from '../text/TitleTextComponent';

const QuickSearchResultsUnit = ({item}) => {
  const {t, i18n} = useTranslation();
  const currentLanguage = i18n.language;

  return (
    (
      item.empty
      ? <View className='flex-1 h-60 bg-transparent'/>
      : <View className='flex-1 h-60 items-center justify-center p-1'>
          <Image className='w-full h-40 rounded-lg' source={item.image} />
          <View className='flex-col w-full h-fit items-center justify-center mt-1'>
            <Text numberOfLines={2} className={`
              ${(currentLanguage  === 'ko-KR') ? "font-koreanFont1 my-1" : 'font-inconsolata'} 
              text-base text-wrap text-center leading-4 text-itemText
            `}>
              ({t(item.site)}) {t(item.name)}
            </Text>
            <View className='flex-row w-full h-fit items-center justify-center space-x-2'>
              <TitleTextComponent size={'text-lg'} sizeDiff={-1} css={'text-redHighlight mr-2'}>
                ₩{item.price}
              </TitleTextComponent>
              <TitleTextComponent size={'text-lg'} sizeDiff={-1} css={'text-greenHighlight'}>
                ({item.deliver})
              </TitleTextComponent>
            </View>
          </View>
        </View>
    )
  )
}

export default QuickSearchResultsUnit