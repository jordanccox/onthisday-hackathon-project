import { configureStore } from '@reduxjs/toolkit'
import { thisDayApi } from './reducers/searchResultsSlice'
import { historySlice } from './reducers/historySlice'
// import { wikiApi } from './reducers/wikiSlice'

export const store = configureStore({
  reducer: {
        // For some reason, this isn't working. When I try to access the state (state.date, for instance), it doesn't appear. Currently State just looks like an object with the thisdayApi inside it... not sure what's going on. Couldn't find much help online

    [thisDayApi.reducerPath]: thisDayApi.reducer,
    history: historySlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(thisDayApi.middleware)
    // .concat(wikiApi.middleware),
})