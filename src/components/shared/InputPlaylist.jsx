//Local Files
import input from "assets/input-playlist.json";

export default function InputPlaylist({ index, state, onChange }) {
  const { url, content } = state;

  return (
    <>
      <input
        className="playlist-url"
        value={url}
        type={input[0].type}
        placeholder={input[0].placeholder}
        onChange={(e) => onChange(input[0].key, e.target.value, index)}
      />

      <input
        className="playlist-field"
        value={content}
        type="text"
        placeholder={input[1].placeholder}
        onChange={(e) => onChange(input[1].key, e.target.value, index)}
      />
    </>
  );
}
