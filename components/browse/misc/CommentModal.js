import React, { useState, useContext, } from 'react';
import { SideBarContext } from '../../pages/control/HomeControl';
import { View, TouchableWithoutFeedback, FlatList, Image, Text, TextInput, TouchableHighlight, ScrollView, Alert } from 'react-native';
import {useTranslation} from 'react-i18next';
import 'intl-pluralrules';
import '../../text/i18n'
import Modal from 'react-native-modal';
import ExitButtonGeneral from '../../general/buttons/ExitButtonGeneral';
import SmallButton from '../../general/buttons/SmallButton';
import TitleTextComponent from '../../text/TitleTextComponent';
import ArrowRightUp from "../../../assets/icons/arrowrightup.svg";
import CircleArrowUp from "../../../assets/icons/circlearrowup.svg";
import SendLetter from "../../../assets/icons/sendletter.svg";

const CommentCard = ({item}) => {
  const {t, i18n} = useTranslation();
  const currentLanguage = i18n.language;
  const beforeDate = (date) => {
    const now = new Date();
    const diffSec = (now - date)/1000;

    if (diffSec < 60) {
      return {diff: Math.floor(diffSec), text: 'seconds ago'};
    }
    else if (diffSec < (60 * 60)) {
      return {diff: Math.floor(diffSec/60), text: 'minutes ago'};
    }
    else if (diffSec < (60 * 60 * 24)) {
      return {diff: Math.floor(diffSec/(60 * 60)), text: 'hours ago'};
    }
    else if (diffSec < (60 * 60 * 24 * 7)) {
      return {diff: Math.floor(diffSec/(60 * 60 * 24)), text: 'days ago'};
    }
    else if (diffSec < (60 * 60 * 24 * 31)) {
      return {diff: Math.floor(diffSec/(60 * 60 * 24 * 7)), text: 'weeks ago'};
    }
    else if (diffSec < (60 * 60 * 24 * 365)) {
      return {diff: Math.floor(diffSec/(60 * 60 * 24 * 31)), text: 'months ago'};
    }
    else {
      return {diff: Math.floor(diffSec/(60 * 60 * 24 * 365)), text: 'years ago'};
    }
  }

  return(
    <View>
      <View className='flex-row w-fit h-fit py-2 items-center justify-center'>
        <View className='w-16 h-16 items-center justify-center border-2 border-itemBgMid rounded-full overflow-hidden bg-buttonBg'>
          <Image className='w-full h-11' source={require('../../../assets/images/logo-transparent.png')} />
        </View>
        <View className='flex-col shrink w-full h-fit ml-3'>
          {/* Top Row */}
          <View className='flex-row shrink w-full h-8 items-center justify-start0'>
            <View className='w-fit max-w-[128px] h-8 items-center justify-center'>
              <TitleTextComponent size={'text-lg'} css={'text-itemText'} numberOfLines={1}>
                {item.userName}
              </TitleTextComponent>
            </View>
            <View className='flex-row w-fit h-8 items-center justify-center'>
              <TitleTextComponent size={'text-base'} css={'text-grayText ml-4'}>
                {beforeDate(new Date(item.postDate)).diff}
              </TitleTextComponent>
              <TitleTextComponent translate={true} size={'text-base'} css={'text-grayText'}>
                {beforeDate(new Date(item.postDate)).text}
              </TitleTextComponent>
            </View>
          </View>
          {/* Bottom Row */}
          <View className='flex-row w-full h-fit items-center justify-start'>
            <View className='w-full h-fit pb-1 items-center justify-center'>
              {/* Custom ItemTextComponent due to complications */}
              <Text className={`
                ${(currentLanguage  === 'ko-KR') 
                  ? "w-full font-koreanFont2 text-itemText text-start text-2xl leading-5 pt-1" 
                  : 'w-full font-inconsolata text-itemText text-start text-base leading-4 pt-1'}
              `}>
                {item.text}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const CommentModal = ({
  showCommentModal, setShowCommentModal,
}) => {
  const { wideScreen, contentWidth } = useContext(SideBarContext);
  const {t, i18n} = useTranslation();
  const currentLanguage = i18n.language;

  const handleSetUp = () => {
    setCommentCount(10);
  }

  const handleCloseModal = () => {
    setShowCommentModal(false);
  }

  const handleMoreCommentsPress = () => {
    null;
  }

  const handleCommentPostPress = () => {
    null;
  }

  const [commentInput, setCommentInput] = useState('');
  const [commentCount, setCommentCount] = useState(0);
  const [commentLoadCount, setCommentLoadCount] = useState(6);
  const commentList = [
    {
      commentID: 'test-comment-id',
      userID: 'test-user-1', 
      userName: '어떤유저123456789',
      userImage: require('../../../assets/images/logo-transparent.png'),
      postDate: '2020-03-02T09:28:00+09:00',
      beforeDate: '5일',
      text: '아악 쉽게 따라갈 수 있고 계량도 쉽고 너무 좋아요!! 다만 저희 식구에겐 너무 달았습니다ㅠㅠ 진짜 요리고잔데 레시피대로 했더니 너무 맛있어요 ㅎㅎ아악 쉽게 따라갈 수 있고 계량도 쉽고 너무 좋아요!! 다만 저희 식구에겐 너무 달았습니다ㅠㅠ 진짜 요리고잔데 레시피대로 했더니 너무 맛있어요 ㅎㅎ',
    },
    {
      commentID: 'test-comment-id',
      userID: 'test-user-1', 
      userName: '어떤유저123',
      userImage: require('../../../assets/images/logo-transparent.png'),
      postDate: '2024-03-02T09:28:00+09:00',
      beforeDate: '5일',
      text: '아악 쉽게 따라갈 수 있고 계량도 쉽고 너무 좋아요!!',
    },
    {
      commentID: 'test-comment-id',
      userID: 'test-user-1', 
      userName: '어떤유저123',
      userImage: require('../../../assets/images/logo-transparent.png'),
      postDate: '2024-08-11T09:28:00+09:00',
      beforeDate: '5일',
      text: '아악 쉽게 따라갈 수 있고 계량도 쉽고 너무 좋아요!!',
    },{
      commentID: 'test-comment-id',
      userID: 'test-user-1', 
      userName: '어떤유저123',
      userImage: require('../../../assets/images/logo-transparent.png'),
      postDate: '2024-08-29T09:28:00+09:00',
      beforeDate: '5일',
      text: '아악 쉽게 따라갈 수 있고 계량도 쉽고 너무 좋아요!!',
    },
    {
      commentID: 'test-comment-id',
      userID: 'test-user-1', 
      userName: '어떤유저123',
      userImage: require('../../../assets/images/logo-transparent.png'),
      postDate: '2024-09-02T09:28:00+09:00',
      beforeDate: '5일',
      text: '아악 쉽게 따라갈 수 있고 계량도 쉽고 너무 좋아요!!',
    },
    {
      commentID: 'test-comment-id',
      userID: 'test-user-1', 
      userName: '어떤유저123',
      userImage: require('../../../assets/images/logo-transparent.png'),
      postDate: '2024-09-07T09:28:00+09:00',
      beforeDate: '5일',
      text: '아악 쉽게 따라갈 수 있고 계량도 쉽고 너무 좋아요!!',
    },
  ];

  return(
    <Modal 
    style={{width: contentWidth}}
    className={`h-full ${wideScreen ? 'm-0 ml-64' : 'm-0'} p-2 pt-16 items-center justify-end`}
    isVisible={showCommentModal}
    onBackButtonPress={handleCloseModal}
    onModalWillShow={handleSetUp}
    customBackdrop={
      <TouchableWithoutFeedback className='h-full' onPress={handleCloseModal}>
        <View style={{ width: contentWidth }} className={`h-full ${wideScreen ? 'm-0 ml-64' : 'm-0'}`} />
      </TouchableWithoutFeedback>
    }
    >
      <View className='shrink w-full h-fit bg-itemBgLight border-2 border-itemText rounded-2xl'>
      <View className='flex-col shrink w-full h-fit p-4'>
          {/* Title */}
          <View className='flex-row w-full h-10 items-center justify-between'>
            <View className='flex-row w-fit h-fit mx-4'>
              <TitleTextComponent translate={true} size={'text-3xl'} css={'text-itemText'}>
                Comments
              </TitleTextComponent>
              <TitleTextComponent size={'text-3xl'} css={'text-itemText ml-1'}>
                :
              </TitleTextComponent>
              <TitleTextComponent size={'text-3xl'} css={'text-itemText ml-3'}>
                {commentCount}
              </TitleTextComponent>
            </View>
            <ExitButtonGeneral handleMainFunction={handleCloseModal} background={'bg-itemBgLight'} />
          </View>

          <View className='shrink w-full h-fit mt-2'>
            <View className='w-full h-[2px] bg-itemBgDark' />
            <FlatList
            className='shrink w-full h-fit'
            scrollEnabled={true}
            data={commentList}
            renderItem={({item}) => <CommentCard item={item} />}
            ItemSeparatorComponent={<View className='w-full h-[2px] bg-itemBgDark' />}
            />
            <View className='w-full h-[2px] bg-itemBgDark' />
          </View>

          {/* Comments */}

          <View className='flex-col w-full h-fit mt-2 items-center justify-center'>
            {
              (commentCount > commentList.length)
              ? <SmallButton text={'Load More'} callback={handleMoreCommentsPress} background={'bg-itemBgDark'} />
              : null 
            }
            <View className='flex-row w-full min-h-[48px] mt-2 items-end justify-center bg-itemBgDark rounded-xl '>
              <TextInput className={`
                ${(currentLanguage  === 'ko-KR') ? 'font-koreanFont2 text-2xl leading-6' : 'font-inconsolataLight text-xl'}
                shrink w-full h-fit -mb-1.5 pl-3 text-wrap text-itemText
              `}
              placeholder={t("Add a comment...")}
              placeholderTextColor={'#85855B'}
              value={commentInput} 
              onChangeText={setCommentInput} 
              onSubmitEditing={handleCommentPostPress}
              underlineColorAndroid={'transparent'}
              multiline={true}
              textAlignVertical={'top'}
              />

              <TouchableHighlight className='w-10 h-10 mr-1 mb-1 rounded-lg' 
              activeOpacity={0.9} onPress={handleCommentPostPress} disabled={commentInput == ''}>
                <View className='w-full h-full items-center justify-center bg-itemBgDark rounded-lg'>
                  <SendLetter width={30} height={30} stroke={commentInput == '' ? '#ACACAC' : '#85855B'} strokeWidth={2} />
                </View>
              </TouchableHighlight>
            </View>
          </View>

        </View>
      </View>
    </Modal>
  )
}

export default CommentModal