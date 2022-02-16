import {View, Text} from 'react-native';
import React from 'react';
import {HomeHeader} from '../components';
import {useDispatch} from 'react-redux';
import {TopTabNav} from '../navigator/topTabNavigation';
import {setKey} from '../slices/authorizationSlice';
import {useNavigation} from '@react-navigation/native';

export const HomeScreenHOC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <>
      <HomeHeader
        onPress={() => {
          dispatch(setKey(''));
          navigation.replace('login');
        }}
      />
      <TopTabNav />
    </>
  );
};
