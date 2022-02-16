import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {AppButton, AppNewText, AppText} from '../commons';
import {LoginHeader} from '../components';
import {setKey, setLanguage} from '../slices/authorizationSlice';

export const LoginScreenHOC = () => {
  const language = useSelector(state => state.auth.language);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const key =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE0NCwiaXNzIjoiQXBwLlRyYW5zcG9ydGF0aW9uIiwiaWF0IjoxNjQ0MTQzOTE4LjYwMSwibG9naW5BcyI6IlVTRVIiLCJleHAiOjE5NTk3MTk5MTh9.Zn4RH8ZrnidhOIJa7tuFLeq8y8flWeXZDrcSMWJFff0';

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
      <LoginHeader
        language={language}
        onPress={() => {
          dispatch(setLanguage(toggleLang()));
        }}
      />
      <AppNewText
        containerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        Login Screen Component Here
      </AppNewText>
      <AppButton
        title={'Login'}
        onPress={() => {
          dispatch(setKey(key));
          navigation.replace('home');
        }}
      />
    </>
  );
};
