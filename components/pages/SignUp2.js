import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import ItemTextInputComponent from '../text/ItemTextInputComponent';
import TitleTextComponent from '../text/TitleTextComponent';
import LargeButton from '../general/LargeButton';

const SignUp2 = ({}) => {

  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  return (
    <SafeAreaView id='screen' className='w-full h-full justify-center items-center bg-screenBg'>
      <View id='content' className='grow w-full h-full items-center justify-center p-8'>

        {/* Logo */}
        <View className='w-full h-44 flex items-center justify-end -mt-12'>
          <Image className='w-[160px] h-[160px]' source={require('../../assets/images/Logo.png')} />
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

          {/* Password Check */}
          <ItemTextInputComponent
          translate={true}
          size={'text-xl'}
          css={'shrink w-full h-10 text-itemText pb-1 pl-4 mt-2 bg-itemBgLight rounded-xl'}
          placeholder={'Enter your password again'}
          placeholderTextColor={'#85855B'}
          value={emailInput}
          onChangeText={setEmailInput}
          underlineColorAndroid={'transparent'}
          secureTextEntry={true}
          />
        </View>

        {/* Buttons */}
        <View className='flex-col w-full h-fit mt-10'>
          {/* Account Link */}
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

          {/* Back/Next */}
          <View className='flex-row w-full h-fit items-center justify-center mt-10'>
            <LargeButton css={'shrink w-full mr-2'} text={'Back'} callback={null}/>
            <LargeButton css={'shrink w-full'} text={'Next'} callback={null}/>
          </View>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default SignUp2