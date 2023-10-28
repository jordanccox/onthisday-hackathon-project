import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const thisDayApi = createApi({
  reducerPath: 'thisDayApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://cors-anywhere.herokuapp.com/today.zenquotes.io/api' }),
  endpoints: (builder) => ({
    getHistory: builder.query({
      query: (date) => `/${date}`
      },
    ),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetHistoryQuery } = thisDayApi