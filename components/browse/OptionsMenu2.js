import React, { useState, useContext} from 'react';
import { SideBarContext } from '../pages/HomeControl';
import { View, Text, Pressable, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import TitleTextComponent from '../text/TitleTextComponent';
import { assertEasingIsWorklet } from 'react-native-reanimated/lib/typescript/animation/util';

const OptionsMenu2 = ({
  filterList, filterIndex, setFilterIndex,
  filterDir, filterDirIdx, shiftFilterDirIdx,
  showDropDown, setShowDropDown,
}) => {

  const {wideScreen, setShowSideBar, updatePage} = useContext(SideBarContext);
  
  const [dropDownButtonCSS, setDropDownButtonCSS] = useState(
    new Array(filterIndex).fill('').concat(
      ['bg-itemText'].concat(
        new Array(filterList.length - filterIndex - 1).fill('')
      )
    )
  );
  const [dropDownText, setDropDownText] = useState(
    new Array(filterIndex).fill('text-itemText').concat(
      ['text-itemBgLight'].concat(
        new Array(filterList.length - filterIndex - 1).fill('text-itemText')
      )
    )
  );
  const updateButtonCSS = (index) => {
    const new_css = new Array(filterList.length).fill('');
    new_css[index] = 'bg-itemText';
    setDropDownButtonCSS(new_css);
  }
  const updateTextCSS = (index) => {
    const new_text = new Array(filterList.length).fill('text-itemText');
    new_text[index] = 'text-itemBgLight';
    setDropDownText(new_text);
  }
  const updateDropDown = (index) => {
    setFilterIndex(index);
    updateButtonCSS(index);
    updateTextCSS(index);
    setShowDropDown(!showDropDown);
  }

  return(
    <View className={`w-full h-8 mt-3`}>
      {/* More Search Options */}
      <View className='flex-row w-full h-8 items-center justify-center px-3 bg-buttonBg rounded-lg'>
        <TitleTextComponent translate={true} size={'text-base'} css={'text-itemText'}>
          Filter By
        </TitleTextComponent>
        <TitleTextComponent size={'text-base'} css={'text-itemText'}>
          :
        </TitleTextComponent>
        <View className='flex-row shrink w-full h-fit items-center justify-center'>
          <View className='relative z-0 w-fit h-fit'>
            <TouchableOpacity className={`w-24 h-6 items-center justify-center rounded-full bg-itemText`}
            activeOpacity={1} onPress={()=>setShowDropDown(!showDropDown)}>
              <TitleTextComponent translate={true} size={'text-base'} css={'text-itemBgLight'}>
                {filterList[filterIndex]}
              </TitleTextComponent>
            </TouchableOpacity>
            {/* DropDown */}
            {
              showDropDown 
              ? <View className='absolute -bottom-40 z-10 left-0 w-24 h-40 py-2'>
                  <View className='flex-col w-24 h-fit bg-buttonBg rounded-xl'>
                    {filterList.map((item, index)=>(
                      <TouchableOpacity className={`w-24 h-7 items-center justify-center rounded-xl ${dropDownButtonCSS[index]}`}
                      activeOpacity={1} onPress={()=>updateDropDown(index)}>
                        <TitleTextComponent translate={true} size={'text-base'} css={dropDownText[index]}>
                          {item}
                        </TitleTextComponent>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              : null
            }
          </View>
          {
            wideScreen
            ? <TouchableOpacity className={`flex-row w-24 h-6 ml-4 items-center justify-center rounded-full bg-itemText`}
              activeOpacity={1} onPress={()=>shiftFilterDirIdx()}>
                <TitleTextComponent translate={true} size={'text-base'} css={'text-itemBgLight'}>
                  {filterDir[filterDirIdx]}
                </TitleTextComponent>
              </TouchableOpacity>
            : <TouchableOpacity className={`flex-row w-12 h-6 ml-4 items-center justify-center rounded-full bg-itemText`}
              activeOpacity={1} onPress={()=>shiftFilterDirIdx()}>
                <TitleTextComponent translate={true} size={'text-base'} css={'text-itemBgLight'}>
                  {filterDir[filterDirIdx]}
                </TitleTextComponent>
              </TouchableOpacity>
          }
        </View>
      </View>
      
    </View>
  )
}

export default OptionsMenu2