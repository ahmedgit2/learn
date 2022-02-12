import React from 'react';
import { AppLoading } from '../commons';
import { ProviderBidsHeader } from '../components/providerBids/provider-Bids-Main-Header.component';
import { ProviderListBids } from '../components/providerBids/provider-list-Bids.component';
import { useGetProviderBids } from '../hooks';

export const ProviderBidsHOC = () => {
  const { loading, data, error, totalBidsCount, refresh, refreshing, fetchMore } =
    useGetProviderBids();
  if (data) {
    return (
      <>
        <ProviderBidsHeader count={ totalBidsCount } />
        <ProviderListBids
          loading={ loading }
          data={ data }
          refresh={ refresh }
          refreshing={ refreshing }
          fetchMore={ fetchMore }
        />
      </>
    );
  } else {
    return <AppLoading />
  }
};
