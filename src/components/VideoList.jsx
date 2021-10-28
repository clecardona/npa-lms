import React from "react";

export default function VideoList({ course, setVideo }) {
  const Videos = course.playlist.map((item, index) => {
    return (
      <li key={index}>
        <button onClick={() => setVideo(item)}>{item.content}</button>
      </li>
    );
  });

  return <ul>{Videos}</ul>;
}
