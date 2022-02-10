import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';

export const AppGrid = props => {
  const {style} = props;
  return <View style={[styles.containerStyle, style]}>{props.children}</View>;
};
