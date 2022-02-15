import React, {useState} from 'react';
import {View} from 'react-native';

import {styles} from './style';
import {AppGrid, AppText} from '../../commons';
import {VehiclesSelect} from '.';

export const VehiclesCard = props => {
  const {data, passSelected} = props;
  console.log('VehiclesCard---------->', data);
  return (
    <AppGrid style={styles.cardGridStyle}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.clientNameContainerStyle}>
          <View style={styles.vehivlesContainerStyle}>
            <AppText text={'المركبة'} fontWeight={'bold'} />
            <VehiclesSelect passSelected={passSelected} data={data} />
          </View>
        </View>
      </View>
    </AppGrid>
  );
};
