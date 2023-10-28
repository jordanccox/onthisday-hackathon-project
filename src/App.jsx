import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import StartPage from "./components/StartPage";
import InfoPage from "./components/InfoPage";
import NotFound from "./components/NotFound";
import SearchResultsList from "./components/SearchResultsList";

import { wikiApiFunction } from "./wikipedia-api-example";


function App() {
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

  wikiApiFunction();

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
