import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {AppNewText, AppText} from '../index';
import {styles} from './style';

export const AppButton = props => {
  const {title, style, textStyle, onPress, touchableOpacity, activeOpacity} =
    props;
  return (
    <View style={styles.container}>
      {touchableOpacity ? (
        <TouchableOpacity
          style={[styles.buttonStyle, style]}
          activeOpacity={activeOpacity || 0.5}
          onPress={onPress}>
          <AppNewText style={[styles.textStyle, textStyle]}>{title}</AppNewText>
        </TouchableOpacity>
      ) : (
        <RectButton style={[styles.buttonStyle, style]} onPress={onPress}>
          <AppNewText style={[styles.textStyle, textStyle]}>{title}</AppNewText>
        </RectButton>
      )}
    </View>
  );
};
