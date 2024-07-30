import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import ItemTextInputComponent from './text/ItemTextInputComponent';
import TitleTextComponent from './text/TitleTextComponent';

const Login2 = ({}) => {

  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  return (
    <SafeAreaView id='screen' className='w-full h-full justify-center items-center bg-screenBg'>
      <View id='content' className='grow w-full h-full items-center justify-center p-8'>
        {/* Logo */}
        <View className='w-full h-fit flex items-center justify-end -mt-12'>
          <Image className='w-[160px] h-[160px]' source={require('../assets/images/Logo.png')} />
        </View>

        {/* Email/Password Input */}
        <View className='w-full h-fit mt-6'>
          {/* Email Input */}
          <ItemTextInputComponent
          translate={true}
          size={'text-xl'}
          css={'shrink w-full h-10 text-itemText pb-1 pl-4 bg-itemBgLight rounded-xl'}
          placeholder={'Enter your email'}
          placeholderTextColor={'#85855B'}
          value={emailInput}
          onChangeText={setEmailInput}
          underlineColorAndroid={'transparent'}
          inputMode={'email'}
          />

          {/* Password Input */}
          <ItemTextInputComponent
          translate={true}
          size={'text-xl'}
          css={'shrink w-full h-10 text-itemText pb-1 pl-4 mt-2 bg-itemBgLight rounded-xl'}
          placeholder={'Enter your password'}
          placeholderTextColor={'#85855B'}
          value={emailInput}
          onChangeText={setEmailInput}
          underlineColorAndroid={'transparent'}
          secureTextEntry={true}
          />
        </View>

        {/* Buttons */}
        <View className='flex-col w-full h-fit mt-16'>
          {/* Continue with Google */}
          <View className='w-full h-fit items-center justify-center'>
            <TouchableOpacity className='flex-row shrink w-full h-12 items-center justify-center bg-buttonBg rounded-xl'
              activeOpacity={0.9}>
                <Image className='w-[40px] h-[40px] mr-2' source={require('../assets/images/google.png')} />
                <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemText text-center'}>
                  Continue with Google
                </TitleTextComponent>
            </TouchableOpacity>
          </View>

          {/* Login/SignUp */}
          <View className='flex-row w-full h-fit items-center justify-center mt-2'>
            <TouchableOpacity className='flex-row shrink w-full h-12 items-center justify-center bg-buttonBg rounded-xl mr-2'
              activeOpacity={0.9}>
                <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemText text-center'}>
                  Login
                </TitleTextComponent>
            </TouchableOpacity>
            <TouchableOpacity className='flex-row shrink w-full h-12 items-center justify-center bg-buttonBg rounded-xl'
              activeOpacity={0.9}>
                <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemText text-center'}>
                  Sign Up
                </TitleTextComponent>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default Login2