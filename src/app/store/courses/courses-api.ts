import { createApi } from '@reduxjs/toolkit/query/react';
import { BASE_QUERY } from '../models';

export const coursesApi = createApi({
  reducerPath: 'courses',
  baseQuery: BASE_QUERY,
  endpoints: builder => ({
    getCourses: builder.query({
      query: params => ({
        url: 'courses/all',
        params,
      }),
    }),
  }),
});

export const { useGetCoursesQuery } = coursesApi;
