import React from 'react';
import { useRoute } from '@react-navigation/native';
import { BidDetailsHeader } from '../components';
import { useGetBidDetails } from '../hooks';
import { AppLoading } from '../commons';

export const ProviderBidsDetailsHOC = () => {
  const { bidId } = useRoute().params;
  const { loading, data, error, totalBidsCount } = useGetBidDetails(bidId);
  console.log(first);
  if (loading) { return <AppLoading /> }
  else {
    return (
      <>
        <BidDetailsHeader id={ bidId } />
      </>
    );
  }
};
