import React from 'react';
import { View, TouchableOpacity, TouchableHighlight } from 'react-native';
import MoreVert from '../../../assets/icons/more_vert.svg';

const EditButton = ({ callback }) => (
  <TouchableHighlight className='w-3 h-10 items-center justify-center rounded-full'
  activeOpacity={0.9} onPress={callback}>
    <View className='w-3 h-10 items-center justify-center bg-itemBgLight rounded-full space-y-1'>
      <MoreVert width={35} height={35} stroke={'#85855B'} strokeWidth={2} />
    </View>
  </TouchableHighlight>
)

export default EditButton