import remove from "assets/icns/remove.png";
export default function InputFiles({ state, setForm }) {
  //methods

  function onChange(value, index) {
    const newFiles = [...state.files]; // arr of obj
    newFiles[index] = value;
    setForm({ ...state, files: newFiles });
  }

  function addLink() {
    const newFiles = [...state.files];
    newFiles.push({});
    setForm({ ...state, files: newFiles });
  }

  function clearField(idx) {
    const newFiles = [...state.files];
    newFiles.splice(idx, 1);
    setForm({ ...state, files: newFiles });
  }
  //Component
  const Files = state.files.map((item, index) => (
    <div className="files-item" key={index}>
      {item.name ? (
        <h4>{item.name}</h4>
      ) : (
        <input
          type="file"
          onChange={(e) => onChange(e.target.files[0], index)}
          name={index}
        />
      )}

      <button
        className="btn btn-clear-field"
        onClick={() => clearField(index)}
        type="button"
      >
        <img src={remove} alt="-" />
      </button>
    </div>
  ));

  return (
    <>
      <h4>Files </h4>
      {Files}
      <button
        className="btn btn-ghost btn-add-field"
        onClick={addLink}
        type="button"
      >
        <h4> Add a slot </h4>
      </button>
    </>
  );
}
