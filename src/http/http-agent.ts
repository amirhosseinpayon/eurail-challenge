import axios from 'axios';

const httpAgent = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
});

httpAgent.interceptors.request.use(config => {
  return config
})

httpAgent.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error.response);
  }
);

export default httpAgent