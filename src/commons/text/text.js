import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './style';

export const AppText = props => {
  const {text, textColor = '#6E3CBC', textSize = 18, fontWeight, style} = props;
  return (
    <View style={[styles.containerStyle, style]}>
      <Text
        style={{color: textColor, fontSize: textSize, fontWeight: fontWeight}}>
        {text}{' '}
      </Text>
    </View>
  );
};
