import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {AppText} from '../index';
import {styles} from './style';

export const AppButton = props => {
  const {title, style, onPress} = props;
  return (
    <RectButton
      title={title}
      style={[styles.buttonStyle, style]}
      onPress={onPress}
    />
  );
};
