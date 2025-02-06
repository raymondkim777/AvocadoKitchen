import React, { useState, useContext, } from 'react';
import { SideBarContext } from '../../pages/control/HomeControl';
import { View, TouchableWithoutFeedback, } from 'react-native';
import Modal from 'react-native-modal';
import IngredientCardLarge from './IngredientCardLarge';

const IngredientCardModal = ({
  ingredientItem, showIngredientModal, setShowIngredientModal,
}) => {
  const { wideScreen, contentWidth } = useContext(SideBarContext);

  const handleCloseModal = () => {
    setShowIngredientModal(false);
  }

  return(
    <Modal 
    style={{width: contentWidth}}
    className={`h-full ${wideScreen ? 'ml-64' : 'm-0'} p-4 items-center justify-center`}
    isVisible={showIngredientModal}
    onBackButtonPress={handleCloseModal}
    customBackdrop={
      <TouchableWithoutFeedback className='h-full' onPress={handleCloseModal}>
        <View style={{ width: contentWidth }} className={`h-full ${wideScreen ? 'ml-64' : 'm-0'} bg-black`} />
      </TouchableWithoutFeedback>
    }
    >
      <IngredientCardLarge item={ingredientItem} />
    </Modal>
  )
}

export default IngredientCardModal