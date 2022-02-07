import React, {useEffect, useState} from 'react';
import {useFindProviderBids} from '../hooks';

import {AppLoading} from '../commons';
import {ProviderListIssue} from '../components';
import {Button, Text} from 'react-native';

export const ProviderBidsHOC = () => {
  const {loading, data, error, getBids} = useFindProviderBids();

  useEffect(() => {
    getBids();
  }, []);

  if (loading) return <AppLoading color={'green'} />;
  else if (error) return <Text>{error}</Text>;
  else
    return (
      <>
        <Button title="refresh" onPress={() => {}} />
        <ProviderListIssue data={data} />
        <Button title="next" onPress={() => {}} />
      </>
    );
};
