import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../slices/authorizationSlice';

export const store = configureStore({
  reducer: {
    authorization: authReducer,
  },
});
