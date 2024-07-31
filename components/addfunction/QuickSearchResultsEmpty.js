import React from 'react'
import { View, Text } from 'react-native'
import {useTranslation} from 'react-i18next';
import 'intl-pluralrules';
import '../text/i18n';

const msg = "(Quick Search Error)";

const QuickSearchResultsEmpty = () => {
  const {t, i18n} = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <View className='w-full h-12 mt-6 items-center justify-center'>
      <Text className={`
        ${(currentLanguage  === 'ko-KR') ? "font-koreanFont1 p-1" : 'font-inconsolata'} 
        text-xl h-fit text-center text-wrap leading-4 text-screenText
      `}>
        {t(msg)}
      </Text>
    </View>
  )
}

export default QuickSearchResultsEmpty