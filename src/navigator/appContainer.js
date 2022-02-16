import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack, HomeStack} from '.';
import {useSelector} from 'react-redux';
import {langConfig} from '../i18n/index';
export const AppContainer = () => {
  const lang = useSelector(state => state.auth.language);

  React.useEffect(() => {
    langConfig(lang);
  }, []);

  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};
