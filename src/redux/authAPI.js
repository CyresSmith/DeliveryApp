import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

export const authApi = createApi({
  reducerPath: 'authApi',

  baseQuery: axiosBaseQuery({
    baseUrl: 'http://localhost:8989/users',
  }),

  tagTypes: ['authApi'],

  endpoints: builder => ({
    register: builder.mutation({
      query: user => ({
        url: '/register',
        method: 'POST',
        data: user,
      }),
      invalidatesTags: ['authApi'],
    }),

    verify: builder.query({
      query: token => ({
        url: `/verify/${token}`,
        method: 'GET',
      }),
      invalidatesTags: ['authApi'],
    }),

    login: builder.mutation({
      query: user => ({
        url: '/login',
        method: 'POST',
        data: user,
      }),
      invalidatesTags: ['authApi'],
    }),

    refresh: builder.mutation({
      query: token => ({
        url: '/refresh',
        method: 'POST',
        data: token,
      }),
      invalidatesTags: ['authApi'],
    }),

    getCurrentUser: builder.query({
      query: token => ({
        url: '/current',
        method: 'GET',
        data: token,
      }),
      providesTags: ['authApi'],
    }),
  }),
});

export const {
  useRegisterMutation,
  useVerifyQuery,
  useLoginMutation,
  useRefreshMutation,
  useGetCurrentUserQuery,
} = authApi;