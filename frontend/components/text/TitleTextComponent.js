import React from 'react';
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import 'intl-pluralrules';
import './i18n'

const TitleTextComponent = ({ 
translate = false, 
money = false,
children, 
size, sizeDiff = 0, bold = false, css,
numberOfLines = 0, }) => {
  const {t, i18n} = useTranslation();
  const currentLanguage = i18n.language;

  const sizes = [
    'text-xs', 
    'text-sm', 
    'text-base', 
    'text-lg', 
    'text-xl', 
    'text-2xl', 
    'text-3xl', 
    'text-4xl', 
    'text-5xl', 
    'text-6xl', 
    'text-7xl', 
    'text-8xl', 
    'text-9xl',
  ];
  // let sizeIdx = sizes.indexOf(size) + sizeDiff * (currentLanguage == 'ko-KR');
  let sizeIdx = sizes.indexOf(size) + sizeDiff - 1 * (currentLanguage == 'ko-KR' ? 0 : 1);
  if (sizeIdx > 12) {
    sizeIdx = 12;
  }

  const fontKRCSS = (bold ? 'font-koreanFont1' : 'font-koreanFont1');
  // const fontENCSS = (bold ? 'font-inconsolataBold' : 'font-inconsolata');

  const moneyFormat = (value) => {
    return new Intl.NumberFormat('ko-KR', {style:'decimal'}).format(value);
  }

  return(
    <Text 
    numberOfLines={numberOfLines}
    className={`
      ${
        // (currentLanguage  === 'ko-KR') ? fontKRCSS + " -mt-0.5" : fontENCSS
        fontKRCSS + " -mt-0.5"
      } 
      ${sizes[sizeIdx]} 
      ${css}
    `}>
      {
        money ? moneyFormat(children) : translate ? t(children) : children
      }
    </Text>
  )
}

export default TitleTextComponent