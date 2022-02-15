import React from 'react';
import {Text, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {styles} from './style';

export const AppDateTime = props => {
  const {text, style, size} = props;
  return (
    <View style={[styles.containerStyle, style]}>
      <Text style={styles.textStyle}>{text}</Text>
      <Fontisto name={'date'} color={'#999'} size={size || 16} />
    </View>
  );
};
