import React, {useEffect, useRef, useState} from 'react';
import {BidDetailsHeader} from '../components';
import {useGetBidDetails} from '../hooks';

export const ProviderBidsDetailsHOC = ({id}) => {
  const {loading, data, error, totalBidsCount} = useGetBidDetails();
  return (
    <>
      <BidDetailsHeader id={id} />
    </>
  );
};
