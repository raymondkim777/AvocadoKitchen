import React, {useState} from 'react';
import { TextInput } from 'react-native';
import {useTranslation} from 'react-i18next';
import 'intl-pluralrules';
import './i18n'

const ItemTextInputComponent = ({ 
  translate = false,
  size, 
  css,
  placeholder,
  placeholderTextColor, 
  defaultValue,
  value, 
  onChangeText, 
  onSubmitEditing,
  underlineColorAndroid,
  multiline=false,
  maxLength,
  inputMode,
  secureTextEntry=false,
  textAlignVertical
}) => {
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
    'text-9xl'];
  // let sizeIdx = sizes.indexOf(size) + 2 * (currentLanguage == 'ko-KR');
  let sizeIdx = sizes.indexOf(size) + 2;
  if (sizeIdx > 12) {
    sizeIdx = 12;
  }

  const fontKRCSS = 'font-koreanFont2';
  // const fontENCSS = 'font-inconsolataLight';

  return(
    <TextInput className={`
      ${fontKRCSS}
      ${sizes[sizeIdx]}
      ${css}`}
    placeholder={
      translate ? t(placeholder) : placeholder
    }
    placeholderTextColor={placeholderTextColor}
    defaultValue={defaultValue}
    value={value} 
    onChangeText={onChangeText} 
    onSubmitEditing={onSubmitEditing}
    underlineColorAndroid={underlineColorAndroid}
    multiline={multiline}
    maxLength={maxLength}
    maxHeight={multiline ? null : 50}
    inputMode={inputMode}
    textAlignVertical={textAlignVertical}
    secureTextEntry={secureTextEntry}
    />
  )
}

export default ItemTextInputComponent