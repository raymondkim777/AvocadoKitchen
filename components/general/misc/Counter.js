import React, { useState, useContext, } from 'react';
import { View, Text, TouchableHighlight, } from 'react-native';
import Minus from '../../../assets/icons/minus.svg';
import Plus from '../../../assets/icons/plus.svg';

const Counter = ({ count, setCount }) => {
  const [buttonColor, setButtonColor] = useState('#85855B');

  const [countDownDisable, setCountDownDisable] = useState(false);
  const countUp = () => {
    if (countDownDisable) {
      setCountDownDisable(false);
      setButtonColor('#85855B');
    }
    setCount((value) => (value + 1));
  }
  const countDown = () => {
    if (count > 1) {
      setCount((value) => (value - 1));
    } 
    if (count <= 2 && !countDownDisable) {
      setCountDownDisable(true);
      setButtonColor('#ACACAC');
    }
  }

  return(
    <View className='flex-row w-28 h-10 px-1 items-center justify-between bg-itemBgDark rounded-full'>
      {/* Minus */}
      <TouchableHighlight className='w-8 h-8 rounded-full'
      activeOpacity={0.9} onPress={countDown} disabled={countDownDisable}>
        <View className='w-full h-full items-center justify-center rounded-full bg-itemBgDark'>
          <Minus width={20} height={20} stroke={buttonColor} strokeWidth={3} />
        </View>
      </TouchableHighlight>

      {/* Count */}
      <View className='w-fit h-8 items-center justify-center'>
        <Text className='w-fit h-8 text-2xl text-itemText'>{count}</Text>
      </View>

      {/* Plus */}
      <TouchableHighlight className='w-8 h-8 rounded-full'
      activeOpacity={0.9} onPress={countUp}>
        <View className='w-full h-full items-center justify-center rounded-full bg-itemBgDark'>
          <Plus width={20} height={20} stroke={'#85855B'} strokeWidth={3} />
        </View>
      </TouchableHighlight>
    </View>
  )
}

export default Counter