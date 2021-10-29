import remove from "assets/icns/remove.png";
import { STATUS_CODES } from "http";
export default function InputFiles({ state, setForm }) {
  //methods
  function onChange(value, index) {
    if (value && value.size > 3000000) {
      alert(
        "Max size : 3Mb ,  your file size : " +
          Math.floor(value.size / 1000 / 1000) +
          "Mb"
      );
    } else {
      const newFiles = [...state.files];
      newFiles[index] = value;
      setForm({ ...state, files: newFiles });
    }
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
      {state.files.length > 1 && (
        <button
          className="btn btn-clear-field"
          onClick={() => clearField(index)}
          type="button"
        >
          <img src={remove} alt="-" />
        </button>
      )}
    </div>
  ));

  return (
    <>
      <h4>Files ( max 5Mb ) </h4>
      {Files}
      {state.files.length < 5 && (
        <button className="btn btn-add-field" onClick={addLink} type="button">
          <h4> Add a slot ( max 5 )</h4>
        </button>
      )}
    </>
  );
}
