import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import List from "../../assets/icons/list.svg";

const OptionsButton = ({callback, showOptions}) => (
  <TouchableHighlight className='w-8 h-8 ml-3 rounded-lg'
  activeOpacity={0.9} onPress={()=>callback(!showOptions)}>
    <View className='w-full h-full items-center justify-center rounded-lg bg-buttonBg'>
      <List width={25} height={25} stroke={'#85855B'} strokeWidth={3} />
    </View>
  </TouchableHighlight>
)

export default OptionsButton