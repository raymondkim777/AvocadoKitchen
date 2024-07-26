import React, { useState, } from 'react';
import { Text, View, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, StyleSheet, Platform, ScrollView, FlatList } from 'react-native';
import ExitButton from './ExitButton';

const IngredientRow = ({item, index}) => (
  <TouchableOpacity className={`flex-row w-full h-8 border-b border-itemBgDark`}
    activeOpacity={0.7}>
    <View className={`w-2/3 h-full items-center justify-center border-r border-itemBgDark bg-itemBgLight`}>
      <Text className='font-inconsolata text-lg text-itemText'>{item.name}</Text>
    </View>
    <View className={`w-1/3 h-full items-center justify-center bg-itemBgLight`}>
      <Text className='font-inconsolata text-lg text-itemText'>{item.amount}</Text>
    </View>
  </TouchableOpacity>
)

const ProcedureCard = ({item, width}) => (
  <View style={{width}} className={`flex-col h-full justify-center items-center p-2 bg-itemBgLight rounded-xl`}>
    <Text className='font-inconsolataBold text-itemText text-xl'>
      Step {item.step}
    </Text>
    <Image className='flex flex-1 w-full' source={item.image}/>
    <View className='w-full h-fit max-h-1/3 items-center justify-center mt-2'>
      <Text className='font-inconsolata text-itemText text-center text-base leading-4'>
        {item.description}
      </Text>
    </View>
  </View>
)

const ProcedureDiv = ({width}) => (
  <View className={`w-${width} h-full`}/>
)


const { width, height } = Dimensions.get('window');

const RecipePage = ({
  // name, // string
  // ingredients, // list
  // procedure, // list
}) => {
  {/* References */}
  
  {/* Data */}
  const name = "Tuna Sandwich";
  const ingredients = [
    {
      name: 'Canned Tuna',
      amount: '20 oz',
    },
    {
      name: 'Celery',
      amount: '1/3 cup',
    },
    {
      name: 'Red Onion',
      amount: '2 tbsp',
    },
    {
      name: 'Sweet Pickle Relish',
      amount: '2 tbsp',
    },
    {
      name: 'Lemon',
      amount: 'x1',
    },
    {
      name: 'Garlic Clove',
      amount: 'x1',
    },
    {
      name: 'Salt',
      amount: 'N/A',
    },
    {
      name: 'Black Pepper',
      amount: 'N/A',
    },
    {
      name: 'Mayonnaise',
      amount: '1 cup',
    },
  ]
  const procedure = [
    {
      step: 1, 
      description: 'Combine tuna, mayonnaise, celery, onion, parsley, lemon juice, garlic powder, salt, and pepper in a large bowl.',
      image: require('../assets/images/procedure-example/step-1.webp'),
    },
    {
      step: 2, 
      description: 'Mix well. Season with paprika; refrigerate until chilled. Divide tuna mixture evenly onto two slices of bread; top with remaining slices of bread.',
      image: require('../assets/images/procedure-example/step-2.jpg'),
    },
  ];
   
  { /* State/Functions */}
  const [viewWidth, setViewWidth] = useState(Dimensions.get('window').width);

  const onLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setViewWidth(width);
  };

  {/* View */}
  const Container = height > 800 ?  View : ScrollView;
  return (
    <SafeAreaView id='screen' className='w-full h-full justify-center items-center bg-screenBg'>
      <Container className='grow w-full h-fit'>
        <View id='content' className='w-full h-full p-4'>
          {/* Title */}
          <View className='flex-row w-full h-10 items-center justify-between'>
            <Text className="font-inconsolata mx-4 text-3xl text-screenText">
              Recipe Info
            </Text>
            <ExitButton/>
          </View>

          {/* Name / Ingredients */}
          <View className='grow flex-col w-full h-fit items-center justify-center mt-4'>
            {/* Name */}
            <View className='flex-row w-full h-10 items-center'>
              <Text className='font-inconsolata mx-4 text-screenText text-xl'>
                Name: {name}
              </Text>
            </View>

            {/* Ingredients */}
            <View className='grow flex-col w-full h-fit items-center justify-center'>
              <View className='flex-row w-full h-8 items-center'>
                <Text className='font-inconsolata mx-4 text-screenText text-xl'>
                  Ingredients
                </Text>
              </View>

              <View className='grow w-full h-52 items-center justify-center'>
                {/* Header */}
                <View className='flex-row w-full h-8 bg-itemBgDark rounded-t-lg'>
                  <View className='w-2/3 h-full items-center justify-center'>
                    <Text className='font-inconsolataBold text-xl text-itemText'>Name</Text>
                  </View>
                  <View className='w-1/3 h-full items-center justify-center'>
                    <Text className='font-inconsolataBold text-xl text-itemText'>Amount</Text>
                  </View>
                </View>
                
                {/* Content */}
                <View className='grow w-full h-40 bg-itemBgLight overflow-hidden rounded-b-lg'>
                  <ScrollView className='w-full h-fit rounded-b-lg'>
                    {ingredients.map((item, index) => (
                      <IngredientRow item={item} index={index}/>
                    ))}
                  </ScrollView>
                </View>
              </View>
            </View>
          </View>

          {/* Procedure */}
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
                snapToInterval={viewWidth + 14}
                snapToAlignment='start'
                decelerationRate='fast'
                data={procedure}
                renderItem={({item}) => <ProcedureCard item={item} width={viewWidth}/>}
                ItemSeparatorComponent={<ProcedureDiv width={4}/>}
                keyExtractor={item => item.id}
                />
            </View>
          </View>

          {/* Buttons */}
          <View className='flex-row w-full h-fit items-center justify-between mt-8 mb-4 px-6'>
            {/* Likes */}
            <TouchableOpacity className='w-12 h-12 items-center justify-center bg-buttonBg rounded-xl'
              activeOpacity={0.7}>

            </TouchableOpacity>
            {/* Add Meal */}
            <TouchableOpacity className='w-36 h-12 items-center justify-center bg-buttonBg rounded-xl'
              activeOpacity={0.7}>
                <Text className='font-inconsolata text-center text-itemText text-2xl'>Add Meal</Text>
            </TouchableOpacity>
            {/* Comments */}
            <TouchableOpacity className='w-12 h-12 items-center justify-center bg-buttonBg rounded-xl'
              activeOpacity={0.7}>
                
            </TouchableOpacity>
          </View>
          
        </View>
      </Container>
    </SafeAreaView>
  )
}

export default RecipePage;