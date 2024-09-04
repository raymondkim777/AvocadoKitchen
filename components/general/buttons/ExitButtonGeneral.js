import React, { useState, useContext, } from 'react';
import { View, TouchableHighlight } from 'react-native';
import AlertCheck from '../misc/AlertCheck';
import Exit from "../../../assets/icons/exit.svg";

const ExitButtonGeneral = ({ handleMainFunction, exitCheck = false }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleExitPress = (exitCheck) => {
    exitCheck 
    ? setShowAlert(true)
    : handleMainFunction()
  }

  const handleAlertLeave = () => {
    setShowAlert(false);
    handleMainFunction();
  }

  return(
    <View className='w-fit h-fit'>
      <AlertCheck 
      showModal={showAlert} 
      setShowModal={setShowAlert}
      handleMainFunction={handleAlertLeave}
      />
      <TouchableHighlight className='w-8 h-8 rounded-lg'
      activeOpacity={0.9} onPress={()=>(handleExitPress(exitCheck))}>
        <View className='w-full h-full bg-buttonBg rounded-lg items-center justify-center'>
          <Exit width={30} height={30} stroke={'#85855B'} strokeWidth={3} />
        </View>
      </TouchableHighlight>
    </View>
  )
}

export default ExitButtonGeneral