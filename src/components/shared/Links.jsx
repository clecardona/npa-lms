export default function Links({ data }) {
  if (!data.l1) {
    return <h4 className="links">No links for this course...</h4>;
  }
  return (
    <div className="links">
      {data.l1 && (
        <a href={data.l1} rel="noreferrer" target="_blank" className="btn-link">
          <h4> External link 1 ...</h4>
        </a>
      )}
      {data.l2 && (
        <a href={data.l2} rel="noreferrer" target="_blank" className="btn-link">
          <h4> External link 2 ...</h4>
        </a>
      )}

      {data.l3 && (
        <a href={data.l3} rel="noreferrer" target="_blank" className="btn-link">
          <h4> External link 3 ...</h4>
        </a>
      )}
    </div>
  );
}
