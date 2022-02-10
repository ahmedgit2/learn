import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {AppButton, AppGrid, AppLoading, AppRate, AppText} from '../../commons';
import {styles} from './style';
import {formatDate} from '../../utils/formatDate';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export const BidDetailsHeader = ({id}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerStyle}>
      <AppButton
        style={styles.backButtonStyle}
        onPress={() => navigation.goBack()}>
        <Ionicons name={'chevron-forward'} color={'#7267CB'} size={35} />
      </AppButton>
      <AppText text={`(${id}) طلب عرض سعر`} textSize={22} fontWeight={'bold'} />
    </View>
  );
};
