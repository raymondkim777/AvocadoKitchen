import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const PageButton = ({callback, index, buttonColor, buttonText}) => (
  <TouchableOpacity className={`w-8 h-8 items-center justify-center rounded-xl ${buttonColor}`}
    activeOpacity={1} onPress={()=>callback(index)}>
    <Text className={`font-inconsolataBold text-xl ${buttonText}`}>{index + 1}</Text>
  </TouchableOpacity>
)

export default PageButton