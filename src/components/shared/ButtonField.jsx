export default function ButtonField({ action, index, icn }) {
  return (
    <button
      className="btn btn-clear-field"
      onClick={() => action(index)}
      type="button"
    >
      <img src={icn} alt="-" />
    </button>
  );
}
