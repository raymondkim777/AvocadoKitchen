import React, { useContext, } from 'react';
import { SideBarContext } from '../../pages/main/HomeControl';
import { View, FlatList, Dimensions } from 'react-native';
import QuickSearchResultsUnit from './QuickSearchResultsUnit';

const { width, height } = Dimensions.get('window');

const QuickSearchResults = ({
  numberOfColumns = 2, 
  background, 
  resultsList,
  smallImage = false,
}) => {
  const { wideScreen, } = useContext(SideBarContext);

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
      <FlatList className={`w-full h-full ${background} py-1 px-0.5`} 
        key={`flatList${numberOfColumns}`}
        horizontal={false}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicators={true}
        data={formatData(resultsList, numberOfColumns)}
        renderItem={({item}) => <QuickSearchResultsUnit item={item} smallImage={smallImage}/>}
        numColumns={numberOfColumns}
        ItemSeparatorComponent={<View className='h-1'/>}
        ListFooterComponent={<View className='h-2' />}
      />
    </View>
  )
}

export default QuickSearchResults