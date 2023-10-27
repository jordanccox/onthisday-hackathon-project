import { useLocation, useSearchParams } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { dummyData } from "../dummy-data";
import SearchResultsItem from "./SearchResultsItem";
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
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams({ page: 0});

  const currentPage = Number(searchParams.get('page'));

  console.log(location); // testing

  // get page results function:

  const examplePaginatedData = paginateData(dummyData, 10);

  if (location.pathname !== `${examplePaginatedData.path}` || location.search !== `?page=${currentPage}`) {
    return <NotFound />;
  }

  console.log(examplePaginatedData); // testing

  const renderPageResults = renderPage(examplePaginatedData, currentPage);

  return (
  <>
  <h4>Search Results</h4>
  <div>
    {renderPageResults}
  </div>
  <h4>Footer</h4>
  <div>
    <span>Current Page: {currentPage + 1}</span>
    <Button onClick={() => {
      setSearchParams(old => {
        old.set('page', Math.max(currentPage - 1, 0));
        return old;
      });
    }}
    disabled={currentPage === 0}>Previous Page</Button>
    <Button onClick={() => {
      if (Object.prototype.hasOwnProperty.call(examplePaginatedData.pages, currentPage + 1)) {
        setSearchParams(old => {
          old.set('page', currentPage + 1);
          return old;
      });
      }
    }} disabled={!Object.prototype.hasOwnProperty.call(examplePaginatedData.pages, currentPage + 1)}>Next Page</Button>
  </div>
  </>
  )
}