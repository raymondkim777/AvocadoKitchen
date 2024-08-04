import ModalDropdown from 'react-native-modal-dropdown';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import 'intl-pluralrules';
import '../text/i18n'


const MealplanDropdown = ({options}) => {
    const {t, i18n} = useTranslation();
    const translatedOptions = options.map(option => t(option));
    const currentLanguage = i18n.language;
    const [selectedIndex,setSelectedIndex] = useState(0);
    return(
    <ModalDropdown
        className="w-24 h-8 ml-4 bg-itemBgLight rounded-lg flex justify-center items-center"
        options={translatedOptions}  
        defaultValue={translatedOptions[0]} 
        initialScrollIndex={selectedIndex >= 0 ? selectedIndex : 0}
        textStyle={{
            textAlign: 'center',
            color: '#000',
        }}  
        dropdownStyle={{
            width: 96,
            height: 96,
            borderRadius: 8, 
            marginTop: 7,
            backgroundColor:'#F8FEE8',
            overflow: 'hidden', 
            borderWidth: 0,
            
        }}
        dropdownTextStyle={{
            textAlign: 'center',
            backgroundColor:'#F8FEE8',
            borderWidth: 0,
            
        }}
        onSelect={(index, value) => {
            setSelectedIndex(index);
        }}
    />
    );

}

export default MealplanDropdown;