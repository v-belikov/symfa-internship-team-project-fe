import { createApi } from '@reduxjs/toolkit/query/react';
import { BASE_QUERY } from '../models';

export const authApi = createApi({
  baseQuery: BASE_QUERY,
  endpoints: builder => ({
    createUser: builder.mutation({
      query(data) {
        return {
          url: `register`,
          method: 'POST',
          body: data,
        };
      },
    }),
    updateUser: builder.mutation({
      query({ id, data }) {
        return {
          url: `update/${id}`,
          method: 'PATCH',
          body: data,
        };
      },
    }),
    getAvatars: builder.query({
      query: () => {
        return {
          url: `avatars`,
          method: 'GET',
        };
      },
    }),
    loginUser: builder.mutation({
      query(data) {
        return {
          url: `auth/user/login`,
          method: 'POST',
          body: data,
        };
      },
    }),
    getCurrentUser: builder.query({
      query: () => {
        return {
          url: `auth/profile`,
          method: 'GET',
        };
      },
    }),
    getAllUsers: builder.query({
      query: () => {
        return {
          url: `auth/users`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const {
  useCreateUserMutation,
  useUpdateUserMutation,
  useGetAvatarsQuery,
  useLoginUserMutation,
  useGetCurrentUserQuery,
  useGetAllUsersQuery,
} = authApi;
