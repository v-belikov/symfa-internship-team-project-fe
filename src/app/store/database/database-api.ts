import { createApi } from '@reduxjs/toolkit/query/react';
import { BASE_QUERY } from '../models';

export const databaseApi = createApi({
  reducerPath: 'database',
  baseQuery: BASE_QUERY,
  endpoints: builder => ({
    getStudents: builder.query({
      query: params => ({
        url: 'database/students',
        params,
      }),
    }),
    getTeachers: builder.query({
      query: params => ({
        url: 'database/teachers',
        params,
      }),
    }),
  }),
});

export const { useGetStudentsQuery, useGetTeachersQuery } = databaseApi;
