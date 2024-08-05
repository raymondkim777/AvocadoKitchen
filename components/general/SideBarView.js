import React, { useState, } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import TitleTextComponent from '../text/TitleTextComponent';
import SideBarPage from './SideBarPage';

const SideBarView = ({
  pages, username, 
  updatePage, buttonCSS, textCSS, setScreenIdx
}) => (
  <View className='w-64 h-full'>
    <ScrollView 
    contentContainerStyle={{flexGrow: 1}} 
    className='w-full h-full' 
    showsVerticalScrollIndicator={false}>
      <View className='flex-col w-64 h-full bg-itemBgLight'>
        {/* Logo */}
        <View className='w-full h-20 px-12 items-center justify-end'>
          <View className='shrink w-full h-12'>
            <Image className='w-full h-full' source={require('../../assets/images/LogoText.png')} />
          </View>
        </View>

        {/* Profile */}
        <View className='flex-row w-full h-24 px-4 items-center justify-center mt-2'>
          <View className='w-16 h-16 items-center justify-center border-2 border-itemBgMid rounded-full overflow-hidden bg-buttonBg'>
            <Image className='w-full h-11' source={require('../../assets/images/logo-transparent.png')} />
          </View>
          <View className='flex-row shrink w-full h-8 mx-2 items-center justify-center'>
            <TitleTextComponent size={'text-lg'} css={'h-8 text-itemText'}>
              @
            </TitleTextComponent>
            <TitleTextComponent size={'text-lg'} css={'h-8 text-itemText'}>
              {username}
            </TitleTextComponent>
          </View>
        </View>

        {/* Page Buttons */}
        <View className='grow flex-col w-full h-fit items-center justify-center py-2'>
          {pages.map((item, index) => (
            <SideBarPage 
            text={item} 
            callback={updatePage} 
            index={index}
            buttonCSS={buttonCSS}
            textCSS={textCSS}
             />
          ))}
        </View>

        {/* More Buttons */}
        <View className='flex-col w-full h-28 px-4 items-center justify-center mt-4'>
          <TouchableOpacity className='w-full h-fit items-center justify-center'
          activeOpacity={0.7}>
            <TitleTextComponent translate={true} size={'text-md'} css={'text-itemText'}>
              Privacy Policy
            </TitleTextComponent>
          </TouchableOpacity>
          <TouchableOpacity className='w-full h-fit items-center justify-center'
          activeOpacity={0.7}>
            <TitleTextComponent translate={true} size={'text-md'} css={'text-itemText mt-4'}>
              Terms of Service
            </TitleTextComponent>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  </View>
)

export default SideBarView