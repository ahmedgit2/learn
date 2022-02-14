import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailsScreen, SendBidScreen, SpecificScreen} from '../screens';
import {TopTabNav} from './topTabNavigation';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="home"
        component={TopTabNav}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="details"
        component={DetailsScreen}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="sendOffer"
        component={SendBidScreen}
      />
    </Stack.Navigator>
  );
};
