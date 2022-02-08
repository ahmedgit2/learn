import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {Text, View, Pressable} from 'react-native';
import {AppText} from '../index';
import {styles} from './style';

export const AppButton = props => {
  const {text, style, onPress} = props;
  return (
    <>
      <RectButton style={[styles.buttonStyle, style]} onPress={onPress}>
        <AppText text={text} />
      </RectButton>
    </>
  );
};
