import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {AppDateTime, AppGrid, AppImage, AppRate, AppText} from '../../commons';
import {styles} from './style';
import {howManyDays} from '../../utils';

export const BidDetailsMainCard = props => {
  const {data} = props;
  const status = data.status == 'PENDING' ? 'قيد الإنتظار' : 'تم';
  const createDay = howManyDays(data.createdAt);
  return (
    <AppGrid style={styles.cardGridStyle}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardTextContainerStyle}>
          <View style={styles.clientNameContainerStyle}>
            <AppRate text={data.client.rate} />
            <AppText text={data.client.user.name} />
          </View>

          <View style={styles.bidDateContainerStyle}>
            <AppText textSize={14} textColor={'#999'} text={createDay} />
            <AppText
              style={styles.bidStatusStyle}
              textSize={14}
              textColor={'#FE994A'}
              text={status}
            />
          </View>
        </View>
        <AppImage source={{uri: data.client.user.profileImg.thumbnail}} />
      </View>
    </AppGrid>
  );
};
