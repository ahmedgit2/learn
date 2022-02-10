import React from 'react';
import {Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './style';

export const AppTextLogo = props => {
  const {
    text,
    style,
    textSize = 16,
    textColor = '#7267CB',
    logoSize = 20,
    logoColor = '#7267CB',
    logoName = 'logo-android',
  } = props;
  return (
    <View style={[styles.containerStyle, style]}>
      <Text style={[styles.textStyle, {color: textColor, fontSize: textSize}]}>
        {text}
      </Text>
      <MaterialCommunityIcons
        name={logoName}
        color={logoColor}
        size={logoSize}
      />
    </View>
  );
};
