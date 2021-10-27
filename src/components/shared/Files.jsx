import React from "react";

export default function Files({ data }) {
  // REFACTOR THIS SHIT IF POSSIBLE
  return (
    <div className="files">
      {data.l1 && (
        <a href={data.l1} className="btn btn-third btn-file btn-180 " download>
          <h4>Download file 1 ⬇</h4>
        </a>
      )}

      {data.l2 && (
        <a href={data.l2} className="btn btn-third btn-file btn-180 " download>
          <h4>Download file 2 ⬇</h4>
        </a>
      )}

      {data.l3 && (
        <a href={data.l3} className="btn btn-third btn-file btn-180 " download>
          <h4>Download file 3 ⬇</h4>
        </a>
      )}
    </div>
  );
}
