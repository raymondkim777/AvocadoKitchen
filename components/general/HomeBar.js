import React, { useState } from 'react';
import { Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, StyleSheet, Platform, FlatList } from 'react-native';
import HombarPopup from './HombarPopup';
const HomeBar = ({navigation}) => {

  const buttons = [
    {id: 'tutorial',},
    {id: 'browse',},
    {id: 'add-meal',},
    {id: 'info',},
    {id: 'profile',},
  ]

  const [popup, setPopup] = useState([false, false, false, false, false]);
  const handleHomebar = (index) => {
    const newPopup = [...popup];
    newPopup[index] = !newPopup[index];
    setPopup(newPopup);
  };

  return (
    <View className={`flex flex-row w-full h-20 bg-homeBgLight items-center justify-center`}>
      {
        buttons.map((item, index) => (
        index == 0? 
          <View key={`${item.id}-view`} className='flex flex-1 h-full ml-2 items-center justify-center'>
            <TouchableOpacity onPress={() => handleHomebar(index)} activeOpacity={0.5} key={item.id} className={`w-16 h-16 rounded-full bg-homeBgDark`}/>
          </View>
        : index == 4? 
          <View key={`${item.id}-view`} className='flex flex-1 h-full mr-2 items-center justify-center'>
            <TouchableOpacity onPress={() => handleHomebar(index)} activeOpacity={0.5} key={item.id} className={`w-16 h-16 rounded-full bg-homeBgDark`}/>
          </View>
        : <View key={`${item.id}-view`} className='flex flex-1 h-full items-center justify-center'>
            <TouchableOpacity onPress={() => handleHomebar(index)} activeOpacity={0.5} key={item.id} className={`w-16 h-16 rounded-full bg-homeBgDark`}/>
          </View>
      ))}
     <HombarPopup popup={popup} setPopup={setPopup} />
      
    </View>
  )
}

export default HomeBar;