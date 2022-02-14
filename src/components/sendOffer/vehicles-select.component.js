import React, {useState} from 'react';
import {View} from 'react-native';
import {ClickableText} from '../../commons';
import {styles} from './style';

export const VehiclesSelect = props => {
  const {isPress, data, onPress} = props;
  return (
    <View style={styles.vehivlesSelectStyle}>
      {Object.keys(data).map(x => (
        <View style={{marginTop: 10}}>
          <ClickableText onPress={onPress} isPress={isPress}>
            {data[x].vehicleModel.name}
          </ClickableText>
        </View>
      ))}
    </View>
  );
};
