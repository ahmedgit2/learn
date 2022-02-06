import React, {useRef} from 'react';
import {useFindProviderBids} from '../hooks';

import {AppLoading} from '../commons';
import {ProviderListIssue} from '../components';
import {useFeachNextPage} from '../hooks/useFeachNextPage';
import {useEffect} from 'react/cjs/react.development';

export const ProviderBidsHOC = () => {
  const page = useRef(1);
  const {loading, data, error, getBids} = useFindProviderBids(page.current);

  console.log('ProviderBidsHOC * loading -->', loading);
  console.log('ProviderBidsHOC * data -->', data);
  console.log('ProviderBidsHOC * error -->', error);
  console.log('ProviderBidsHOC * getBids -->', getBids);

  if (loading) return <AppLoading color={'green'} />;

  return (
    <>
      <ProviderListIssue data={data} />
    </>
  );
};
