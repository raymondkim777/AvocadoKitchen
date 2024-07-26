import React from 'react';
import { View, Text } from 'react-native';

const ProcedureSectionEmpty = () => (
  <View className='flex-col w-full h-fit items-center justify-center'>
    <View className='flex-row w-full h-12 items-center'>
      <Text className='font-inconsolata mx-4 text-screenText text-xl'>
        Procedure - None Listed
      </Text>
    </View>
  </View>
)

export default ProcedureSectionEmpty