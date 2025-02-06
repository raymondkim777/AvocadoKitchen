import React, {useState} from 'react';
import { Text } from 'react-native';
import {useTranslation} from 'react-i18next';
import 'intl-pluralrules';
import './i18n'

const ItemTextComponent = ({ 
  translate, 
  children, size, sizeDiff = 0, 
  bold = false, css, 
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
  // let sizeIdx = sizes.indexOf(size) + (sizeDiff + 4) * (currentLanguage == 'ko-KR');
  let sizeIdx = sizes.indexOf(size) + (sizeDiff + 4);
  if (sizeIdx > 12) {
    sizeIdx = 12;
  }

  const fontKRCSS = (bold ? 'font-koreanFont2' : 'font-koreanFont2');
  // const fontENCSS = (bold ? 'font-inconsolataBold' : 'font-inconsolata');

  return(
    <Text 
    numberOfLines={numberOfLines}
    className={`
      ${
        // (currentLanguage  === 'ko-KR') ? fontKRCSS + " -mb-1 -mt-2" : fontENCSS
        fontKRCSS + " -mb-1 -mt-2" 
      } 
      ${sizes[sizeIdx]} 
      ${css}
    `}>
      {
        translate ? t(children) : children
      }
    </Text>
  )
}

export default ItemTextComponent