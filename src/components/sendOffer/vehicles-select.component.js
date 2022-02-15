import React, { useState } from 'react';
import { View } from 'react-native';
import { ClickableText } from '../../commons';
import { styles } from './style';

export const VehiclesSelect = props => {
  const { passSelected, data } = props;
  const [ selected, setSelected ] = useState('');
  return (
    <View style={ styles.vehivlesSelectStyle }>
      { Object.keys(data).map(x => (
        <View
          key={ data[ x ].vehicleModel.id }
          style={ { marginTop: 10 } }>
          <ClickableText
            selected={ selected }
            onPress={ () => {
              setSelected(data[ x ].vehicleModel.name);
              passSelected(data[ x ].vehicleModel.name);
            } }
          >
            { data[ x ].vehicleModel.name }
          </ClickableText>
        </View>
      )) }
    </View>
  );
};
