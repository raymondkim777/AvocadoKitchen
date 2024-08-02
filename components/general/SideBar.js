import React, { useState, } from 'react';
import { View, Image, TouchableOpacity, } from 'react-native';
import TitleTextComponent from '../text/TitleTextComponent';
import SideBarPage from './SideBarPage';

const SideBar = ({ username }) => {
  const pages = [
    'Home', 
    'Recipe Search', 
    'Add a Meal', 
    'Info', 
    'Profile', 
    'Tutorial',
  ];
  const [pageIndex, setPageIndex] = useState(0);
  const [buttonCSS, setButtonCSS] = useState(new Array(pages.length).fill('bg-itemBgLight'));
  const [textCSS, setTextCSS] = useState(new Array(pages.length).fill('text-itemText'));
  const updatePage = (index) => {
    setPageIndex(index);
    const new_button = new Array(pages.length).fill('bg-itemBgLight');
    new_button[index] = 'bg-itemText';
    setButtonCSS(new_button);

    const new_text = new Array(pages.length).fill('text-itemText');
    new_text[index] = 'text-itemBgLight';
    setTextCSS(new_text);
  }

  return (
    <View className='flex-col w-[28vw] h-full bg-itemBgLight'>
      {/* Logo */}
      <View className='w-full h-20 px-7 items-center justify-end'>
        <View className='shrink w-full h-12 mx-8'>
          <Image className='w-full h-full' source={require('../../assets/images/LogoText.png')} />
        </View>
      </View>

      {/* Profile */}
      <View className='flex-row w-full h-24 px-4 items-center justify-center mt-2'>
        <View className='w-16 h-16 items-center justify-center border-2 border-itemBgMid rounded-full overflow-hidden bg-buttonBg'>
          <Image className='w-full h-11' source={require('../../assets/images/logo-transparent.png')} />
        </View>
        <View className='flex-row shrink w-full h-8 ml-2 items-center'>
          <TitleTextComponent size={'text-lg'} css={'h-8 text-itemText'}>
            @
          </TitleTextComponent>
          <TitleTextComponent size={'text-lg'} css={'h-8 text-itemText'}>
            {username}
          </TitleTextComponent>
        </View>
      </View>

      {/* Page Buttons */}
      <View className='grow flex-col w-full h-fit items-center justify-center'>
        {pages.map((item, index) => (
          <SideBarPage 
          text={item} 
          callback={updatePage} 
          index={index}
          buttonCSS={buttonCSS}
          textCSS={textCSS} />
        ))}
      </View>

      {/* More Buttons */}
      <View className='flex-col w-full h-28 px-4 items-center justify-center mt-4'>
        <TouchableOpacity className='w-full h-fit items-center justify-center'>
          <TitleTextComponent translate={true} size={'text-md'} css={'text-itemText'}>
            Privacy Policy
          </TitleTextComponent>
          <TitleTextComponent translate={true} size={'text-md'} css={'text-itemText mt-4'}>
            Terms of Service
          </TitleTextComponent>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default SideBar