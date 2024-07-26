import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

const ProcedureCard = ({item, width}) => (
  <View style={{width}} className={`flex-col h-full justify-center items-center p-2 bg-itemBgLight rounded-xl`}>
    <Text className='font-inconsolataBold text-itemText text-xl'>
      Step {item.step}
    </Text>
    <Image className='flex flex-1 w-full' source={item.image}/>
    <View className='w-full h-fit max-h-[30%] items-center justify-center mt-2'>
      <ScrollView nestedScrollEnabled={true} className='w-full'>
        <View className='w-full h-fit max-h-1/3 items-center justify-center'>
          <Text className='font-inconsolata text-itemText text-center text-base leading-4'>
            {item.description}
          </Text>
        </View>
      </ScrollView>
    </View>
  </View>
)

export default ProcedureCard