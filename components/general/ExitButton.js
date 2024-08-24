import React, { useState, useContext, } from 'react';
import { SideBarContext } from '../pages/HomeControl';
import { View, TouchableOpacity } from 'react-native';
import LeaveAlert from './LeaveAlert';

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
      <TouchableOpacity className='w-8 h-8 bg-buttonBg rounded-lg'
      activeOpacity={0.9} onPress={()=>(handleExit(exitCheck))}>

      </TouchableOpacity>
    </View>
  )
}

export default ExitButton