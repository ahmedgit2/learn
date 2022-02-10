import React from 'react';
import {Image} from 'react-native';
import {styles} from './style';

export const AppImage = props => {
  const {style, source} = props;
  return <Image style={[styles.imageStyle, style]} source={source} />;
};
