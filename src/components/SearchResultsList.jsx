import { dummyData } from "../dummy-data";

// Items per page: 10, 20, 50

// We will need to refactor to account for filters and sorting eventually

const paginateData = (input, itemsPerPage, page = 0) => {
  const dataObj = {
    date: input.date,
    pages: {},
  };

  const copyLinks = (linksObject) => {
    const copiedObject = {};

    for (const link in linksObject) {
      copiedObject[link] = {...linksObject[link]};
    }

    return copiedObject;
  };

  // inputData = dummyData.data
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

  // input.data.Events.forEach((item) => {
  //   if (!dataObj.pages[page]) {
  //     dataObj.pages[page] = [];
  //   }

  //   if (dataObj.pages[page].length >= itemsPerPage) {
  //     page++;
  //     dataObj.pages[page] = [];
  //   }

  //   const itemContents = {
  //     path: `/search/${dataObj.date}/?page=${page}`,
  //     text: item.text,
  //     html: item.html,
  //     links: copyLinks(item.links),
  //   };

  //   dataObj.pages[page].push(itemContents);
  // });

  return dataObj;
};

export default function SearchResultsList() {
  const exampleText = {__html: dummyData.data.Events[0].text};
  const exampleHTML = {__html: dummyData.data.Events[0].html};

  const examplePaginatedData = paginateData(dummyData, 10);

  console.log(examplePaginatedData);

  return (
  <>
  <div dangerouslySetInnerHTML={exampleText} />
  <div dangerouslySetInnerHTML={exampleHTML} />
  </>
  )
}