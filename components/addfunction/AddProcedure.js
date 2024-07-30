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
  const [description, setDescription] = useState('');
  const [imageFound, setImageFound] = useState(false);
  const [imageUploaded, setImageUploaded] = useState('');
  const updateImage = () => {
    setImageFound(!imageFound);
  }

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
          <View className='flex-row w-full h-fit items-center justify-center mt-6'>
            <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText ml-4 mr-2'}>
              #
            </TitleTextComponent>
            <ItemTextInputComponent
            translate={false}
            size={'text-xl'}
            css={'w-12 h-9 text-itemText text-center pb-1 -mt-1 bg-itemBgLight rounded-lg'}
            placeholder="ex.1" 
            placeholderTextColor={'#85855B'}
            value={stepNum} 
            onChangeText={setStepNum} 
            underlineColorAndroid={'transparent'}
            />
            <View className='shrink w-full h-10 items-center justify-center mr-2'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText text-right'}>
                This will insert a new step after Step 2.
              </TitleTextComponent>
            </View>
          </View>

          {/* Description */}
          <View className='flex-col w-full h-fit mt-4'>
            <View className='w-full h-6'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                Description
              </TitleTextComponent>
            </View>
            <View className='flex-row shrink w-full h-48 px-2 mt-2 bg-itemBgLight rounded-lg'>
              <ItemTextInputComponent
              translate={true}
              size={'text-xl'}
              css={'shrink w-full h-full text-wrap text-itemText -mt-1'}
              multiline={true}
              placeholder={"Insert procedure step here"}
              placeholderTextColor={'#85855B'}
              value={description} 
              onChangeText={setDescription} 
              underlineColorAndroid={'transparent'}
              textAlignVertical={'top'}
              />
            </View>
          </View>

          {/* Image */}
          <View className='flex-col w-full h-fit mt-4'>
            <View className='w-full h-6'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
                Image
              </TitleTextComponent>
            </View>
            <View className='flex-col items-center justify-center shrink w-full h-fit mt-2'>
              {
                imageFound
                ? (
                  <View className='w-full h-64 bg-itemBgLight rounded-xl mb-2'>
                  </View>
                )
                : null
              }
              
              {/* Add/Change Image */}
              <View className='flex-row w-full h-fit items-center'>
                <SmallButton text={imageFound ? 'Change Image' : 'Add Image'} callback={updateImage}/>
              </View>
            </View>
          </View>

          {/* Save */}
          <View className='w-full h-fit items-center justify-center mt-8 mb-6'>
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
