//Local
import input from "assets/input-playlist.json";

export default function InputPlaylist({ index, state, onChange }) {
  const { url, content } = state;

  return (
    <div className="playlist-item">
      <label>
        {index === 0 && input[0].label}
        <input
          className="playlist-url"
          value={url}
          type={input[0].type}
          placeholder={input[0].placeholder}
          onChange={(e) => onChange(input[0].key, e.target.value, index)}
        />
      </label>
      <label>
        {index === 0 && input[1].label}
        <input
          className="playlist-content"
          value={content}
          type="text"
          placeholder={input[1].placeholder}
          onChange={(e) => onChange(input[1].key, e.target.value, index)}
        />
      </label>
    </div>
  );
}
