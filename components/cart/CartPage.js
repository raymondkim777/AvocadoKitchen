import React, { useState, useContext, } from 'react';
import { View, Image, SectionList, } from 'react-native';
import { SideBarContext } from '../pages/HomeControl';
import TitleTextComponent from '../text/TitleTextComponent';
import ItemTextComponent from '../text/ItemTextComponent';
import ItemLargeTextComponent from '../text/ItemLargeTextComponent';
import SideBarButton from '../general/SideBarButton';
import ExitButton from '../general/ExitButton';
import SmallButton from '../general/SmallButton';
import EditButton from '../general/EditButton';
import CartAddModal from './CartAddModal';
import CartEditModal from './CartEditModal';

const ItemDiv = () => (
  <View className='w-full h-2' />
)

const ItemCard = ({
  item, index, 
  site, siteIdx, 
  setItemIndex, setSiteIndex,
  setShowEditModal
}) => {
  
  const openEditModal = () => {
    setItemIndex(index);
    setSiteIndex(siteIdx);
    setShowEditModal(true);
  }

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
    <View className='flex-row w-full h-24'>
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
            {item.price * item.quantity}원
          </TitleTextComponent>
          <TitleTextComponent size={'text-lg'} css={'ml-4 w-fit text-grayText'}>
            {item.quantity}개
          </TitleTextComponent>
        </View>
      </View>
      <View className='w-5 h-full items-center justify-center'>
        <EditButton callback={openEditModal}/>
      </View>
    </View>
  )
}

const SiteSummary = ({siteIdx, data}) => {
  let totalPrice = 0;
  for (let i = 0; i < data.length; i++) {
    totalPrice += data[i].price * data[i].quantity;
  }
  return(
    <View className='flex-row w-full h-fit mt-4 justify-end'>
      <View className='flex-row w-fit h-full mr-4'>
        <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemText'}>
          Total
        </TitleTextComponent>
        <TitleTextComponent size={'text-xl'} css={'text-itemText'}>
          :
        </TitleTextComponent>
        <TitleTextComponent size={'text-xl'} css={'ml-2 text-itemText'}>
          {totalPrice}
        </TitleTextComponent>
        <TitleTextComponent size={'text-xl'} css={'text-itemText'}>
          원
        </TitleTextComponent>
      </View>
    </View>
  )
}

const CartPage = ({ viewWidth }) => {
  const {wideScreen, setShowSideBar, updatePage} = useContext(SideBarContext);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [siteIndex, setSiteIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);

  const handleResetCart = () => {
    null;
  }

  const handleAddIngredient = () => {
    setShowAddModal(true);
  }

  const items = [
    {
      site: "Coupang",
      siteIdx: 0, 
      data: [
        {
          id: 1, 
          title: '복숭아',
          fastDelivery: true,
          price: 15900,
          quantity: 2,
          image: require('../../assets/images/info-example/tofu.jpg'),
        },
        {
          id: 2, 
          title: '아삭 복숭아 1.2kg [품종:오도로끼-(딱복)]',
          fastDelivery: true,
          price: 15900,
          quantity: 3,
          image: require('../../assets/images/info-example/tofu.jpg'),
        },
        {
          id: 3, 
          title: '아삭 복숭아 1.2kg [품종:오도로끼-(딱복)]',
          fastDelivery: false,
          price: 15900,
          quantity: 2,
          image: require('../../assets/images/info-example/tofu.jpg'),
        },
        {
          id: 4, 
          title: '아삭 복숭아 1.2kg [품종:오도로끼-(딱복)]',
          fastDelivery: false,
          price: 15900,
          quantity: 3,
          image: require('../../assets/images/info-example/tofu.jpg'),
        },
      ],
    }, 
    {
      site: "Market Curly",
      siteIdx: 1, 
      data: [
        {
          id: 5, 
          title: '아삭 복숭아 1.2kg [품종:오도로끼-(딱복)]',
          fastDelivery: true,
          price: 15900,
          quantity: 2,
          image: require('../../assets/images/info-example/tofu.jpg'),
        },
        {
          id: 6, 
          title: '아삭 복숭아 1.2kg [품종:오도로끼-(딱복)]',
          fastDelivery: true,
          price: 15900,
          quantity: 2,
          image: require('../../assets/images/info-example/tofu.jpg'),
        },
        {
          id: 7, 
          title: '아삭 복숭아 1.2kg [품종:오도로끼-(딱복)]',
          fastDelivery: false,
          price: 15900,
          quantity: 2,
          image: require('../../assets/images/info-example/tofu.jpg'),
        },
        {
          id: 8, 
          title: '아삭 복숭아 1.2kg [품종:오도로끼-(딱복)]',
          fastDelivery: false,
          price: 15900,
          quantity: 3,
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

      <View className='flex-row w-full h-fit items-center mt-6'>
        <View className='w-fit h-fit'>
          <SmallButton text='Reset Cart' callback={handleResetCart}/>
        </View>
        <View className='w-fit h-fit ml-2'>
          <SmallButton text='Add Ingredient' callback={handleAddIngredient}/>
        </View>
      </View>

      {/* SectionList */}
      <View className='shrink w-full h-full mt-4 rounded-xl overflow-hidden'>
        <SectionList
        className='w-full h-full px-2 pr-1 bg-itemBgLight'
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}} 
        sections={items}
        renderItem={({item, index, section: {site, siteIdx}}) => (
          <View className='flex-col w-full h-fit'>
            {/* Cards */}
            <View className='w-full h-fit'>
              <ItemCard 
              item={item} 
              index={index} 
              site={site} 
              siteIdx={siteIdx} 
              setItemIndex={setItemIndex} 
              setSiteIndex={setSiteIndex}
              setShowEditModal={setShowEditModal}/>
            </View>
          </View>
        )}
        renderSectionHeader={({section: {site}}) => (
          <View className='w-full h-fit pb-2 bg-itemBgLight'>
            <TitleTextComponent translate={true} size={'text-xl'} css={'mx-2 mt-2 text-itemText'}>
              {site}
            </TitleTextComponent>
          </View>
        )}
        renderSectionFooter={({section: {siteIdx, data}}) => (
          <SiteSummary siteIdx={siteIdx} data={data} />
        )}
        ListHeaderComponent={
        <View className=''>
          <CartAddModal
          viewWidth={viewWidth}
          showAddModal={showAddModal}
          setShowAddModal={setShowAddModal}
          />
          <CartEditModal 
          item={items[siteIndex].data[itemIndex]}
          siteIndex={siteIndex}
          viewWidth={viewWidth}
          showEditModal={showEditModal} 
          setShowEditModal={setShowEditModal} 
          />
        </View>
        }
        ListFooterComponent={<View className='w-full h-2' />}
        ItemSeparatorComponent={ItemDiv}
        />
      </View>

    </View>
  )
}

export default CartPage