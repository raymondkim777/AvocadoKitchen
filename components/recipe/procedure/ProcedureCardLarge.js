import React from 'react';
import { View, Text, ScrollView, Image, } from 'react-native';
import {useTranslation} from 'react-i18next';
import 'intl-pluralrules';
import '../../text/i18n'
import TitleTextComponent from '../../text/TitleTextComponent';

const ProcedureCardLarge = ({item}) => {
  const {t, i18n} = useTranslation();
  const currentLanguage = i18n.language;
  
  return (
    <View className={`flex-col shrink w-full h-fit justify-center items-center p-2 bg-itemBgLight rounded-xl`}>
      <View className='flex-row w-full h-fit items-center justify-center'>
        <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemText mr-2'}>
          Step
        </TitleTextComponent> 
        <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemText'}>
          {item.index + 1}
        </TitleTextComponent> 
      </View>
      <Image className='shrink h-72 w-full mt-2 rounded-lg' source={item.image}/>
      <View className='shrink w-full h-fit max-h-64 items-center justify-center'>
        <ScrollView nestedScrollEnabled={true} className='w-full mt-2'>
          <View className='w-full h-fit items-center justify-center'>
            <Text className={`
              ${(currentLanguage  === 'ko-KR') 
                ? "font-koreanFont2 text-itemText text-center text-3xl leading-7" 
                : 'font-inconsolata text-itemText text-center text-base leading-4'}
            `}>
              {item.description}
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default ProcedureCardLarge