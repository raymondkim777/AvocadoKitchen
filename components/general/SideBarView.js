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
        <View className='flex-row w-full h-fit items-center justify-center mt-6 px-4'>
          <View className='flex-col w-fit h-fit items-center'>
            <View className='w-16 h-16 items-center justify-center border-2 border-itemBgMid rounded-full overflow-hidden bg-buttonBg'>
              <Image className='w-full h-11' source={require('../../assets/images/logo-transparent.png')} />
            </View>
          </View>

          <View className='flex-col shrink w-full ml-2 justify-center'>
            <View className='grow flex-col w-full items-center justify-center '>
              <View className='flex-col w-full h-8 justify-center'>
                <TitleTextComponent size={'text-xl'} sizeDiff={-1} css={'h-8 text-itemText'}>
                  @{username}
                </TitleTextComponent>
              </View>
            </View>
          </View>
        </View>

        {/* Page Buttons */}
        <View className='grow flex-col w-full h-fit items-center justify-center py-2 mt-4'>
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