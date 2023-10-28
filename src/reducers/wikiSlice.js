import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// Define a service using a base URL and expected endpoints
export const wikiApi = createAsyncThunk('forecast/fetchForecast', async (subject) => {
  
  const url = `https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${subject}&formatversion=2&origin=*`
  
  try {
    const response = await axios.get(url)
    // return the array of weather items from the api response
    console.log(response)
  }
  catch (err) {
    return err.message;
  }})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetWikiQuery } = wikiApi