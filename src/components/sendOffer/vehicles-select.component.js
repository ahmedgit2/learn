import React, {useState} from 'react';
import {View} from 'react-native';
import {ClickableText} from '../../commons';
import {styles} from './style';

export const VehiclesSelect = props => {
  const {passSelected, data} = props;
  const [selected, setSelected] = useState();
  console.log('datatataaaaa---->', data);
  return (
    <View style={styles.vehivlesSelectStyle}>
      {data?.map(item => (
        <View key={item.id} style={{marginTop: 10}}>
          <ClickableText
            selected={selected}
            onPress={() => {
              setSelected(item.vehicleModel.name);
              passSelected(item.id);
            }}>
            {item.vehicleModel.name}
          </ClickableText>
        </View>
      ))}
    </View>
  );
};
