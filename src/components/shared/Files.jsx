import React from "react";

export default function Files({ data }) {
  const Files = data.map((item, index) => (
    <a
      href={item}
      rel="noreferrer"
      target="_blank"
      className="btn btn-orange"
      key={index}
      download
    >
      <h4> Download file {index + 1} ⬇</h4>
    </a>
  ));

  if (!data.length < 0) {
    return <h4 className="files">No files for this course...</h4>;
  } else {
    return <div className="files">{Files}</div>;
  }
}
