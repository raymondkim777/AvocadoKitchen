import React, { useState, useContext, } from 'react';
import { SafeAreaView, View, ScrollView, } from 'react-native';
import { SideBarContext } from '../pages/HomeControl';
import TitleTextComponent from '../text/TitleTextComponent';
import ItemTextComponent from '../text/ItemTextComponent';
import ItemLargeTextComponent from '../text/ItemLargeTextComponent';
import SideBarButton from '../general/SideBarButton';
import ExitButton from '../general/ExitButton';

const FridgePage = ({}) => {
  const {wideScreen, setShowSideBar, updatePage} = useContext(SideBarContext);

  return(
    <View className='shrink w-full h-full bg-screenBg'>
      {/* Title */}
      <View className='flex-row w-full h-fit justify-between mt-2'>
        {
          wideScreen ? null : <SideBarButton callback={setShowSideBar} />
        }
        <TitleTextComponent translate={true} size={'text-3xl'} css={'mx-4 text-screenText'}>
          My Fridge
        </TitleTextComponent>
        <ExitButton />
      </View>

      {/* */}
      <View className='shrink w-full h-full bg-red-100 mt-6'>

      </View>
      
    </View>
  )
}

export default FridgePage