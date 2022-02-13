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

export const BidDetailsLocationCard = props => {
  const {data} = props;
  const title = `${data.pickUpCity.governorate.name} - ${data.dropOffCity.governorate.name}`;
  const pickUpCity = `${data.pickUpCity.name} - ${data.pickUpCity.governorate.name}`;
  const dropOffCity = `${data.dropOffCity.name} -${data.dropOffCity.governorate.name}`;

  return (
    <AppGrid style={styles.cardGridStyle}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.bidLocationContainerStyle}>
          <AppText text={title} fontWeight={'bold'} />
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
      </View>
    </AppGrid>
  );
};
