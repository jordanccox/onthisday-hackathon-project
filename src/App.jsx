import { Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"
import StartPage from "./components/StartPage"
import InfoPage from "./components/InfoPage"
import NotFound from "./components/NotFound"
import SearchResultsList from "./components/SearchResultsList"

function App() {
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
