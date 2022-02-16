import React from 'react';
import {View, Text} from 'react-native';
import {AppButton} from '../../commons';
import {styles} from './style';
import I18n from 'react-native-i18n';

export const HomeHeader = ({onPress}) => {
  return (
    <>
      <View style={styles.headerStyle}>
        <AppButton
          onPress={onPress}
          title={I18n.t('logout')}
          style={styles.buttonStyle}
        />
      </View>
    </>
  );
};
