import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ProcedureCard from './ProcedureCard';
import ProcedureDiv from './ProcedureDiv';
import TitleTextComponent from '../../text/TitleTextComponent';

const ProcedureSection = ({onLayout, viewWidth, procedure, divWidth, handlePress}) => (
  <View className='grow flex-col w-full h-fit items-center justify-center mt-2'>
    <View className='flex-row w-full h-10 items-center'>
      <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText mx-4'}>
        Procedure
      </TitleTextComponent>
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
        renderItem={({item}) => <ProcedureCard item={item} width={viewWidth} handlePress={handlePress}/>}
        ItemSeparatorComponent={<ProcedureDiv width={divWidth}/>}
        keyExtractor={item => item.id}
        />
    </View>
  </View>
)

export default ProcedureSection