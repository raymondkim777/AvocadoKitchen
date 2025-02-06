import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

const PageButton = ({callback, index, buttonColor, buttonText}) => (
  <TouchableHighlight className={`w-8 h-8 rounded-xl`}
  activeOpacity={0.9} onPress={()=>callback(index)}>
    <View className={`w-full h-full items-center justify-center rounded-xl ${buttonColor}`}>
      <Text className={`font-inconsolataBold text-xl ${buttonText}`}>{index + 1}</Text>
    </View>
  </TouchableHighlight>
)

export default PageButton