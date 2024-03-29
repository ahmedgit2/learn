import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {ProviderIssueCard} from '.';

export const ProviderListIssue = props => {
  const {data, fetchMore} = props;
  return (
    <>
      <FlatList
        data={data}
        onEndReached={fetchMore}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item}) => {
          return <ProviderIssueCard provider={item} />;
        }}
      />
    </>
  );
};
