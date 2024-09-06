import React from 'react';
import { View, Text, ScrollView, Image, TouchableHighlight } from 'react-native';
import {useTranslation} from 'react-i18next';
import 'intl-pluralrules';
import '../../text/i18n'
import TitleTextComponent from '../../text/TitleTextComponent';
import ItemTextComponent from '../../text/ItemTextComponent';

const ProcedureCard = ({ item, width, handlePress}) => {
  const {t, i18n} = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <TouchableHighlight style={{width}} className='h-full rounded-xl'
    activeOpacity={0.95} onPress={()=>handlePress(item)}>
      <View className={`flex-col w-full h-full justify-center items-center p-2 bg-itemBgLight rounded-xl`}>
        <View className='flex-row w-full h-fit items-center justify-center'>
          <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemText mr-2'}>
            Step
          </TitleTextComponent> 
          <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemText'}>
            {item.index + 1}
          </TitleTextComponent> 
        </View>
        <Image className='shrink w-full h-full mt-1 rounded-md' source={item.image}/>
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
    </TouchableHighlight>
  )
}

export default ProcedureCard