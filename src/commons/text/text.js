import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './style';

export const AppText = props => {
  const {text, style} = props;
  return (
    <View style={styles.containerStyle}>
      <Text style={[styles.textStyle, style]}>{text} </Text>
    </View>
  );
};
