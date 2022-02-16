import React from 'react';
import {View, Text} from 'react-native';
import {AppButton} from '../../commons';
import {styles} from './style';

export const HomeHeader = ({onPress}) => {
  return (
    <>
      <View style={styles.headerStyle}>
        <AppButton
          onPress={onPress}
          title="Log Out"
          style={styles.buttonStyle}
        />
      </View>
    </>
  );
};
