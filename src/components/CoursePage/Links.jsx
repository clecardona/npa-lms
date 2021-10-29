export default function Links({ data }) {
  const Links = data.map((item, index) => (
    <a
      href={item}
      rel="noreferrer"
      target="_blank"
      className="btn-link"
      key={index}
    >
      <h4> External link {index + 1} ...</h4>
    </a>
  ));

  if (data[0].length === 0) {
    return <h4 className="links">No links for this course...</h4>;
  } else {
    return <div className="links">{Links}</div>;
  }
}
