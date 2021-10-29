export default function InputLinks({ index, state, onChange }) {
  return (
    <>
      <input
        className="links-url"
        value={state}
        type="text"
        placeholder="http://..."
        onChange={(e) => onChange(e.target.value, index)}
      />
    </>
  );
}
