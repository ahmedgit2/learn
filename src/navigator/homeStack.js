import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DetailsScreen,
  HomeScreen,
  LoginScreen,
  SendBidScreen,
} from '../screens';
import {TopTabNav} from './topTabNavigation';
import {store} from '../store/store';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  const authKey = useSelector(state => state.auth.authKey);

  return (
    <Stack.Navigator initialRouteName={authKey ? 'home' : 'login'}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="home"
        component={HomeScreen}
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
