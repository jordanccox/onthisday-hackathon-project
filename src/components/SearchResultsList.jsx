import { dummyData } from "../dummy-data"

export default function SearchResultsList() {
  const exampleText = {__html: dummyData.data.Events[0].text};
  const exampleHTML = {__html: dummyData.data.Events[0].html}

  return (
  <>
  <div dangerouslySetInnerHTML={exampleText} />
  <div dangerouslySetInnerHTML={exampleHTML} />
  </>
  )
}