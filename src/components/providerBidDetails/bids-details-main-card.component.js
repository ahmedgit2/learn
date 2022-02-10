import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {AppGrid, AppLoading, AppRate, AppText} from '../../commons';
import {styles} from './style';
import {formatDate} from '../../utils/formatDate';

export const BidDetailsMainCard = props => {
  const {client, id} = props;
  const createDate = formatDate(bids.createdAt);
  const pickUpCity = `${bids.pickUpCity.name} - ${bids.pickUpCity.governorate.name}`;
  const dropOffCity = `${bids.dropOffCity.name} -${bids.dropOffCity.governorate.name}`;

  return (
    <AppGrid style={styles.cardGridStyle}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardTextContainerStyle}>
          <View style={styles.clientNameContainerStyle}>
            <AppRate text={client.rate} />
            <AppText text={client.user.name} />
          </View>
          <View style={styles.bidDateContainerStyle}>
            <AppDateTime text={createDate} />
          </View>
        </View>
        <AppImage source={{uri: client.user.profileImg.thumbnail}} />
      </View>
    </AppGrid>
  );
};
