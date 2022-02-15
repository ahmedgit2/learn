import {View, Text} from 'react-native';
import React from 'react';
import {HomeHeader} from '../components';
import {useSelector, useDispatch} from 'react-redux';
import {setLanguage} from '../slices/authorizationSlice';
import {TopTabNav} from '../navigator/topTabNavigation';

export const HomeScreenHOC = () => {
  const language = useSelector(state => state.authorization.language);
  const dispatch = useDispatch();

  const toggleLang = () => {
    let currentLang = language;
    if (currentLang === 'en') {
      currentLang = 'ar';
    } else {
      currentLang = 'en';
    }
    return currentLang;
  };

  return (
    <>
      <HomeHeader
        language={language}
        onPress={() => {
          dispatch(setLanguage(toggleLang()));
        }}
      />
      <TopTabNav />
    </>
  );
};
