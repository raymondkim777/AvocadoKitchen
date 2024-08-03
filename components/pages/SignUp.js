import React, { useState } from 'react';
import { Text, View, Image,  TextInput, TouchableOpacity } from 'react-native';
import UserInfoInput from './UserInfoInput'
import Modal from 'react-native-modal';

const SignUp = ({ navigation, onClose}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checkpassword, setCheckPassword] = useState('');
    const [isNext, setNext] = useState(false);
    const handleNext = () => {
        setNext(!isNext);
      };
    return (
        <View>
            <View className='w-full flex flex-col justify-end items-end h-[8%]'>
                <TouchableOpacity onPress={onClose} className='w-5 h-5 bg-itemBgDark flex items-center justify-center rounded-full mb-2'>
                    <Text style={{ fontFamily: 'inconsolata' }} className='text-sm text-itemText'>X</Text>
                </TouchableOpacity>
            </View>
            <View className='w-full  h-[92%] bg-screenBg'>
                <View className='w-full h-1/3 flex items-center justify-end'>
                    <Image className='w-[150px] h-[150px]' source={require('../../assets/images/Logo.png')} />
                </View>

                {/* Email/Password */}
                <View className='w-full h-1/3 flex-col justify-center items-center'>
                    <TextInput style={{ fontFamily: 'inconsolata' }} className='w-3/4 h-8 bg-itemBgLight rounded-md text-itemText text-base pl-3 pb-1 mb-3'
                    placeholder="Enter your email" 
                    value={username} 
                    onChangeText={setUsername} 
                    />
                    <TextInput style={{ fontFamily: 'inconsolata' }} className='w-3/4 h-8 bg-itemBgLight rounded-md text-itemText text-base pl-3 pb-1 mb-3'
                    placeholder="Password" 
                    value={password} 
                    onChangeText={setPassword} 
                    secureTextEntry 
                    />
                    <TextInput style={{ fontFamily: 'inconsolata' }} className='w-3/4 h-8 bg-itemBgLight rounded-md text-itemText text-base pl-3 pb-1'
                    placeholder="Password Check" 
                    value={checkpassword} 
                    onChangeText={setCheckPassword} 
                    secureTextEntry 
                    />
                </View>

                {/* Buttons */}
                <View className='w-full h-1/3 flex-col items-center'>
                    {/*cupang */}
                    <TouchableOpacity className='w-3/4 h-10 bg-itemBgDark flex-row items-center justify-center rounded-md py-2 mb-3'>
                        <Image className='w-[20px] h-[20px] mr-5'/>
                        <Text style={{ fontFamily: 'inconsolata' }} className='text-base text-itemText'>Cupang Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='w-3/4 h-10 bg-itemBgDark flex-row items-center justify-center rounded-md py-2'>
                        <Image className='w-[20px] h-[20px] mr-5'/>
                        <Text style={{ fontFamily: 'inconsolata' }} className='text-base text-itemText'>Market Kurly Account</Text>
                    </TouchableOpacity>
                    
                    <View className='w-3/4 h-1/2 flex-row mt-5 items-start justify-center '>
                    <TouchableOpacity className='w-5/12 bg-itemBgDark flex items-center justify-center rounded-md py-1'>
                        <Text style={{ fontFamily: 'inconsolata' }} onPress={onClose} className='text-base text-itemText font-inconsolata'>Back</Text>
                    </TouchableOpacity>
                    <View className='w-2/12'></View>
                    <TouchableOpacity className='w-5/12 bg-itemBgDark flex items-center justify-center rounded-md py-1'>
                        <Text style={{ fontFamily: 'inconsolata' }} onPress={handleNext} className='text-base text-itemText'>Next</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                <Modal isVisible={isNext} onRequestClose={handleNext} animationType="slide">
                    <UserInfoInput onNext={handleNext}></UserInfoInput>
                </Modal>
               
            </View>
        </View>
    )
}

export default SignUp;