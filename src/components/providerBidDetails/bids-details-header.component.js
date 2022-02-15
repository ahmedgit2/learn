import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {AppButton, AppGrid, AppLoading, AppRate, AppText} from '../../commons';
import {styles} from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export const BidDetailsHeader = ({id}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerStyle}>
      <Pressable
        style={styles.backButtonStyle}
        onPress={() => navigation.goBack()}>
        <Ionicons name={'chevron-forward'} color={'#686'} size={35} />
      </Pressable>
      <AppText text={`طلب عرض سعر (${id})`} textSize={22} fontWeight={'bold'} />
    </View>
  );
};
