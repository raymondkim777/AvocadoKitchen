import React, { useState, useContext, } from 'react';
import { SideBarContext } from '../pages/HomeControl';
import { View, TouchableHighlight } from 'react-native';
import AlertCheck from './AlertCheck';
import Exit from "../../assets/icons/exit.svg";

const ExitButton = ({ exitCheck = false }) => {
  const {wideScreen, setShowSideBar, updatePage} = useContext(SideBarContext);

  const [showAlert, setShowAlert] = useState(false);

  const handleExitPress = (exitCheck) => {
    exitCheck 
    ? setShowAlert(true)
    : updatePage(0, true)
  }

  const handleAlertLeave = () => {
    setShowAlert(false);
    updatePage(0, true);
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

export default ExitButton