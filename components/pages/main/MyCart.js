import React, { useState, useContext,  } from 'react';
import { SideBarContext } from '../control/HomeControl';
import { useFocusEffect } from '@react-navigation/native';
import { BackHandler, SafeAreaView, View, TouchableHighlight, Dimensions } from 'react-native';
import TitleTextComponent from '../../text/TitleTextComponent';
import CartPage from '../../cart/cartsection/CartPage';
import FridgePage from '../../cart/fridgesection/FridgePage';

const MyCart = ({ navigation }) => {
  const { updatePage } = useContext(SideBarContext);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        updatePage(0);
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => subscription.remove();
    })
  ); 

  const [curPageIndex, setCurPageIndex] = useState(0);
  const [tabButtonCSS, setTabButtonCSS] = useState(['bg-itemText', 'bg-itemBgLight']);
  const [tabTextCSS, setTabTextCSS] = useState(['text-itemBgLight', 'text-itemText']);
  const updateTab = (index) => {
    setCurPageIndex(index);

    const new_button = new Array(2).fill('bg-itemBgLight');
    new_button[index] = 'bg-itemText';
    setTabButtonCSS(new_button);

    const new_text = new Array(2).fill('text-itemText');
    new_text[index] = 'text-itemBgLight';
    setTabTextCSS(new_text);
  }

  return(
    <SafeAreaView id='screen' className='w-full h-full flex-row justify-center items-center'>
      {/* Content */}
      <View className='shrink w-full h-full p-4 bg-screenBg'>
        {
          curPageIndex == 0 
          ? <CartPage /> 
          : <FridgePage />
        }

        {/* Tab Navigate */}
        <View className='flex-row w-full h-16 mt-4 bg-itemBgLight rounded-xl'>
          <TouchableHighlight className={`shrink w-full h-full rounded-xl`}
          activeOpacity={0.9} onPress={()=>updateTab(0)}>
            <View className={`w-full h-full items-center justify-center ${tabButtonCSS[0]} rounded-xl`}>
              <TitleTextComponent translate={true} size={'text-xl'} css={tabTextCSS[0]}>
                My Cart
              </TitleTextComponent>
            </View>
          </TouchableHighlight>
          <TouchableHighlight className={`shrink w-full h-full rounded-xl`}
          activeOpacity={0.9} onPress={()=>updateTab(1)}>
            <View className={`w-full h-full items-center justify-center ${tabButtonCSS[1]} rounded-xl`}>
              <TitleTextComponent translate={true} size={'text-xl'} css={tabTextCSS[1]}>
                My Fridge
              </TitleTextComponent>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MyCart