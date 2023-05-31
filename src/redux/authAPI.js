import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery, { baseUrl } from './axiosBaseQuery';

export const authApi = createApi({
  reducerPath: 'authApi',

  baseQuery: axiosBaseQuery({
    baseUrl: `${baseUrl}/users`,
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
      query: () => ({
        url: '/current',
        method: 'GET',
      }),
      providesTags: ['authApi'],
    }),

    getHistory: builder.query({
      query: () => ({
        url: '/history',
        method: 'GET',
      }),
      providesTags: ['authApi'],
    }),

    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
      invalidatesTags: ['authApi'],
    }),
  }),
});

export const {
  useRegisterMutation,
  useVerifyQuery,
  useLoginMutation,
  useRefreshMutation,
  useLogoutMutation,
  useGetCurrentUserQuery,
  useGetHistoryQuery,
} = authApi;
