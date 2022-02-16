import React, {useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {AppButton, AppImage, AppNewText} from '../../commons';
import {formatDate} from '../../utils/formatDate';
import {styles as style} from './style';
import {
  AppDateTime,
  AppGrid,
  AppTextLogo,
  AppRate,
  AppText,
} from '../../commons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

export const ProviderBidsCard = ({bids, onPress}) => {
  const {client} = bids;

  const language = useSelector(state => state.auth.language);
  const styles = useMemo(() => style(language), [language]);

  const createDate = formatDate(bids.createdAt);
  const pickUpCity = `${bids.pickUpCity.name} - ${bids.pickUpCity.governorate.name}`;
  const dropOffCity = `${bids.dropOffCity.name} -${bids.dropOffCity.governorate.name}`;

  return (
    <AppGrid style={styles.cardGridStyle} onPress={onPress}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardTextContainerStyle}>
          <View style={styles.clientNameContainerStyle}>
            <AppRate text={client.rate} />
            {/* <AppText text={client.user.name} /> */}
            <AppNewText>{client.user.name}</AppNewText>
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
    </AppGrid>
  );
};
