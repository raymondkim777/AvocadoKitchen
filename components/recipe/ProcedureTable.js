import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ProcedureTableRow from './ProcedureTableRow';

const ProcedureTable = ({procedure}) => (
  <View className='grow w-full h-48 items-center justify-center'>
    {/* Header */}
    <View className='flex-row w-full h-8 bg-itemBgDark rounded-t-lg'>
      <View className='w-12 h-full items-center justify-center'>
        <Text className='font-inconsolataBold text-xl text-itemText'>#</Text>
      </View>
      <View className='shrink w-full h-full items-center justify-center'>
        <Text className='font-inconsolataBold text-xl text-itemText'>Description</Text>
      </View>
    </View>
    
    {/* Content */}
    <View className='grow w-full h-40 bg-itemBgLight overflow-hidden rounded-b-lg'>
      <ScrollView nestedScrollEnabled={true} className='w-full h-fit rounded-b-lg'>
        {procedure.map((item, index) => (
          <ProcedureTableRow item={item} index={index}/>
        ))}
      </ScrollView>
    </View>
  </View>
)

export default ProcedureTable