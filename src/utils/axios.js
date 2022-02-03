import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://159.65.190.62:3333/api/v1/',
});
instance.interceptors.request.use(
  config => {
    config.headers = {
      ...config.headers,
      'Accept-Language': 'en',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE0NCwiaXNzIjoiQXBwLlRyYW5zcG9ydGF0aW9uIiwiaWF0IjoxNjQzODk1MDIwLjg0NiwibG9naW5BcyI6IlVTRVIiLCJleHAiOjE5NTk0NzEwMjB9.tuq87XVR3jmwP0hquQuircaAdC_0vycqzY8iJO_UZFw`,
    };

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
export default instance;
