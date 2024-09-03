import React from 'react'
import { View, Text } from 'react-native'
import {useTranslation} from 'react-i18next';
import 'intl-pluralrules';
import '../../text/i18n';

const msg = "(Quick Search Error)";

const QuickSearchResultsEmpty = ({background, textColor='text-screenText'}) => {
  const {t, i18n} = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <View className={`shrink w-full h-12 items-center justify-center ${background} rounded-lg`}>
      <Text className={`
        ${(currentLanguage  === 'ko-KR') ? "font-koreanFont1 mt-1 p-1" : 'font-inconsolata'} 
        text-xl h-fit text-center text-wrap leading-4 ${textColor}
      `}>
        {t(msg)}
      </Text>
    </View>
  )
}

export default QuickSearchResultsEmpty