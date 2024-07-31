import React, { useState } from 'react';
import { View, Image } from 'react-native';

const AccountImage = ({image}) => (
  <View className='w-24 h-24 items-center justify-center border-4 border-itemBgMid rounded-full overflow-hidden bg-buttonBg'>
    <Image className='w-full h-16' source={image} />
  </View>
)

export default AccountImage