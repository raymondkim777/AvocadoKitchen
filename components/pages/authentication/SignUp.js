import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler, SafeAreaView, View, Image } from 'react-native';
import ItemTextInputComponent from '../../text/ItemTextInputComponent';
import LargeButton from '../../general/buttons/LargeButton';

const SignUp = ({ navigation }) => {

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('Login');
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => subscription.remove();
    })
  ); 

  const handleNext = ({}) => {
    navigation.navigate('SignUp2')
  }

  const handleBack = ({}) => {
    navigation.navigate('Login')
  }

  const [emailInput, setEmailInput] = useState('');
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
 
  return (
    <SafeAreaView id='screen' className='w-full h-full justify-center items-center bg-screenBg'>
      <View id='content' className='shrink w-full max-w-[560px] h-full items-center justify-center p-8'>

        {/* Logo */}
        <View className='grow w-full h-36 max-h-64 flex items-center justify-end'>
          <Image className='w-[160px] h-[160px]' source={require('../../../assets/images/Logo.png')} />
        </View>

        <View className='grow w-full h-fit flex-col items-center justify-center'>
          {/* Email/Password Input */}
          <View className='w-full h-fit'>
            {/* Email Input */}
            <ItemTextInputComponent
            translate={true}
            size={'text-xl'}
            css={'shrink w-full h-12 text-itemText pb-1 pl-4 bg-itemBgLight rounded-xl'}
            placeholder={'Enter your email'}
            placeholderTextColor={'#85855B'}
            value={emailInput}
            onChangeText={setEmailInput}
            underlineColorAndroid={'transparent'}
            inputMode={'email'}
            />

            {/* Username Input */}
            <ItemTextInputComponent
            translate={true}
            size={'text-xl'}
            css={'shrink w-full h-12 text-itemText pb-1 pl-4 mt-2 bg-itemBgLight rounded-xl'}
            placeholder={'Enter a username'}
            placeholderTextColor={'#85855B'}
            value={usernameInput}
            onChangeText={setUsernameInput}
            underlineColorAndroid={'transparent'}
            />

            {/* Password Input */}
            <ItemTextInputComponent
            translate={true}
            size={'text-xl'}
            css={'shrink w-full h-12 text-itemText pb-1 pl-4 mt-8 bg-itemBgLight rounded-xl'}
            placeholder={'Enter your password'}
            placeholderTextColor={'#85855B'}
            value={passwordInput}
            onChangeText={setPasswordInput}
            underlineColorAndroid={'transparent'}
            secureTextEntry={true}
            />

            {/* Password Check */}
            <ItemTextInputComponent
            translate={true}
            size={'text-xl'}
            css={'shrink w-full h-12 text-itemText pb-1 pl-4 mt-2 bg-itemBgLight rounded-xl'}
            placeholder={'Enter your password again'}
            placeholderTextColor={'#85855B'}
            value={passwordCheck}
            onChangeText={setPasswordCheck}
            underlineColorAndroid={'transparent'}
            secureTextEntry={true}
            />
          </View>

          
          {/* Buttons */}
          <View className='flex-col w-full h-fit mt-10'>
            {/* Account Link
            <View className='flex-col w-full h-fit items-center justify-center'>
              <TouchableOpacity className='flex-row shrink w-full h-12 items-center justify-center bg-buttonBg rounded-xl'
              activeOpacity={0.9}>
                <Image className='w-[40px] h-[40px] mr-2' source={require('../../assets/images/google.png')} />
                <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemText text-center'}>
                  Coupang Account
                </TitleTextComponent>
              </TouchableOpacity>
              <TouchableOpacity className='flex-row shrink w-full h-12 mt-2 items-center justify-center bg-buttonBg rounded-xl'
              activeOpacity={0.9}>
                <Image className='w-[40px] h-[40px] mr-2' source={require('../../assets/images/google.png')} />
                <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemText text-center'}>
                  Market Kurly Account
                </TitleTextComponent>
              </TouchableOpacity>
            </View>
            */}

            {/* Back/Next */}
            <View className='flex-row w-full h-fit items-center justify-center mt-10'>
              <LargeButton cssOut={'shrink w-full mr-2'} text={'Back'} callback={handleBack}/>
              <LargeButton cssOut={'shrink w-full'} text={'Next'} callback={handleNext}/>
            </View>
          </View>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default SignUp