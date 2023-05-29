import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

export const offersApi = createApi({
  reducerPath: 'offers',

  baseQuery: axiosBaseQuery({
    baseUrl: 'http://localhost:8989/offers',
  }),

  tagTypes: ['offers'],

  endpoints: builder => ({
    getAllOffers: builder.query({
      query: seller => ({
        url: '',
        method: 'GET',
        params: { seller },
      }),
      providesTags: ['offers'],
    }),
  }),
});

export const { useGetAllOffersQuery } = offersApi;
