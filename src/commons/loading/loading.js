import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from './styles';
export const AppLoading = props => {
  const {size, color, style, containerStyle} = props;
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <ActivityIndicator
        size={size || 'large'}
        style={[styles.style, style]}
        color={color || 'red'}
      />
    </View>
  );
};
