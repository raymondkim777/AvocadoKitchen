import React, { useContext, } from 'react';
import { SideBarContext } from '../../pages/control/HomeControl';
import { View, FlatList } from 'react-native';
import QuickSearchResultsUnit from './QuickSearchResultsUnit';

const QuickSearchResults = ({
  numberOfColumns = 2, 
  background, 
  resultsList,
  smallImage = false,
}) => {

  const formatData = (data, numColumns) => {
    const numFullRows = Math.floor(data.length / numColumns);
    let numElementsLastRow = data.length - (numFullRows * numColumns);
    while (numElementsLastRow != numColumns && numElementsLastRow != 0) {
      data.push({empty: true});
      numElementsLastRow = numElementsLastRow + 1;
    }
    return data;
  }

  return (
    <View className='w-full h-72 items-center justify-center rounded-xl overflow-hidden'>
      {/* https://www.reactnativeschool.com/react-native-flatlist-grid */}
      <FlatList className={`shrink w-full h-full ${background} py-1 px-0.5`} 
        key={`flatList${numberOfColumns}`}
        horizontal={false}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicators={true}
        data={formatData(resultsList, numberOfColumns)}
        renderItem={
          ({item}) => 
          <QuickSearchResultsUnit 
          item={item} 
          smallImage={smallImage} 
          background={background}/>
        }
        numColumns={numberOfColumns}
        ItemSeparatorComponent={<View className='h-1'/>}
        ListFooterComponent={<View className='h-2' />}
      />
    </View>
  )
}

export default QuickSearchResults