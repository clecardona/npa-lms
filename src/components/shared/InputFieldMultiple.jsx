import { useState } from "react";
import minus from "assets/icns/minus.png";

export default function InputFieldMultiple({ onChange, options, state }) {
  const { key, label, placeholder, type, mode, required } = options;

  //const [quantity, setQuantity] = useState(mode === "edit" ? 2 : 1);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [links, setLinks] = useState(state);

  // REFACTOR THIS SHIT IF POSSIBLE
  return (
    <>
      <label className={key}>
        Link{!visible2 && !visible3 ? "s" : ""}:
        <input
          value={links.l1 ? links.l1 : ""}
          type={type}
          placeholder={mode === "edit" && state.l1 ? state.l1 : placeholder}
          required={required}
          onChange={(e) => {
            setLinks({ ...links, l1: e.target.value });
            onChange(key, { ...links, l1: e.target.value });
          }}
        ></input>
        {mode === "edit" && (
          <button
            className="btn btn-remove-field"
            onClick={() => {
              let newLinks = { ...links };
              delete newLinks.l1;
              setLinks(newLinks);
              onChange(key, newLinks);
            }}
            type="button"
          >
            <img src={minus} alt="-" />
          </button>
        )}
      </label>

      {(visible2 || (mode === "edit" && state.l2)) && (
        <label className={key}>
          <input
            value={links.l2 ? `${links.l2}` : ""}
            type={type}
            placeholder={mode === "edit" && state.l2 ? state.l2 : placeholder}
            required={required}
            onChange={(e) => {
              setLinks({ ...links, l2: e.target.value });
              onChange(key, { ...links, l2: e.target.value });
            }}
          ></input>
          <button
            className="btn btn-remove-field"
            onClick={() => {
              let newLinks = { ...links };
              delete newLinks.l2;
              setLinks(newLinks);
              onChange(key, newLinks);
              setVisible2(false);
            }}
            type="button"
          >
            <img src={minus} alt="-" />
          </button>
        </label>
      )}
      {(visible3 || (mode === "edit" && state.l3)) && (
        <label className={key}>
          <input
            value={links.l3 ? `${links.l3}` : ""}
            type={type}
            placeholder={placeholder}
            required={required}
            onChange={(e) => {
              setLinks({ ...links, l3: e.target.value });
              onChange(key, { ...links, l3: e.target.value });
            }}
          ></input>
          <button
            className="btn btn-remove-field"
            onClick={() => {
              let newLinks = { ...links };
              delete newLinks.l3;
              setLinks(newLinks);
              onChange(key, newLinks);
              setVisible3(false);
            }}
            type="button"
          >
            <img src={minus} alt="-" />
          </button>
        </label>
      )}
      {!visible2 && !visible3 && (
        <button
          className="btn btn-ghost btn-add-field"
          onClick={() => {
            setVisible2(true);
            setVisible3(true);
          }}
          type="button"
        >
          <h4> add link ( up to 3 ) </h4>
        </button>
      )}
    </>
  );
}
