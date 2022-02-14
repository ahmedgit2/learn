import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeStack} from './src/navigator';
import {SendBidScreen} from './src/screens';

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
  //   return <SendBidScreen />;
}
