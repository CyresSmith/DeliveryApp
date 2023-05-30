import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { refreshAuth } from './authSlice';

import store from './store';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url = '', method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

const refreshAccessToken = async refreshToken => {
  try {
    const { data } = await axios.post('http://localhost:8989/users/refresh', {
      refreshToken,
    });

    console.log(
      '🚀 ~ file: axiosBaseQuery.js:38 ~ refreshAccessToken ~ data:',
      data
    );

    store.dispatch(refreshAuth(data));

    return data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

axios.interceptors.request.use(
  config => {
    const accessToken = store.getState().auth.accessToken;

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    const status = error.response ? error.response.status : null;

    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = store.getState().auth.refreshToken;

        const data = await refreshAccessToken(refreshToken);

        originalRequest.headers['Authorization'] = `Bearer ${data.accessToken}`;

        return axios(originalRequest);
      } catch (error) {
        console.error(error);
        throw error;
      }
    }

    return Promise.reject(error);
  }
);

// axios.interceptors.response.use(
//   response => response,
//   async error => {
//     if (error.response.status === 401) {
//       try {
//         const refreshToken = store.getState().auth.refreshToken;

//         const { data } = await axios.post(
//           'http://localhost:8989/users/refresh',
//           { refreshToken }
//         );

//         store.dispatch(refreshAuth(data));

//         setAuthHeader(data.accessToken);

//         // return axios(error.config);
//       } catch (error) {
//         return Promise.reject(error);
//       }
//     }

//     if (error.response.status === 403) {
//       const navigate = useNavigate();
//       navigate('/login');

//       console.log('hello from interceptors 403');
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosBaseQuery;
