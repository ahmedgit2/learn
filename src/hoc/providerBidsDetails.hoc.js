import React from 'react';
import {useRoute} from '@react-navigation/native';

import {useGetBidDetails} from '../hooks';
import {AppButton, AppLoading, AppText} from '../commons';
import {formatDate} from '../utils';
import {
  BidDetailsHeader,
  BidDetailsLocationCard,
  BidDetailsMainCard,
  BidDetailsCard,
} from '../components';

export const ProviderBidsDetailsHOC = () => {
  const {bidId} = useRoute().params;
  const {loading, data, error} = useGetBidDetails(bidId);

  if (Object.keys(data).length) {
    const executionDate = formatDate(data.executionDate);
    const vehicleType = data.vehicleTypes.map(res => res.name);
    const serviceType =
      data.serviceType == 'HOUR' ? 'بالساعة' : data.serviceType;
    return (
      <>
        <BidDetailsHeader id={bidId} />
        <BidDetailsMainCard data={data} />
        <BidDetailsLocationCard data={data} />
        <BidDetailsCard title={'نوع المركبة'} text={vehicleType} />
        <BidDetailsCard title={'الخدمة المطلوبة'} text={serviceType} />
        <BidDetailsCard title={'تاريخ التنفيذ'} text={executionDate} />
      </>
    );
  } else {
    return <AppLoading />;
  }
};
