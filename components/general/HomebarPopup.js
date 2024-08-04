import React from 'react';
import Modal from 'react-native-modal';
import { View } from 'react-native';
import Browse from '../pages/Browse';
import AddMealPage from '../pages/AddMealPage';

const HomeBarPopup = ({ popup, setPopup }) => {

  const handleCloseModal = (index) => {
    const newPopup = [...popup];
    newPopup[index] = false; 
    setPopup(newPopup);
  };

  return (
    <>
      {popup.map((isVisible, index) => {
        return (
          <Modal
            className='shrink w-full h-full mx-0 mt-6'
            key={`modal-${index}`}
            isVisible={isVisible}
            animationType="slide"
            onSwipeComplete={() => handleCloseModal(index)}
            swipeDirection="down"  
          >
            <View className='w-full h-full'>
            {index === 0 ? (
                <Browse />
            ) : index === 1 ? (
                <AddMealPage />
            ) : null}
            </View>
          </Modal>
        );
      })}
    </>
  );
};

export default HomeBarPopup;
