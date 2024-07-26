import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ProcedureCard from './ProcedureCard';
import ProcedureDiv from './ProcedureDiv';

const ProcedureSection = ({onLayout, viewWidth, procedure, divWidth}) => (
  <View className='grow flex-col w-full h-fit items-center justify-center mt-2'>
    <View className='flex-row w-full h-10 items-center'>
      <Text className='font-inconsolata mx-4 text-screenText text-xl'>
        Procedure
      </Text>
    </View>

    {/* Procedure Cards */}
    <View onLayout={onLayout} className='grow w-full h-fit rounded-xl overflow-hidden'>
      <FlatList className='w-full h-80'
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={viewWidth + (Math.floor(divWidth / 4 * 14))}
        snapToAlignment='start'
        decelerationRate='fast'
        data={procedure}
        renderItem={({item}) => <ProcedureCard item={item} width={viewWidth}/>}
        ItemSeparatorComponent={<ProcedureDiv width={divWidth}/>}
        keyExtractor={item => item.id}
        />
    </View>
  </View>
)

export default ProcedureSection