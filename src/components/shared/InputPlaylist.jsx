import { useState } from "react";

import input from "assets/input-playlist.json";

export default function InputPlaylist({ data, state, onChange }) {
  const { url, content } = data;

  console.log(data);
  return (
    <div className="playlist-item">
      <input
        className="playlist-url"
        value={url}
        type="text"
        //placeholder={input[0].placeholder}
        onChange={onChange}
      />
      <input
        className="playlist-content"
        value={content}
        type="text"
        //placeholder={input[1].placeholder}
        onChange={onChange}
      />
    </div>
  );
}
