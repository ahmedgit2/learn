import React from 'react';
import {ProviderBidsDetailsHOC} from '../../hoc';

export const DetailsScreen = ({id}) => {
  console.log('DetailsScreen', id);
  return <ProviderBidsDetailsHOC id={id} />;
};
