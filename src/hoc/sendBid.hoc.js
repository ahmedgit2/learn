import React, { useRef, useState } from 'react';
import { ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useGetVehicles, usePostOffer } from '../hooks';
import { AppButton, AppLoading } from '../commons';
import {
  ClintCard,
  Header,
  VehiclesCard,
  InputCard,
  NotesCard,
} from '../components';

export const SendBidHOC = () => {
  const { data } = useRoute().params;

  providerId = 144;
  const orderBidId = data.id;
  const providerVehicle = useRef();
  const transportationPrice = useRef();
  const notes = useRef();

  const { post } = usePostOffer({
    orderBidId: orderBidId,
    transportationPrice: transportationPrice.current,
    providerVehicle: providerVehicle.current,
    notes: notes.current,
  });


  const vehicles = useGetVehicles(providerId);
  if (Object.keys(vehicles).length) {
    return (
      <ScrollView>
        <Header />
        <ClintCard data={ data } />
        <VehiclesCard data={ vehicles.data } passSelected={ (val) => providerVehicle.current = val } />
        <InputCard onChangeText={ (value) => transportationPrice.current = value } />
        <NotesCard onChangeText={ (value) => notes.current = value } />
        <AppButton onPress={ () => post() } title={ 'إرسال' } />
      </ScrollView>
    );
  } else {
    return <AppLoading />;
  }
};
