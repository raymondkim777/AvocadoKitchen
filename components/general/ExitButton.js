import React, { useState, useContext, } from 'react';
import { SideBarContext } from '../pages/HomeControl';
import { View, TouchableHighlight } from 'react-native';
import LeaveAlert from './LeaveAlert';
import Exit from "../../assets/icons/exit.svg";

const ExitButton = ({ exitCheck = false }) => {
  const {wideScreen, setShowSideBar, updatePage} = useContext(SideBarContext);

  const [showAlert, setShowAlert] = useState(false);

  const handleExit = (exitCheck) => {
    exitCheck 
    ? setShowAlert(true)
    : updatePage(0, true)
  }

  return(
    <View className='w-fit h-fit'>
      <LeaveAlert showAlert={showAlert} setShowAlert={setShowAlert} />
      <TouchableHighlight className='w-8 h-8 rounded-lg'
      activeOpacity={0.9} onPress={()=>(handleExit(exitCheck))}>
        <View className='w-full h-full bg-buttonBg rounded-lg items-center justify-center'>
          <Exit width={30} height={30} stroke={'#85855B'} strokeWidth={3} />
        </View>
      </TouchableHighlight>
    </View>
  )
}

export default ExitButton