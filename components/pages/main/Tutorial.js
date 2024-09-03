import React, { useContext, } from 'react';
import { SideBarContext } from './HomeControl';
import { View, SafeAreaView, TouchableHighlight, ScrollView } from 'react-native';
import SideBarButton from '../../general/sidebar/SideBarButton';
import ExitButton from '../../general/buttons/ExitButton';
import TitleTextComponent from '../../text/TitleTextComponent';

const Tutorial= () =>{
  const { wideScreen, setShowSideBar } = useContext(SideBarContext);
  const handleTest = () => {
    null;
  }

  return(
    <SafeAreaView id='screen' className='relative w-full h-full justify-center items-center bg-screenBg'>
      <ScrollView className='grow w-full h-fit'>
        <View id='content' className='grow w-full h-fit p-4'>
          {/* Title */}
          <View className='flex-row w-full h-fit justify-between mt-2'>
            {
              wideScreen ? null : <SideBarButton callback={setShowSideBar} />
            }
            <TitleTextComponent translate={true} size={'text-3xl'} css={'mx-4 text-screenText'}>
              Tutorial
            </TitleTextComponent>
            <ExitButton />
          </View>

          {/* Frequently Asked Questions */}
          <View className='w-full h-fit mt-6'>
            <TouchableHighlight activeOpacity={0.9} onPress={handleTest}>
              <View className='flex-row w-full h-14 items-center justify-start bg-screenBg'>
                <TitleTextComponent translate={true} size={'text-3xl'} css={'mx-4 text-screenText'}>
                  Edit Diet Settings
                </TitleTextComponent>
                <View className='w-8 h-8 bg-buttonBg rounded-lg'></View>
              </View>
            </TouchableHighlight>
            
            <View className='w-full h-fit bg-red-100'>

            </View>

          </View>

          <View className='w-full h-fit'>
            <TouchableHighlight activeOpacity={0.9} onPress={handleTest}>
              <View className='flex-row w-full h-14 items-center justify-start bg-screenBg'>
                <TitleTextComponent translate={true} size={'text-3xl'} css={'mx-4 text-screenText'}>
                  Edit Diet Settings
                </TitleTextComponent>
                <View className='w-8 h-8 bg-buttonBg rounded-lg'></View>
              </View>
            </TouchableHighlight>
            
            <View className='w-full h-fit bg-red-100'>

            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Tutorial