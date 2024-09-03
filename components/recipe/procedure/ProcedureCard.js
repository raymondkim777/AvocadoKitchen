import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import {useTranslation} from 'react-i18next';
import 'intl-pluralrules';
import '../../text/i18n'
import TitleTextComponent from '../../text/TitleTextComponent';
import ItemTextComponent from '../../text/ItemTextComponent';

const ProcedureCard = ({item, width}) => {
  const {t, i18n} = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <View style={{width}} className={`flex-col h-full justify-center items-center p-2 bg-itemBgLight rounded-xl`}>
      <View className='flex-row w-full h-fit items-center justify-center'>
        <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemText mr-2'}>
          Step
        </TitleTextComponent> 
        <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemText'}>
          {item.step}
        </TitleTextComponent> 
      </View>
      <TouchableOpacity className='flex flex-1 w-full mt-1 items-center justify-center'
      activeOpacity={0.9}>
        <Image className='flex flex-1 w-full rounded-md' source={item.image}/>
      </TouchableOpacity>
      <View className='w-full h-fit max-h-[30%] items-center justify-center'>
        <ScrollView nestedScrollEnabled={true} className='w-full mt-2'>
          <View className='w-full h-fit max-h-1/3 items-center justify-center'>
            {/* Custom ItemTextComponent due to complications */}
            <Text className={`
              ${(currentLanguage  === 'ko-KR') 
                ? "font-koreanFont2 text-itemText text-center text-3xl leading-7" 
                : 'font-inconsolata text-itemText text-center text-base leading-4'}
            `}>
              {t(item.description)}
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default ProcedureCard