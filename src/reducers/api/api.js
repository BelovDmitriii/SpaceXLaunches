import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://api.spacexdata.com';

export const launchesApi = createApi({
  reducerPath: 'launchesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getLaunches: builder.query({
      query: () =>  ({
        url: '/v5/launches',
      }),
    }),
  })
})

export const {useGetLaunchesQuery} = launchesApi;