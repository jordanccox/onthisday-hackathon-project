import { Link } from "react-router-dom";

export default function SearchResultsItem({ data }) {
  const text = data.text.replace("&#8211;", "-");

  return (
    <>
    <div><Link to={data.infoPageId}>{text}</Link></div>
    </>
  )
}