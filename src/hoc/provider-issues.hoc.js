import React from 'react';
import {useFindProviderIssues} from '../hooks';
import {AppLoading} from '../commons';
import {ProviderListIssue} from '../components';

export const ProviderIssuesHOC = props => {
  const {loading, data, error} = useFindProviderIssues();

  if (loading) return <AppLoading color={'green'} />;
  return (
    <>
      <ProviderListIssue data={data} />
    </>
  );
};
