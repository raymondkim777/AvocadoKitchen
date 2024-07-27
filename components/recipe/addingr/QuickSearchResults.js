import React, { useState, } from 'react';
import { SafeAreaView, View, Text, FlatList, Dimensions } from 'react-native';
import QuickSearchResultsUnit from './QuickSearchResultsUnit';

const { width, height } = Dimensions.get('window');

const QuickSearchResults = ({}) => {
  const formatData = (data, numColumns) => {
    const numFullRows = Math.floor(data.length / numColumns);
    let numElementsLastRow = data.length - (numFullRows * numColumns);
    while (numElementsLastRow != numColumns && numElementsLastRow != 0) {
      data.push({empty: true});
      numElementsLastRow = numElementsLastRow + 1;
    }
    return data;
  }
  
  const ingredients = [
    {
      site: 'Coupang', 
      name: 'Result 1 Long Name', 
      price: '19140', 
      deliver: '7/28',
      image: require('../../../assets/images/ingredient-example/ingredient-1.jpg'),
      empty: false,
    }, 
    {
      site: 'Coupang', 
      name: 'Result 2', 
      price: '19140', 
      deliver: '7/28',
      image: require('../../../assets/images/ingredient-example/ingredient-1.jpg'),
      empty: false,
    },
    {
      site: 'Coupang', 
      name: 'Result 3', 
      price: '19140', 
      deliver: '7/28',
      image: require('../../../assets/images/ingredient-example/ingredient-1.jpg'),
      empty: false,
    },
    
  ];

  return (
    <View className='w-full h-72 items-center justify-center mt-4 rounded-xl overflow-hidden'>
      {/* https://www.reactnativeschool.com/react-native-flatlist-grid */}
      <FlatList className='w-full h-full bg-itemBgLight' 
        horizontal={false}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicators={true}
        data={formatData(ingredients, 2)}
        renderItem={({item}) => <QuickSearchResultsUnit item={item} />}
        numColumns={2}
        ItemSeparatorComponent={<View className='w-2 h-2'/>}
      />
    </View>
  )
}

export default QuickSearchResults