import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack, HomeStack} from '.';
import {useSelector} from 'react-redux';

export const AppContainer = () => {
  const authKey = useSelector(state => state.auth.authKey);

  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};
