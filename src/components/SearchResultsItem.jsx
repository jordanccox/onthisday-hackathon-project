export default function SearchResultsItem({ data }) {
  const text = data.text.replace("&#8211;", "--");

  return (
    <>
    <div><strong>{text}</strong></div>
    </>
  )
}