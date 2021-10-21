export default function Links({ data }) {
  const Links = data.links.map((item) => {
    return (
      <li key={item}>
        <a href={item} rel="noreferrer" target="_blank">
          {item}
        </a>
      </li>
    );
  });

  return (
    <div className="files">
      <h3>Links :</h3>
      <ul>{Links}</ul>
    </div>
  );
}
