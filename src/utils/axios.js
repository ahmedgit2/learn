import axios from 'axios';
import {useSelector} from 'react-redux';
import {store} from '../store/store';

const selectState = () => {
  const language = useSelector(state => state.authorization.language);
  const key = useSelector(state => state.authorization.authKey);

  return {
    language,
    key,
  };
};

const instance = axios.create({
  baseURL: 'http://159.65.190.62:3333/api/v1/',
});

instance.interceptors.request.use(
  config => {
    config.headers = {
      ...config.headers,
      'Accept-Language': store.getState().authorization.language,
      Authorization: `Bearer ${store.getState().authorization.authKey}`,
    };
    console.log('interceptors config ==>', config);
    return config;
  },
  error => {
    // console.log('interceptors error ==>', error);
    return Promise.reject(error);
  },
);
export default instance;
