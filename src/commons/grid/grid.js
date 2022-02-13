import React, {Component} from 'react';
import {View, Pressable} from 'react-native';
import {styles} from './style';

export const AppGrid = props => {
  const {style, onPress} = props;
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.containerStyle, style]}>{props.children}</View>
    </Pressable>
  );
};
