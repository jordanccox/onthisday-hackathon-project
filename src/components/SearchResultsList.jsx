import { useState } from "react";
import Button from "react-bootstrap/Button";

import { dummyData } from "../dummy-data";
import SearchResultsItem from "./SearchResultsItem";
import { useLocation, useSearchParams } from "react-router-dom";
import NotFound from "./NotFound";

// input - dummyData
// Items per page: 10, 20, 50
// We will need to refactor to account for filters and sorting eventually

const paginateData = (input, itemsPerPage, page = 0) => {
  const dataObj = {
    date: input.date,
    path: `/search/${input.date}/`,
    pages: {},
  };

  const copyLinks = (linksObject) => {
    const copiedObject = {};

    for (const link in linksObject) {
      copiedObject[link] = {...linksObject[link]};
    }

    return copiedObject;
  };

  // inputData = input.data
  // section = Events, Deaths, or Births
  const parseDataSection = (inputData, section) => {
    inputData[section].forEach((item) => {
      if (!dataObj.pages[page]) {
        dataObj.pages[page] = [];
      }
  
      if (dataObj.pages[page].length >= itemsPerPage) {
        page++;
        dataObj.pages[page] = [];
      }
  
      const itemContents = {
        path: `/search/${dataObj.date}/?page=${page}`,
        section: section,
        text: item.text,
        html: item.html,
        links: copyLinks(item.links),
      };
  
      dataObj.pages[page].push(itemContents);
    });
  };

  parseDataSection(input.data, "Events");
  parseDataSection(input.data, "Births");
  parseDataSection(input.data, "Deaths");

  return dataObj;
};

const renderPage = (paginatedData, page = 0) => {
  const render = paginatedData.pages[page].map((searchResultData, index) => {
    return <SearchResultsItem key={index} data={searchResultData} />;
  });

  return render;
};

export default function SearchResultsList() {
  const [page, setPage] = useState(0);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams({ page: 0});

  console.log(location);

  // get page results function:

  const examplePaginatedData = paginateData(dummyData, 10);

  if (location.pathname !== `${examplePaginatedData.path}` || location.search !== `?page=${page}`) {
    return <NotFound />;
  }

  console.log(examplePaginatedData); // testing

  const renderPageResults = renderPage(examplePaginatedData, page);

  return (
  <>
  <h4>Search Results</h4>
  <div>
    {renderPageResults}
  </div>
  <h4>Footer</h4>
  <div>
    <span>Current Page: {page + 1}</span>
    <Button onClick={() => setPage(old => Math.max(old - 1, 0))}
    disabled={page === 0}>Previous Page</Button>
    <Button onClick={() => {
      if (Object.prototype.hasOwnProperty.call(examplePaginatedData.pages, page + 1)) {
        setPage(old => old + 1);
        setSearchParams(() => page + 1);
      }
    }} disabled={!Object.prototype.hasOwnProperty.call(examplePaginatedData.pages, page + 1)}>Next Page</Button>
  </div>
  </>
  )
}