import React, { useState, useContext, useEffect, } from 'react';
import { SideBarContext } from '../../pages/control/HomeControl';
import { Keyboard, View, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Image, } from 'react-native';
import Modal from 'react-native-modal';
import TitleTextComponent from '../../text/TitleTextComponent';
import ItemTextInputComponent from '../../text/ItemTextInputComponent';
import Counter from '../../general/misc/Counter';
import ExitButtonLocal from '../../general/buttons/ExitButtonLocal';
import QuickSearchResults from '../../addfunction/quicksearch/QuickSearchResults';
import QuickSearchResultsEmpty from '../../addfunction/quicksearch/QuickSearchResultsEmpty';
import Search from "../../../assets/icons/search.svg";
import AlertCheck from '../../general/misc/AlertCheck';

const CartEditModal = ({ 
  item, siteIndex, 
  showEditModal, setShowEditModal, 
}) => {
  const { wideScreen, contentWidth } = useContext(SideBarContext);

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
     const keyboardDidShowListener = Keyboard.addListener(
       'keyboardDidShow',
       () => {
         setKeyboardVisible(true); // or some other action
       }
     );
     const keyboardDidHideListener = Keyboard.addListener(
       'keyboardDidHide',
       () => {
         setKeyboardVisible(false); // or some other action
       }
     );
 
     return () => {
       keyboardDidHideListener.remove();
       keyboardDidShowListener.remove();
     };
   }, []);

  const resetCount = () => {
    setCount(item.quantity);
  }

  const handleEditUpdate = () => {
    // set item.quantity to count
  }
  
  const handleCloseModal = () => {
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

  const handleSavePress = () => {
    handleEditUpdate();
    handleCloseModal();
  }

  const handleDeleteItem = () => {
    null;
  }

  const [autoCount, setAutoCount] = useState(3);
  const [count, setCount] = useState(0);

  const [showBottomCard, setShowBottomCard] = useState(false);
  const [searchSiteIndex, setSearchSiteIndex] = useState(0);
  const searchSiteList = ['Both Sites', 'Coupang', 'Curly'];

  const shiftSearchSite = () => {
    setSearchSiteIndex((searchSiteIndex + 1) % searchSiteList.length);
  }

  const [ingSearchQuery, setIngSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [foundResults, setFoundResults] = useState(true);
  const resultColumnNum = wideScreen ? 3 : 2;

  const [showDeleteCheck, setShowDeleteCheck] = useState(false);

  const resultsList = [
    {
      site: 'Coupang', 
      name: "(Quick Result 2)", 
      price: '19140', 
      deliver: '7/28',
      image: require('../../../assets/images/ingredient-example/ingredient-1.jpg'),
      empty: false,
    }, 
    {
      site: 'Coupang', 
      name: "(Quick Result 2)", 
      price: '19140', 
      deliver: '7/28',
      image: require('../../../assets/images/ingredient-example/ingredient-1.jpg'),
      empty: false,
    },
    {
      site: 'Coupang', 
      name: "(Quick Result 1)", 
      price: '19140', 
      deliver: '7/28',
      image: require('../../../assets/images/ingredient-example/ingredient-1.jpg'),
      empty: false,
    },
    {
      site: 'Coupang', 
      name: "(Quick Result 2)", 
      price: '19140', 
      deliver: '7/28',
      image: require('../../../assets/images/ingredient-example/ingredient-1.jpg'),
      empty: false,
    },
    {
      site: 'Coupang', 
      name: "(Quick Result 2)", 
      price: '19140', 
      deliver: '7/28',
      image: require('../../../assets/images/ingredient-example/ingredient-1.jpg'),
      empty: false,
    },
  ];

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
    style={{width: contentWidth}}
    className={`h-full ${wideScreen ? 'm-0 ml-64' : 'm-0'} p-4 items-center justify-center`}
    isVisible={showEditModal}
    onModalWillShow={resetCount}
    onModalHide={handleEditUpdate}
    onBackButtonPress={handleCloseModal}
    customBackdrop={
      <TouchableWithoutFeedback className='h-full'>
        <View style={{ width: contentWidth }} className={`h-full ${wideScreen ? 'ml-64' : 'm-0'} bg-black`} />
      </TouchableWithoutFeedback>
    }
    >
      <View className='shrink w-full h-fit items-center justify-center space-y-4'>
        {/* Top Card */}
        {
          isKeyboardVisible && showBottomCard && showResults? null : 
          <View className={`shrink ${wideScreen ? 'w-96' : 'w-full'} h-52 p-2 pt-1 bg-itemBgLight rounded-xl`}>
            {/* Title Row */}
            <View className='flex-row w-full h-8 justify-center'>
              <View className='shrink w-full h-full justify-center'>
                <TitleTextComponent translate={true} size={'text-xl'} css={'shrink w-full text-itemText'} numberOfLines={1}>
                  {item.title}
                </TitleTextComponent>
              </View>
              <View className='w-fit h-full mx-2 items-center justify-center'>
                <TouchableHighlight className='w-fit h-7 rounded-full'
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
              <View className='shrink w-full h-full ml-2'>
                <View className='w-full h-12 mt-3 items-center justify-center'>
                  <TitleTextComponent size={'text-2xl'} css={'w-fit text-itemText'} numberOfLines={1}>
                    {item.price * count}원
                  </TitleTextComponent>
                </View>

                <View className='shrink w-full h-full items-center justify-center'>
                  <Counter count={count} setCount={setCount} />
                </View>

                <View className='shrink w-full h-fit mt-2 items-center justify-center'>
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
                </View>

                <View className='flex-row w-full h-7 items-center justify-between'>
                  <TouchableHighlight className='w-16 h-full rounded-full '
                  activeOpacity={0.9} onPress={()=>setShowDeleteCheck(true)}>
                    <View className='w-full h-full px-2 items-center justify-center bg-itemBgDark rounded-full'>
                      <TitleTextComponent translate={true} size={'text-base'} css={'h-6 text-center text-redHighlight'}>
                        Delete
                      </TitleTextComponent>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight className='w-16 h-full rounded-full '
                  activeOpacity={0.9} onPress={handleSavePress}>
                    <View className='w-full h-full px-2 items-center justify-center bg-itemBgDark rounded-full'>
                      <TitleTextComponent translate={true} size={'text-base'} css={'h-6 text-center text-greenHighlight'}>
                        Save
                      </TitleTextComponent>
                    </View>
                  </TouchableHighlight>
                </View>


              </View>
            </View>
          </View>
        }

        {/* Bottom Card */}
        {
          showBottomCard ? 
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
                  <ExitButtonLocal callback={()=>setShowBottomCard(false)} background={'bg-itemBgLight'} />
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
          : null
        }

        {/* Delete Check Modal */}
        <AlertCheck
        titleText={'EditDeleteCheckTitle'}
        messageText={'EditDeleteCheckMessage'}
        mainText={'Delete'}
        showModal={showDeleteCheck}
        setShowModal={setShowDeleteCheck}
        handleMainFunction={handleDeleteItem}
        handleCloseParentModal={handleCloseModal}
        />
      </View>
    </Modal>
  )
}

export default CartEditModal
