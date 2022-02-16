import React from 'react';
import {Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {styles} from './style';

export const AppTextLogo = props => {
  const language = useSelector(state => state.auth.language);

  const {
    text,
    style,
    textSize = 16,
    textColor = '#666',
    logoSize = 20,
    logoColor = '#666',
    logoName = 'logo-android',
  } = props;
  return (
    <View
      style={[
        styles.containerStyle,
        language === 'en' && {flexDirection: 'row-reverse'},
        style,
      ]}>
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
