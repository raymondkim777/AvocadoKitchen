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

const CartAddModal = ({ 
  viewWidth, 
  showAddModal, setShowAddModal, 
}) => {
  const { wideScreen, } = useContext(SideBarContext);

  const handleAddUpdate = () => {
    null;
  }
  
  const handleCloseModal = () => {
    setShowAddModal(false);
    setShowResults(false);
  }

  const [searchSiteIndex, setSearchSiteIndex] = useState(0);
  const searchSiteList = ['Both Sites', 'Coupang', 'Curly'];

  const shiftSearchSite = () => {
    setSearchSiteIndex((searchSiteIndex + 1) % searchSiteList.length);
  }

  const [ingSearchQuery, setIngSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [foundResults, setFoundResults] = useState(true);
  const resultColumnNum = wideScreen ? 3 : 2;

  const resultsList = [
    {
      site: 'Coupang', 
      name: "(Quick Result 2)", 
      price: '19140', 
      deliver: '7/28',
      image: require('../../assets/images/ingredient-example/ingredient-1.jpg'),
      empty: false,
    }, 
    {
      site: 'Coupang', 
      name: "(Quick Result 2)", 
      price: '19140', 
      deliver: '7/28',
      image: require('../../assets/images/ingredient-example/ingredient-1.jpg'),
      empty: false,
    },
    {
      site: 'Coupang', 
      name: "(Quick Result 1)", 
      price: '19140', 
      deliver: '7/28',
      image: require('../../assets/images/ingredient-example/ingredient-1.jpg'),
      empty: false,
    },
    {
      site: 'Coupang', 
      name: "(Quick Result 2)", 
      price: '19140', 
      deliver: '7/28',
      image: require('../../assets/images/ingredient-example/ingredient-1.jpg'),
      empty: false,
    },
    {
      site: 'Coupang', 
      name: "(Quick Result 2)", 
      price: '19140', 
      deliver: '7/28',
      image: require('../../assets/images/ingredient-example/ingredient-1.jpg'),
      empty: false,
    },
  ];

  return(
    <Modal 
    style={{width: viewWidth}}
    className={`h-full ${wideScreen ? 'ml-64' : 'm-0'} p-4 items-center justify-center`}
    isVisible={showAddModal}
    onModalHide={handleAddUpdate}
    onBackButtonPress={handleCloseModal}
    customBackdrop={
      <TouchableWithoutFeedback className='h-full' onPress={handleCloseModal}>
        <View style={{ width: viewWidth }} className={`h-full ${wideScreen ? 'ml-64' : 'm-0'} bg-black`} />
      </TouchableWithoutFeedback>
    }
    >
      <View className='w-full h-fit p-2 bg-itemBgLight rounded-xl'>
        <View className='flex-col w-full h-fit'>
          {/* Quick Search */}
          <View className='flex-row w-full h-6 items-center justify-between'>
            <View className='flex-row w-fit h-fit items-center'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemText mx-4'}>
                Quick Search
              </TitleTextComponent>
              <TouchableHighlight className='w-20 h-7 rounded-full '
              activeOpacity={0.9} onPress={shiftSearchSite}>
                <View className='w-full h-full px-2 items-center justify-center bg-itemBgDark rounded-full border-2 border-itemText'>
                  <TitleTextComponent translate={true} size={'text-base'} css={'h-6 text-center text-itemText'}>
                    {searchSiteList[searchSiteIndex]}
                  </TitleTextComponent>
                </View>
              </TouchableHighlight>
            </View>
            <View className='w-fit h-fit -mr-1'>
              <ExitButtonLocal callback={handleCloseModal} background={'bg-itemBgLight'} />
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
            ? <View className='w-full h-fit mt-2'>
                <QuickSearchResults 
                background={'bg-itemBgDark'} 
                numberOfColumns={resultColumnNum}
                resultsList={resultsList}/>
              </View>
            : <View className='w-full h-fit mt-2'>
                <QuickSearchResultsEmpty background={'bg-itemBgDark'} textColor={'text-itemText'} />
              </View>
            )
          : null
        }
      </View>
    </Modal>
  )
}

export default CartAddModal