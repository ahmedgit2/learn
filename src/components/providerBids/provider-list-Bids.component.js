import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {AppLoading} from '../../commons';
import {ProviderBidsCard} from './provider-bids-card.component';
import {useNavigation} from '@react-navigation/native';

export const ProviderListBids = props => {
  const {loading, data, refresh, refreshing, fetchMore} = props;
  const navigation = useNavigation();
  console.log('DetailsScreen', data);

  return (
    <FlatList
      data={data}
      refreshing={refresh}
      onRefresh={refreshing}
      onEndReached={fetchMore}
      keyExtractor={(item, index) => item.id.toString()}
      ListFooterComponent={() => loading && <AppLoading />}
      renderItem={({item}) => (
        <ProviderBidsCard
          bids={item}
          onPress={() =>
            navigation.navigate('details', {id: item?.id, text: 'text'})
          }
        />
      )}
    />
  );
};
