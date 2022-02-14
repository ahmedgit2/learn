import React from 'react';
import {View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {AppNewText, AppText} from '../index';
import {styles} from './style';

export const AppButton = props => {
  const {title, style, textStyle, onPress} = props;
  return (
    <View style={styles.container}>
      <RectButton style={[styles.buttonStyle, style]} onPress={onPress}>
        <AppNewText style={[styles.textStyle, textStyle]}>{title}</AppNewText>
      </RectButton>
    </View>
  );
};
