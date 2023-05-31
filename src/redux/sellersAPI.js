import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery, { baseUrl } from './axiosBaseQuery';

export const sellersApi = createApi({
  reducerPath: 'sellers',

  baseQuery: axiosBaseQuery({
    baseUrl: `${baseUrl}/sellers`,
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
