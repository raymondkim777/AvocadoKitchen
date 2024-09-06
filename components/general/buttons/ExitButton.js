import React, { useState, useContext, } from 'react';
import { SideBarContext } from '../../pages/control/HomeControl';
import { View, TouchableHighlight } from 'react-native';
import ExitButtonGeneral from './ExitButtonGeneral';
import AlertCheck from '../misc/AlertCheck';
import Exit from "../../../assets/icons/exit.svg";

const ExitButton = ({ exitCheck = false }) => {
  const { updatePage } = useContext(SideBarContext);
  
  const handleMainFunction = () => {
    updatePage(0, true);
  }
  
  return(
    <ExitButtonGeneral handleMainFunction={handleMainFunction} exitCheck={exitCheck} />
  )
}

export default ExitButton