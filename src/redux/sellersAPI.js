import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

export const sellersApi = createApi({
  reducerPath: 'sellers',

  baseQuery: axiosBaseQuery({
    baseUrl: 'http://localhost:8989/sellers',
  }),

  tagTypes: ['sellers'],

  endpoints: builder => ({
    getAllSellers: builder.query({
      query: id => ({
        url: '',
        method: 'GET',
        params: { id },
      }),
      providesTags: ['sellers'],
    }),
  }),
});

export const { useGetAllSellersQuery } = sellersApi;
