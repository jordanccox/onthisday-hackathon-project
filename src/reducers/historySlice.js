import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  date: '01/06',
  historyData: {},
  // The initial state includes events, births, and deaths, and we can set these to false if they are excluded with the filter UI
  filters: {
    events: true,
    births: true,
    deaths: true
  }
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    // Depending on how we receive Date input, we may need to manipulate the data to be in the proper format for the API call.
    setDate : (state, action) => {state.date = (action.payload)}, 
    setEventsFilter: (state, action) => {state.filters.events = action.payload},
    setBirthsFilter: (state, action) => {state.filters.births = action.payload},
    setDeathsFilter: (state, action) => {state.filters.deaths = action.payload}
  }
})

export const { setDate, setBirthsFilter, setDeathsFilter, setEventsFilter } = historySlice.actions

export default historySlice.reducer