import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

const ProcedureCardLarge = () => {
  const item = {
    step: 2, 
    description: 'Mix well. Season with paprika; refrigerate until chilled. Divide tuna mixture evenly onto two slices of bread; top with remaining slices of bread.Mix well. Season with paprika; refrigerate until chilled. Divide tuna mixture evenly onto two slices of bread; top with remaining slices of bread.Mix well. Season with paprika; refrigerate until chilled. Divide tuna mixture evenly onto two slices of bread; top with remaining slices of bread.Mix well. Season with paprika; refrigerate until chilled. Divide tuna mixture evenly onto two slices of bread; top with remaining slices of bread.Mix well. Season with paprika; refrigerate until chilled. Divide tuna mixture evenly onto two slices of bread; top with remaining slices of bread.',
    image: require('../../assets/images/procedure-example/step-2.jpg'),
  }
  
  return (
    <View className='w-full h-full items-center justify-center bg-red-300'>
      <View className={`flex-col w-full min-h-96 justify-center items-center p-4 bg-itemBgLight rounded-xl`}>
        <Text className='font-inconsolataBold text-itemText text-2xl'>
          Step {item.step}
        </Text>
        <Image className='grow h-[50%] w-full mt-2 rounded-lg' source={item.image}/>
        <View className='shrink w-full h-fit max-h-[40%] items-center justify-center mt-4'>
          <ScrollView nestedScrollEnabled={true} className='w-full'>
            <View className='w-full h-fit items-center justify-center'>
              <Text className='font-inconsolata text-itemText text-center text-lg leading-4'>
                {item.description}
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default ProcedureCardLarge