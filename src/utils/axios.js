import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://159.65.190.62:3333/api/v1/',
});
instance.interceptors.request.use(
  config => {
    config.headers = {
      ...config.headers,
      'Accept-Language': 'en',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE0NCwiaXNzIjoiQXBwLlRyYW5zcG9ydGF0aW9uIiwiaWF0IjoxNjQ0MTQzOTE4LjYwMSwibG9naW5BcyI6IlVTRVIiLCJleHAiOjE5NTk3MTk5MTh9.Zn4RH8ZrnidhOIJa7tuFLeq8y8flWeXZDrcSMWJFff0`,
    };

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
export default instance;
