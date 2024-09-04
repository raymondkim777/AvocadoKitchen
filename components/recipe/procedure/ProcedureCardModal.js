import React, { useState, useContext, } from 'react';
import { SideBarContext } from '../../pages/main/HomeControl';
import { View, TouchableWithoutFeedback, } from 'react-native';
import Modal from 'react-native-modal';
import ProcedureCardLarge from './ProcedureCardLarge';

const ProcedureCardModal = ({
  procedureItem, showProcedureModal, setShowProcedureModal,
}) => {
  const { wideScreen, contentWidth } = useContext(SideBarContext);

  const handleCloseModal = () => {
    setShowProcedureModal(false);
  }

  return(
    <Modal 
    style={{width: contentWidth}}
    className={`h-full ${wideScreen ? 'ml-64' : 'm-0'} p-4 items-center justify-center`}
    isVisible={showProcedureModal}
    onBackButtonPress={handleCloseModal}
    customBackdrop={
      <TouchableWithoutFeedback className='h-full' onPress={handleCloseModal}>
        <View style={{ width: contentWidth }} className={`h-full ${wideScreen ? 'ml-64' : 'm-0'} bg-black`} />
      </TouchableWithoutFeedback>
    }
    >
      <ProcedureCardLarge item={procedureItem} />
    </Modal>
  )
}

export default ProcedureCardModal