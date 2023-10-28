export const paginateData = (input, itemsPerPage, page = 0) => {
  const dataObj = {
    date: input.date,
    path: `/search/${input.date}/`,
    pages: {},
  };

  // immutably copy each link in linksObject
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