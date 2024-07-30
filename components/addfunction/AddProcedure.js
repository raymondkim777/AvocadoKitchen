import React, { useState, } from 'react';
import { SafeAreaView, View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import {useTranslation} from 'react-i18next';
import 'intl-pluralrules';
import '../text/i18n'
import TitleTextComponent from '../text/TitleTextComponent';
import ItemTextInputComponent from '../text/ItemTextInputComponent';
import ExitButton from '../ExitButton';
import QuickSearchResults from './addingredient/QuickSearchResults';
import QuickSearchResultsEmpty from './addingredient/QuickSearchResultsEmpty';
import SmallButton from './SmallButton';

const AddProcedure = ({
  // item, index
}) => {
  const {t, i18n} = useTranslation();
  const currentLanguage = i18n.language;

  const [stepNum, setStepNum] = useState(0);

  return (
    <SafeAreaView id='screen' className='w-full h-full justify-center items-center bg-screenBg'>
      <ScrollView className='grow w-full h-fit'>
        <View id='content' className='grow w-full h-fit p-4'>
          {/* Title */}
          <View className='flex-row w-full h-10 items-center justify-between'>
            <TitleTextComponent translate={true} size={'text-3xl'} css={'text-screenText mx-4'}>
              Add Procedure Step
            </TitleTextComponent>
            <ExitButton/>
          </View>

          {/* Step Number */}
          <View className='flex-col w-full h-fit mt-6'>
            <View className='w-full h-6'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                Step Number
              </TitleTextComponent>
            </View>
            <View className='flex-row items-center justify-center shrink w-full h-fit pr-1 mt-2'>
              <ItemTextInputComponent
              translate={false}
              size={'text-xl'}
              css={'w-16 h-10 text-itemText text-center pb-1 bg-itemBgLight rounded-lg'}
              placeholder="ex.1" 
              placeholderTextColor={'#85855B'}
              value={stepNum} 
              onChangeText={setStepNum} 
              underlineColorAndroid={'transparent'}
              />
              <View className='shrink w-full h-10 items-center justify-center ml-4'>
                <Text className={`
                  ${(currentLanguage === 'ko-KR') 
                    ? 'font-koreanFont1 text-screenText text-center text-lg leading-5' 
                    : 'font-inconsolata text-screenText text-center text-lg leading-4'} 
                `}>
                  {t('This will insert a new step after Step 2.')}
                </Text>
                
              </View>
            </View>
          </View>

          {/* Save */}
          <View className='w-full h-fit items-center justify-center mt-10 mb-6'>
            <TouchableOpacity className='w-fit h-12 items-center justify-center px-8 bg-buttonBg rounded-xl'
              activeOpacity={0.7}>
                <TitleTextComponent translate={true} bold={true} size={'text-2xl'} css={'text-center text-itemText'}>
                  Save
                </TitleTextComponent>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AddProcedure
