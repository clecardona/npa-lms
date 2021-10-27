import { useState } from "react";
import remove from "assets/icns/remove.png";
import minus from "assets/icns/minus.png";
import ButtonField from "./ButtonField";

export default function InputFieldMultipleFiles({ onChange, options, state }) {
  const { key, label, type, mode } = options;

  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [files, setFiles] = useState(state);

  //todo- limit filesize upload to 5mb
  //var filesize = ((files[x].size/1024)/1024).toFixed(4); // MB

  console.log(state);

  //methods

  function clearField(index) {
    let newFiles = { ...files };
    if (index === 1) {
      delete newFiles.l1;
    }
    if (index === 2) {
      delete newFiles.l2;
    }
    if (index === 3) {
      delete newFiles.l3;
    }
    setFiles(newFiles);
    onChange(key, newFiles);
  }

  function removeField(index) {
    let newFiles = { ...files };
    if (index === 1) {
      delete newFiles.l1;
    }
    if (index === 2) {
      delete newFiles.l2;
    }
    if (index === 3) {
      delete newFiles.l3;
    }
    setFiles(newFiles);
    onChange(key, newFiles);
    if (index === 2) {
      setVisible2(false);
    }
    if (index === 3) {
      setVisible3(false);
    }
  }

  // REFACTOR THIS SHIT IF POSSIBLE
  return (
    <>
      {/* FILE 1*/}
      <label className="files">
        File{(visible2 && visible3) || mode === "edit" ? "s" : ""}:
      </label>
      {mode === "edit" && state.l1 ? (
        <div className="exists">
          <label>
            <p>- {state.l1.name}</p>
          </label>
          <ButtonField action={clearField} index={1} icn={remove} />
        </div>
      ) : (
        <label className={key}>
          <input
            type={type}
            onChange={(e) => {
              setFiles({ ...files, l1: e.target.files[0] });
              onChange(key, { ...files, l1: e.target.files[0] });
            }}
          />
        </label>
      )}
      {/* FILE 2*/}
      {(visible2 || mode === "edit") && (
        <>
          {state.l2 ? (
            <div className="exists">
              <label className="files exists">
                <p>- {state.l2.name}</p>
              </label>
              <ButtonField action={clearField} index={2} icn={remove} />
            </div>
          ) : (
            <label className={key}>
              <input
                type={type}
                onChange={(e) => {
                  setFiles({ ...files, l2: e.target.files[0] });
                  onChange(key, { ...files, l2: e.target.files[0] });
                }}
              ></input>
              {mode === "create" && (
                <ButtonField action={removeField} index={2} icn={minus} />
              )}
            </label>
          )}
        </>
      )}
      {/* FILE 3 */}
      {(visible3 || mode === "edit") && (
        <>
          {state.l3 ? (
            <div className="exists">
              <label className="files exists">
                <p>- {state.l2.name}</p>
              </label>
              <ButtonField action={clearField} index={3} icn={remove} />
            </div>
          ) : (
            <label className={key}>
              <input
                type={type}
                onChange={(e) => {
                  setFiles({ ...files, l3: e.target.files[0] });
                  onChange(key, { ...files, l3: e.target.files[0] });
                }}
              ></input>
              {mode === "create" && (
                <ButtonField action={removeField} index={3} icn={minus} />
              )}
            </label>
          )}
        </>
      )}
      {!visible2 && !visible3 && mode !== "edit" && (
        <button
          className="btn btn-ghost btn-add-field"
          onClick={() => {
            setVisible2(true);
            setVisible3(true);
          }}
          type="button"
        >
          <h4> add file ( up to 3 ) </h4>
        </button>
      )}
    </>
  );
}
