import React from 'react';
import { View, Text, Image } from 'react-native';
import {useTranslation} from 'react-i18next';
import 'intl-pluralrules';
import '../text/i18n'
import TitleTextComponent from '../text/TitleTextComponent';
import ItemTextComponent from '../text/ItemTextComponent';

const RecipeCard = ({title, nutrition, tags, data, image}) => {
  const {t, i18n} = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <View className='flex-col w-full h-72 p-1 bg-itemBgLight rounded-xl'>
      <Image className='flex-1 w-full rounded-lg' source={image}/>
      <View className='flex-col w-full h-fit mt-1'>
        {/* Data */}
        <View className='flex-row w-full h-6 justify-start'>
          <View className='flex-row w-10 h-6 items-center justify-center'>
            <View className='w-5 h-5 bg-itemBgDark rounded-md mr-1'></View>
            <Text className='font-inconsolata text-base'>{data.likes}</Text>
          </View>
          <View className='flex-row w-10 h-6 items-center justify-center'>
            <View className='w-5 h-5 bg-itemBgDark rounded-md mr-1'></View>
            <Text className='font-inconsolata text-base'>{data.likes}</Text>
          </View>
          <View className='flex-row w-10 h-6 items-center justify-center'>
            <View className='w-5 h-5 bg-itemBgDark rounded-md mr-1'></View>
            <Text className='font-inconsolata text-base'>{data.likes}</Text>
          </View>
        </View>

        {/* Title */}
        <View className='w-full h-fit items-center justify-center mt-1'>
          <TitleTextComponent translate={true} size={'text-3xl'} css={'text-itemText'}>
            {title}
          </TitleTextComponent>
        </View>

        {/* Nutrition */}
        <View className={`flex-row w-full h-fit items-center justify-center
          ${(currentLanguage === 'ko-KR') ? 'mt-1' : '-mt-1'}`}>
          <TitleTextComponent translate={false} size={'text-lg'} sizeDiff={-1} css={'text-itemText mr-2'}>
            {nutrition.cal}
          </TitleTextComponent>
          <TitleTextComponent translate={true} size={'text-lg'} sizeDiff={-1} css={'text-itemText mr-5'}>
            Cal
          </TitleTextComponent>
          <TitleTextComponent translate={false} size={'text-lg'} sizeDiff={-1} css={'text-itemText mr-2'}>
            {nutrition.protein}g
          </TitleTextComponent>
          <TitleTextComponent translate={true} size={'text-lg'} sizeDiff={-1} css={'text-itemText mr-5'}>
            Protein
          </TitleTextComponent>
          <TitleTextComponent translate={false} size={'text-lg'} sizeDiff={-1} css={'text-itemText mr-2'}>
            {nutrition.carb}g
          </TitleTextComponent>
          <TitleTextComponent translate={true} size={'text-lg'} sizeDiff={-1} css={'text-itemText'}>
            Carbs
          </TitleTextComponent>
        </View>

        {/* Tags */}
        <View className={`flex-row w-full h-fit items-center justify-center
          ${(currentLanguage === 'ko-KR') ? 'mt-1' : ''}`}>
          {tags.map((tag, index) => (
            <View className='flex-row w-fit h-fit'>
              <ItemTextComponent translate={false} size={'text-base'} css={'text-itemBgMid'}>
                #
              </ItemTextComponent>
              <ItemTextComponent translate={true} size={'text-base'} sizeDiff={0} css={'text-itemBgMid mr-3'}>
                {tag}
              </ItemTextComponent>
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}

export default RecipeCard