import React from "react";

export default function Files({ data }) {
  const Files = data.files.map((item) => {
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
      <h3>Files :</h3>
      <ul>{Files}</ul>
    </div>
  );
}
