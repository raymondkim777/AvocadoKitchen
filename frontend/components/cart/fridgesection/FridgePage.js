import React, { useState, useContext, } from 'react';
import { View, Image, FlatList, } from 'react-native';
import { SideBarContext } from '../../pages/control/HomeControl';
import TitleTextComponent from '../../text/TitleTextComponent';
import SideBarButton from '../../general/sidebar/SideBarButton';
import ExitButton from '../../general/buttons/ExitButton';
import SmallButton from '../../general/buttons/SmallButton';
import Counter from '../../general/misc/Counter';
import ExitButtonLocal from '../../general/buttons/ExitButtonLocal';
import FridgeAddModal from './FridgeAddModal';
import AlertCheck from '../../general/misc/AlertCheck';

const ItemCard = ({ item }) => {
  const handleDeleteItem = () => {
    null;
  }  

  const handleDeletePress = () => {
    setShowDeleteCheck(true);
  }

  const [count, setCount] = useState(item.quantity);
  const [showDeleteCheck, setShowDeleteCheck] = useState(false);

  return(
    <View className='flex-row w-full h-28 bg-itemBgLight'>
      <Image className='w-24 h-full rounded-md' source={item.image} />
      <View className='shrink w-full h-full ml-3 justify-center'>
        <View className='flex-row w-full h-8 items-center'>
          <TitleTextComponent translate={true} size={'text-lg'} css={'shrink w-full text-itemText'} numberOfLines={1}>
            {item.title}
          </TitleTextComponent>
          <ExitButtonLocal callback={handleDeletePress} background={'bg-itemBgLight'} />
        </View>
        <View className='flex-row w-full h-10 mt-3 items-center'>
          <Counter count={count} setCount={setCount} />
        </View>
      </View>

      {/* Delete Check */}
      <AlertCheck
      titleText={'EditDeleteCheckTitle'}
      messageText={'EditDeleteCheckMessage'}
      mainText={'Delete'}
      showModal={showDeleteCheck}
      setShowModal={setShowDeleteCheck}
      handleMainFunction={handleDeleteItem}
      />
    </View>
  )
}

const FridgePage = () => {
  const {wideScreen, setShowSideBar } = useContext(SideBarContext);
  
  const handleAddIngredient = () => {
    setShowAddModal(true);
  }

  const [showAddModal, setShowAddModal] = useState(false);

  const items = [
    {
      title: '아삭 복숭아 1.2kg [품종:오도로끼-(딱복)]',
      quantity: 4,
      image: require('../../../assets/images/info-example/tofu.jpg'),
    },
    {
      title: '아삭 복숭아 1.2kg [품종:오도로끼-(딱복)]',
      quantity: 4,
      image: require('../../../assets/images/info-example/tofu.jpg'),
    },
    {
      title: '아삭 복숭아 1.2kg [품종:오도로끼-(딱복)]',
      quantity: 4,
      image: require('../../../assets/images/info-example/tofu.jpg'),
    },
    {
      title: '아삭 복숭아 1.2kg [품종:오도로끼-(딱복)]',
      quantity: 4,
      image: require('../../../assets/images/info-example/tofu.jpg'),
    },
    {
      title: '아삭 복숭아 1.2kg [품종:오도로끼-(딱복)]',
      quantity: 4,
      image: require('../../../assets/images/info-example/tofu.jpg'),
    },
    {
      title: '아삭 복숭아 1.2kg [품종:오도로끼-(딱복)]',
      quantity: 4,
      image: require('../../../assets/images/info-example/tofu.jpg'),
    },
  ];

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
      
      {/* Add Ingredient */}
      <View className='flex-row w-full h-fit items-center mt-6'>
        <SmallButton text='Add Ingredient' callback={handleAddIngredient}/>
      </View>

      {/* FlatList */}
      <View className='shrink w-full h-full mt-4 rounded-xl overflow-hidden'>
        <FlatList
        className='w-full h-full p-2 bg-itemBgLight'
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        data={items}
        renderItem={({item}) => <ItemCard item={item} />}
        ItemSeparatorComponent={<View className='h-2'/>}
        ListFooterComponent={<View className='w-full h-4'/>}
        />
      </View>

      {/* Modals */}
      <FridgeAddModal
      showAddModal={showAddModal}
      setShowAddModal={setShowAddModal}
      />
      
    </View>
  )
}

export default FridgePage