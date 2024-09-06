import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import LargeButton from '../../general/buttons/LargeButton';
import Heart from "../../../assets/icons/heart.svg";
import Comment from "../../../assets/icons/comment.svg";

const BottomButtons = ({ userLike, handleLikePress, handleRecipeAddPress, handleCommentPress }) => (
  <View className='flex-row w-full h-20 items-center justify-between px-6'>
    {/* Likes */}
    <TouchableHighlight className='w-12 h-12 rounded-xl'
    activeOpacity={0.9} onPress={handleLikePress}>
      <View className='w-full h-full items-center justify-center bg-buttonBg rounded-xl'>
        <Heart width={38} height={38} stroke={'#85855B'} strokeWidth={2} />
      </View>
    </TouchableHighlight>

    {/* Add Meal */}
    <LargeButton cssIn={'px-4'} text={'Add Meal'} textSize={'text-2xl'} callback={handleRecipeAddPress}/>

    {/* Comments */}
    <TouchableHighlight className='w-12 h-12 rounded-xl'
    activeOpacity={0.9} onPress={handleCommentPress}>
      <View className='w-full h-full items-center justify-center bg-buttonBg rounded-xl'>
        <Comment width={38} height={38} stroke={'#85855B'} strokeWidth={2} />
      </View>
    </TouchableHighlight>
  </View>
)

export default BottomButtons