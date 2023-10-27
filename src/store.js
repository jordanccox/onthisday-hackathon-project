import { configureStore } from '@reduxjs/toolkit'
import { thisDayApi } from './reducers/searchResultsSlice'
import { wikiApi } from './reducers/wikiSlice'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [thisDayApi.reducerPath]: thisDayApi.reducer,
    [wikiApi.reducerPath]: wikiApi.reducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(thisDayApi.middleware)
    .concat(wikiApi.middleware),
})