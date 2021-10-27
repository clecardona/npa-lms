import React from "react";

export default function VideoList({ course, setVideo }) {
  const Videos = course.playlist.map((item) => {
    return (
      <li key={item.content}>
        <button onClick={() => setVideo(item)}>{item.content}</button>
      </li>
    );
  });

  return <ul>{Videos}</ul>;
}
