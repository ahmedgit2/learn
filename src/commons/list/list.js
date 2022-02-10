import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {styles} from './style';

export const AppList = props => {
  const {
    style,
    data,
    onRefresh,
    refreshing,
    onEndReached,
    ListFooterComponent,
    ListFooterComponentStyle,
    ...rest
  } = props;
  return (
    <FlatList
      contentContainerStyle={[styles.containerStyle, style]}
      data={data}
      onRefresh={onRefresh}
      refreshing={refreshing}
      onEndReached={onEndReached}
      ListFooterComponent={ListFooterComponent}
      ListFooterComponentStyle={ListFooterComponentStyle}
      keyExtractor={(item, index) => item.id.toString()}
      {...rest}
    />
  );
};
