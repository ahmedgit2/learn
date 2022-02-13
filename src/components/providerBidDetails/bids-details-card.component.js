import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {AppGrid, AppText} from '../../commons';

export const BidDetailsCard = ({title, text}) => {
  return (
    <AppGrid style={styles.cardGridStyle}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.bidDetailsContainerStyle}>
          <AppText text={title} fontWeight={'bold'} />
          <AppText text={text} textColor={'#7267CB'} />
        </View>
      </View>
    </AppGrid>
  );
};
