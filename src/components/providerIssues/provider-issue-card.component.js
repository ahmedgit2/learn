import {View, Text} from 'react-native';
import React from 'react';

export const ProviderIssueCard = ({provider}) => {
  const {id} = provider;
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};
