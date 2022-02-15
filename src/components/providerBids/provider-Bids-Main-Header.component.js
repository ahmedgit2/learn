import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {AppText} from '../../commons';
import {styles} from './style';

export const ProviderBidsHeader = props => {
  const {count} = props;

  return (
    <View style={styles.headerStyle}>
      <AppText text={`( ${count} ) طلب`} textSize={15} fontWeight={'bold'} />
      <AppText text={'أحدث الطلبات'} textSize={30} fontWeight={'bold'} />
    </View>
  );
};
