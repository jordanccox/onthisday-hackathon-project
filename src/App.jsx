import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import StartPage from "./components/StartPage";
import InfoPage from "./components/InfoPage";
import NotFound from "./components/NotFound";
import SearchResultsList from "./components/SearchResultsList";

import { wikiApiFunction } from "./wikipedia-api-example"; // testing
import { useGetHistoryQuery } from "./reducers/searchResultsSlice"
import { useGetWikiQuery } from "./reducers/wikiSlice"

import { useGetHistoryQuery } from "./reducers/searchResultsSlice"
import { useSelector } from "react-redux"
// import { useGetWikiQuery } from "./reducers/wikiSlice"

function App() {
  const callHistory = useGetHistoryQuery('1/1/1950')
    if (callHistory.data) {console.log(callHistory.data)}
    if (callHistory.error) {console.log(callHistory.error)}
  const callWiki = useGetWikiQuery('Mars')
    if (callWiki.data) {console.log(callWiki.data)}
    if (callWiki.error) {console.log(callWiki.error)}
  // figure out wiki api call
  // const exampleWikiApiCall = async () => {
  //   let url =
  //     "https://api.wikimedia.org/core/v1/wikipedia/en/page/Roman_consul/with_html";
  //   let response = await fetch(url);
  //   let data = await response.json().catch(console.error);
  //   console.log(data);
  // };

  // exampleWikiApiCall();

//   const exampleMediaWikiApiCall = async () => {
//     const url = "https://en.wikipedia.org/w/api.php?" +
//     new URLSearchParams({
//         origin: "*",
//         action: "parse",
//         page: "Roman_consul",
//         format: "json",
//     });

// try {
//     const req = await fetch(url);
//     const json = await req.json();
//     console.log(json.parse.text["*"]);
// } catch (e) {
//     console.error(e);
// }
//   };

//   exampleMediaWikiApiCall();

  wikiApiFunction('Roman_consul');

  // Commented this out, it's not working. const date = useSelector(state => state.reducer.date)
  
  const state = useSelector(state => state)

  console.log(state)
  const callHistory = useGetHistoryQuery('')
  // console.log(date)
    if (callHistory.data) {console.log(callHistory.data)}
    if (callHistory.error) {console.log(callHistory.error)}
  // const callWiki = useGetWikiQuery('Mars')
  //   if (callWiki.data) {console.log(callWiki.data)}
  //   if (callWiki.error) {console.log(callWiki.error)}
    
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StartPage />} />
          <Route path="/search/:searchQuery" element={<SearchResultsList />} />
          {/* :searchQuery wil look like this: /search/{month},{day}?page= */}
          <Route
            path="/search/:searchQuery/:infoPageId"
            element={<InfoPage />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
