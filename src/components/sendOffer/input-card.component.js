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
        <Input
          onChangeText={onChangeText}
          placeholder={'  تقديم عرض *'}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputCardText}>
        <AppNewText> 0 جم</AppNewText>
        <AppNewText>+ 15% قيمة مضافة</AppNewText>
      </View>
      <View style={styles.inputCardText}>
        <AppNewText> 0 جم</AppNewText>
        <AppNewText>إجمالي ما سيدفعة العميل</AppNewText>
      </View>
      <View style={styles.inputCardText}>
        <AppNewText> 0 جم</AppNewText>
        <AppNewText>صافي الربح</AppNewText>
      </View>
    </AppGrid>
  );
};
