import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import StartPage from "./components/StartPage"
import InfoPage from "./components/InfoPage"
import NotFound from "./components/NotFound"
import SearchResultsList from "./components/SearchResultsList"
import { useGetHistoryQuery } from "./reducers/searchResultsSlice"
import { useGetWikiQuery } from "./reducers/wikiSlice"

function App() {
  const callHistory = useGetHistoryQuery('1/1/1950')
    if (callHistory.data) {console.log(callHistory.data)}
    if (callHistory.error) {console.log(callHistory.error)}
  const callWiki = useGetWikiQuery('Mars')
    if (callWiki.data) {console.log(callWiki.data)}
    if (callWiki.error) {console.log(callWiki.error)}
    
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<StartPage />} />
        <Route path="/search" element={<SearchResultsList />} />
        <Route path="/search/:id" element={<InfoPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
