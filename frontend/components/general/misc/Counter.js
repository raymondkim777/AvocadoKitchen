import React, { useState, useContext, } from 'react';
import { View, Text, TouchableHighlight, } from 'react-native';
import Minus from '../../../assets/icons/minus.svg';
import Plus from '../../../assets/icons/plus.svg';

const Counter = ({ count, setCount, disabled = false, background='bg-itemBgDark', minCount = 1, maxCount = 99 }) => {
  const [countDownDisable, setCountDownDisable] = useState(disabled || count <= minCount);
  const [countUpDisable, setCountUpDisable] = useState(disabled || count >= maxCount);

  const countUp = () => {
    if (countDownDisable)
      setCountDownDisable(false);
    if (count < maxCount)
      setCount(count + 1);
    if (count >= maxCount - 1 && !countUpDisable)
      setCountUpDisable(true);
  }
  const countDown = () => {
    if (countUpDisable)
      setCountUpDisable(false);
    if (count > minCount) 
      setCount(count - 1);
    if (count <= minCount + 1 && !countDownDisable)
      setCountDownDisable(true);
  }

  return(
    <View className={`flex-row w-28 h-10 px-1 items-center justify-between ${background} rounded-full`}>
      {/* Minus */}
      <TouchableHighlight className='w-8 h-8 rounded-full'
      activeOpacity={0.9} onPress={countDown} disabled={countDownDisable}>
        <View className={`w-full h-full items-center justify-center rounded-full ${background}`}>
          <Minus width={20} height={20} stroke={countDownDisable ? '#ACACAC' : '#85855B'} strokeWidth={3} />
        </View>
      </TouchableHighlight>

      {/* Count */}
      <View className='w-fit h-8 items-center justify-center'>
        <Text className='w-fit h-8 text-2xl text-itemText'>{count}</Text>
      </View>

      {/* Plus */}
      <TouchableHighlight className='w-8 h-8 rounded-full'
      activeOpacity={0.9} onPress={countUp} disabled={countUpDisable}>
        <View className={`w-full h-full items-center justify-center rounded-full ${background}`}>
          <Plus width={20} height={20} stroke={countUpDisable ? '#ACACAC' : '#85855B'} strokeWidth={3} />
        </View>
      </TouchableHighlight>
    </View>
  )
}

export default Counter