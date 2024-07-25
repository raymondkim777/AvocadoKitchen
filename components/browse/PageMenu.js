import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const PageMenu = ({pageButtons, shiftPageIndex}) => (
  <View className='w-full h-8 mt-2 items-center justify-center'>
    <View className='flex-row w-fit h-8 items-center justify-center bg-buttonBg rounded-xl'>
      <TouchableOpacity className={`w-8 h-8 items-center justify-center rounded-xl`}
        activeOpacity={1} onPress={()=>shiftPageIndex(-1)}>
        <Text className={`font-inconsolataBold text-xl text-itemText`}> {'<'} </Text>
      </TouchableOpacity>
      {
        pageButtons
      }
      <TouchableOpacity className={`w-8 h-8 items-center justify-center rounded-xl`}
        activeOpacity={1} onPress={()=>shiftPageIndex(1)}>
        <Text className={`font-inconsolataBold text-xl text-itemText`}> {'>'} </Text>
      </TouchableOpacity>
    </View>
  </View>
)

export default PageMenu