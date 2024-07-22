import React from 'react';
import { NativeWindStyleSheet } from "nativewind";
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import Login from './components/Login';
import HomePage from './components/HomePage';

export default function HomeScreen() {
  NativeWindStyleSheet.setOutput({
    default: "native",
  });

  return (
    <SafeAreaView className='w-full h-full'>
      <HomePage/>
    </SafeAreaView>
  );
}