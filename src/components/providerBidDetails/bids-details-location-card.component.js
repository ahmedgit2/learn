import React from 'react';
import {View} from 'react-native';

import {AppImage} from '../../commons';
import {formatDate} from '../../utils/formatDate';
import {styles} from './style';
import {
  AppButton,
  AppDateTime,
  AppGrid,
  AppTextLogo,
  AppRate,
  AppText,
} from '../../commons';

export const BidDetailsLocationCard = ({bids}) => {
  const {client, id} = bids;
  const createDate = formatDate(bids.createdAt);
  const pickUpCity = `${bids.pickUpCity.name} - ${bids.pickUpCity.governorate.name}`;
  const dropOffCity = `${bids.dropOffCity.name} -${bids.dropOffCity.governorate.name}`;

  return (
    <AppGrid style={styles.cardGridStyle}>
      <AppButton>
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
        <View style={styles.bidLocationContainerStyle}>
          <AppTextLogo
            text={pickUpCity}
            logoName={'location-exit'}
            logoColor={'#8BDB81'}
          />
          <AppTextLogo
            text={dropOffCity}
            logoName={'location-enter'}
            logoColor={'#FC4F4F'}
          />
        </View>
      </AppButton>
    </AppGrid>
  );
};
