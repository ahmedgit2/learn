import React, {useState} from 'react';
import {View} from 'react-native';

import {styles} from './style';
import {AppGrid, AppNewText, AppText, Input} from '../../commons';
import {VehiclesSelect} from '.';

export const InputCard = props => {
  const {errors, multiline, onChangeText, numberOfLines, ...rest} = props;

  return (
    <AppGrid style={styles.cardGridStyle}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.clientNameContainerStyle}>
          <Input onChangeText={onChangeText} placeholder={'  تقديم عرض *'} />
        </View>
      </View>
      <View style={styles.inputCard}>
        <View style={styles.inputCardText}>
          <AppNewText>dd</AppNewText>
          <AppNewText>CC</AppNewText>
        </View>
        <View style={styles.inputCardText}>
          <AppNewText>dd</AppNewText>
          <AppNewText>CC</AppNewText>
        </View>
        <View style={styles.inputCardText}>
          <AppNewText>dd</AppNewText>
          <AppNewText>CC</AppNewText>
        </View>
      </View>
    </AppGrid>
  );
};
