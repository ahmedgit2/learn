import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import auth from '../slices/authorizationSlice';
import test from '../slices/testSlice';

const reducers = combineReducers({
  auth,
  test,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['auth', 'test'],
};

export const rootReducer = persistReducer(persistConfig, reducers);
