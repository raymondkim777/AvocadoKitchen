import React, {useState,} from 'react';
import { Text, View, SafeAreaView, Image,  TextInput, TouchableOpacity, StyleSheet, Platform, FlatList } from 'react-native';

const HomeBar = () => {

  const buttons = [
    {id: 'tutorial',},
    {id: 'browse',},
    {id: 'add-meal',},
    {id: 'info',},
    {id: 'profile',},
  ]

  return (
    <View className={` flex flex-row w-full h-20 bg-homeBgLight items-center justify-center`}>
      {buttons.map((item, index) => (
        index == 0? 
          <View key={`${item.id}-view`} className='flex flex-1 h-full ml-2 items-center justify-center'>
            <TouchableOpacity activeOpacity={0.5} key={item.id} className={`w-16 h-16 rounded-full bg-homeBgDark`}/>
          </View>
        : index == 4? 
          <View key={`${item.id}-view`} className='flex flex-1 h-full mr-2 items-center justify-center'>
            <TouchableOpacity activeOpacity={0.5} key={item.id} className={`w-16 h-16 rounded-full bg-homeBgDark`}/>
          </View>
        : <View key={`${item.id}-view`} className='flex flex-1 h-full items-center justify-center'>
            <TouchableOpacity activeOpacity={0.5} key={item.id} className={`w-16 h-16 rounded-full bg-homeBgDark`}/>
          </View>
      ))}
    </View>
  )
}

export default HomeBar;