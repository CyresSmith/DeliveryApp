import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery, { baseUrl } from './axiosBaseQuery';

export const ordersApi = createApi({
  reducerPath: 'orders',

  baseQuery: axiosBaseQuery({
    baseUrl: `${baseUrl}/orders`,
  }),

  tagTypes: ['orders'],

  endpoints: builder => ({
    addNewOrder: builder.mutation({
      query: order => ({
        url: '',
        method: 'POST',
        data: order,
      }),
      invalidatesTags: ['orders'],
    }),
  }),
});

export const { useAddNewOrderMutation } = ordersApi;
