import React, { useContext, } from 'react';
import { SideBarContext } from '../pages/HomeControl';
import { TouchableOpacity, Alert } from 'react-native';

const ExitButton = ({ exitCheck = false }) => {
  const {wideScreen, setShowSideBar, updatePage} = useContext(SideBarContext);

  const handleExit = (exitCheck) => {
    exitCheck 
    ? Alert.alert(
      'Do you want to leave?', 
      'All unsaved changes will be lost.', 
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Leave', 
          onPress: () => updatePage(0)
        },
      ],
    {
      cancelable: true,
    })
    : updatePage(0);
  }

  return(
    <TouchableOpacity className='w-8 h-8 bg-buttonBg rounded-lg'
    activeOpacity={0.9} onPress={()=>(handleExit(exitCheck))}>

    </TouchableOpacity>
  )
}

export default ExitButton