import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import Exit from "../../assets/icons/exit.svg";

const ExitButtonLocal = ({ callback, background }) => {

  return(
    <TouchableHighlight className='w-8 h-8 rounded-lg'
    activeOpacity={0.9} onPress={callback}>
      <View className={`w-full h-full ${background} rounded-lg items-center justify-center`}>
        <Exit width={25} height={25} stroke={'#85855B'} strokeWidth={3} />
      </View>
    </TouchableHighlight>
  )
}

export default ExitButtonLocal