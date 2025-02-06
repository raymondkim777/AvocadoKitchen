import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import {useTranslation} from 'react-i18next';
import 'intl-pluralrules';
import '../../text/i18n'
import TitleTextComponent from '../../text/TitleTextComponent';
import ItemTextComponent from '../../text/ItemTextComponent';
import Heart from "../../../assets/icons/heart.svg";
import Comment from "../../../assets/icons/comment.svg";
import Download from "../../../assets/icons/download.svg";

const RecipeBrowseCard = ({ item, handleRecipePress }) => {
  const {t, i18n} = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <TouchableHighlight className='w-full h-fit rounded-xl'
    activeOpacity={0.95} onPress={()=>handleRecipePress(item)}>
      <View className='flex-col w-full h-72 p-1 bg-itemBgLight rounded-xl'>
        <Image className='flex-1 w-full rounded-lg' source={item.image}/>
        <View className='flex-col w-full h-fit mt-1'>
          {/* Data */}
          <View className='flex-row w-full h-6 justify-start'>
            <View className='flex-row w-fit h-6 items-center justify-center px-1'>
              <View className='w-5 h-5 mr-1'>
                <Heart width={20} height={20} stroke={'#85855B'} strokeWidth={2} />
              </View>
              <Text className='font-inconsolata text-itemText text-lg -mt-0.5'>{item.data.likes}</Text>
            </View>
            <View className='flex-row w-fit h-6 items-center justify-center px-1'>
              <View className='w-5 h-5 mr-1'>
                <Comment width={20} height={20} stroke={'#85855B'} strokeWidth={2} />
              </View>
              <Text className='font-inconsolata text-itemText text-lg -mt-0.5'>{item.data.comments}</Text>
            </View>
            <View className='flex-row w-fit h-6 items-center justify-center px-1'>
              <View className='w-5 h-5 mr-1'>
                <Download width={20} height={20} stroke={'#85855B'} strokeWidth={2} />
              </View>
              <Text className='font-inconsolata text-itemText text-lg -mt-0.5'>{item.data.downloads}</Text>
            </View>
          </View>

          {/* Title */}
          <View className='w-full h-fit items-center justify-center mt-1'>
            <TitleTextComponent translate={true} size={'text-3xl'} css={'text-itemText'}>
              {item.title}
            </TitleTextComponent>
          </View>

          {/* Nutrition */}
          <View className={`flex-row w-full h-fit items-center justify-center
            ${(currentLanguage === 'ko-KR') ? 'mt-1' : '-mt-1'}`}>
            <TitleTextComponent translate={false} size={'text-lg'} sizeDiff={-1} css={'text-itemText mr-2'}>
              {item.nutrition.cal}
            </TitleTextComponent>
            <TitleTextComponent translate={true} size={'text-lg'} sizeDiff={-1} css={'text-itemText mr-5'}>
              Cal
            </TitleTextComponent>
            <TitleTextComponent translate={false} size={'text-lg'} sizeDiff={-1} css={'text-itemText mr-2'}>
              {item.nutrition.protein}g
            </TitleTextComponent>
            <TitleTextComponent translate={true} size={'text-lg'} sizeDiff={-1} css={'text-itemText mr-5'}>
              Protein
            </TitleTextComponent>
            <TitleTextComponent translate={false} size={'text-lg'} sizeDiff={-1} css={'text-itemText mr-2'}>
              {item.nutrition.carb}g
            </TitleTextComponent>
            <TitleTextComponent translate={true} size={'text-lg'} sizeDiff={-1} css={'text-itemText'}>
              Carbs
            </TitleTextComponent>
          </View>

          {/* Tags */}
          <View className={`flex-row w-full h-fit items-center justify-center
            ${(currentLanguage === 'ko-KR') ? 'mt-1' : ''}`}>
            {item.tags.map((tag, index) => (
              <View className='flex-row w-fit h-fit'>
                <ItemTextComponent translate={false} size={'text-base'} css={'text-itemBgMid'}>
                  #
                </ItemTextComponent>
                <ItemTextComponent translate={true} size={'text-base'} sizeDiff={0} css={'text-itemBgMid mr-3'}>
                  {tag.text}
                </ItemTextComponent>
              </View>
            ))}
          </View>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default RecipeBrowseCard