import React, {useState, useTransition,} from 'react';
import { Text, View, Dimensions, SafeAreaView, Image,ScrollView,  TextInput, TouchableOpacity, StyleSheet, Platform, FlatList } from 'react-native';
import 'intl-pluralrules';
import '../text/i18n'
import SideBar from '../general/SideBar';
import PagePopup from '../general/PagePopup';

const { width, height } = Dimensions.get('window');

const HomeControl = ({ navigation }) => {
  {/* SideBar */}
  const [showSideBar, setShowSideBar] = useState(false);
  
  const [username, setUsername] = useState('Username');
  
  const [showScreenIdx,setScreenIdx] = useState(0);
  const handleScreenIdx = (index) => {
      setScreenIdx(index);
  }

  
  const wideScreen = Platform.OS === 'ios' ? (height / width) < 1.6: (height / width) < 1.4;
  const Container = wideScreen ?  View : SafeAreaView;
  return (
    <Container className='flex flex-row w-full h-full justify-center items-center bg-screenBg'>
      {/* SideBar */}
      <SideBar 
      wideScreen={wideScreen}
      username={username}
      showSideBar={showSideBar}
      setShowSideBar={setShowSideBar}
      setScreenIdx = {setScreenIdx}
      />
      
      <PagePopup 
      navigation={navigation}
      wideScreen={wideScreen}
      index={showScreenIdx} 
      setShowSideBar={setShowSideBar}
      />
    </Container>
  );
}

export default HomeControl;