import React from 'react';
import {AppContainer} from './src/navigator';
import {store} from './src/store/store';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
