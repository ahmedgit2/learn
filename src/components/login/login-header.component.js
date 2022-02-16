import React from 'react';
import {View, Text} from 'react-native';
import {AppButton, AppNewText} from '../../commons';
import {styles} from './style';

export const LoginHeader = props => {
  const {language, onPress} = props;
  let lang =
    language == 'ar'
      ? 'اللغة الحالية :   العربية'
      : 'Current language is : English';
  return (
    <>
      <View style={styles.headerStyle}>
        <AppNewText style={styles.textStyle}>{lang}</AppNewText>
        <AppButton
          onPress={onPress}
          title="Ar / En"
          style={styles.buttonStyle}
        />
      </View>
    </>
  );
};
