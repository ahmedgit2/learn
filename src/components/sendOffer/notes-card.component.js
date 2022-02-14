import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {AppGrid, AppImage, AppRate, AppText, Input} from '../../commons';

export const NotesCard = ({title, text}) => {
  //   const {data} = props;

  return (
    <AppGrid style={styles.cardGridStyle}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardTextContainerStyle}>
          <View style={styles.clientNameContainerStyle}>
            <AppText text={'ملاحظات (اختياري)'} />
          </View>

          <View style={styles.bidDateContainerStyle}>
            <Input />
          </View>
        </View>
      </View>
    </AppGrid>
  );
};
