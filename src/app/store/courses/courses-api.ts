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
    getTeachers: builder.query({
      query: () => {
        return {
          url: `courses/teachers`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetCoursesQuery, useGetTeachersQuery } = coursesApi;
