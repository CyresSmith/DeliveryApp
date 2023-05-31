import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery, { baseUrl } from './axiosBaseQuery';

export const offersApi = createApi({
  reducerPath: 'offers',

  baseQuery: axiosBaseQuery({
    baseUrl: `${baseUrl}/offers`,
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
