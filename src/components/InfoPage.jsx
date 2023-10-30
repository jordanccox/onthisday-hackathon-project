import { useLocation } from "react-router-dom";

export default function InfoPage() {
  const location = useLocation();

  // Need redux store now
  // select search result from search results slice by matching infoPageId
  
  console.log(location);

  return (
    <h1>Info page...</h1>
  );
}