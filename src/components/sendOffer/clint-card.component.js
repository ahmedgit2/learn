import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {AppGrid, AppImage, AppRate, AppText} from '../../commons';
import {howManyDays} from '../../utils';

export const ClintCard = props => {
  const {data} = props;
  const createDay = howManyDays(data.createdAt);
  const status = data.status == 'PENDING' ? 'قيد الإنتظار' : 'تم';

  return (
    <AppGrid style={styles.cardGridStyle}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardTextContainerStyle}>
          <View style={styles.clientNameContainerStyle}>
            <AppRate text={data.client.rate} />
            <AppText text={data.client.user.name} />
          </View>

          <View style={styles.bidDateContainerStyle}>
            <AppText textSize={14} textColor={'#98BAE7'} text={createDay} />
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
