import React, { useState } from 'react';
import { Text, View, Image,  TextInput, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import SignUp from './Signup';

const Login = () => {
    const [username, setUsername] = useState('');
    const [isSignup, setSignup] = useState(false);
    const [password, setPassword] = useState('');
    /*
    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);
      };
    */

    const handleSignup = () => {
    setSignup(!isSignup);
  };
  return (
    <View className='w-full h-full bg-screenBg ' >
      {/* Logo */}
      <View className='w-full h-1/3 flex items-center justify-end'>
          <Image className='w-[150px] h-[150px]' source={require('../assets/images/Logo.png')} />
      </View>

      {/* Email/Password */}
      <View className='w-full h-1/3 flex-col justify-center items-center'>
        <TextInput style={{ fontFamily: 'inconsolata' }} className='w-3/4 h-12 bg-itemBgLight rounded-md text-itemText text-xl pl-3 pb-1 mb-3'
          placeholder="Enter your email" 
          value={username} 
          onChangeText={setUsername} 
        />
        <TextInput style={{ fontFamily: 'inconsolata' }} className='w-3/4 h-12 bg-itemBgLight rounded-md text-itemText text-xl pl-3 pb-1'
          placeholder="Enter your password" 
          value={password} 
          onChangeText={setPassword} 
          secureTextEntry 
        />
      </View>

      {/* Buttons */}
      <View className='w-full h-1/3 flex-col items-center'>
        {/* Continue w/ Google */}
        <TouchableOpacity className='w-3/4 h-12 bg-itemBgDark flex-row items-center justify-center rounded-md py-2'>
          <Image className='w-[30px] h-[30px] mr-5' source={require('../assets/images/google.png')} />
  
          <Text style={{ fontFamily: 'inconsolata' }} className='text-xl text-itemText'>Continue with Google</Text>
        </TouchableOpacity>
        <Modal isVisible={isSignup} onRequestClose={handleSignup} animationType="slide">

          <SignUp onClose={handleSignup}></SignUp>
        </Modal>
        {/* Login/SignUp */}
        <View className='w-3/4 h-1/2 flex-row mt-5 items-start justify-center '>
          <TouchableOpacity className='w-5/12 bg-itemBgDark flex items-center justify-center rounded-md py-1'>
            <Text style={{ fontFamily: 'inconsolata' }} className='text-xl text-itemText font-inconsolata'>LOGIN</Text>
          </TouchableOpacity>
          <View className='w-2/12'></View>
          <TouchableOpacity onPress={handleSignup} className='w-5/12 bg-itemBgDark flex items-center justify-center rounded-md py-1'>
            <Text style={{ fontFamily: 'inconsolata' }} className='text-xl text-itemText'>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Login;