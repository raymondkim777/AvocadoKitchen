import React, { useState, useContext, } from 'react';
import { SideBarContext } from '../pages/HomeControl';
import { View, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Image, } from 'react-native';
import Modal from 'react-native-modal';
import TitleTextComponent from '../text/TitleTextComponent';
import ItemTextComponent from '../text/ItemTextComponent';
import ItemLargeTextComponent from '../text/ItemLargeTextComponent';
import ItemTextInputComponent from '../text/ItemTextInputComponent';
import Counter from '../general/Counter';
import SmallButton from '../general/SmallButton';
import ExitButtonLocal from '../general/ExitButtonLocal';
import QuickSearchResults from '../addfunction/QuickSearchResults';
import QuickSearchResultsEmpty from '../addfunction/QuickSearchResultsEmpty';
import Search from "../../assets/icons/search.svg";

const CartEditModal = ({ 
  item, siteIndex, viewWidth, 
  showEditModal, setShowEditModal, 
}) => {
  const { wideScreen, } = useContext(SideBarContext);

  const resetCount = () => {
    setCount(item.quantity);
  }

  const handleUpdateEdit = () => {
    // set item.quantity to count
  }
  
  const handleCloseModal = () => {
    handleUpdateEdit();
    setShowEditModal(false);
    handleCloseBottomCard(false);
  }
  const handleCloseBottomCard = () => {
    setShowBottomCard(false);
    setShowResults(false);
  }

  const handleChangeLink = () => {
    setShowBottomCard(true);
  }

  const handleDeleteItem = () => {
    null;
  }

  const [autoCount, setAutoCount] = useState(3);
  const [count, setCount] = useState(0);

  const [showBottomCard, setShowBottomCard] = useState(false);
  const [ingSearchQuery, setIngSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [foundResults, setFoundResults] = useState(true);

  const sites = ['Coupang', 'Market Curly'];
  const site = sites[siteIndex];
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
    <Modal 
    style={{width: viewWidth}}
    className={`h-full ${wideScreen ? 'ml-64' : 'm-0'} items-center justify-center`}
    isVisible={showEditModal}
    onModalWillShow={resetCount}
    onModalHide={handleUpdateEdit}
    onBackButtonPress={handleCloseModal}
    customBackdrop={
      <TouchableWithoutFeedback className='h-full' onPress={handleCloseModal}>
        <View style={{ width: viewWidth }} className={`h-full ${wideScreen ? 'ml-64' : 'm-0'} bg-black`} />
      </TouchableWithoutFeedback>
    }
    >
      <View className='w-fit h-fit items-center justify-center space-y-4'>
        {/* Top Card */}
        <View className='shrink w-[340px] h-52 p-2 pt-1 bg-itemBgLight rounded-xl'>
          {/* Title Row */}
          <View className='flex-row w-full h-8 justify-center'>
            <View className='shrink w-full h-full justify-center'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'shrink w-full text-itemText'} numberOfLines={1}>
                {item.title}
              </TitleTextComponent>
            </View>
            <View className='w-fit h-full mx-2 items-center justify-center'>
              <TouchableHighlight className='w-fit h-6 rounded-full'
              activeOpacity={0.9} onPress={handleChangeLink}>
                <View className='w-fit h-full px-2 items-center justify-center bg-itemBgDark rounded-full'>
                  <TitleTextComponent translate={true} size={'text-base'} css={'text-itemText'}>
                    Change Item
                  </TitleTextComponent>
                </View>
              </TouchableHighlight>
            </View>

            <View className='w-fit h-fit -mr-1'>
              <ExitButtonLocal callback={handleCloseModal} background={'bg-itemBgLight'} />
            </View>
          </View>

          {/* Content */}
          <View className='flex-row shrink w-full h-full'>
            <View className='w-28 h-full items-center'>
              <View className='w-fit px-2 h-6 items-center justify-center bg-itemBgDark rounded-full'>
                <TitleTextComponent translate={true} size={'text-base'} css={textColor}>
                  {delivery}
                </TitleTextComponent>
              </View>
              <Image className='shrink w-28 mt-1 h-full rounded-md' source={item.image} />
            </View>

            {/* Right Side */}
            <View className='shrink w-full h-full'>
              <View className='w-full h-12 mt-4 items-center justify-center'>
                <TitleTextComponent size={'text-2xl'} css={'w-fit text-itemText'} numberOfLines={1}>
                  {item.price * count}원
                </TitleTextComponent>
              </View>

              <View className='shrink w-full h-full mb-3 items-center justify-center'>
                <Counter count={count} setCount={setCount} />
              </View>

              <View className='flex-row w-full h-fit items-center justify-between'>
                <View className='flex-row shrink w-full h-full ml-2 items-center justify-center'>
                  <TitleTextComponent translate={true} size={'text-lg'} css={'w-fit text-greenHighlight'}>
                    Auto
                  </TitleTextComponent>
                  <TitleTextComponent size={'text-lg'} css={'w-fit mr-2 text-greenHighlight'}>
                    : 
                  </TitleTextComponent>
                  <TitleTextComponent size={'text-lg'} css={'w-fit text-greenHighlight'}>
                    {autoCount}개
                  </TitleTextComponent>
                </View>
                <View className='w-fit h-6 items-center justify-end'>
                  <TouchableHighlight className='w-fit h-6 rounded-full '
                  activeOpacity={0.9} onPress={handleDeleteItem}>
                    <View className='w-fit h-full px-2 items-center justify-center bg-itemBgDark rounded-full'>
                      <TitleTextComponent translate={true} size={'text-base'} css={'h-6 text-center text-redHighlight'}>
                        Delete
                      </TitleTextComponent>
                    </View>
                  </TouchableHighlight>
                </View>
              </View>


            </View>
          </View>
        </View>

        {/* Bottom Card */}
        {
          showBottomCard ? 
          <View className='shrink w-[340px] h-fit p-2 bg-itemBgLight rounded-xl'>
            <View className='flex-col w-full h-fit mb-2'>
              {/* Quick Search */}
              <View className='flex-row w-full h-6 items-center justify-between'>
                <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemText mx-4'}>
                  Quick Search
                </TitleTextComponent>
                <View className='w-fit h-fit -mr-1'>
                  <ExitButtonLocal callback={handleCloseBottomCard} background={'bg-itemBgLight'} />
                </View>
              </View>
              <View className='flex-row items-center justify-center shrink w-full h-fit pr-1 mt-2 bg-itemBgDark rounded-lg'>
                <ItemTextInputComponent
                translate={true}
                size={'text-xl'}
                css={'shrink w-full h-10 text-itemText pb-1 pl-3'}
                placeholder="ex. Canned Tuna" 
                placeholderTextColor={'#85855B'}
                value={ingSearchQuery} 
                onChangeText={setIngSearchQuery} 
                underlineColorAndroid={'transparent'}
                />
                <TouchableHighlight className='w-8 h-8 rounded-lg'
                  activeOpacity={0.9} onPress={()=>setShowResults(true)}>
                    <View className='w-full h-full items-center justify-center bg-itemBgDark rounded-lg'>
                      <Search width={25} height={25} stroke={'#85855B'} strokeWidth={3} />
                    </View>
                </TouchableHighlight>
              </View>
            </View>

            {/* Results */}
            {
              showResults
              ? (
                foundResults 
                ? <QuickSearchResults background={'bg-itemBgDark'} />
                : <QuickSearchResultsEmpty />
                )
              : null
            }
          </View>
          : null
        }
      </View>
    </Modal>
  )
}


export default CartEditModal

