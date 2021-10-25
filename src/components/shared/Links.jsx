export default function Links({ data }) {
  // REFACTOR THIS SHIT IF POSSIBLE
  return (
    <div className="links">
      {data.l1 && (
        <a href={data.l1} rel="noreferrer" target="_blank">
          <h4> External link 1 ...</h4>
        </a>
      )}
      {data.l2 && (
        <a href={data.l2} rel="noreferrer" target="_blank">
          <h4> External link 2 ...</h4>
        </a>
      )}

      {data.l3 && (
        <a href={data.l3} rel="noreferrer" target="_blank">
          <h4> External link 3 ...</h4>
        </a>
      )}
    </div>
  );
}
