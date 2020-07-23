import axios from 'axios';

export const createApi = () => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/guess-melody`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => {
    return response;
  };
  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
