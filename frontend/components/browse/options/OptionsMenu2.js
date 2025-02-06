import React, { useState, useContext} from 'react';
import { SideBarContext } from '../../pages/control/HomeControl';
import { View, TouchableHighlight } from 'react-native';
import TitleTextComponent from '../../text/TitleTextComponent';

const OptionsMenu2 = ({
  filterList, filterIndex, setFilterIndex,
  filterDir, filterDirIdx, shiftFilterDirIdx,
  showDropDown, setShowDropDown,
}) => {

  const {wideScreen, setShowSideBar, updatePage} = useContext(SideBarContext);
  
  const [dropDownButtonCSS, setDropDownButtonCSS] = useState(
    new Array(filterIndex).fill('bg-buttonBg').concat(
      ['bg-itemText'].concat(
        new Array(filterList.length - filterIndex - 1).fill('bg-buttonBg')
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
    const new_css = new Array(filterList.length).fill('bg-buttonBg');
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
            <TouchableHighlight className={`w-24 h-6 items-center justify-center rounded-full`}
            activeOpacity={0.9} onPress={()=>setShowDropDown(!showDropDown)}>
              <View className='w-full h-full items-center justify-center bg-itemText rounded-full'>
                <TitleTextComponent translate={true} size={'text-base'} css={'text-itemBgLight'}>
                  {filterList[filterIndex]}
                </TitleTextComponent>
              </View>
            </TouchableHighlight>
            {/* DropDown */}
            {
              showDropDown 
              ? <View className='absolute -bottom-40 z-10 left-0 w-24 h-40 py-2'>
                  <View className='flex-col w-24 h-fit bg-buttonBg rounded-xl'>
                    {filterList.map((item, index)=>(
                      <TouchableHighlight className={`w-24 h-7 items-center justify-center rounded-xl`}
                      activeOpacity={0.9} onPress={()=>updateDropDown(index)}>
                        <View className={`w-full h-full items-center justify-center ${dropDownButtonCSS[index]} rounded-xl`}>
                          <TitleTextComponent translate={true} size={'text-base'} css={dropDownText[index]}>
                            {item}
                          </TitleTextComponent>
                        </View>
                      </TouchableHighlight>
                    ))}
                  </View>
                </View>
              : null
            }
          </View>
          {
            wideScreen
            ? <TouchableHighlight className={`flex-row w-24 h-6 ml-4 items-center justify-center rounded-full`}
              activeOpacity={0.9} onPress={()=>shiftFilterDirIdx()}>
                <View className='w-full h-full items-center justify-center bg-itemText rounded-full'>
                  <TitleTextComponent translate={true} size={'text-base'} css={'text-itemBgLight'}>
                    {filterDir[filterDirIdx]}
                  </TitleTextComponent>
                </View>
              </TouchableHighlight>
            : <TouchableHighlight className={`flex-row w-12 h-6 ml-4 items-center justify-center rounded-full`}
              activeOpacity={0.9} onPress={()=>shiftFilterDirIdx()}>
                <View className='w-full h-full items-center justify-center bg-itemText rounded-full'>
                  <TitleTextComponent translate={true} size={'text-base'} css={'text-itemBgLight'}>
                    {filterDir[filterDirIdx]}
                  </TitleTextComponent>
                </View>
              </TouchableHighlight>
          }
        </View>
      </View>
      
    </View>
  )
}

export default OptionsMenu2