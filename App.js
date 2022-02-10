import {View, Text} from 'react-native';
import React from 'react';
import {SideMenu} from './learn/sideMenu';
import {NavigationContainer} from '@react-navigation/native';
import {AxiosLearning} from './learn/axios';
import {DetailsScreen, HomeScreen, TestApi} from './src/screens';
import {HomeStack} from './src/navigator';

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
