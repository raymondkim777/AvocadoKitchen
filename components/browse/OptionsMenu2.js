import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const OptionsMenu2 = ({}) => (
  <View className={`w-full h-8 my-2`}>
    {/* More Search Options */}
    <View className='flex-row w-full h-8 items-center justify-center px-3 bg-buttonBg rounded-lg'>
      <Text className='font-inconsolata text-base'>
        Filter By:
      </Text>
      <View className='flex-row grow w-fit h-fit items-center justify-center'>
        <TouchableOpacity className={`w-24 h-6 items-center justify-center rounded-full bg-itemText`}
          activeOpacity={1}>
          <Text className={`font-inconsolata text-base text-itemBgLight`}>Relevance</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  </View>
)

export default OptionsMenu2