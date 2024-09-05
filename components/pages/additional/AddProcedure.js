import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, Image } from 'react-native';
import {useTranslation} from 'react-i18next';
import 'intl-pluralrules';
import '../../text/i18n'
import TitleTextComponent from '../../text/TitleTextComponent';
import ItemTextInputComponent from '../../text/ItemTextInputComponent';
import ExitButtonGeneral from '../../general/buttons/ExitButtonGeneral';
import SmallButton from '../../general/buttons/SmallButton';
import LargeButton from '../../general/buttons/LargeButton';
import Counter from '../../general/misc/Counter';

const AddProcedure = ({
  route, navigation
  // item, index
}) => {
  const {t, i18n} = useTranslation();
  const currentLanguage = i18n.language;
  const { procedureList, index } = route.params;

  useEffect(()=>{
    updateStepNum(stepNum);
  },[]);

  const handleExitPress = () => {
    navigation.goBack();
  }

  const handleSavePress = () => {
    handleSave();
    navigation.goBack();
  }

  const handleSave = () => {
    null;
  }

  const [stepNum, setStepNum] = useState(index == null ? procedureList.length + 1 : index + 1);
  const [stepMessage, setStepMessage] = useState('');

  const updateStepNum = (num) => {
    setStepNum(num);
    if (currentLanguage === 'en-US') {
      if (num == 1) 
        setStepMessage('(Insert/Edit Start)');
      else 
        setStepMessage(`(Insert/Edit After \n Step #${num - 1})`);
    }
    else if (currentLanguage === 'ko-KR') {
      if (num == 1) 
        setStepMessage('(시작에 추가/수정)');
      else 
        setStepMessage(`(#${num - 1} 뒤에 추가/수정)`);
    }
  }

  const [description, setDescription] = useState(index == null ? '' : t(procedureList[index].description));

  const [imageFound, setImageFound] = useState(index != null && procedureList[index].image != null);
  const [imageUploaded, setImageUploaded] = useState(index == null ? '' : procedureList[index].image);

  const updateImage = () => {
    setImageFound(true);
  }

  const deleteImage = () => {
    setImageFound(false);
  }

  return (
    <SafeAreaView id='screen' className='w-full h-full justify-center items-center bg-screenBg'>
      <ScrollView className='grow w-full h-fit'>
        <View id='content' className='grow w-full h-fit p-4'>
          {/* Title */}
          <View className='flex-row w-full h-10 items-center justify-between'>
            <TitleTextComponent translate={true} size={'text-3xl'} css={'text-screenText mx-4'}>
              {/* Edit this for existingItem == undefined */}
              Add Procedure Step
            </TitleTextComponent>
            <ExitButtonGeneral handleMainFunction={handleExitPress} exitCheck={true} />
          </View>

          {/* Step Number */}
          <View className='flex-row w-full h-fit items-center justify-center mt-6'>
            <TitleTextComponent translate={true} size={'text-3xl'} sizeDiff={-2} css={'text-screenText mr-1'}>
              #
            </TitleTextComponent>
            <Counter 
            count={stepNum} 
            setCount={updateStepNum}
            background={'bg-buttonBg'}
            minCount={1}
            maxCount={procedureList.length + 1}
            />
            <View className='shrink w-full h-14 items-center justify-center'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'leading-6 text-center text-screenText'} numberOfLines={2}>
                {stepMessage}
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
                  <View className='w-full h-64 bg-itemBgLight rounded-xl mb-2 overflow-hidden'>
                    <Image className='w-full h-full' source={imageUploaded} /> 
                  </View>
                )
                : null
              }
              
              {/* Add/Change Image */}
              <View className='flex-row w-full h-fit items-center'>
                <SmallButton text={imageFound ? 'Change Image' : 'Add Image'} callback={updateImage}/>
                {
                  imageFound 
                  ? <View className='w-fit h-fit ml-2'>
                      <SmallButton text={'Delete Image'} callback={deleteImage} /> 
                    </View>
                  : null
                }
              </View>
            </View>
          </View>

          {/* Save */}
          <View className='w-full h-fit items-center justify-center mt-8 mb-6'>
            <LargeButton cssIn={'px-8'} text={'Save'} textSize={'text-2xl'} callback={handleSavePress} />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AddProcedure
