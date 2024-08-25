import React, { useState, useContext, } from 'react';
import { SideBarContext } from '../pages/HomeControl';
import { View, TouchableOpacity } from 'react-native';
import LeaveAlert from './LeaveAlert';
import Exit from "../../assets/icons/exit.svg";

const ExitButton = ({ exitCheck = false }) => {
  const {wideScreen, setShowSideBar, updatePage} = useContext(SideBarContext);

  const [showAlert, setShowAlert] = useState(false);

  const handleExit = (exitCheck) => {
    exitCheck 
    ? setShowAlert(true)
    : updatePage(0)
  }

  return(
    <View className='w-fit h-fit'>
      <LeaveAlert showAlert={showAlert} setShowAlert={setShowAlert} />
      <TouchableOpacity className='w-8 h-8 bg-buttonBg rounded-lg items-center justify-center'
      activeOpacity={0.9} onPress={()=>(handleExit(exitCheck))}>
        <Exit width={30} height={30} stroke={'#85855B'} strokeWidth={3} />
      </TouchableOpacity>
    </View>
  )
}

export default ExitButton