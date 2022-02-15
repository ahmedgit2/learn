import React from 'react';
import {Text, Pressable, View} from 'react-native';

import Modal from 'react-native-modal';
import {AppButton, AppGrid, AppText} from '..';

import {ModalStyle} from './style';

export function ERRORModal({error, Visible, onBack, onPress, onClose}) {
  return (
    <Modal
      transparent={true}
      animationIn={'slideInUp'}
      animationInTiming={500}
      animationOutTiming={200}
      onDismiss={onClose}
      isVisible={Visible}
      backdropOpacity={0.4}
      onBackdropPress={onClose}>
      <AppGrid style={ModalStyle.centeredView}>
        <AppText text={error} style={ModalStyle.modalText} />
        <AppButton
          touchableOpacity
          title={'متابعة'}
          style={ModalStyle.button}
          onPress={onClose}
        />
      </AppGrid>
    </Modal>
  );
}
