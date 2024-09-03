import React, { useState, } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import {useTranslation} from 'react-i18next';
import 'intl-pluralrules';
import '../../text/i18n'
import TitleTextComponent from '../../text/TitleTextComponent';

const QuickSearchResultsUnit = ({ item, smallImage }) => {
  const {t, i18n} = useTranslation();
  const currentLanguage = i18n.language;

  const handlePress = () => {
    null;
  }

  const imageHeight = smallImage ? 'h-32' : 'h-40';
  const siteText = item.site != null ? `(${t(item.site)})` : '';

  return (
    (
      item.empty
      ? <View className='flex-1 h-full bg-transparent'/>
      : <View className='flex-1 h-fit px-0.5'>
          <TouchableHighlight className='w-full h-fit rounded-lg'
          activeOpacity={0.9} onPress={handlePress}>
            <View className='flex-1 h-fit items-center justify-start bg-itemBgDark rounded-lg'>
              <Image className={`shrink w-full ${imageHeight} rounded-lg`} source={item.image} />
              <View className='flex-col w-full h-fit items-center justify-center'>
                <Text numberOfLines={2} className={`
                  ${(currentLanguage  === 'ko-KR') ? "font-koreanFont1 my-1" : 'font-inconsolata'} 
                  text-base text-wrap text-center leading-4 text-itemText
                `}>
                  {siteText} {t(item.name)}
                </Text>
                <View className='flex-row w-full h-fit items-center justify-center space-x-2'>
                  {
                    item.price != null
                    ? <TitleTextComponent size={'text-lg'} sizeDiff={-1} css={'text-redHighlight mr-2'}>
                        ₩{item.price}
                      </TitleTextComponent>
                    : null
                  }
                  {
                    item.deliver != null
                    ? <TitleTextComponent size={'text-lg'} sizeDiff={-1} css={'text-greenHighlight'}>
                        ({item.deliver})
                      </TitleTextComponent>
                    : null
                  }
                </View>
              </View>
            </View>
          </TouchableHighlight>
        </View>
    )
  )
}

export default QuickSearchResultsUnit