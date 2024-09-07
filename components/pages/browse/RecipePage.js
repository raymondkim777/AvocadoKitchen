import React, { useState, useContext, } from 'react';
import { SideBarContext } from '../control/HomeControl';
import { BrowseContext } from '../control/BrowseControl';
import { View, SafeAreaView, Dimensions, ScrollView, } from 'react-native';
import ExitButtonGeneral from '../../general/buttons/ExitButtonGeneral';
import IngredientsSection from '../../recipe/ingredient/IngredientsSection';
import ProcedureSection from '../../recipe/procedure/ProcedureSection';
import IngredientsSectionEmpty from '../../recipe/ingredient/IngredientsSectionEmpty';
import BottomButtons from '../../browse/misc/BottomButtons';
import ProcedureSectionEmpty from '../../recipe/procedure/ProcedureSectionEmpty';
import TitleTextComponent from '../../text/TitleTextComponent';
import IngredientCardModal from '../../recipe/ingredient/IngredientCardModal';
import ProcedureCardModal from '../../recipe/procedure/ProcedureCardModal';
import CommentModal from '../../browse/misc/CommentModal';

const RecipePage = ({ navigation }) => {
  
  const { updatePage } = useContext(SideBarContext);
  const { originPage, selectedRecipeItem } = useContext(BrowseContext);

  const handleExitPress = () => {
    originPage == 'HomePage' ? updatePage(0)
    : originPage == 'MyMeals' ? updatePage(1)
    : navigation.goBack();
  }

  const handleExpandIngredient = (item) => {
    setIngredientItem(item);
    setShowIngredientModal(true);
  }

  const handleExpandProcedure = (item) => {
    setProcedureItem(item);
    setShowProcedureModal(true);
  }

  const handleLikePress = () => {
    setUserLike(!userLike);
  }

  const handleRecipeAddPress = () => {
    updatePage(4, true, {
      screen: 'AddMealPage',
      params: { 
        originPage: 'RecipePage',
        selectedRecipeItem: selectedRecipeItem 
      },
    });
  }

  const handleCommentPress = () => {
    setShowCommentModal(true);
  }
   
  { /* State/Functions */}
  const [viewWidth, setViewWidth] = useState(Dimensions.get('window').width);

  const onLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setViewWidth(width);
  };

  const [showIngredientModal, setShowIngredientModal] = useState(false);
  const [showProcedureModal, setShowProcedureModal] = useState(false);

  const [ingredientItem, setIngredientItem] = useState(null);
  const [procedureItem, setProcedureItem] = useState(null);

  // set with database, querying with recipeItem.id
  const [userLike, setUserLike] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);

  {/* View */}
  return (
    <SafeAreaView id='screen' className='w-full h-full justify-center items-center bg-screenBg'>
      <ScrollView 
      contentContainerStyle={{flexGrow: 1}} 
      className='grow w-full h-fit'
      showsVerticalScrollIndicator={false}>
        <View id='content' className='grow w-full h-fit p-4 pb-0'>
          {/* Title */}
          <View className='flex-row w-full h-10 items-center justify-between'>
            <TitleTextComponent translate={true} size={'text-3xl'} css={'text-screenText mx-4'}>
              Recipe Info
            </TitleTextComponent>
            <ExitButtonGeneral handleMainFunction={handleExitPress} />
          </View>

          {/* Name / Ingredients */}
          <View className={`${(selectedRecipeItem.procedure.length == 0 || selectedRecipeItem.ingredients.length == 0) ? '' : 'grow'} flex-col w-full h-fit items-center justify-center mt-4`}>
            {/* Name */}
            <View className='flex-row w-full h-12 items-center'>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText ml-4'}>
                Recipe Name
              </TitleTextComponent>
              <TitleTextComponent size={'text-xl'} css={'text-screenText mr-2'}>
                :
              </TitleTextComponent>
              <TitleTextComponent translate={true} size={'text-xl'} css={'text-screenText'}>
                {selectedRecipeItem.title}
              </TitleTextComponent>
            </View>

            {/* Ingredients */}
            {
              selectedRecipeItem.ingredients.length == 0
              ? <IngredientsSectionEmpty />
              : <IngredientsSection 
                ingredients={selectedRecipeItem.ingredients} 
                handlePress={handleExpandIngredient} />
            }
          </View>
          
          {/* Procedure */}
          <View className={`${(selectedRecipeItem.procedure.length == 0 || selectedRecipeItem.ingredients.length == 0) ? '' : 'grow'} w-full h-fit items-center justify-center`}>
            {
              selectedRecipeItem.procedure.length == 0
              ? <ProcedureSectionEmpty />
              : <ProcedureSection 
                  onLayout={onLayout}
                  viewWidth={viewWidth}
                  procedure={selectedRecipeItem.procedure}
                  divWidth={4}
                  handlePress={handleExpandProcedure}
                  />
            }
          </View>
        </View>
      </ScrollView>

      {/* Buttons */}
      <View id='recipe-final-buttons' className='w-full h-20 mb-1'>
        <BottomButtons
        userLike={userLike}
        handleLikePress={handleLikePress}
        handleRecipeAddPress={handleRecipeAddPress}
        handleCommentPress={handleCommentPress}
        />
      </View>

      {/* Modals */}
      <IngredientCardModal 
      ingredientItem={ingredientItem}
      showIngredientModal={showIngredientModal} 
      setShowIngredientModal={setShowIngredientModal} 
      />

      <ProcedureCardModal 
      procedureItem={procedureItem} 
      showProcedureModal={showProcedureModal}
      setShowProcedureModal={setShowProcedureModal}
      />
      
      <CommentModal
      showCommentModal={showCommentModal}
      setShowCommentModal={setShowCommentModal}
      />

    </SafeAreaView>
  )
}

export default RecipePage;