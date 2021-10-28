import React from "react";

export default function Files({ data }) {
  if (!data.l1) {
    return <h4 className="files">No files for this course...</h4>;
  }
  return (
    <div className="files">
      {data.l1 && (
        <a href={data.l1} className="btn  btn-file  " download>
          <h4>Download file 1 ⬇</h4>
        </a>
      )}

      {data.l2 && (
        <a href={data.l2} className="btn  btn-file  " download>
          <h4>Download file 2 ⬇</h4>
        </a>
      )}

      {data.l3 && (
        <a href={data.l3} className="btn btn-file  " download>
          <h4>Download file 3 ⬇</h4>
        </a>
      )}
    </div>
  );
}
