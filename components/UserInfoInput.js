import React, { useState } from 'react';
import { Text, View, Image,  TextInput, TouchableOpacity } from 'react-native';

const UserInfoInput = ({onNext}) => {
    return(
        <View>
            <View className='w-full flex flex-col justify-end items-end h-[8%]'>
                <TouchableOpacity onPress={onNext} className='w-5 h-5 bg-itemBgDark flex items-center justify-center rounded-full mb-2'>
                    <Text style={{ fontFamily: 'inconsolata' }} className='text-sm text-itemText'>X</Text>
                </TouchableOpacity>
            </View>
            <View className='w-full  h-[92%] bg-screenBg'>
                <Text style={{ fontFamily: 'inconsolata' }} className='text-base text-screenText'>Dietary Restrictions</Text>
            </View>
           
        </View>
    );
}

export default UserInfoInput;