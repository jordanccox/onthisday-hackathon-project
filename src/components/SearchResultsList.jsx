import { useState } from "react";
import { dummyData } from "../dummy-data";
import SearchResultsItem from "./SearchResultsItem";

// input - dummyData
// Items per page: 10, 20, 50
// We will need to refactor to account for filters and sorting eventually

const paginateData = (input, itemsPerPage, page = 0) => {
  const dataObj = {
    date: input.date,
    path: `/search/${input.date}`,
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

  // const exampleText = {__html: dummyData.data.Events[0].text};
  // const exampleHTML = {__html: dummyData.data.Events[0].html}; testing

  // get page results function:

const getPageResults = (paginatedData, page = 0) => {
  return paginatedData.pages[page];
};  

  const examplePaginatedData = paginateData(dummyData, 10);

  //const pageResults = getPageResults(examplePaginatedData); obsolete -- delete!

  console.log(examplePaginatedData); // testing

  const renderPageResults = renderPage(examplePaginatedData);

  return (
  <>
  {/* <div dangerouslySetInnerHTML={exampleText} />
  <div dangerouslySetInnerHTML={exampleHTML} /> */}
  <h4>Search Results</h4>
  <div>
    {renderPageResults}
  </div>
  </>
  )
}