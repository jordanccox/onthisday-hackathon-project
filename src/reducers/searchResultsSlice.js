import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// API call to This day in history api. Should be called with const   const date = useSelector(state => state.date); const callHistory = useGetHistoryQuery(date)
export const thisDayApi = createApi({
  reducerPath: 'thisDayApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://cors-anywhere.herokuapp.com/today.zenquotes.io/api' }),
  endpoints: (builder) => ({
    getHistory: builder.query({
      query: (date) => {
        return (`/${date}`)
      }
      },
    ),
  }),
})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetHistoryQuery } = thisDayApi