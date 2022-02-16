import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './rootReducer';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        /* ==> Ignore these action types*/
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        /* ==> Ignore these field paths in all actions*/
        // ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        /* ==>Ignore these paths in the state*/
        // ignoredPaths: ['items.dates'],
      },
    }),
});

export const persistor = persistStore(store);
