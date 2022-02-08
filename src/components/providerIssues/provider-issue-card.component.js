import {View, Text} from 'react-native';
import React from 'react';

export const ProviderIssueCard = ({provider}) => {
  const {id} = provider;
  return (
    <View
      style={{
        height: 60,
        backgroundColor: 'rgba(0,0,0,0.3)',
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        borderRadius: 15,
      }}>
      <Text>{id}</Text>
    </View>
  );
};
