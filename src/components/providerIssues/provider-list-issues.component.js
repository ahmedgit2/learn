import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {ProviderIssueCard} from '.';

export const ProviderListIssue = props => {
  const {data} = props;
  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item}) => {
          return <ProviderIssueCard provider={item} />;
        }}
      />
    </>
  );
};
