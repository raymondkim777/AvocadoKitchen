import React, { useState, useEffect, useContext, useCallback } from 'react';
import { MealContext } from '../control/AddMealControl';
import { SafeAreaView, View, ScrollView, Image, Alert } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {useTranslation} from 'react-i18next';
import 'intl-pluralrules';
import '../../text/i18n'
import TitleTextComponent from '../../text/TitleTextComponent';
import ItemTextInputComponent from '../../text/ItemTextInputComponent';
import AddImageModal from '../../addfunction/addimage/AddImageModal';
import ExitButtonGeneral from '../../general/buttons/ExitButtonGeneral';
import SmallButton from '../../general/buttons/SmallButton';
import LargeButton from '../../general/buttons/LargeButton';
import Counter from '../../general/misc/Counter';

const AddProcedure = ({ navigation }) => {
  const {t, i18n} = useTranslation();
  const currentLanguage = i18n.language;

  const { 
    recipeItem, setRecipeItem, 
    procedureItem, setProcedureItem,
  } = useContext(MealContext);
  

  useEffect(()=>{
    updateStepNum(stepNum);
  },[]);

  const handleCleanUp = () => {
    setProcedureItem({
      preset: false,
      index: 1, 
      description: '',
      image: null,
    });
  }

  const handleExitPress = () => {
    handleCleanUp();
    navigation.goBack();
  }

  const handleDeletePress = () => {
    const newRecipeItem = recipeItem;
    newRecipeItem.procedure.splice(procedureItem.index, 1);
    for (let i = procedureItem.index; i < newRecipeItem.procedure.length; i++) {
      newRecipeItem.procedure[i].index--;
    }
    setRecipeItem(newRecipeItem);
    handleCleanUp();
    navigation.goBack();
  }

  const handleSaveCheck = () => {
    const result = (
      description != ''
    );
    setSaveCheck(result);
    return(result);
  }

  const handleSavePress = () => {
    if (handleSaveCheck()) {
      const newProcedureItem = {
        preset: true,
        index: stepNum - 1, 
        description: description,
        image: 'data:image/jpeg;base64,' + response.assets[0].base64, 
      }
      const newRecipeItem = recipeItem;
      if (procedureItem.preset) {
        newProcedureItem.index = procedureItem.index;
        newRecipeItem.procedure[procedureItem.index] = newProcedureItem;
      } else {
        newRecipeItem.procedure.splice(newProcedureItem.index, 0, newProcedureItem);
        for (let i = newProcedureItem.index + 1; i < newRecipeItem.procedure.length; i++) {
          newRecipeItem.procedure[i].index++;
        }
      }
      setRecipeItem(newRecipeItem);
      handleCleanUp();
      navigation.goBack();
    }
  }

  // stepNum starts at 1
  const [stepNum, setStepNum] = useState(procedureItem.preset ? procedureItem.index + 1 : recipeItem.procedure.length + 1);
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

  const [description, setDescription] = useState(procedureItem.description);

  // ImagePicker
  const [showImageModal, setShowImageModal] = useState(false)

  const includeExtra = true;
  const [response, setResponse] = useState(null);

  const launchImagePicker = useCallback((type, options) => {
    if (type === 'capture') {
      ImagePicker.launchCamera(options, setResponse);
    } else {
      ImagePicker.launchImageLibrary(options, setResponse);
    }
  }, []);
  
  const [imageUploaded, setImageUploaded] = useState(procedureItem.image);
  
  const handleCameraPress = () => {
    launchImagePicker('capture', 
    {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: true,
      includeExtra,
    });
  }

  const handleSelectPress = () => {
    launchImagePicker('library', 
    {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: true,
      includeExtra,
    });
  }

  const deleteImage = () => {
    setResponse(null);
    setImageUploaded(null);
  }

  const [saveCheck, setSaveCheck] = useState(true);

  return (
    <SafeAreaView id='screen' className='w-full h-full justify-center items-center bg-screenBg'>
      <ScrollView contentContainerStyle={{flexGrow: 1}} className='grow w-full h-fit'>
        <View id='content' className='w-full h-full p-4 justify-between'>
          <View className='flex-col w-full h-fit'>
            {/* Title */}
            <View className='flex-row w-full h-10 items-center justify-between'>
              <TitleTextComponent translate={true} size={'text-3xl'} css={'text-screenText mx-4'}>
                {procedureItem.preset ? 'Edit Procedure Step' : 'Add Procedure Step'}
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
              disabled={procedureItem.preset}
              background={'bg-buttonBg'}
              minCount={1}
              maxCount={recipeItem.procedure.length + 1}
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
                  response?.assets ?
                  <View className='w-full h-64 bg-itemBgLight rounded-xl mb-2 overflow-hidden'>
                    <Image
                    className='w-full h-full'
                    resizeMode="cover"
                    resizeMethod="scale"
                    source={{uri: response?.assets[0].uri}}
                    />
                  </View> : imageUploaded ?
                  <View className='w-full h-64 bg-itemBgLight rounded-xl mb-2 overflow-hidden'>
                    <Image
                    className='w-full h-full'
                    resizeMode="cover"
                    resizeMethod="scale"
                    source={{uri: imageUploaded}}
                    />
                  </View> : null
                }
                
                {/* Add/Change Image */}
                <View className='flex-row w-full h-fit items-center'>
                  <SmallButton text={response?.assets ? 'Change Image' : 'Add Image'} callback={()=>setShowImageModal(true)}/>
                  {
                    response?.assets 
                    ? <View className='w-fit h-fit ml-2'>
                        <SmallButton text={'Delete Image'} callback={deleteImage} /> 
                      </View>
                    : null
                  }
                </View>
              </View>
            </View>
          </View>

          {/* Save */}
          <View className='flex-col w-full h-fit items-center justify-center mt-8 mb-2'>
            {
              saveCheck ? null
              : <TitleTextComponent translate={true} size={'text-lg'} css={'text-redHighlight mb-2'}>
                  SaveCheck Error Message
                </TitleTextComponent>
            }
            <View className='flex-row w-full h-fit items-center justify-center'>
              {
                procedureItem.preset  
                ? <LargeButton cssIn={'shrink w-full'} cssOut={'shrink w-full mr-4'} text={'Delete'} textSize={'text-2xl'} callback={handleDeletePress}/>
                : null
              }
              <LargeButton cssIn={'shrink w-full'} cssOut={'shrink w-full'} text={'Save'} textSize={'text-2xl'} callback={handleSavePress} />
            </View>
          </View>

          {/* Add Image Modal */}
          <AddImageModal
          showImageModal={showImageModal}
          setShowImageModal={setShowImageModal}
          handleCameraPress={handleCameraPress} 
          handleSelectPress={handleSelectPress}
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AddProcedure
