import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {AppLoading, AppText} from '../../commons';
import {ProviderBidsCard} from './provider-bids-card.component';
import {styles} from './style';

export const ProviderBidsHeader = props => {
  const {count} = props;
  if (!count) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.headerStyle}>
        <AppText text={`( ${count} ) طلب`} textSize={15} fontWeight={'bold'} />
        <AppText text={'أحدث الطلبات'} textSize={30} fontWeight={'bold'} />
      </View>
    );
  }
};
