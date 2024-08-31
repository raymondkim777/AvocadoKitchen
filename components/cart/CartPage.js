import React, { useState, useContext, } from 'react';
import { SafeAreaView, View, ScrollView, Image, TouchableOpacity, SectionList, } from 'react-native';
import { SideBarContext } from '../pages/HomeControl';
import TitleTextComponent from '../text/TitleTextComponent';
import ItemTextComponent from '../text/ItemTextComponent';
import ItemLargeTextComponent from '../text/ItemLargeTextComponent';
import SideBarButton from '../general/SideBarButton';
import ExitButton from '../general/ExitButton';
import EditButton from '../general/EditButton';

const ItemDiv = () => (
  <View className='w-full h-2' />
)

const ItemCard = ({item, site}) => {
  let delivery = 'Regular';
  let textColor = 'text-grayText';
  if (item.fastDelivery) {
    textColor = 'text-hyperLink';
    if (site === 'Coupang') {
      delivery = "Rocket";
    } else {
      delivery = "Dawn";
    }
  }

  return(
    <TouchableOpacity className='flex-row w-full h-24'
    activeOpacity={0.9}>
      <Image className='w-20 h-full rounded-md' source={item.image} />
      <View className='shrink w-full h-full ml-2'>
        <View className='w-full h-8 justify-center'>
          <TitleTextComponent translate={true} size={'text-base'} css={textColor}>
            {delivery}
          </TitleTextComponent>
        </View>
        <View className='w-full h-8 justify-center'>
          <TitleTextComponent translate={true} size={'text-lg'} css={'w-full text-itemText'} numberOfLines={1}>
            {item.title}
          </TitleTextComponent>
        </View>
        <View className='flex-row w-full h-8 items-center'>
          <TitleTextComponent size={'text-lg'} css={'w-fit text-itemText'}>
            {item.price}원
          </TitleTextComponent>
          <TitleTextComponent size={'text-lg'} css={'ml-4 w-fit text-grayText'}>
            {item.quantity}개
          </TitleTextComponent>
        </View>
      </View>
      <View className='w-5 h-full items-center justify-center'>
        <EditButton />
      </View>
    </TouchableOpacity>
  )
}

const CartPage = ({}) => {
  const {wideScreen, setShowSideBar, updatePage} = useContext(SideBarContext);

  const items = [
    {
      site: "Coupang",
      data: [
        {
          title: '아삭 복숭아 1.2kg [품종:오도로끼-(딱복)]',
          fastDelivery: true,
          price: '31800',
          quantity: 2,
          image: require('../../assets/images/info-example/tofu.jpg'),
        },
        {
          title: '아삭 복숭아 1.2kg [품종:오도로끼-(딱복)]',
          fastDelivery: true,
          price: '31800',
          quantity: 2,
          image: require('../../assets/images/info-example/tofu.jpg'),
        },
        {
          title: '아삭 복숭아 1.2kg [품종:오도로끼-(딱복)]',
          fastDelivery: false,
          price: '31800',
          quantity: 2,
          image: require('../../assets/images/info-example/tofu.jpg'),
        },
        {
          title: '아삭 복숭아 1.2kg [품종:오도로끼-(딱복)]',
          fastDelivery: false,
          price: '31800',
          quantity: 2,
          image: require('../../assets/images/info-example/tofu.jpg'),
        },
      ],
    }, 
    {
      site: "Market Curly",
      data: [
        {
          title: '아삭 복숭아 1.2kg [품종:오도로끼-(딱복)]',
          fastDelivery: true,
          price: '31800',
          quantity: 2,
          image: require('../../assets/images/info-example/tofu.jpg'),
        },
        {
          title: '아삭 복숭아 1.2kg [품종:오도로끼-(딱복)]',
          fastDelivery: true,
          price: '31800',
          quantity: 2,
          image: require('../../assets/images/info-example/tofu.jpg'),
        },
        {
          title: '아삭 복숭아 1.2kg [품종:오도로끼-(딱복)]',
          fastDelivery: false,
          price: '31800',
          quantity: 2,
          image: require('../../assets/images/info-example/tofu.jpg'),
        },
        {
          title: '아삭 복숭아 1.2kg [품종:오도로끼-(딱복)]',
          fastDelivery: false,
          price: '31800',
          quantity: 2,
          image: require('../../assets/images/info-example/tofu.jpg'),
        },
      ],
    }, 
  ]

  return(
    <View className='shrink w-full h-full bg-screenBg'>
      {/* Title */}
      <View className='flex-row w-full h-fit justify-between mt-2'>
        {
          wideScreen ? null : <SideBarButton callback={setShowSideBar} />
        }
        <TitleTextComponent translate={true} size={'text-3xl'} css={'mx-4 text-screenText'}>
          My Cart
        </TitleTextComponent>
        <ExitButton />
      </View>

      {/* */}
      <View className='shrink w-full h-full mt-6'>
        <SectionList
        className='w-full h-full px-2 pr-1 bg-itemBgLight rounded-xl'
        scrollEnabled={true}
        contentContainerStyle={{flexGrow: 1}} 
        sections={items}
        renderItem={({item, index, section: {site}}) => (
          <View className='flex-col w-full h-fit'>
            {/* Cards */}
            <View className='w-full h-fit'>
              <ItemCard item={item} site={site} />
            </View>
          </View>
        )}
        renderSectionHeader={({section: {site}}) => (
          <View className='w-full h-fit pb-2 bg-itemBgLight rounded-xl'>
            <TitleTextComponent translate={true} size={'text-xl'} css={'mx-2 mt-2 text-itemText'}>
              {site}
            </TitleTextComponent>
          </View>
        )}
        ListFooterComponent={<View className='w-full h-2' />}
        ItemSeparatorComponent={ItemDiv}
        />
      </View>

    </View>
  )
}

export default CartPage