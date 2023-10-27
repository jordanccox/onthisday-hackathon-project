import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const wikiApi = createApi({
  reducerPath: 'wikiApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://en.wikipedia.org/w/rest.php/v1/page/' }),
  endpoints: (builder) => ({
    getWiki: builder.query({
      query: (subject) => `/${subject}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetWikiQuery } = wikiApi