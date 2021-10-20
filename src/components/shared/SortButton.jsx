export default function SortButton({ children, target, hook }) {
  const [selection, setSelection] = hook;

  return (
    <button
      className={selection === target ? "btn btn-active " : "btn btn-inactive"}
      onClick={() => {
        setSelection(target);
      }}
    >
      <h4>{children}</h4>
    </button>
  );
}
