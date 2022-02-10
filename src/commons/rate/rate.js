import React from 'react';
import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './style';

export const AppRate = props => {
  const {text, style, size} = props;
  return (
    <View style={[styles.containerStyle, style]}>
      <Text style={styles.textStyle}>{text}</Text>
      <AntDesign name={'star'} color={'#FFDF00'} size={size || 16} />
    </View>
  );
};
