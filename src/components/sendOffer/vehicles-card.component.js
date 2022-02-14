import React, {useState} from 'react';
import {View} from 'react-native';

import {styles} from './style';
import {AppGrid, AppText} from '../../commons';
import {VehiclesSelect} from '.';

export const VehiclesCard = props => {
  const [pressed, setPressed] = useState(false);
  const {data} = props;

  return (
    <AppGrid style={styles.cardGridStyle}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.clientNameContainerStyle}>
          <View style={styles.vehivlesContainerStyle}>
            <AppText text={'المركبة'} fontWeight={'bold'} />
            <VehiclesSelect
              onPress={() => setPressed(!pressed)}
              data={data}
              isPress={pressed}
            />
          </View>
        </View>
      </View>
    </AppGrid>
  );
};
