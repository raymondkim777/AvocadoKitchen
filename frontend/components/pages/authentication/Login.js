import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler, SafeAreaView, View, Image, TouchableHighlight } from 'react-native';
import ItemTextInputComponent from '../../text/ItemTextInputComponent';
import TitleTextComponent from '../../text/TitleTextComponent';
import LargeButton from '../../general/buttons/LargeButton';

const Login = ({ navigation }) => {

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => subscription.remove();
    })
  ); 

  const handleGoogleLogin = ({}) => {
    navigation.navigate('HomeControl')
  }
  
  const handleLogin = ({}) => {
    navigation.navigate('HomeControl')
  }

  const handleSignUp = ({}) => {
    navigation.navigate('SignUp')
  }

  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  return (
    <SafeAreaView id='screen' className='w-full h-full justify-center items-center bg-screenBg'>
      <View id='content' className='shrink w-full max-w-[560px] h-full items-center justify-center p-8'>
        {/* Logo */}
        <View className='w-full h-fit flex items-center justify-end -mt-12'>
          <Image className='w-[160px] h-[160px]' source={require('../../../assets/images/Logo.png')} />
        </View>

        {/* Email/Password Input */}
        <View className='w-full h-fit mt-6'>
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

          {/* Password Input */}
          <ItemTextInputComponent
          translate={true}
          size={'text-xl'}
          css={'shrink w-full h-12 text-itemText pb-1 pl-4 mt-2 bg-itemBgLight rounded-xl'}
          placeholder={'Enter your password'}
          placeholderTextColor={'#85855B'}
          value={passwordInput}
          onChangeText={setPasswordInput}
          underlineColorAndroid={'transparent'}
          secureTextEntry={true}
          />
        </View>

        {/* Buttons */}
        <View className='flex-col w-full h-fit mt-16'>
          {/* Continue with Google */}
          <View className='w-full h-fit items-center justify-center'>
            <TouchableHighlight className='shrink w-full h-12 rounded-xl'
            activeOpacity={0.9} onPress={handleGoogleLogin}>
              <View className='flex-row w-full h-full items-center justify-center bg-buttonBg rounded-xl'>
                <Image className='w-[40px] h-[40px] mr-2' source={require('../../../assets/images/google.png')} />
                <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemText text-center'}>
                  Continue with Google
                </TitleTextComponent>
              </View>
            </TouchableHighlight>
          </View>

          {/* Login/SignUp */}
          <View className='flex-row w-full h-fit items-center justify-center mt-2'>
            <LargeButton cssOut={'shrink w-full mr-2'} text={'Login'} callback={handleLogin} />
            <LargeButton cssOut={'shrink w-full'} text={'Sign Up'} callback={handleSignUp} />
          </View>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default Login