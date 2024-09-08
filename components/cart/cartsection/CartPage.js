import React, { useState, useContext, } from 'react';
import { View, Image, SectionList, } from 'react-native';
import { SideBarContext } from '../../pages/control/HomeControl';
import { useFocusEffect } from '@react-navigation/native';
import TitleTextComponent from '../../text/TitleTextComponent';
import SideBarButton from '../../general/sidebar/SideBarButton';
import ExitButton from '../../general/buttons/ExitButton';
import SmallButton from '../../general/buttons/SmallButton';
import EditButton from '../../general/buttons/EditButton';
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
          <TitleTextComponent money={true} size={'text-lg'} css={'w-fit text-itemText'}>
            {item.price * item.quantity}
          </TitleTextComponent>
          <TitleTextComponent size={'text-lg'} css={'w-fit text-itemText'}>
            원
          </TitleTextComponent>
          <TitleTextComponent size={'text-lg'} css={'ml-4 w-fit text-grayText'}>
            {item.quantity}개
          </TitleTextComponent>
        </View>
      </View>
      <View className='w-5 h-full items-end justify-center'>
        <EditButton callback={openEditModal}/>
      </View>
    </View>
  )
}

const SiteSummary = ({data}) => {
  let totalPrice = 0;
  for (let i = 0; i < data.length; i++) {
    totalPrice += data[i].price * data[i].quantity;
  }
  // const textColor = totalPrice <= weeklyBudget ? 'text-greenHighlight' : 'text-redHighlight';

  return(
    <View className='flex-row w-fit h-fit items-center justify-center'>
      <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemText'}>
        Total
      </TitleTextComponent>
      <TitleTextComponent size={'text-xl'} css={'text-itemText'}>
        :
      </TitleTextComponent>
      <TitleTextComponent money={true} size={'text-xl'} css={`ml-2 text-itemText`}>
        {totalPrice}
      </TitleTextComponent>
      <TitleTextComponent size={'text-xl'} css={'text-itemText'}>
        원
      </TitleTextComponent>
    </View>
  )
}

const PageSummary = ({cartItems, weeklyBudget}) => {
  let totalPrice = 0;
  for (let i = 0; i < 2; i++)
    for (let j = 0; j < cartItems[i].data.length; j++)
      totalPrice += cartItems[i].data[j].price * cartItems[i].data[j].quantity;

  const textColor = totalPrice > weeklyBudget ? 'text-redHighlight' : 'text-greenHighlight';

  return(
    <View className='flex-row w-full h-12 items-center justify-center bg-itemBgDark rounded-lg my-2 mr-3'>
      <TitleTextComponent translate={true} size={'text-xl'} css={textColor}>
        Total
      </TitleTextComponent>
      <TitleTextComponent size={'text-xl'} css={textColor}>
        :
      </TitleTextComponent>
      <TitleTextComponent money={true} size={'text-xl'} css={`ml-2 ${textColor}`}>
        {totalPrice}
      </TitleTextComponent>
      <TitleTextComponent size={'text-xl'} css={textColor}>
        원
      </TitleTextComponent>
    </View>
  )
}

const CartPage = () => {
  const { wideScreen, setShowSideBar, contentWidth } = useContext(SideBarContext);

  const [cartItems, setCartItems] = useState([
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
          image: require('../../../assets/images/info-example/tofu.jpg'),
        },
        {
          id: 2, 
          title: '아삭 복숭아 1.2kg [품종:오도로끼-(딱복)]',
          fastDelivery: true,
          price: 15900,
          quantity: 3,
          image: require('../../../assets/images/info-example/tofu.jpg'),
        },
        {
          id: 3, 
          title: '아삭 복숭아 1.2kg [품종:오도로끼-(딱복)]',
          fastDelivery: false,
          price: 15900,
          quantity: 2,
          image: require('../../../assets/images/info-example/tofu.jpg'),
        },
        {
          id: 4, 
          title: '아삭 복숭아 1.2kg [품종:오도로끼-(딱복)]',
          fastDelivery: false,
          price: 15900,
          quantity: 3,
          image: require('../../../assets/images/info-example/tofu.jpg'),
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
          image: require('../../../assets/images/info-example/tofu.jpg'),
        },
        {
          id: 6, 
          title: '아삭 복숭아 1.2kg [품종:오도로끼-(딱복)]',
          fastDelivery: true,
          price: 15900,
          quantity: 2,
          image: require('../../../assets/images/info-example/tofu.jpg'),
        },
        {
          id: 7, 
          title: '아삭 복숭아 1.2kg [품종:오도로끼-(딱복)]',
          fastDelivery: false,
          price: 15900,
          quantity: 2,
          image: require('../../../assets/images/info-example/tofu.jpg'),
        },
        {
          id: 8, 
          title: '아삭 복숭아 1.2kg [품종:오도로끼-(딱복)]',
          fastDelivery: false,
          price: 15900,
          quantity: 3,
          image: require('../../../assets/images/info-example/tofu.jpg'),
        },
      ],
    }, 
  ]);

  const handleResetCart = () => {
    null;
  }

  const handleAddIngredient = () => {
    setShowAddModal(true);
  }
  const [weeklyBudget, setWeeklyBudget] = useState(150000);

  const [resetEnabled, setResetEnabled] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [siteIndex, setSiteIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);

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
          <SmallButton text='Add Ingredient' callback={handleAddIngredient}/>
        </View>
        <View className='w-fit h-fit ml-2'>
          <SmallButton text='Reset Cart' callback={handleResetCart} disabled={!resetEnabled}/>
        </View>
      </View>

      {/* SectionList  
      --> Might have to add key to force re-render when item gets deleted*/}
      <View className='shrink w-full h-full mt-4 px-2 rounded-xl bg-itemBgLight overflow-hidden'>
        <View className='shrink w-full h-full rounded-md overflow-hidden'>
          <SectionList
          className='w-full h-full '
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}} 
          sections={cartItems}
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
          renderSectionHeader={({section: {site, siteIdx, data}}) => (
            <View className='flex-row w-full h-fit pb-2 mt-2 items-center justify-between bg-itemBgLight'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'mx-2 text-itemText'}>
                {site}
              </TitleTextComponent>
              <View className='w-fit h-fit mx-2'>
                <SiteSummary weeklyBudget={weeklyBudget} siteIdx={siteIdx} data={data} />
              </View>
            </View>
          )}
          ItemSeparatorComponent={ItemDiv}
          stickySectionHeadersEnabled={false}
          />
        </View>
        <PageSummary cartItems={cartItems} weeklyBudget={weeklyBudget} />
      </View>

      {/* Modals */}
      <CartAddModal
      showAddModal={showAddModal}
      setShowAddModal={setShowAddModal}
      />

      <CartEditModal 
      item={cartItems[siteIndex].data[itemIndex]}
      siteIndex={siteIndex}
      showEditModal={showEditModal} 
      setShowEditModal={setShowEditModal} 
      />
    </View>
  )
}

export default CartPage