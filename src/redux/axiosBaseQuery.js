import axios from 'axios';
import { refreshAuth, resetAuth } from './authSlice';

import store from './store';

// export const baseUrl = 'https://delivery-app-backend-siau.onrender.com';
export const baseUrl = 'http://localhost:8989';

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
    const { data } = await axios.post(`${baseUrl}/users/refresh`, {
      refreshToken,
    });

    store.dispatch(refreshAuth(data));

    setAuthHeader(data.accessToken);

    return data;
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

        if (refreshToken) {
          const data = await refreshAccessToken(refreshToken);

          setAuthHeader(data.accessToken);
        }

        return axios(originalRequest);
      } catch (error) {
        console.error(error);
      }
    }

    if (status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        store.dispatch(resetAuth());

        return axios(originalRequest);
      } catch (error) {
        console.error(error);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosBaseQuery;
