import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './style';
export const AppNewText = props => {
  const {children, style, containerStyle, ...rest} = props;
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <Text style={[styles.textStyle, style]} {...rest}>
        {children}
      </Text>
    </View>
  );
};
