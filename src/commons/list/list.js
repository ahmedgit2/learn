import {View, Text, FlatList} from 'react-native';
import React from 'react';

export const AppList = props => {
  const {data, onEndReached} = props;
  return (
    <>
      <FlatList
        data={data}
        onEndReached={onEndReached}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item}) => {
          return <ProviderIssueCard provider={item} />;
        }}
      />
    </>
  );
};
