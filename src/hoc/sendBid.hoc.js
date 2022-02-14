import React, {useRef} from 'react';
import {useRoute} from '@react-navigation/native';

import {useGetBidDetails, useGetVehicles, usePostOffer} from '../hooks';
import {AppButton, AppLoading, AppText, ERRORModal} from '../commons';
import {formatDate} from '../utils';
import {
  ClintCard,
  Header,
  VehiclesCard,
  InputCard,
  NotesCard,
} from '../components';

export const SendBidHOC = () => {
  const {data} = useRoute().params;

  providerId = 144;
  const orderBidId = data.id;
  const providerVehicle = useRef();
  const transportationPrice = useRef();
  const notes = useRef();

  const {error, loading, post} = usePostOffer({
    orderBidId: orderBidId,
    transportationPrice: transportationPrice.current,
    providerVehicle: providerVehicle.current,
    notes: notes.current,
  });

  const vehicles = useGetVehicles(providerId);
  if (Object.keys(vehicles).length) {
    return (
      <>
        <Header />
        <ClintCard data={data} />
        <VehiclesCard data={vehicles.data} />
        <InputCard />
        <NotesCard />
        <AppButton title={'إرسال'} />
      </>
    );
  } else {
    return <AppLoading />;
  }
};
