import React, {useEffect, useRef, useState} from 'react';
import {useGetProviderBids, useGetProviderBidsNextPage} from '../hooks';

import {AppLoading, AppText, AppButton} from '../commons';
import {ProviderListIssue} from '../components';

export const ProviderBidsHOC = () => {
  const {loading, data, error, fetchMore} = useGetProviderBids();

  if (loading) return <AppLoading color={'green'} />;
  if (error) return <AppText>{error}</AppText>;
  //   if (data.length) {  }

  return (
    <>
      <AppButton
        text="refresh"
        onPress={() => {
          //   setPage(() => 1);
        }}
      />
      <ProviderListIssue data={data} fetchMore={fetchMore} />

      <AppButton
        text="next"
        //   onPress={() => setPage(page + 1)}
      />
    </>
  );
};
