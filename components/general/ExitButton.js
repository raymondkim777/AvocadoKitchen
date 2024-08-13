import React, { useContext, } from 'react';
import { SideBarContext } from '../pages/HomeControl';
import { TouchableOpacity } from 'react-native';

const ExitButton = ({ navigation }) => {
  const {wideScreen, setShowSideBar, updatePage} = useContext(SideBarContext);
  return(
    <TouchableOpacity className='w-8 h-8 bg-buttonBg rounded-lg'
    activeOpacity={0.9} onPress={()=>(updatePage(0))}>

    </TouchableOpacity>
  )
}

export default ExitButton