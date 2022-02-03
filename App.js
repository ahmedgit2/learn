import {View, Text} from 'react-native';
import React from 'react';
import {SideMenu} from './learn/sideMenu';
import {NavigationContainer} from '@react-navigation/native';
import {AxiosLearning} from './learn/axios';
import {TestApi} from './src/screens';

export default function App() {
  //   return <AxiosLearning />;
  //   {
  //     //     <NavigationContainer>
  //     //   <SideMenu />
  //     // </NavigationContainer>
  //   }
  return (
    <>
      <TestApi />
    </>
  );
}
