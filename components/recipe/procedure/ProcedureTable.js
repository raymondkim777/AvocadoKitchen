import React from 'react';
import { View, FlatList } from 'react-native';
import ProcedureTableRow from './ProcedureTableRow';
import TitleTextComponent from '../../text/TitleTextComponent';

const RowDiv = () => (
  <View className='w-full h-[1px] bg-itemBgDark' />
);

const ProcedureTable = ({procedure}) => (
  <View className='grow w-full h-48 items-center justify-center'>
    {/* Header */}
    <View className='flex-row w-full h-8 bg-itemBgDark rounded-t-lg'>
      <View className='w-12 h-full items-center justify-center'>
        <TitleTextComponent size={'text-xl'} sizeDiff={-1} css={'text-itemText'}>#</TitleTextComponent>
      </View>
      <View className='shrink w-full h-full items-center justify-center'>
      <TitleTextComponent translate={true} size={'text-xl'} css={'text-itemText'}>
        Description
      </TitleTextComponent>
      </View>
    </View>
    
    {/* Content */}
    <View className='grow w-full h-40 bg-itemBgLight overflow-hidden rounded-b-lg'>
      <FlatList 
      nestedScrollEnabled={true}
      className='w-full h-fit rounded-b-lg'
      data={procedure}
      renderItem={({item, index}) => <ProcedureTableRow item={item} index={index}/>}
      ItemSeparatorComponent={RowDiv}
      ListFooterComponent={RowDiv}
      />
    </View>
  </View>
)

export default ProcedureTable